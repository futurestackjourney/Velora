// src/components/NewItemIndicator.tsx
import React from "react";

const NewItemIndicator: React.FC = () => (
  <div className="absolute -top-3 -left-5 w-14 h-14 rounded-full bg-brand-card border-2 border-brand-border flex items-center justify-center bg-dark-bg">
    <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.09 8.26L20 9.27L15.55 13.54L16.91 19.82L12 16.77L7.09 19.82L8.45 13.54L4 9.27L9.91 8.26L12 2Z"
          fill="url(#star-gradient)"
        />
        <defs>
          <linearGradient
            id="star-gradient"
            x1="12"
            y1="2"
            x2="12"
            y2="19.82"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#FA9FB8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

export default NewItemIndicator;
