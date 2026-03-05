import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  const services = [
    { title: "Private Lessons", desc: "One-on-one sessions for hitting, pitching, catching, and fielding.", icon: "⚾" },
    { title: "Catcher Training", desc: "Specialized instruction on blocking, receiving, and mechanics.", icon: "🧤" },
    { title: "Team Training", desc: "Customized coaching programs for teams looking to level up.", icon: "👥" },
    { title: "Group Clinics", desc: "Seasonal camps that teach skills and teamwork in a fun environment.", icon: "🏫" },
    { title: "Strength & Agility", desc: "Building speed and endurance in our exclusive training area.", icon: "⚡" },
    { title: "Nutrition & Wellness", desc: "Fuel properly and recover smarter with expert guidance.", icon: "🥗" },
  ];

  const galleryImages = [
    { src: "/images/training-bmo.webp", alt: "Training area showing baseball equipment" },
    { src: "/images/bmo-3.webp", alt: "Indoor batting cages" },
    { src: "/images/bmo-4.webp", alt: "Strength and conditioning area" },
    { src: "/images/training-bmo4.webp", alt: "Professional training equipment" },
    { src: "/images/bmo-5.webp", alt: "Multi-purpose training facility" },
    { src: "/images/bmo-6.webp", alt: "Advanced training space" },
    { src: "/images/bmo-2.webp", alt: "Professional baseball training facility" },
    { src: "/images/bmo-1.webp", alt: "State-of-the-art training equipment" },
    { src: "/images/training-bmo5.webp", alt: "Comprehensive training facility overview" },
  ];

  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      
      {/* --- HERO / INTRODUCTION SECTION --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            About <span className="text-orange-500 font-black">Us</span>
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Welcome to <span className="font-bold text-orange-500">BMO Elite Performance</span>, 
              a premier baseball and softball training facility dedicated to developing athletes of all levels through 
              expert coaching, discipline, and a passion for excellence. Located in a state-of-the-art facility, 
              BMO Elite Performance is the vision of founders <span className="font-semibold text-slate-900">Miguel and Francisca Olivo</span>, 
              who share a commitment to helping young athletes grow stronger—physically, mentally, and emotionally—on and off the field.
            </p>
            <p>
              At BMO Elite Performance, we believe greatness is built through preparation, hard work, and heart. 
              Our training programs are designed to support every athlete&apos;s journey, whether they&apos;re just starting 
              out or preparing for the next level of competition. We focus on fundamentals, advanced skills, strength 
              and agility, and the mental side of the game, all while creating a positive and professional environment.
            </p>
            <p className="font-medium text-slate-800 border-l-4 border-orange-500 pl-4 italic bg-slate-50 py-4 rounded-r-lg">
              As a family-owned business, we pride ourselves on creating a welcoming and supportive environment. 
              The moment you walk through our doors, you become part of our family. Join us at BMO Elite Performance 
              and take the first step towards becoming the best version of yourself.
            </p>
          </div>
        </div>

        <figure className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl group">
          <Image
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            alt="BMO Elite Performance facility exterior"
            src="/images/banner-bmo.webp"
            fill
            priority
          />
        </figure>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Facility & Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We are open 6 days a week. Visit our{" "}
            <Link href="https://bmo-elite-performance.square.site/" className="text-orange-600 font-bold underline">
              online scheduler
            </Link>{" "}
            for current availability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-orange-500/30 transition-all">
              <span className="text-4xl mb-6 block">{service.icon}</span>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- UNIFORM IMAGE GALLERY --- */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Inside the Facility</h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        {/* Changed to a standard Grid with Aspect Ratio for uniformity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative aspect-square md:aspect-video overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-100">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* --- LEADERSHIP & COACHES --- */}
      <section className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">The BMO Team</h2>
          <p className="text-orange-600 font-semibold mt-2">Professional coaching for peak performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Miguel */}
          <article className="group">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mb-6">
              <Image src="/images/miguel.webp" alt="Miguel Olivo" fill className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold">Miguel Olivo</h3>
                <p className="text-orange-400">Head Baseball & Fitness Coach</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Miguel Olivo brings over 14 years of experience as an MLB catcher. He uses his lifetime of knowledge to train the next generation with the same passion and attention to detail that defined his professional career.
            </p>
          </article>

          {/* Francisca */}
          <article className="group">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mb-6">
              <Image src="/images/francisca.webp" alt="Francisca Olivo" fill className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold">Francisca Olivo</h3>
                <p className="text-orange-400">CEO</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Francisca is a certified nutritionist and 2024 Women in Supply Chain Award winner. At BMO Elite, she leads efforts in athlete wellness, nutrition, and strategic growth with a deep care for people.
            </p>
          </article>

          {/* Tony Allen */}
          <article className="group">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mb-6">
              <Image src="/images/tonyallen.webp" alt="Tony Allen" fill className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold">Tony Allen</h3>
                <p className="text-orange-400">Softball & Fitness Coach</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Tony brings a strong and focused background in softball, with years of experience training athletes in <span className="text-orange-600 font-medium">Pitching, Hitting, and Speed & Agility.</span>
            </p>
          </article>
        </div>
      </section>

      {/* --- CONTACT FOOTER --- */}
      <section className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Location & Contact</h2>
            <address className="not-italic space-y-4 text-slate-300">
              <p className="text-xl font-bold text-white">BMO Elite Performance</p>
              <p>761 Opequon Lane, Kearneysville, West Virginia</p>
              <div className="pt-4 space-y-2">
                <p>Phone: <a href="tel:6812601421" className="text-orange-400 hover:text-white transition-colors underline">681-260-1421</a> | <a href="tel:4103229273" className="text-orange-400 hover:text-white transition-colors underline">410-322-9273</a></p>
                <p>Email: <a href="mailto:olivobaseball2121@gmail.com" className="text-orange-400 hover:text-white transition-colors underline">olivobaseball2121@gmail.com</a></p>
              </div>
            </address>
          </div>
          <div className="text-center lg:text-right">
            <Link href="https://bmo-elite-performance.square.site/" target="_blank">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-8 text-xl font-bold rounded-full">
                Register Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}