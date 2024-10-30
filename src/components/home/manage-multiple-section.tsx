import React, { ReactNode } from "react";
import InstagramIcon from "../ui/icons/instagram-icon";
import TwitterIcon from "../ui/icons/twitter-icon";
import { cn } from "@/utils/cn";

export default function ManageMultipleSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 flex w-full flex-col gap-4 overflow-hidden bg-neutral-white p-4 md:p-6",
        gridPosition,
      )}
    >
      <article className="flex flex-row gap-2">
        <SocialMediaPill
          socialMediaIcon={<InstagramIcon />}
          followersCount="12K"
        />
        <SocialMediaPill
          socialMediaIcon={<TwitterIcon />}
          followersCount="12K"
        />
      </article>

      <p className="text-preset-3 font-medium md:max-w-[14ch]">
        Manage multiple accounts and platforms.
      </p>
    </section>
  );
}

function SocialMediaPill({
  socialMediaIcon,
  followersCount,
  alias = "@YourCo",
}: {
  socialMediaIcon: ReactNode;
  followersCount: string;
  alias?: string;
}) {
  return (
    <div className="shadow-pill flex flex-row items-center gap-2 rounded-full bg-neutral-white p-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-500">
        {socialMediaIcon}
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-medium">{alias}</p>
        <p className="text-neutral-gray text-nowrap text-xs">
          {followersCount} Followers
        </p>
      </div>
    </div>
  );
}
