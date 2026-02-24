import { type NextRequest } from 'next/server';
import { parseBody } from 'next-sanity/webhook';
import { ISanityRevalidatePayload } from './interface';
import {
  INVALID_PAYLOAD,
  INVALID_SECRET,
} from '../common/response-constructors';
import { revalidatePath, revalidateTag } from 'next/cache';
import { REVALIDATE_TAGS } from '../common/constants';
import { SANITY_PAGE_ROUTES, getRelativeURL } from '@/lib/routes';
import { getReferenceDocuments } from './utils/get-references';

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } =
      await parseBody<ISanityRevalidatePayload>(
        req,
        process.env.SANITY_REVALIDATE_SECRET
      );

    // Reject request with invalid signature
    if (!isValidSignature) {
      return new Response(INVALID_SECRET, {
        status: 401,
      });
    }

    if (!body) {
      return new Response(INVALID_PAYLOAD, { status: 400 });
    }

    const result = await handleRevalidate(body);

    if (result == true) {
      return new Response('Triggered Revalidate Successfully.');
    } else {
      return new Response(INVALID_PAYLOAD, { status: 500 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    } else {
      return new Response('Unknown Error', { status: 500 });
    }
  }
}

/**
 * This function will handle calling revalidateTags and
 * revalidatePath functions.
 *
 * It will be used recursively to handle revalidation of referencing
 * documents.
 */
async function handleRevalidate(payload: ISanityRevalidatePayload) {
  const documentType = payload._type;

  switch (documentType) {
    /**
     * We have to update the following on global settings update:
     * - All queries that query sanity sections.
     * - All query that query seo from sanity.
     * - All query that has promo related content.
     */
    case 'globalSettings': {
      revalidateTag(REVALIDATE_TAGS.GLOBAL_SETTINGS);

      console.log('Content Revalidation: Global Settings');

      return true;
    }
    case 'footer':
    case 'header': {
      revalidateTag(REVALIDATE_TAGS.LAYOUT);

      console.log('Content Revalidation: Layout');

      return true;
    }
    case 'homePage': {
      revalidatePath(SANITY_PAGE_ROUTES.homePage);

      console.log('Content Revalidation: Home Page');

      return true;
    }
    case 'contactUsPage': {
      revalidatePath(SANITY_PAGE_ROUTES.contactUsPage);

      console.log('Content Revalidation: Contact Us Page');

      return true;
    }
    case 'potpourriPage': {
      revalidatePath(SANITY_PAGE_ROUTES.potpourriPage);

      console.log('Content Revalidation: Potpourri Articles List Page');

      return true;
    }
    case 'featuredArticlesPage': {
      revalidatePath(SANITY_PAGE_ROUTES.featuredArticlesPage);

      console.log('Content Revalidation: Featured Articles List Page');

      return true;
    }
    case 'insideTheMindPage': {
      revalidatePath(SANITY_PAGE_ROUTES.insideTheMindPage);

      console.log('Content Revalidation: Inside the Mind Artiels List Page');

      return true;
    }
    case 'generalPage':
    case 'potpourriArticle': {
      if (payload.slug) {
        const path = getRelativeURL(payload._type, payload.slug);

        revalidatePath(path);

        console.log(`Content Revalidation: ${payload._type}. Path: ${path}`);

        return true;
      }

      console.error(
        `Content Revalidation: Failed to trigger revalidate. Payload: ${payload._type}, ${payload._id}`
      );

      return false;
    }
    case 'insideTheMindArticle': {
      if (payload.slug) {
        const path = getRelativeURL(payload._type, payload.slug);

        revalidatePath(path);

        console.log(`Content Revalidation: ${payload._type}. Path: ${path}`);

        return true;
      }

      console.error(
        `Content Revalidation: Failed to trigger revalidate. Payload: ${payload._type}, ${payload._id}`
      );

      return false;
    }
    /**
     * When revalidating page and hero sections we have to find
     * pages that are referencing these sections and update them.
     */
    case 'richTextSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Rich Text Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Rich Text Section. References not found'
      );

      return false;
    }
    case 'articlesListSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Articles List Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Articles List Section. References not found'
      );

      return false;
    }
    case 'customListSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Custom List Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Custom List Section. References not found'
      );

      return false;
    }
    case 'solutionsListSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Solutions List Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Solutions List Section. References not found'
      );

      return false;
    }
    case 'secondarySliderSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Secondary Slider Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Secondary Slider Section. References not found'
      );

      return false;
    }
    case 'primarySliderSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Primary Slider Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Primary Slider Section. References not found'
      );

      return false;
    }
    case 'ctaSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: CTA Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error('Content Revalidation: CTA Section. References not found');

      return false;
    }
    case 'newsletterSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Newsletter Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Newsletter Section. References not found'
      );

      return false;
    }
    case 'bulletListSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Bullet List Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Bullet List Section. References not found'
      );

      return false;
    }
    case 'primaryHeroSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Primary Hero Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Primary Hero Section. References not found'
      );

      return false;
    }
    case 'secondaryHeroSection': {
      const referencedDocuments = await getReferenceDocuments(payload._id);

      if (referencedDocuments !== null) {
        for (const doc of referencedDocuments) {
          await handleRevalidate(doc);
        }

        console.log(
          `Content Revalidation: Secondary Hero Section. Section: ${payload._type}`
        );
        return true;
      }

      console.error(
        'Content Revalidation: Secondary Hero Section. References not found'
      );

      return false;
    }
    default: {
      console.error(`Invalid _type: ${documentType}`);
      return true;
    }
  }
}
