import { cn } from "@/utils/cn";
import SpinkleIcon from "../ui/icons/spinkle-icon";
import CursorIcon from "../ui/icons/cursor-icon";

export default function CreatePostSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 relative flex h-[220px] w-full flex-col justify-center gap-6 overflow-hidden bg-secondary-100 p-4 md:h-full md:p-6",
        gridPosition,
      )}
    >
      <p className="text-preset-2 font-medium">
        Create and schedule content <i className="text-primary-500">quicker</i>.
      </p>

      <button className="relative flex w-fit flex-row items-center gap-2 rounded-full bg-secondary-500 px-6 py-4 text-lg font-medium text-primary-500">
        Create Post
        <SpinkleIcon />
        <CursorIcon className="absolute -bottom-5 right-16" />
      </button>
    </section>
  );
}
