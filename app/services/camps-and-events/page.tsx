import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react"; // Imported the standard calendar icon

export default function CampAndEvents() {
  // Real Schedule Data - *WIP this will later come from sanity.
  const upcomingCamps = [
    {
      id: 1,
      title: "(11u - 12u) Catching Camp - Miguel Olivo",
      date: "Monday, April 6, 2026",
      time: "9 AM EDT (1 hr 30 min)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_zrf5zozmdvfv0j?dateStart=1775480400",
      category: "Catching Camps",
    },
    {
      id: 2,
      title: "(9u - 10u) Hitting Camp - Chase",
      date: "Monday, April 6, 2026",
      time: "12 PM EDT (1 hr 15 min)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_xr18gw1tatab1y?dateStart=1775491200",
      category: "Hitting Camps",
    },
    {
      id: 3,
      title: "(11u - 12u) Hitting Camp - Miguel Olivo",
      date: "Tuesday, April 7, 2026",
      time: "9 AM EDT (1 hr 30 min)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_lxwyyk0v9agz01?dateStart=1775566800",
      category: "Hitting Camps",
    },
    {
      id: 4,
      title: "(8u - 10u) Softball Fast Pitching Camp - Beginners",
      date: "Tuesday, April 7, 2026",
      time: "12 PM EDT (1 hr)",
      price: "$90.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_c4r43q74zkd40i?dateStart=1775577600",
      category: "Softball Fast Pitch",
    },
    {
      id: 5,
      title: "(11u - 15u) Softball Fast Pitching Camp - Tony Allen",
      date: "Tuesday, April 7, 2026",
      time: "1 PM EDT (2 hr)",
      price: "$90.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_pcf7zwgwbckq52?dateStart=1775581200",
      category: "Softball Fast Pitch",
    },
    {
      id: 6,
      title: "(11u - 15u) Softball Catching Camp - Miguel Olivo",
      date: "Tuesday, April 7, 2026",
      time: "1 PM EDT (2 hr)",
      price: "$90.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_16ry0won4a9flh?dateStart=1775581200",
      category: "Softball Catching",
    },
    {
      id: 7,
      title: "(13u - 15u) Catching Camp - Miguel Olivo",
      date: "Wednesday, April 8, 2026",
      time: "9 AM EDT (1 hr 30 min)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_bxzqofodbcowwu?dateStart=1775653200",
      category: "Catching Camps",
    },
    {
      id: 8,
      title: "(11u - 14u) Fielding Camp - Miguel Olivo",
      date: "Thursday, April 9, 2026",
      time: "9 AM EDT (2 hr)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_tcils6l2w45ud0?dateStart=1775739600",
      category: "Fielding Camps",
    },
    {
      id: 9,
      title: "(11u - 15u) Softball Fast Pitching Camp - Tony Allen",
      date: "Thursday, April 9, 2026",
      time: "1 PM EDT (2 hr)",
      price: "$90.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_grri424bgdxyed?dateStart=1775754000",
      category: "Softball Fast Pitch",
    },
    {
      id: 10,
      title: "(11u - 15u) Softball Catching Camp - Miguel Olivo",
      date: "Thursday, April 9, 2026",
      time: "1 PM EDT (2 hr)",
      price: "$90.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_rzx6aecv55uzxf?dateStart=1775754000",
      category: "Softball Catching",
    },
    {
      id: 11,
      title: "(13u - 15u) Hitting Camp - Miguel Olivo",
      date: "Friday, April 10, 2026",
      time: "9 AM EDT (1 hr 45 min)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_z0uypqt7hjbw3a?dateStart=1775826000",
      category: "Hitting Camps",
    },
    {
      id: 12,
      title: "(11u - 12u) Hitting Camp - Miguel Olivo",
      date: "Tuesday, May 12, 2026",
      time: "10 AM EDT (1 hr 30 min)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_qo81iqvvjc1pdp?dateStart=1778594400",
      category: "Hitting Camps",
    },
    {
      id: 13,
      title: "(13u - 15u) Hitting Camp - Miguel Olivo",
      date: "Tuesday, May 12, 2026",
      time: "2 PM EDT (1 hr 30 min)",
      price: "$80.00",
      image: "/images/kid-baseball.webp",
      link: "https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classDetails/clssch_acvux0f8bczweg?dateStart=1778608800",
      category: "Hitting Camps",
    },
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
            Train with the best at{" "}
            <span className="font-bold text-orange-400">
              BMO Elite Performance
            </span>
            . Join our specialized pitching camps featuring MLB Legend Bartolo
            Colon.
          </p>
          <Link
            href="https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classes"
            target="_blank"
          >
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
              <article
                key={camp.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 w-full bg-orange-500 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative z-10">
                    <p className="text-white font-black text-2xl tracking-tighter leading-none mb-1">
                      BMO ELITE PERFORMANCE
                    </p>
                    <p className="text-white font-bold text-lg uppercase tracking-[0.4em] opacity-90">
                      {camp.category}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-md font-extrabold shadow-lg text-sm">
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

          {/* --- VIEW ALL CAMPS BUTTON --- */}
          <div className="mt-12 flex justify-center">
            <Link
              href="https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classes"
              target="_blank"
            >
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold px-10 py-6 text-lg transition-all rounded-full"
              >
                View All Camps
              </Button>
            </Link>
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
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
              <Calendar className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              More Events Coming Soon
            </h3>
            <p className="mt-2 text-slate-500">
              Check back for showcases and community nights.
            </p>
          </article>
        </section>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-orange-500 rounded-2xl p-10 mb-20 text-center text-white shadow-lg">
        <h3 className="text-3xl font-bold mb-3">Questions about our camps?</h3>
        <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
          We offer group discounts and private clinics. Reach out to the BMO
          team for more details.
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
