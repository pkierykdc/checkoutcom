import React from "react";

export function LoadingIndicator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      style={{ background: "none" }}
    >
      <circle cx="75" cy="50" r="6.397" fill="#363a3c">
        <animate
          attributeName="r"
          begin="-0.875s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
      <circle cx="67.678" cy="67.678" r="4.8" fill="#363a3c">
        <animate
          attributeName="r"
          begin="-0.75s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
      <circle cx="50" cy="75" r="4.8" fill="#363a3c">
        <animate
          attributeName="r"
          begin="-0.625s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
      <circle cx="32.322" cy="67.678" r="4.8" fill="#363a3c">
        <animate
          attributeName="r"
          begin="-0.5s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
      <circle cx="25" cy="50" r="4.8" fill="#363a3c">
        <animate
          attributeName="r"
          begin="-0.375s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
      <circle cx="32.322" cy="32.322" r="4.803" fill="#363a3c">
        <animate
          attributeName="r"
          begin="-0.25s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
      <circle cx="50" cy="25" r="6.403" fill="#363a3c">
        <animate
          attributeName="r"
          begin="-0.125s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
      <circle cx="67.678" cy="32.322" r="7.997" fill="#363a3c">
        <animate
          attributeName="r"
          begin="0s"
          dur="1s"
          repeatCount="indefinite"
          values="4.8;4.8;8;4.8;4.8"
        ></animate>
      </circle>
    </svg>
  );
}
