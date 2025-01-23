import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button"

export const ChooseUs = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center ">
          <h1
            className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Why Choose Us?

          </h1>
          <div className="flex flex-col items-center py-10">
            <Image
              src="/images/olivo.webp" alt={""} width={500} height={500}
            />
          </div>


          <p className="mx-auto mt-4 text-start sm:text-xl/relaxed">
            BMO Elite is proud to be led by former MLB catcher Miguel Olivo, who brings a wealth of experience and
            expertise to our program. Born on July 15, 1978, in Villa Vásquez, Dominican Republic, Miguel batted and
            threw right-handed. He made his MLB debut on September 15, 2002, for the Chicago White Sox and had his last
            MLB appearance on May 11, 2014, for the Los Angeles Dodgers. Over his career, he achieved a batting average
            of .240, hit 145 home runs, and had 490 runs batted in.</p>

          <p className="mx-auto mt-4 text-start sm:text-xl/relaxed">
            Miguel Olivo&#39;s MLB journey included playing for the following teams:


          </p>

          <ul className="text-start sm:text-xl/relaxed my-5">
            <li>Chicago White Sox (2002–2004)</li>
            <li>Seattle Mariners (2004–2005, 2011–2012)</li>
            <li>San Diego Padres (2005)</li>
            <li>Florida Marlins (2006–2007)</li>
            <li>Kansas City Royals (2008–2009)</li>
            <li>Colorado Rockies (2010)</li>
            <li>Miami Marlins (2013)</li>
            <li>Los Angeles Dodgers (2014)</li>
          </ul>
          <p className=" mx-auto mt-4 text-start sm:text-xl/relaxed"> Additionally, Miguel played in the Mexican League
            from 2014 to 2017. His extensive career and dedication
            to
            the sport make him an invaluable leader at BMO Elite.</p>


          <div className=" mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild
                    className=" w-full h-fit rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow
              hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto">
              <Link href=" https://bmo-elite-performance.square.site/">
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

  )
    ;
};
