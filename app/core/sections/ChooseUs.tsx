import HeroVideoDialog from "@/components/ui/hero-video-dialog"
import Link from "next/link";
import { Button } from "@/components/ui/button"

export const ChooseUs = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Why Choose Us?

            <span className="sm:block"> Level Up Your Skills </span>
          </h1>
          <HeroVideoDialog
            className="dark:hidden block my-10"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/TxU9sxqnVPw?si=X8PdrK-HRY25kvqm&autoplay=1"
            thumbnailSrc="/images/bmogroup.webp"
            thumbnailAlt="Why Choose Us"
          />

          <p className="mx-auto mt-4 text-start sm:text-xl/relaxed">
            Led by 14-year MLB veteran Miguel Olivo, we combine professional experience with cutting-edge techniques to
            help you dominate on and off the field.

          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="w-full h-fit rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto">
              <Link href="https://bmo-elite-performance.square.site/">
                Book Now
              </Link>
            </Button>

            <a
              className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              href="about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};
