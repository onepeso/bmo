import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Target, Zap, Shield, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=2068&auto=format&fit=crop"
            alt="Baseball Stadium"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-900/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl px-4 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold tracking-wider text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">
              <Trophy size={14} className="text-orange-400" />
              Elite Baseball & Softball Academy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Unlock the Power of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                Excellence
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base md:text-lg text-slate-300 leading-relaxed">
              Where innovation meets precision. We provide professional-grade training, coaching, and community for athletes who refuse to settle.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Link href="https://www.bmoeliteperformance.com/booking">
                  Book Your Session
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-base font-bold rounded-xl transition-all duration-300"
              >
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-white flex items-center justify-center">
                    <Users size={16} className="text-slate-400" />
                  </div>
                ))}
              </div>
              <div className="text-white">
                <p className="font-bold">500+ Athletes Trained</p>
                <p className="text-slate-400 text-xs">Join our elite community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-screen-xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                alt="Baseball Training"
                src="/images/baseball.webp"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-48 h-48 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute -top-2 -left-2 -z-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-amber-400/20 rounded-full blur-2xl" />
            
            <div className="absolute -bottom-4 left-4 md:left-auto md:right-4 p-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-100 z-20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg text-white shadow-lg shadow-orange-500/30">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Facility Size</p>
                  <p className="text-lg font-black text-slate-900 font-mono">5,000 SQ FT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Where Passion Meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Precision.
                </span>
              </h2>
              <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Welcome to <span className="font-bold text-slate-900">BMO Elite Performance</span>. Our premier facility is dedicated to the development of baseball and softball athletes at every level.
                </p>
                <p>
                  We combine cutting-edge technology with expert instruction to set the standard for elite performance. From our specialized pitching mounds to the Power Elite strength area, we provide the tools—you provide the work.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: <Zap size={18} />, title: "Data Analytics" },
                { icon: <Shield size={18} />, title: "Pro Equipment" },
                { icon: <Target size={18} />, title: "Personalized" },
                { icon: <Trophy size={18} />, title: "Competition" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                  <div className="p-1.5 bg-orange-50 rounded-lg text-orange-500">
                    {item.icon}
                  </div>
                  <p className="text-slate-700 text-sm font-medium">{item.title}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="link"
              className="text-orange-600 font-bold p-0 group"
            >
              <Link href="/facility">
                View our full facility
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 relative rounded-2xl overflow-hidden group">
          <Image
            alt="BMO Stance"
            src="/images/bmo-stance.webp"
            width={1200}
            height={600}
            className="w-full h-64 md:h-80 lg:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <ChevronRight size={24} className="text-white" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 text-white">
            <div className="max-w-xl">
              <span className="inline-block px-2 py-1 mb-2 text-xs font-bold tracking-widest text-orange-400 uppercase bg-orange-500/20 rounded-full">
                Join Our Community
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-1">
                Build Better, Stronger, Smarter.
              </h3>
              <p className="text-slate-300 text-sm md:text-base">
                Join a community of athletes pushing the boundaries.
              </p>
            </div>
            <Link
              href="/membership"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all hover:scale-105"
            >
              Get Started
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
