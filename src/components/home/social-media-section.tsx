import StarIcon from "@/components/ui/icons/star-icon";
import { cn } from "@/utils/cn";

const STAR_ICON_COUNT = 5;

export default function SocialMediaSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 flex w-full flex-col items-center justify-center gap-6 bg-primary-500 px-8 py-10 text-center text-neutral-white md:h-[324px]",
        gridPosition,
      )}
    >
      <p className="text-preset-1 font-medium md:max-w-[14ch]">
        Social Media <span className="text-secondary-500">10x</span>{" "}
        <i>Faster</i> with AI
      </p>

      <article className="flex flex-col items-center gap-2">
        <div className="flex flex-row gap-2 text-secondary-500">
          {[...Array(STAR_ICON_COUNT)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <p className="text-preset-4">Over 4,000 5-star reviews</p>
      </article>
    </section>
  );
}
