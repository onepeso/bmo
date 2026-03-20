"use client";

import Particles from "@/components/ui/particles";
import { useState } from "react";
import {
  FaBaseball,
  FaBullseye,
  FaDumbbell,
  FaBolt,
  FaHeartPulse,
  FaPlus,
} from "react-icons/fa6";

export const Services = () => {
  const [color] = useState("#ffffff");

  const servicesAvailable = [
    {
      name: "Advanced Hitting Training",
      icon: <FaBullseye className="text-orange-500" />,
      description:
        "Elevate your batting skills with expert coaching. We focus on refining swing mechanics, enhancing hand-eye coordination, and utilizing pro-grade data to improve performance.",
    },
    {
      name: "Pitching & Catching",
      icon: <FaBaseball className="text-orange-500" />,
      description:
        "Develop essential skills for success on the mound and behind the plate. We cover velocity, command, framing, and the mental strategy of the battery.",
    },
    {
      name: "Strength Training",
      icon: <FaDumbbell className="text-orange-500" />,
      description:
        "Targeted conditioning designed for ballplayers. Build explosive muscle, increase rotational power, and improve overall functional fitness.",
    },
    {
      name: "Agility Training",
      icon: <FaBolt className="text-orange-500" />,
      description:
        "Enhance speed, coordination, and reaction time. Our dynamic drills focus on quickness and balance to ensure you're the fastest on the field.",
    },
    {
      name: "Conditioning Programs",
      icon: <FaHeartPulse className="text-orange-500" />,
      description:
        "High-intensity workouts designed to build stamina and cardiovascular endurance, ensuring you perform at peak levels from the first inning to the last.",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl py-24 px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
          Our Expertise
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
            Services
          </span>
        </h3>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
          From mechanical refinement to physical dominance, we provide
          everything an athlete needs to excel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesAvailable.map((service) => (
          <div
            key={service.name}
            className="group relative overflow-hidden rounded-3xl bg-slate-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 border border-slate-800"
          >
            {/* Background Particle Effect */}
            <Particles
              className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity"
              quantity={40}
              ease={80}
              color={color}
              refresh
            />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                {service.icon}
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {service.name}
              </h4>

              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex items-center text-orange-500 font-bold text-sm uppercase tracking-wider group-hover:gap-3 gap-2 transition-all">
                <span>Learn More</span>
                <FaPlus size={12} />
              </div>
            </div>

            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute -bottom-24 -right-24 h-48 w-48 bg-orange-600/20 blur-[80px] rounded-full group-hover:bg-orange-600/40 transition-colors" />
          </div>
        ))}

        {/* "Coming Soon" Card with distinct styling */}
        <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-dashed border-slate-200 p-8 flex flex-col justify-center items-center text-center group transition-all hover:border-orange-200">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:text-orange-500 transition-colors">
            <FaPlus size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">
            More Coming Soon
          </h4>
          <p className="text-slate-500 text-sm italic">
            Expanding our facility with next-gen recovery and tech programs.
          </p>
        </div>
      </div>
    </section>
  );
};
