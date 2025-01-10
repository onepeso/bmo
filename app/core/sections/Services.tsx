'use client'

import Particles from "@/components/ui/particles";
import { useState } from "react";
import { FaBaseball } from "react-icons/fa6"

export const Services = () => {
  const [color] = useState("#ffffff");
  const servicesAvailable = [
    {
      name: "Advanced Htting Training",
      description:
        "Master your technique with personalized instruction from our elite coaches. Whether you're fine-tuning your swing or perfecting your pitch, our focused sessions provide instant feedback and proven strategies to elevate your game. Each lesson is tailored to your skill level and specific goals.",
    },
    {
      name: "Pitching and Catching Training",
      description:
        "Master your technique with personalized instruction from our elite coaches. Whether you're fine-tuning your swing or perfecting your pitch, our focused sessions provide instant feedback and proven strategies to elevate your game. Each lesson is tailored to your skill level and specific goals.",
    },
    {
      name: "Strength Training",
      description:
        "Master your technique with personalized instruction from our elite coaches. Whether you're fine-tuning your swing or perfecting your pitch, our focused sessions provide instant feedback and proven strategies to elevate your game. Each lesson is tailored to your skill level and specific goals.",
    },
    {
      name: "Agility Training",
      description:
        "Master your technique with personalized instruction from our elite coaches. Whether you're fine-tuning your swing or perfecting your pitch, our focused sessions provide instant feedback and proven strategies to elevate your game. Each lesson is tailored to your skill level and specific goals.",
    },
    {
      name: "Conditioning Programs",
      description:
        "Master your technique with personalized instruction from our elite coaches. Whether you're fine-tuning your swing or perfecting your pitch, our focused sessions provide instant feedback and proven strategies to elevate your game. Each lesson is tailored to your skill level and specific goals.",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl mt-16 mb-10">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-8 text-center">
        Explore Our Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesAvailable.map((service) => (
          <div
            key={service.name}
            className="relative overflow-hidden rounded-lg border-8 border-orange-500"
          >
            {/* Background Image - replace placeholder with your image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              aria-hidden="true"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black" />
            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-white scroll-m-20 text-xl font-semibold tracking-tight">
                <FaBaseball />
                <p>{service.name}</p>
              </div>
              <p className="text-white leading-7 [&:not(:first-child)]:mt-3">
                {service.description}
              </p>
              <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
              />
            </div>
          </div>
        ))}
        {servicesAvailable.length < 6 && (
          <div className="relative overflow-hidden rounded-lg border-8 border-orange-500">
            <div className="absolute inset-0 bg-black" />
            <div className="relative h-full p-6 flex flex-col justify-center">
              <h4 className="text-white scroll-m-20 text-xl font-semibold tracking-tight">
                More Services Coming Soon
              </h4>
              <p className="text-white leading-7 [&:not(:first-child)]:mt-3">
                We are always looking to improve our facilities by bringing in all the best services possible.
              </p>
              <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
