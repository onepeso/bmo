import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CampAndEvents() {
  // Real Schedule Data
  const upcomingCamps = [
    {
      id: 1,
      title: "(10u - 12u) Pitching Camp Led By Bartolo Colon",
      date: "Saturday, March 14, 2026",
      time: "4:00 PM EDT (1 hr)",
      price: "$150.00",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_0ll3dkxhshnaco?dateStart=1773518400"
    },
    {
      id: 2,
      title: "(13u - 15u) Pitching Camp Led By Bartolo Colon",
      date: "Saturday, March 14, 2026",
      time: "5:15 PM EDT (1 hr)",
      price: "$150.00",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_5xw9pyliptw3dg?dateStart=1773522900"
    },
    {
      id: 3,
      title: "(10u - 12u) Pitching Camp Led By Bartolo Colon",
      date: "Sunday, March 15, 2026",
      time: "1:00 PM EDT (1 hr)",
      price: "$150.00",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_ahfz6z3ojgka1w?dateStart=1773594000"
    },
    {
      id: 4,
      title: "(13u - 15u) Pitching Camp Led By Bartolo Colon",
      date: "Sunday, March 15, 2026",
      time: "2:15 PM EDT (1 hr 15 min)",
      price: "$150.00",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_yi0w04f9k8rvdq?dateStart=1773598500"
    }
  ];

  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-900 my-8">
        <div className="relative z-10 flex flex-col items-start justify-center p-8 md:p-16 lg:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-4">
            Camps & <span className="text-orange-500 font-black">Events</span>
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            Train with the best at <span className="font-bold text-orange-400">BMO Elite Performance</span>. 
            Join our specialized pitching camps featuring MLB Legend Bartolo Colon.
          </p>
          <Link href="https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classes" target="_blank">
            <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg">
              Register Now
            </Button>
          </Link>
        </div>
        
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-40"
            alt="Baseball training"
            src="/images/kid-baseball.webp"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent" />
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="space-y-16 py-12">
        
        {/* --- CAMPS SECTION --- */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Upcoming <span className="text-orange-500">Camps</span>
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingCamps.map((camp) => (
              <article key={camp.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1">
                {/* Gray Placeholder - Consider using a Bartolo Colon image here! */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden flex items-center justify-center">
                  <span className="text-slate-300 font-black text-4xl opacity-50">BMO ELITE PERFORMANCE</span>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-md font-bold shadow-lg">
                    {camp.price}
                  </div>
                </div>
                
                <div className="flex flex-col p-6">
                  <div className="flex flex-col mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider text-orange-600">
                      {camp.date}
                    </span>
                    <span className="text-sm text-slate-500 font-medium">
                      {camp.time}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                    {camp.title}
                  </h3>
                  
                  <Link href={camp.link} target="_blank" className="mt-auto">
                    <Button className="w-full bg-slate-900 hover:bg-orange-500 text-white transition-all py-6 font-bold">
                      Secure My Spot
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- EVENTS SECTION (Empty State) --- */}
        <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Upcoming <span className="text-orange-500">Events</span>
              </h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <article className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 text-3xl">📅</div>
                <h3 className="text-xl font-bold text-slate-900">More Events Coming Soon</h3>
                <p className="mt-2 text-slate-500">Check back for showcases and community nights.</p>
            </article>
        </section>

      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-orange-500 rounded-2xl p-10 mb-20 text-center text-white shadow-lg">
        <h3 className="text-3xl font-bold mb-3">Questions about our camps?</h3>
        <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
          We offer group discounts and private clinics. Reach out to the BMO team for more details.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}