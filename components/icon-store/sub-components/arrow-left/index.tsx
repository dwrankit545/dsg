import { useUniqueId } from '@/hooks/unique-id';

export function ArrowLeft() {
  const uniqueId = useUniqueId();
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.9167 20.875H9.83333M9.83333 20.875L15.3542 15.3542M9.83333 20.875L15.3542 26.3958M20.875 40.75C9.89834 40.75 1 31.8517 1 20.875C1 9.89834 9.89834 1 20.875 1C31.8517 1 40.75 9.89834 40.75 20.875C40.75 31.8517 31.8517 40.75 20.875 40.75Z"
        stroke={`url(#${uniqueId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={uniqueId}
          x1="48.1815"
          y1="-12.7908"
          x2="-8.7493"
          y2="-2.31023"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3C7E94" />
          <stop offset="1" stopColor="#42B1D5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
