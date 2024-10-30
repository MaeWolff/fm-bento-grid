import { cn } from "@/utils/cn";
import React from "react";

export default function ConstistentSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 relative flex h-[220px] w-full flex-col gap-4 overflow-hidden bg-secondary-500 p-4 md:p-6 lg:h-full",
        gridPosition,
      )}
    >
      <p className="text-preset-3 max-w-[14ch] font-medium">
        Maintain a consistent posting schedule.
      </p>

      <ConsistentSchedule />
    </section>
  );
}

function ConsistentSchedule() {
  return (
    <div className="absolute -bottom-10 w-[212px] md:-bottom-16">
      <header className="flex w-full flex-row justify-between rounded-t-md bg-primary-500 px-2 py-3 text-neutral-white">
        <p>August 2024</p>
        <p>Week1</p>
      </header>

      <div className="flex w-full flex-col gap-4 bg-neutral-white p-4">
        <div className="flex w-full justify-between">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.790771C8.07164 0.790771 6.18664 1.36258 4.58324 2.43398C2.97984 3.50528 1.73014 5.02807 0.992236 6.80957C0.254236 8.59117 0.0611383 10.5516 0.437338 12.4429C0.813638 14.3342 1.74224 16.0715 3.10574 17.4351C4.46934 18.7987 6.20664 19.7273 8.09794 20.1035C9.98924 20.4797 11.9496 20.2866 13.7312 19.5486C15.5127 18.8107 17.0355 17.561 18.1068 15.9576C19.1782 14.3542 19.75 12.4692 19.75 10.5408C19.7473 7.95577 18.7192 5.47738 16.8913 3.64948C15.0634 1.82158 12.585 0.793471 10 0.790771ZM14.2806 8.82137L9.03064 14.0714C8.96104 14.1412 8.87834 14.1965 8.78724 14.2342C8.69624 14.272 8.59864 14.2914 8.50004 14.2914C8.40144 14.2914 8.30384 14.272 8.21284 14.2342C8.12184 14.1965 8.03904 14.1412 7.96944 14.0714L5.71944 11.8214C5.57864 11.6807 5.49964 11.4898 5.49964 11.2908C5.49964 11.0918 5.57864 10.9009 5.71944 10.7602C5.86014 10.6194 6.05104 10.5404 6.25004 10.5404C6.44904 10.5404 6.63994 10.6194 6.78064 10.7602L8.50004 12.4805L13.2194 7.76017C13.2891 7.69047 13.3718 7.63517 13.4628 7.59747C13.5539 7.55977 13.6515 7.54037 13.75 7.54037C13.8486 7.54037 13.9461 7.55977 14.0372 7.59747C14.1282 7.63517 14.2109 7.69047 14.2806 7.76017C14.3503 7.82987 14.4056 7.91257 14.4433 8.00357C14.481 8.09467 14.5004 8.19227 14.5004 8.29077C14.5004 8.38927 14.481 8.48687 14.4433 8.57797C14.4056 8.66897 14.3503 8.75167 14.2806 8.82137Z"
                fill="#7551DC"
              />
            </svg>
          ))}
        </div>

        <div className="flex w-full justify-between">
          {[...Array(4)].map((_, i) => (
            <div className="h-6 w-6 rounded-md bg-secondary-100"></div>
          ))}
        </div>

        <div className="flex w-full justify-between">
          {[...Array(4)].map((_, i) => (
            <div className="h-6 w-6 rounded-md bg-secondary-100"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
