import { cn } from "@/utils/cn";

export default function ScheduleSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 relative flex h-[220px] w-full flex-col gap-4 overflow-hidden bg-primary-100 p-4 md:h-full md:p-6",
        gridPosition,
      )}
    >
      <p className="text-preset-3">Schedule to social media.</p>

      <div className="h-[270px] w-full bg-neutral-white"></div>

      <p>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </section>
  );
}
