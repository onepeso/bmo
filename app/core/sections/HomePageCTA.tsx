import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url(https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 from-gray-900/95 to-gray-900/25"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 md:flex md:items-center lg:px-0">
          <div className="max-w-5xl text-center md:text-start">
            <h1 className="font-extrabold text-white text-2xl lg:text-4xl">
              Unlock the Power of Excellence with BMO Elite
            </h1>
            {/* Removed Typing animation to comply with a11y. */}
            <h1 className="text-2xl lg:text-4xl block font-extrabold text-bmo-primary">
              {" "}
              Where Innovation Meets Precision{" "}
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Your Home for Baseball and Softball Development: Training,
              Coaching, and Community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Button
                asChild
                className="w-full h-fit rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              >
                <Link href="https://www.bmoeliteperformance.com/booking">
                  Book Now
                </Link>
              </Button>
              <Button
                asChild
                className="w-full h-fit rounded bg-white px-12 py-3 text-sm font-medium text-orange-500 shadow hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-screen-xl px-5 py-5 md:py-10 lg:px-0 md:flex gap-5">
        {/* Left Content */}
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="flex flex-col gap-5">
            <Image
              alt=""
              src="/images/baseball.webp"
              width={500}
              height={500}
              className="h-64 w-full object-cover sm:h-80 md:h-64 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="max-w-2xl text-gray-700">
                Welcome to{" "}
                <span className="font-bold text-orange-500">
                  BMO Elite Performance
                </span>{" "}
                – Where Passion Meets Precision. Our premier 5,000 sq. ft.
                indoor facility is dedicated to the development of baseball and
                softball athletes at every level. We combine cutting-edge
                technology with expert instruction to set the standard for elite
                performance.
              </p>
              <p className="max-w-2xl text-gray-700">
                Inside, you’ll find a tunnel designed for one-on-one or team
                lessons, a professional pitching mound, and our Power Elite area
                filled with top-tier exercise equipment. During the summer,
                athletes also benefit from an outdoor batting cage for extra
                reps in the sun.
              </p>
              <p className="max-w-2xl text-gray-700">
                At BMO Elite, we don’t just train players — we build better,
                stronger, and smarter athletes. Join us and take your game to
                the next level.
              </p>
              <p className="max-w-2xl text-orange-500 font-semibold">
                Join us and take your game to the next level.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <Image
          alt=""
          src="/images/bmo-stance.webp"
          width={500}
          height={800}
          className="h-64 w-full object-cover object-top md:h-[44rem] rounded-md mt-5 md:mt-0"
        />
      </section>
    </>
  );
}
