import React from "react";

export default function CursorIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.5096 0.216656L1.93372 8.8997C-0.175321 9.71087 0.237705 12.8102 2.48557 13.0408L12.9305 14.112C13.8596 14.2073 14.6206 14.8922 14.813 15.8061L16.9373 25.8965C17.4027 28.107 20.527 28.1929 21.1131 26.0113L27.3548 2.77846C27.8104 1.08247 26.1487 -0.413756 24.5096 0.216656Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}
