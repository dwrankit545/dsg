const iconTick = ['tick'] as const;
const iconView = ['view', 'hide'] as const;
const iconSpinner = ['spinner-circle'] as const;
const iconChevron = ['chevron-down', 'chevron-right'] as const;
const iconMenu = ['menu'] as const;
const iconArrow = ['arrow-left', 'arrow-right'] as const;
const iconSocial = [
  'facebook',
  'twitter',
  'linkedin',
  'instagram',
  'youtube',
] as const;
const iconForm = ['email', 'location-point', 'travel-bag'] as const;
const iconInput = ['search'] as const;

const iconFile = ['pdf'] as const;

export const icons = [
  ...iconTick,
  ...iconView,
  ...iconSpinner,
  ...iconChevron,
  ...iconMenu,
  ...iconArrow,
  ...iconSocial,
  ...iconForm,
  ...iconFile,
  ...iconInput,
];

export type IconName = (typeof icons)[number];

export interface IIconStore {
  /**
   * Specifies the name of the icon to be displayed.
   */
  iconName: IconName;
  className?: string;
}
