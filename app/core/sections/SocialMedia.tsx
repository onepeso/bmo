"use client";

import dynamic from "next/dynamic";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

const TikTokEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.TikTokEmbed),
  { ssr: false },
);

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false },
);

export const SocialMedia = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl py-24 px-4 overflow-hidden">
      {/* Visual background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
          Community & Culture
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          See Us In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
            Action
          </span>
        </h3>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
          Follow our athletes and trainers for daily drills, highlights, and
          behind-the-scenes at BMO Elite.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
        {/* TikTok Column */}
        <div className="w-full max-w-[450px] mx-auto lg:mx-0 group">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="p-2 bg-black rounded-lg text-white">
              <FaTiktok size={18} />
            </div>
            <div>
              <p className="font-bold text-slate-900">@bmo.elite.perform</p>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                TIKTOK HIGHLIGHTS
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:-translate-y-1">
            <TikTokEmbed
              url="https://www.tiktok.com/@bmo.elite.perform/video/7448447217913875758"
              width="100%"
            />
          </div>
        </div>

        {/* Instagram Column */}
        <div className="w-full max-w-[450px] mx-auto lg:mx-0 group">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="p-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg text-white">
              <FaInstagram size={18} />
            </div>
            <div>
              <p className="font-bold text-slate-900">@bmoelite21</p>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                INSTAGRAM REELS
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:-translate-y-1">
            <InstagramEmbed
              url="https://www.instagram.com/bmoelite21/reel/DDkuyUSv65j/"
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* Floating CTA Link */}
      <div className="mt-16 text-center">
        <a
          href="https://www.instagram.com/bmoelite21/"
          target="_blank"
          className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-orange-500 transition-colors"
        >
          <span>Join the BMO Elite Community</span>
          <div className="h-px w-8 bg-orange-500" />
        </a>
      </div>
    </section>
  );
};
