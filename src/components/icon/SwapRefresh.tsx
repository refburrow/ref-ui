import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

export const SwapRefresh = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg
        width="24"
        height="19"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.58873 5.10344C7.28224 2.38962 10.6044 0.972593 13.8573 1.83719C16.789 2.61642 18.8493 5.03225 19.3174 7.84177"
          stroke="#7E8A93"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.7735 9.34647C19.485 10.0036 18.6187 10.1518 18.1281 9.62805L15.5349 6.85974C14.9904 6.27841 15.3109 5.32478 16.096 5.19043L20.2143 4.48567C20.9994 4.35131 21.6188 5.14407 21.2986 5.8734L19.7735 9.34647Z"
          fill="#00C6A2"
        />
        <path
          d="M18.4168 13.0404C16.7233 15.7542 13.4011 17.1712 10.1482 16.3066C7.21652 15.5274 5.15618 13.1116 4.68812 10.302"
          stroke="#7E8A93"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3.39755 7.95309C3.66373 7.28662 4.5245 7.1092 5.03253 7.61608L7.84107 10.4183C8.40495 10.9809 8.11678 11.9448 7.33664 12.1056L3.05659 12.9878C2.27645 13.1486 1.6306 12.3772 1.92604 11.6375L3.39755 7.95309Z"
          fill="#00C6A2"
        />
      </svg>
    </div>
  );
};

export const CountdownTimer = ({
  loadingTrigger,
}: {
  loadingTrigger: boolean;
}) => {
  return (
    <div className="circle_process bg-chartBg rounded-full relative flex justify-center items-center">
      <div className="circle_center bg-cardBg rounded-full inline-block"></div>
      <div className="wrapper absolute top-0 right-0 overflow-hidden">
        <div
          className={`circle  absolute top-0 rounded-full ${
            !loadingTrigger ? 'rightcircle' : ''
          }`}
        ></div>
      </div>

      <div className="wrapper absolute top-0 left-0 overflow-hidden">
        <div
          className={`circleleft absolute top-0 rounded-full ${
            !loadingTrigger ? 'leftcircle' : ''
          }`}
          id="leftcircle"
        ></div>
      </div>
    </div>
  );
};