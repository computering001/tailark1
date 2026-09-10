import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 54 80" fill="none">
    <g clipPath="url(#clip0_912_3)">
      <path
        d="M13.33 80C20.69 80 26.67 74.03 26.67 66.67V53.33H13.33C5.97 53.33 0 59.31 0 66.67C0 74.03 5.97 80 13.33 80Z"
        fill="#0ACF83"
      />
      <path
        d="M0 40C0 32.64 5.97 26.67 13.33 26.67H26.67V53.33H13.33C5.97 53.33 0 47.36 0 40Z"
        fill="#A259FF"
      />
      <path
        d="M0 13.33C0 5.97 5.97 0 13.33 0H26.67V26.67H13.33C5.97 26.67 0 20.69 0 13.33Z"
        fill="#F24E1E"
      />
      <path
        d="M26.67 0H40C47.36 0 53.33 5.97 53.33 13.33C53.33 20.69 47.36 26.67 40 26.67H26.67V0Z"
        fill="#FF7262"
      />
      <path
        d="M53.33 40C53.33 47.36 47.36 53.33 40 53.33C32.64 53.33 26.67 47.36 26.67 40C26.67 32.64 32.64 26.67 40 26.67C47.36 26.67 53.33 32.64 53.33 40Z"
        fill="#1ABCFE"
      />
    </g>
    <defs>
      <clipPath id="clip0_912_3">
        <rect width="53.3333" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { Figma };
