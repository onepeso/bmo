"use client";

import dynamic from "next/dynamic";

const TikTokEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.TikTokEmbed),
  {ssr: false}, // Prevent server-side rendering
);

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  {ssr: false}, // Prevent server-side rendering
);

export const SocialMedia = () => {
  return (
    <section className="mx-auto max-w-screen-xl my-20">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-8 text-center">
        Reach Us On Social Media
      </h3>

      <div className="flex flex-col md:flex-row md:justify-center gap-5 p-2 w-full">
        <TikTokEmbed
          url="https://www.tiktok.com/@bmo.elite.perform/video/7448447217913875758"
          width={450}
          className="border-2 p-5"
        />
        <InstagramEmbed
          url="https://www.instagram.com/bmoelite21/reel/DDkuyUSv65j/"
          width={450}
        />
      </div>
    </section>
  );
};
