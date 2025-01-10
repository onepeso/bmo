import Image from "next/image";
import TypingAnimation from "@/components/ui/typing-animation";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 from-gray-900/95 to-gray-900/25"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 md:flex md:items-center lg:px-0"
        >
          <div className="max-w-2xl text-center md:text-start">
            <h1 className="font-extrabold text-white text-5xl">Train Like A
              Pro</h1>
            <TypingAnimation className="text-5xl block font-extrabold text-bmo-primary"> Perform Like A
              Champion </TypingAnimation>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Your Home for Baseball and Softball Development: Training, Coaching, and Community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Button asChild className="w-full h-fit rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto">
                <Link href="https://bmo-elite-performance.square.site/">
                  Book Now
                </Link>
              </Button>
              <Button asChild className="w-full h-fit rounded bg-white px-12 py-3 text-sm font-medium text-orange-500 shadow hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto">
                <Link href="/about">
                  Learn More
                </Link>
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
            <p className="max-w-2xl text-gray-700 mb-5">
              At <span className="font-bold text-orange-500">BMO Elite Performance</span>, we&apos;ve crafted a premier
              training environment
              where passion meets precision. Our facility combines cutting-edge technology with expert instruction to
              deliver a training
              experience that sets the standard for athletic development.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <Image
          alt=""
          src="/images/bmogroup.webp"
          width={500}
          height={500}
          className="h-64 w-full object-cover md:h-[32rem] lg:h-29rem rounded-md"
        />

      </section>
    </>
  );
}
