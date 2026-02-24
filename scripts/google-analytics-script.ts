export const GOOGLE_ANALYTICS_SCRIPT = `
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_G_ANALYTICS_TAG}');
	`;
