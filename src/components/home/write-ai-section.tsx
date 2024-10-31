import { cn } from "@/utils/cn";
import NextImage from "next/image";

export default function WriteAiSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 relative flex h-[220px] w-full flex-col justify-between gap-4 overflow-hidden bg-secondary-500 p-4 md:h-full md:p-6",
        gridPosition,
      )}
    >
      <p className="text-preset-2 font-medium">Write your content using AI.</p>

      <NextImage
        src="/write-ai-illustrations.png"
        alt="illustration write ai"
        width={220}
        height={220}
      />
    </section>
  );
}
