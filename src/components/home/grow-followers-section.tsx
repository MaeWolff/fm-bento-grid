import { cn } from "@/utils/cn";

export default function GrowFollowersSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 relative flex h-[220px] w-full flex-col items-center justify-end gap-4 overflow-hidden bg-primary-500 p-4 text-neutral-white md:h-full md:flex-row md:justify-center md:p-6",
        gridPosition,
      )}
    >
      <div className="h-[200px] w-[230px] bg-neutral-white"></div>

      <p className="text-preset-2 max-w-[16ch] text-center md:max-w-[10ch] md:text-start">
        Grow followers with non-stop content.
      </p>
    </section>
  );
}
