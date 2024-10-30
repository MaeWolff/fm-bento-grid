import ConstistentSection from "@/components/home/consistent-section";
import CreatePostSection from "@/components/home/create-post-section";
import FasterGrowthSection from "@/components/home/faster-growth-section";
import GrowFollowersSection from "@/components/home/grow-followers-section";
import ManageMultipleSection from "@/components/home/manage-multiple-section";
import ScheduleSection from "@/components/home/schedule-section";
import SocialMediaSection from "@/components/home/social-media-section";
import WriteAiSection from "@/components/home/write-ai-section";

export default function Home() {
  return (
    <main className="md:grid-rows-bento-grid-tablet lg:grid-rows-bento-grid-desktop grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 md:px-10 md:py-14 lg:mx-auto lg:max-w-[1200px] lg:grid-cols-[repeat(4,256px)]">
      <SocialMediaSection gridPosition="md:col-span-2 lg:col-start-2" />
      <ManageMultipleSection gridPosition="lg:col-start-2 lg:row-span-2 lg:row-start-2" />

      <ConstistentSection gridPosition="lg:row-span-2" />

      <ScheduleSection gridPosition="md:col-span-2 lg:col-start-4 lg:row-span-3 lg:row-start-1" />

      <GrowFollowersSection gridPosition="md:col-span-2 lg:col-start-3 lg:row-span-2" />
      <FasterGrowthSection gridPosition="md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-4" />

      <CreatePostSection gridPosition="lg:col-start-1 lg:row-span-2 lg:row-start-1" />

      <WriteAiSection gridPosition="lg:col-start-1 lg:row-span-3 lg:row-start-3" />
    </main>
  );
}
