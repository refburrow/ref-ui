import React from 'react';
import { isClientMobie } from '../../utils/device';

export const ReturnIcon = function (props: any) {
  return (
    <svg
      {...props}
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.31201 1L1.00012 5.85088L5.31201 10.7018"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const AddIcon = function (props: any) {
  return (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="10"
        transform="rotate(-90 11 11)"
        stroke="#91A2AE"
        strokeOpacity="0.2"
        strokeWidth="1.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9749 6.77447C11.9749 6.34674 11.6282 6 11.2004 6C10.7727 6 10.426 6.34674 10.426 6.77447V10.4255H6.77447C6.34674 10.4255 6 10.7723 6 11.2C6 11.6277 6.34674 11.9745 6.77447 11.9745H10.426V15.6255C10.426 16.0533 10.7727 16.4 11.2004 16.4C11.6282 16.4 11.9749 16.0533 11.9749 15.6255V11.9745H15.6255C16.0533 11.9745 16.4 11.6277 16.4 11.2C16.4 10.7723 16.0533 10.4255 15.6255 10.4255H11.9749V6.77447Z"
        fill="#586F80"
      />
    </svg>
  );
};

export const SelectIcon = function (props: any) {
  return (
    <svg
      {...props}
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5.85088 5.31189L10.7018 1"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const BgIcon = function (props: any) {
  return (
    <svg
      {...props}
      width="392"
      height="397"
      viewBox="0 0 392 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_124_4873"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="392"
        height="397"
      >
        <rect width="392" height="397" rx="12" fill="black" />
      </mask>
      <g mask="url(#mask0_124_4873)">
        <circle
          opacity="0.1"
          cx="375"
          cy="22.8345"
          r="40.8952"
          transform="rotate(45 375 22.8345)"
          fill="url(#paint0_linear_124_4873)"
          stroke="url(#paint1_linear_124_4873)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          opacity="0.1"
          d="M-28 216.348C-23.6273 225.034 -8.32298 242.406 17.913 242.406C50.7081 242.406 63.8261 184 109.739 184C155.652 184 158.932 246 201.565 246C244.199 246 247.478 184 290.112 184C332.745 184 333.565 242.406 368 242.406"
          stroke="url(#paint2_linear_124_4873)"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_124_4873"
          x1="375"
          y1="-18.0607"
          x2="375"
          y2="63.7297"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26343E" />
          <stop offset="1" stopColor="#1D2932" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_124_4873"
          x1="331.902"
          y1="63.7297"
          x2="390.492"
          y2="63.7297"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFD1" />
          <stop offset="1" stopColor="#5B40FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_124_4873"
          x1="378.664"
          y1="246"
          x2="94.9946"
          y2="246"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFD1" stopOpacity="0" />
          <stop offset="1" stopColor="#5B40FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SwitchButton = function (props: any) {
  return (
    <svg
      {...props}
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.11538H9.65385L6.53846 1"
        stroke="#00C6A2"
        strokeLinecap="round"
      />
      <path
        d="M10 6.88462L1.34615 6.88461L4.46154 10"
        stroke="#00C6A2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const AddButton = function (props: any) {
  return (
    <svg
      {...props}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.40039 0.7C5.40039 0.313401 5.08699 0 4.70039 0C4.31379 0 4.00039 0.313401 4.00039 0.7V4H0.7C0.313401 4 0 4.3134 0 4.7C0 5.0866 0.313401 5.4 0.7 5.4H4.00039V8.7C4.00039 9.0866 4.31379 9.4 4.70039 9.4C5.08699 9.4 5.40039 9.0866 5.40039 8.7V5.4H8.7C9.0866 5.4 9.4 5.0866 9.4 4.7C9.4 4.3134 9.0866 4 8.7 4H5.40039V0.7Z"
        fill="#7E8A93"
      />
    </svg>
  );
};
export const SwitchLRButton = function (props: any) {
  return (
    <svg
      {...props}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        opacity="0.2"
        cx="12.5"
        cy="12.5"
        rx="11.5"
        ry="11.5"
        transform="rotate(-90 12.5 12.5)"
        stroke="#91A2AE"
        strokeLinecap="round"
      />
      <g opacity="0.5">
        <path
          d="M17.2764 10.6944H7.7233C7.29269 10.6944 6.94431 10.3846 6.94431 10.0017C6.94431 9.61877 7.29269 9.30897 7.7233 9.30897H15.3852L14.1086 8.17366C13.8035 7.90234 13.8035 7.46361 14.1086 7.19421C14.4137 6.92289 14.907 6.92289 15.21 7.19421L17.746 9.44751C17.9342 9.57451 18.0554 9.77463 18.0554 10.0017C18.0554 10.3846 17.707 10.6944 17.2764 10.6944Z"
          fill="#91A2AE"
        />
        <path
          d="M7.72332 13.6574H17.2765C17.7071 13.6574 18.0554 13.9672 18.0554 14.3501C18.0554 14.733 17.7071 15.0428 17.2765 15.0428H9.61453L10.8912 16.1782C11.1963 16.4495 11.1963 16.8882 10.8912 17.1576C10.5861 17.4289 10.0927 17.4289 9.7898 17.1576L7.25377 14.9043C7.06551 14.7773 6.94434 14.5772 6.94434 14.3501C6.94434 13.9672 7.29272 13.6574 7.72332 13.6574Z"
          fill="#91A2AE"
        />
      </g>
    </svg>
  );
};

export const SwitchArrowL = function (props: any) {
  return (
    <svg
      {...props}
      width="13"
      height="5"
      viewBox="0 0 13 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.72332 0.65738H11.2765C11.7071 0.65738 12.0554 0.967185 12.0554 1.35011C12.0554 1.73304 11.7071 2.04284 11.2765 2.04284H3.61453L4.8912 3.17815C5.1963 3.44947 5.1963 3.8882 4.8912 4.15759C4.5861 4.42891 4.09274 4.42891 3.7898 4.15759L1.25377 1.9043C1.06551 1.77729 0.944336 1.57717 0.944336 1.35011C0.944336 0.967185 1.29272 0.65738 1.72332 0.65738Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SwitchArrowR = function (props: any) {
  return (
    <svg
      {...props}
      width="13"
      height="5"
      viewBox="0 0 13 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2764 4.69443H1.7233C1.29269 4.69443 0.944309 4.38462 0.944309 4.0017C0.944309 3.61877 1.29269 3.30897 1.7233 3.30897H9.38523L8.10855 2.17366C7.80345 1.90234 7.80345 1.46361 8.10855 1.19421C8.41366 0.922893 8.90702 0.922893 9.20995 1.19421L11.746 3.44751C11.9342 3.57451 12.0554 3.77463 12.0554 4.0017C12.0554 4.38462 11.707 4.69443 11.2764 4.69443Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ReduceButton = function (props: any) {
  return (
    <svg
      {...props}
      width="10"
      height="2"
      viewBox="0 0 10 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.7C0 0.313401 0.313401 0 0.7 0H8.7C9.0866 0 9.4 0.313401 9.4 0.7C9.4 1.0866 9.0866 1.4 8.7 1.4H0.7C0.313401 1.4 0 1.0866 0 0.7Z"
        fill="#7E8A93"
      />
    </svg>
  );
};

export const SwitchIcon = function (props: any) {
  return (
    <svg
      {...props}
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.73335 10.0165C9.73335 10.8358 9.06924 11.4999 8.25002 11.4999C7.4308 11.4999 6.76669 10.8358 6.76669 10.0165C6.76669 9.19733 7.4308 8.53322 8.25002 8.53322C9.06924 8.53322 9.73335 9.19733 9.73335 10.0165ZM11.1741 9.27205C11.2045 9.2684 11.2353 9.26652 11.2667 9.26652L12.2333 9.26652C12.6568 9.26652 13 9.60976 13 10.0332C13 10.4566 12.6568 10.7998 12.2333 10.7998L11.2667 10.7998C11.2325 10.7998 11.1988 10.7976 11.1657 10.7933C10.8231 12.0829 9.64753 13.0332 8.25002 13.0332C6.85251 13.0332 5.67696 12.0829 5.3343 10.7933C5.30128 10.7976 5.26761 10.7998 5.23341 10.7998L0.766754 10.7998C0.343337 10.7998 8.98706e-05 10.4566 8.99077e-05 10.0332C8.99447e-05 9.60976 0.343337 9.26651 0.766754 9.26651L5.23341 9.26652C5.26472 9.26652 5.2956 9.26839 5.32593 9.27204C5.65744 7.96604 6.8409 6.99989 8.25002 6.99989C9.65914 6.99989 10.8426 7.96604 11.1741 9.27205ZM3.26668 3.01657C3.26668 2.19735 3.93079 1.53324 4.75 1.53324C5.56922 1.53324 6.23333 2.19735 6.23333 3.01657C6.23333 3.83579 5.56922 4.49989 4.75001 4.49989C3.93079 4.49989 3.26668 3.83579 3.26668 3.01657ZM4.75 -9.03666e-05C3.3525 -9.04888e-05 2.17694 0.950207 1.83428 2.23986C1.80125 2.23551 1.76757 2.23327 1.73335 2.23327L0.766688 2.23327C0.343271 2.23327 2.38023e-05 2.57652 2.37653e-05 2.99993C2.37283e-05 3.42335 0.343271 3.7666 0.766688 3.7666L1.73335 3.7666C1.76468 3.7666 1.79557 3.76472 1.82592 3.76107C2.15742 5.06707 3.34089 6.03322 4.75001 6.03322C6.15912 6.03322 7.34258 5.06707 7.67409 3.76107C7.70443 3.76472 7.7353 3.7666 7.76662 3.7666L12.2333 3.7666C12.6567 3.7666 12.9999 3.42335 12.9999 2.99993C12.9999 2.57652 12.6567 2.23327 12.2333 2.23327L7.76662 2.23327C7.73242 2.23327 7.69874 2.23551 7.66573 2.23985C7.32307 0.950204 6.14751 -9.02444e-05 4.75 -9.03666e-05Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const SideIcon = function (props: any) {
  return (
    <svg
      {...props}
      width="46"
      height="30"
      viewBox="0 0 46 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.772444"
        y1="23.5548"
        x2="45.7724"
        y2="0.554784"
        stroke="#00FFD1"
      />
      <circle cx="7.5" cy="9.5" r="7.5" fill="#00FFD1" />
      <path d="M26.5 13L33.8612 25.75H19.1388L26.5 13Z" fill="#5B40FF" />
    </svg>
  );
};

export const InvalidIcon = function (props: any) {
  return (
    <svg
      {...props}
      width="51"
      height="30"
      viewBox="0 0 51 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.767997"
        y1="23.5571"
        x2="21.768"
        y2="12.5571"
        stroke="#00FFD1"
      />
      <line
        x1="50.7671"
        y1="22.4425"
        x2="31.7671"
        y2="12.4425"
        stroke="#00FFD1"
      />
      <line
        x1="31.416"
        y1="4.27735"
        x2="29.416"
        y2="7.27735"
        stroke="#00FFD1"
      />
      <line
        x1="35.1213"
        y1="8.48507"
        x2="31.1213"
        y2="9.48507"
        stroke="#00FFD1"
      />
      <circle cx="8.5" cy="7.5" r="7.5" fill="#00FFD1" />
      <path d="M26.5 13L33.8612 25.75H19.1388L26.5 13Z" fill="#5B40FF" />
    </svg>
  );
};
export const BoxDarkBg = function (props: any) {
  return (
    <svg
      {...props}
      width="417"
      height="82"
      viewBox="0 0 417 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_124_5697"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="417"
        height="82"
      >
        <rect width="417" height="82" rx="12" fill="black" />
      </mask>
      <g mask="url(#mask0_124_5697)">
        <circle
          opacity="0.1"
          cx="390.938"
          cy="10.8772"
          r="35.9321"
          transform="rotate(45 390.938 10.8772)"
          fill="url(#paint0_linear_124_5697)"
          stroke="url(#paint1_linear_124_5697)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          opacity="0.1"
          d="M-20 56.3043C-17.4161 61.4879 -8.37266 71.8551 7.13044 71.8551C26.5093 71.8551 34.2609 37 61.3913 37C88.5217 37 90.4596 74 115.652 74C140.845 74 142.783 37 167.975 37C193.168 37 193.652 71.8551 214 71.8551"
          stroke="url(#paint2_linear_124_5697)"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_124_5697"
          x1="390.938"
          y1="-25.0549"
          x2="390.938"
          y2="46.8093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26343E" />
          <stop offset="1" stopColor="#1D2932" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_124_5697"
          x1="353.071"
          y1="46.8093"
          x2="404.55"
          y2="46.8093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFD1" />
          <stop offset="1" stopColor="#5B40FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_124_5697"
          x1="220.302"
          y1="74"
          x2="52.6786"
          y2="74"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFD1" stopOpacity="0" />
          <stop offset="1" stopColor="#5B40FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const WarningIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1274 6.07879C11.1317 6.04034 11.1339 6.0013 11.1339 5.96175C11.1339 5.36616 10.6336 4.88335 10.0164 4.88335C9.39924 4.88335 8.89893 5.36616 8.89893 5.96175C8.89893 5.96298 8.89893 5.9642 8.89894 5.96543H8.89547L9.1473 11.1058C9.14727 11.1086 9.14726 11.1114 9.14726 11.1141C9.14726 11.5774 9.53639 11.9529 10.0164 11.9529C10.4964 11.9529 10.8855 11.5774 10.8855 11.1141C10.8855 11.1065 10.8854 11.0989 10.8852 11.0913L11.1274 6.07879ZM7.2833 2.47745C8.76956 0.0286533 11.1824 0.0339056 12.6655 2.47745L19.3081 13.4219C20.7943 15.8707 19.6164 17.8559 16.6693 17.8559H3.27955C0.335916 17.8559 -0.842329 15.8655 0.640741 13.4219L7.2833 2.47745ZM10.0164 15.4277C10.6336 15.4277 11.1339 14.9449 11.1339 14.3493C11.1339 13.7537 10.6336 13.2709 10.0164 13.2709C9.39924 13.2709 8.89893 13.7537 8.89893 14.3493C8.89893 14.9449 9.39924 15.4277 10.0164 15.4277Z"
        fill="#DE9450"
      />
    </svg>
  );
};

export const EmptyIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="291"
      height="28"
      viewBox="0 0 291 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="12"
        width="291"
        height="8"
        rx="4"
        fill="black"
        fillOpacity="0.1"
      />
      <rect x="106" y="13" width="97" height="6" rx="3" fill="#333F47" />
      <circle
        cx="97"
        cy="14"
        r="13"
        fill="#1C272E"
        stroke="#333F47"
        strokeWidth="2"
      />
      <path
        d="M92.5 11H102"
        stroke="#333F47"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M92.5 17H102"
        stroke="#333F47"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="194"
        cy="14"
        r="13"
        fill="#1C272E"
        stroke="#333F47"
        strokeWidth="2"
      />
      <path
        d="M189.5 11H199"
        stroke="#333F47"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M189.5 17H199"
        stroke="#333F47"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ColorsBox = (props: any) => {
  return (
    <svg
      {...props}
      width="76"
      height="20"
      viewBox="0 0 76 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H76L71.6126 13.1623C70.2514 17.2457 66.43 20 62.1257 20H13.8743C9.56996 20 5.74857 17.2457 4.38743 13.1623L0 0Z"
        fill={`url(#${props.svgId || 'paint0_linear_124_7159'})`}
      />
      <defs>
        <linearGradient
          id={`${props.svgId || 'paint0_linear_124_7159'}`}
          x1="67.2058"
          y1="5.99998"
          x2="9.18108"
          y2="5.99998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B40FF" />
          <stop offset="1" stopColor="#00D6AF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const WarningMark = (props: any) => {
  return (
    <svg
      {...props}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.3125 3.375H5.25V2.4375H4.3125V3.375ZM4.3125 7.125H5.25V3.9375H4.3125V7.125ZM4.78125 0C3.504 0 2.30325 0.497437 1.40044 1.40044C0.49725 2.30344 0 3.50419 0 4.78125C0 7.41769 2.14481 9.5625 4.78125 9.5625H4.782C6.05888 9.5625 7.25944 9.06506 8.16263 8.16206C9.06506 7.25906 9.5625 6.05831 9.5625 4.78125C9.5625 2.14481 7.41769 0 4.78125 0ZM7.52531 7.52512C7.16594 7.88651 6.73844 8.17302 6.26758 8.36806C5.79672 8.56309 5.29184 8.66279 4.78219 8.66138H4.78125C2.64188 8.66138 0.900938 6.92081 0.900938 4.78125C0.899546 4.27149 0.999252 3.76651 1.19429 3.29553C1.38932 2.82455 1.67581 2.39692 2.03719 2.03737C2.39674 1.67595 2.8244 1.38942 3.29541 1.19435C3.76642 0.999284 4.27144 0.899556 4.78125 0.900938C6.92062 0.900938 8.66156 2.64169 8.66156 4.78125C8.66294 5.29101 8.56323 5.79599 8.3682 6.26697C8.17316 6.73795 7.88668 7.16558 7.52531 7.52512Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Slider = (props: any) => {
  return (
    <svg
      {...props}
      width="47"
      height="35"
      viewBox="0 0 47 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14C0 9.58172 3.58172 6 8 6H19.9224C20.2798 6 20.61 5.80928 20.7886 5.49972L23.3838 1.00139C23.7686 0.334352 24.7314 0.334352 25.1162 1.00139L27.7114 5.49972C27.89 5.80928 28.2202 6 28.5776 6H39C43.4183 6 47 9.58172 47 14V27C47 31.4183 43.4183 35 39 35H8C3.58172 35 0 31.4183 0 27V14Z"
        fill="#00D6AF"
      />
    </svg>
  );
};

export const Fire = (props: any) => {
  return (
    <svg
      {...props}
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.57796 0.367675C4.35716 1.05452 3.75595 2.28874 2.12094 3.92562C-0.699681 6.75295 -1.07348 11.3076 3.26035 13.5473C3.61615 13.7311 3.91316 13.6179 4.13636 13.3909C4.87436 12.6416 5.19477 11.5422 5.09877 10.0938C5.07177 9.69465 5.25477 9.59078 5.61717 9.86388C6.64498 10.6377 7.31578 11.8299 7.31578 13.1114C7.31578 13.5473 7.49519 13.7778 7.91339 13.699C10.677 13.1779 14.0448 9.32409 10.4154 3.68111C10.1982 3.394 9.8772 3.394 9.8826 3.78848C9.88861 4.27283 9.8316 4.75602 9.7122 5.22636C9.63 5.55315 9.3138 5.54849 9.2394 5.22636C8.787 3.2662 7.52939 1.60015 5.46597 0.225287C4.90916 -0.145271 4.70696 -0.0314774 4.57796 0.368259V0.367675Z"
        fill="url(#paint0_linear_2166_3579)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2166_3579"
          x1="0"
          y1="13.7143"
          x2="12"
          y2="13.7143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD278" />
          <stop offset="1" stopColor="#FF9900" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FarmBoardInDetailPool = (props: any) => {
  return (
    <svg
      width={isClientMobie() ? '100%' : '340'}
      height={isClientMobie() ? '92' : '105'}
      viewBox={`0 0 340 ${isClientMobie() ? '92' : '100'}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width={isClientMobie() ? '338' : '300'}
        height={isClientMobie() ? '90' : '100'}
        rx="11"
        fill="url(#paint0_radial_2166_3074)"
        stroke="url(#paint1_linear_2166_3074)"
        strokeWidth="2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2166_3074"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(86.8785 26.5) rotate(33.0988) scale(137.342 152.301)"
        >
          <stop stopColor="#0E3E48" />
          <stop offset="1" stopColor="#001320" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_2166_3074"
          x1="0"
          y1="92"
          x2="340"
          y2="92"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6A2" />
          <stop offset="1" stopColor="#7F43FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const HintIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.3125 3.375H5.25V2.4375H4.3125V3.375ZM4.3125 7.125H5.25V3.9375H4.3125V7.125ZM4.78125 0C3.504 0 2.30325 0.497437 1.40044 1.40044C0.49725 2.30344 0 3.50419 0 4.78125C0 7.41769 2.14481 9.5625 4.78125 9.5625H4.782C6.05888 9.5625 7.25944 9.06506 8.16263 8.16206C9.06506 7.25906 9.5625 6.05831 9.5625 4.78125C9.5625 2.14481 7.41769 0 4.78125 0ZM7.52531 7.52512C7.16594 7.88651 6.73844 8.17302 6.26758 8.36806C5.79672 8.56309 5.29184 8.66279 4.78219 8.66138H4.78125C2.64188 8.66138 0.900938 6.92081 0.900938 4.78125C0.899546 4.27149 0.999252 3.76651 1.19429 3.29553C1.38932 2.82455 1.67581 2.39692 2.03719 2.03737C2.39674 1.67595 2.8244 1.38942 3.29541 1.19435C3.76642 0.999284 4.27144 0.899556 4.78125 0.900938C6.92062 0.900938 8.66156 2.64169 8.66156 4.78125C8.66294 5.29101 8.56323 5.79599 8.3682 6.26697C8.17316 6.73795 7.88668 7.16558 7.52531 7.52512Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const OrderIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.15905 2.28451H9.72909C10.2712 2.28451 10.7292 1.76141 10.7292 1.14223C10.7292 0.512393 10.2707 0 9.70727 0H6.15905C5.59558 0 5.13721 0.512373 5.13721 1.14223C5.13721 1.77208 5.5956 2.28451 6.15905 2.28451ZM12.5353 8.24999C12.5051 7.82162 12.169 7.49866 11.7535 7.49866H4.09089C3.67869 7.49866 3.33032 7.8506 3.33032 8.26712C3.33032 8.68355 3.67869 9.03542 4.09089 9.03542H11.7752C12.1876 9.03542 12.5359 8.68355 12.5359 8.26712L12.5353 8.24999ZM4.09089 4.63977H11.7752C12.1876 4.63977 12.5359 4.99163 12.5359 5.40823C12.5359 5.82475 12.1876 6.17661 11.7752 6.17661H4.09089C3.67869 6.17661 3.33032 5.82475 3.33032 5.40823C3.33032 4.99163 3.67869 4.63977 4.09089 4.63977ZM11.7535 10.5991H4.09089C3.67869 10.5991 3.33032 10.9511 3.33032 11.3676C3.33032 11.784 3.67869 12.1359 4.09089 12.1359H11.7752C12.1876 12.1359 12.5359 11.784 12.5359 11.3676L12.5353 11.3505C12.5051 10.9221 12.169 10.5991 11.7535 10.5991ZM13.5604 0.505737C14.2609 0.505737 14.8471 0.739379 15.2556 1.18138C15.6411 1.59842 15.8449 2.17039 15.8449 2.83546V14.6002C15.8449 16.1592 14.9949 17.0179 13.4515 17.0179H2.39326C0.939403 17.0179 0 16.0688 0 14.6002V2.83548C0 1.37671 0.853961 0.505757 2.28443 0.505757H3.56876C3.96323 0.505757 4.19875 0.768319 4.19875 1.20814C4.19875 1.69407 3.94559 2.02061 3.56876 2.02061H2.28443C1.80759 2.02061 1.49952 2.3318 1.49952 2.81349V14.7101C1.49952 15.164 2.05181 15.503 2.54557 15.503H13.5604C14.0372 15.503 14.3453 15.1918 14.3453 14.7101V2.81347C14.3453 2.33178 14.0372 2.02059 13.5604 2.02059H12.5373C12.1095 2.02059 11.6896 1.61816 11.6896 1.20812C11.6896 0.774335 12.1296 0.505737 12.5373 0.505737H13.5604Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SwitchInDetailIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M11.1587 4.79979H0.841338C0.376285 4.79979 3.52859e-05 4.46521 3.52859e-05 4.05165C3.52859e-05 3.63809 0.376285 3.3035 0.841338 3.3035H9.1162L7.7374 2.07737C7.40789 1.78435 7.40789 1.31052 7.7374 1.01957C8.06691 0.726549 8.59973 0.726549 8.92691 1.01957L11.6658 3.45313C11.8691 3.59029 12 3.80642 12 4.05165C12 4.46521 11.6238 4.79979 11.1587 4.79979Z"
          fill="currentColor"
        />
        <path
          d="M0.841303 8.00001H11.1587C11.6237 8.00001 12 8.3346 12 8.74816C12 9.16172 11.6237 9.49631 11.1587 9.49631H2.8838L4.2626 10.7224C4.59211 11.0155 4.59211 11.4893 4.2626 11.7802C3.93309 12.0733 3.40027 12.0733 3.07309 11.7802L0.334184 9.34668C0.130869 9.20952 0 8.99338 0 8.74816C0 8.3346 0.376249 8.00001 0.841303 8.00001Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const NoLiquidityIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28.5" cy="28.5" r="28.5" fill="#0F1D27" />
      <path
        d="M9.77189 1.05235C10.7152 0.498255 11.9305 0.912726 12.3387 1.92775L14.8605 8.19831C15.0026 8.5518 14.8807 8.95659 14.567 9.17274C14.2137 9.41611 13.7322 9.3437 13.4662 9.0072L9.27443 3.70547C8.60074 2.85338 8.83528 1.6025 9.77189 1.05235Z"
        fill="#7C8891"
      />
      <path
        d="M2.38195 9.90524C2.8534 8.91801 4.09246 8.58108 4.99893 9.19362L10.5989 12.9777C10.9146 13.191 11.0402 13.5947 10.9012 13.9495C10.7447 14.3489 10.3052 14.5584 9.89641 14.4285L3.45503 12.3821C2.41979 12.0532 1.91385 10.8854 2.38195 9.90524Z"
        fill="#7C8891"
      />
      <path
        d="M16 43.7941C16 44.5352 17.2364 45.2459 19.4372 45.7699C21.638 46.2939 24.6229 46.5882 27.7353 46.5882C30.8477 46.5882 33.8326 46.2939 36.0334 45.7699C38.2342 45.2459 39.4706 44.5352 39.4706 43.7941C39.4706 43.0531 38.2342 42.3424 36.0334 41.8184C33.8326 41.2944 30.8477 41 27.7353 41C24.6229 41 21.638 41.2944 19.4372 41.8184C17.2364 42.3424 16 43.0531 16 43.7941Z"
        fill="black"
        fillOpacity="0.8"
      />
      <path
        d="M32.6591 33.1964C33.2143 33.0183 33.8141 33.079 34.3266 33.3652C34.8391 33.6514 35.2224 34.1396 35.3923 34.7226L37.4207 41.6894L37.4411 41.7624C37.5891 42.3383 37.5181 42.9521 37.2431 43.474C36.9681 43.996 36.5107 44.3852 35.9674 44.5594L35.825 44.6054C35.2699 44.7835 34.6702 44.7227 34.1577 44.4365C33.6453 44.1503 33.262 43.6621 33.0922 43.0792L31.0635 36.1121C30.9794 35.8235 30.9504 35.5203 30.978 35.2198C31.0055 34.9194 31.0892 34.6276 31.2241 34.3611C31.3591 34.0946 31.5427 33.8587 31.7644 33.6667C31.9862 33.4748 32.2419 33.3306 32.5167 33.2424L32.6591 33.1964ZM21.3974 33.1964L21.5398 33.2424C21.8146 33.3306 22.0703 33.4748 22.2921 33.6667C22.5138 33.8587 22.6974 34.0946 22.8324 34.3611C22.9673 34.6276 23.051 34.9194 23.0785 35.2198C23.1061 35.5203 23.0771 35.8235 22.993 36.1121L20.9643 43.0789C20.7945 43.6618 20.4112 44.15 19.8988 44.4362C19.3863 44.7224 18.7866 44.7832 18.2315 44.6051L18.0888 44.5591C17.5457 44.3848 17.0885 43.9955 16.8136 43.4737C16.5387 42.9518 16.4678 42.3381 16.6157 41.7624L16.6358 41.6894L18.6642 34.7226C18.8341 34.1396 19.2174 33.6514 19.7299 33.3652C20.2424 33.079 20.8422 33.0183 21.3974 33.1964ZM38.098 28.2326C38.1108 28.3659 38.1172 28.5002 38.1172 28.6341V30.6261C38.1172 31.2763 37.8713 31.8999 37.4335 32.3597C36.9956 32.8195 36.4019 33.0778 35.7827 33.0778H17.982C17.3628 33.0778 16.769 32.8195 16.3312 32.3597C15.8934 31.8999 15.6475 31.2763 15.6475 30.6261V28.6341C15.6475 26.43 17.3487 24.643 19.4481 24.643C19.5838 24.643 19.7194 24.6507 19.8546 24.666L26.4963 25.4165L33.9072 24.6347C36.0103 24.4129 37.8867 26.0236 38.098 28.2326ZM39.6621 11.2766L39.8045 11.3226C40.0794 11.4108 40.335 11.555 40.5568 11.7469C40.7785 11.9389 40.9622 12.1749 41.0971 12.4413C41.2321 12.7078 41.3157 12.9996 41.3433 13.3C41.3708 13.6005 41.3418 13.9037 41.2577 14.1923L38.6124 23.2774C38.4426 23.8603 38.0594 24.3485 37.5469 24.6347C37.0344 24.9209 36.4347 24.9816 35.8796 24.8036L35.7369 24.7576C35.1938 24.5832 34.7366 24.194 34.4617 23.6721C34.1868 23.1503 34.1159 22.5366 34.2638 21.9608L34.2839 21.8876L36.929 12.8028C37.0988 12.2199 37.4821 11.7316 37.9946 11.4454C38.5072 11.1592 39.1069 11.0985 39.6621 11.2766Z"
        fill="url(#paint0_linear_2579_389)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2579_389"
          x1="28.5004"
          y1="11.1763"
          x2="28.5004"
          y2="44.7057"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7E8A93" />
          <stop offset="1" stopColor="#485158" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SwitchButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99952 10.2667V11.2L3.99474 9.33333L5.99952 7.46667V8.4H8.99919C9.62783 8.40014 10.2406 8.21592 10.751 7.87335C11.2614 7.53079 11.6436 7.0472 11.8437 6.4909C12.0437 5.9346 12.0514 5.33369 11.8658 4.77307C11.6801 4.21244 11.3104 3.72043 10.809 3.36653L10.82 3.35347L12.2298 2.03747C13.0118 2.65508 13.5717 3.48201 13.8337 4.40637C14.0957 5.33073 14.0472 6.30791 13.6947 7.20569C13.3423 8.10348 12.7029 8.87853 11.8631 9.426C11.0233 9.97347 10.0235 10.2669 8.99919 10.2667L5.99852 10.2676L5.99952 10.2667ZM7.9993 0.933333V0L10.0461 1.86667L7.9993 3.73333V2.8H4.99963C4.3709 2.79999 3.75807 2.9844 3.24771 3.32715C2.73735 3.6699 2.35527 4.15368 2.15546 4.71013C1.95564 5.26659 1.94819 5.86758 2.13416 6.42819C2.32013 6.98881 2.69011 7.48071 3.19183 7.8344L1.76899 9.1616C0.987385 8.5439 0.42786 7.71705 0.166084 6.79285C-0.0956921 5.86866 -0.0470885 4.89172 0.305321 3.99415C0.657731 3.09658 1.29694 2.32169 2.13652 1.77426C2.97609 1.22684 3.97551 0.933297 4.99963 0.933333H7.9993Z"
        fill="#7E8A93"
      />
    </svg>
  );
};

export const ColorsBoxCenter = (props: any) => {
  return (
    <svg
      {...props}
      width="87"
      height="20"
      viewBox="0 0 87 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 0L1 6H87L82 0H6Z" fill="#1E564C" />
      <path
        d="M6 0H82L77.6126 13.1623C76.2514 17.2457 72.43 20 68.1257 20H19.8743C15.57 20 11.7486 17.2457 10.3874 13.1623L8 6L6 0Z"
        fill="url(#paint0_linear_0_1)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="73.2058"
          y1="5.99998"
          x2="15.1811"
          y2="5.99998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B40FF" />
          <stop offset="1" stop-color="#00D6AF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const AddButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.40054 0.9C5.40054 0.402944 4.9976 0 4.50054 0C4.00348 0 3.60054 0.402943 3.60054 0.9V3.59997H0.9C0.402944 3.59997 0 4.00291 0 4.49997C0 4.99702 0.402944 5.39997 0.9 5.39997H3.60054V8.1C3.60054 8.59706 4.00348 9 4.50054 9C4.9976 9 5.40054 8.59706 5.40054 8.1V5.39997H8.1C8.59706 5.39997 9 4.99702 9 4.49997C9 4.00291 8.59706 3.59997 8.1 3.59997H5.40054V0.9Z"
        fill="white"
      />
    </svg>
  );
};