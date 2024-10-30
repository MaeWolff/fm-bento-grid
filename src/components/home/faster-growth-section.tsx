import { cn } from "@/utils/cn";

export default function FasterGrowthSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 relative flex h-[220px] w-full flex-col gap-6 overflow-hidden bg-neutral-white p-4 md:h-full md:flex-row md:justify-between md:p-6 lg:flex-col lg:justify-normal",
        gridPosition,
      )}
    >
      <header className="flex flex-col gap-4">
        <p className="text-preset-1 font-medium">&gt; 56%</p>
        <p className="text-preset-4">faster audience growth</p>
      </header>

      <img
        src="avatars.png"
        alt="illustration memoji avatar"
        width={170}
        height={66}
      />
    </section>
  );
}
