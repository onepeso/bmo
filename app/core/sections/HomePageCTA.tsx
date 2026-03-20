import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Target, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background with subtle zoom effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=2068&auto=format&fit=crop"
            alt="Baseball Stadium"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-20 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-orange-400 uppercase bg-orange-400/10 border border-orange-400/20 rounded-full">
              Elite Baseball & Softball Academy
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Unlock the Power of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Excellence
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-slate-300 leading-relaxed">
              Where innovation meets precision. We provide professional-grade
              training, coaching, and community for athletes who refuse to
              settle.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <Link href="https://www.bmoeliteperformance.com/booking">
                  Book Your Session
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900 px-10 py-7 text-lg font-bold rounded-xl transition-all"
              >
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Feature Grid / Content Section */}
      <section className="relative mx-auto max-w-screen-xl px-4 py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                alt="Baseball Training"
                src="/images/baseball.webp"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-70" />
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 hidden md:block p-6 bg-white rounded-2xl shadow-xl border border-slate-100 z-20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500 rounded-lg text-white">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Facility Size
                  </p>
                  <p className="text-xl font-bold text-slate-900 font-mono">
                    5,000 SQ FT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Where Passion Meets{" "}
                <span className="text-orange-500 font-black italic underline decoration-slate-200 underline-offset-8">
                  Precision.
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Welcome to{" "}
                  <span className="font-bold text-slate-900">
                    BMO Elite Performance
                  </span>
                  . Our premier facility is dedicated to the development of
                  baseball and softball athletes at every level.
                </p>
                <p>
                  We combine cutting-edge technology with expert instruction to
                  set the standard for elite performance. From our specialized
                  pitching mounds to the Power Elite strength area, we provide
                  the tools—you provide the work.
                </p>
              </div>
            </div>

            {/* Icon List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <Zap className="text-orange-500 shrink-0" size={20} />
                <p className="text-slate-700 font-medium">
                  Advanced Data Analytics
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-orange-500 shrink-0" size={20} />
                <p className="text-slate-700 font-medium">
                  Pro-Grade Equipment
                </p>
              </div>
            </div>

            <Button
              variant="link"
              className="text-orange-600 font-bold text-lg p-0 group"
            >
              View our full facility{" "}
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom Wide Image with Overlapping Text */}
        <div className="mt-24 relative rounded-[2rem] overflow-hidden group">
          <Image
            alt="BMO Stance"
            src="/images/bmo-stance.webp"
            width={1200}
            height={600}
            className="w-full h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-2">
                Build Better, Stronger, Smarter.
              </h3>
              <p className="text-slate-300">
                Join a community of athletes pushing the boundaries of what's
                possible.
              </p>
            </div>
            <Link
              href="/membership"
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
