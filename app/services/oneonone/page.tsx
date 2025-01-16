import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Oneonone() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <section className="flex flex-col gap-5 p-10 md:px-0 md:py-10 mb-5">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          One-on-One Training
        </h1>
        <div className="flex flex-col-reverse gap-5 md:flex-col">
          <p className="leading-7">
            At{" "}
            <span className="font-bold text-orange-500">
              BMO Elite Performance
            </span>
            , we are dedicated to helping baseball and softball players unlock
            their full potential. Our one-on-one training sessions are
            customized to develop the skills and techniques needed to excel on
            the field. Whether you&apos;re looking to improve your hitting
            power, refine your pitching mechanics, or enhance your fielding
            agility, our expert coaches provide personalized guidance and
            support. With a focus on precision, performance, and game-day
            readiness, we empower athletes of all levels to reach new heights in
            their baseball and softball careers.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Button
            asChild
            className="w-full h-fit rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
          >
            <Link href="https://bmo-elite-performance.square.site/">
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

        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Image
            className="w-full h-32 object-cover rounded-lg"
            alt="Facility Pictures"
            src="/images/pattern1.svg"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="p-5 lg:p-0">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-5">
          See What We Do
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image
            className="w-full h-72 object-cover rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-training-2.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-training-3.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-training-9.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-center rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-training-6.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-training-14.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-training-5.webp"
            width={500}
            height={500}
          />
          <div></div>
        </div>
      </section>
    </main>
  );
}
