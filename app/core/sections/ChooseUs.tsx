import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Star, History, Calendar } from "lucide-react";

export const ChooseUs = () => {
  const stats = [
    { label: "Home Runs", value: "145" },
    { label: "RBIs", value: "490" },
    { label: "MLB Seasons", value: "13" },
    { label: "Avg", value: ".240" },
  ];

  const teams = [
    "Chicago White Sox",
    "Seattle Mariners",
    "San Diego Padres",
    "Florida Marlins",
    "Kansas City Royals",
    "Colorado Rockies",
    "Miami Marlins",
    "Los Angeles Dodgers",
  ];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual Profile */}
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/images/olivo.webp"
                alt="Miguel Olivo MLB Catcher"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Floating Name Badge */}
              <div className="absolute bottom-8 left-8">
                <p className="text-orange-500 font-black tracking-widest uppercase text-sm mb-1">
                  Founder & Lead Instructor
                </p>
                <h2 className="text-4xl font-black text-white">Miguel Olivo</h2>
              </div>
            </div>

            {/* Stat Grid Overlaying Image edge */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center"
                >
                  <p className="text-orange-500 text-2xl font-black">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-tighter">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit mb-6">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                MLB Veteran Leadership
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
              Learn from the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Pro Perspective
              </span>
            </h2>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                BMO Elite is proud to be led by former MLB catcher{" "}
                <span className="text-white font-semibold">Miguel Olivo</span>.
                With a career spanning over a decade in the big leagues, Miguel
                brings a level of expertise that can't be found elsewhere.
              </p>
              <p>
                Debuting in 2002 for the Chicago White Sox, Miguel became known
                for his explosive power and defensive precision. His journey
                through the MLB saw him take the field for some of the league's
                most iconic franchises.
              </p>
            </div>

            {/* Team Experience Section */}
            <div className="mt-10 p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4 text-white font-bold">
                <History className="text-orange-500" size={20} />
                <h3>MLB Career Journey</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                {teams.map((team) => (
                  <div
                    key={team}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                    {team}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-7 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                <Link href="https://www.bmoeliteperformance.com/booking">
                  Book Training
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
