import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className=" mx-auto max-w-screen-xl">
      <section className="flex flex-col gap-5 p-10 md:px-0 md:py-10 mb-5">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          About Us
        </h1>
        <div className="flex flex-col gap-5 leading-7">
          <p>Welcome to{" "}
            <span className="font-bold text-orange-500">
              BMO Elite Performance
            </span>{" "}
            where we are dedicated to developing players to become the best in class while ensuring they have fun
            along
            the way. Our facility is led by former MLB player Miguel Olivo, who brings over 10 years of professional
            baseball experience, and his wife Francisca Olivo, who focuses on the nutritional and motivational aspects
            to help youth athletes stay healthy and perform at their best.
          </p>
          <p>Having recently moved to West Virginia, we
            are excited to make this our home and share our knowledge and passion for sports with the local community.
            At BMO Elite Performance, we believe in a holistic approach to athletic development, combining expert
            coaching, tailored nutrition plans, and motivational support to help each athlete reach their full
            potential.
          </p>

          <p>As a family-owned business, we pride ourselves on creating a welcoming and supportive
            environment. The moment you walk through our doors, you become part of our family. Join us at BMO Elite
            Performance and take the first step towards becoming the best version of yourself.</p>
          <Image
            className="md:h-72 w-full object-cover rounded-lg object-top"
            alt=" About Image"
            src={"/images/banner-bmo.webp"}
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className=" flex flex-col gap-10 p-10 md:px-0 md:py-10">
        <div className=" flex flex-col gap-2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Our Facility
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            <span className=" text-orange-500 font-bold">
              We are open 6 days a week{" "}
            </span>
            please visit our{" "}
            <Link
              href="https://bmo-elite-performance.square.site/"
              className="font-bold underline"
            >
              {" "}
              online scheduler{" "}
            </Link>{" "}
            for availability{" "}
          </p>
        </div>
        <div className=" flex flex-col">
          <h4 className=" font-bold"> We Offer:</h4>
          <p>
            We are a baseball and softball training facility offering following
            classes
          </p>
          <p className=" leading-7 [&:not(:first-child)]:mt-4">• Hitting</p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">• Catching</p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">• Pitching</p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">• Fielding</p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            • Agility and strength
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            • Parties: Contact us at: 681-260-1421{" "}
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            • Tunnel Rental: Contact us at: 681-260-1421
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-3.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-center rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-4.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-5.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-center rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-6.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-2.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-1.webp"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2 p-10 md:p-5 lg:p-0 mt-16">
        <div className="flex flex-col gap-2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {" "}
            Our Team{" "}
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            <span className="text-orange-500 font-bold">
              We want you to reach your peak{" "}
            </span>{" "}
            let us help you achieve this
          </p>
        </div>

        <section className="my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="flex flex-col gap-2">
              <div className="relative">
                <Image
                  className="w-full h-[400px] object-cover object-top rounded-lg mb-3"
                  alt="Miguel Olivo"
                  src="/images/miguel.webp"
                  width={500}
                  height={500}
                />
                <div
                  className="absolute bottom-3 left-0 w-full bg-orange-500 bg-opacity-85 text-white p-2 rounded-b-lg">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Miguel Olivo
                  </h3>
                  <p>Baseball and Fitness Coach</p>
                </div>

              </div>
              <p> Miguel Olivo is a former Major League Baseball player with over 10 years of professional experience.
                His extensive career in baseball has equipped him with a wealth of knowledge and expertise in the
                sport. As our Baseball and Fitness Coach, Miguel is dedicated to developing players&#39; skills,
                enhancing
                their fitness levels, and fostering a love for the game. His hands-on approach and passion for
                coaching make him an invaluable asset to our team.</p>
            </article>
            <article className="flex flex-col gap-2">
              <div className="relative">
                <Image
                  className="w-full h-[400px] object-cover object-top rounded-lg mb-3"
                  alt="Francisca Olivo"
                  src="/images/francisca.webp"
                  width={500}
                  height={500}
                />
                <div
                  className="absolute bottom-3 left-0 w-full bg-orange-500 bg-opacity-85 text-white p-2 rounded-b-lg">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Francisca Olivo
                  </h3>
                  <p>Nutritionist Coach</p>
                </div>
              </div>
              <p>Francisca Olivo brings her expertise in nutrition and motivation to BMO Elite Performance. As our
                Nutritionist Coach, she focuses on creating personalized nutrition plans that help youth athletes stay
                healthy and perform at their best. Francisca&#39;s holistic approach ensures that our athletes not only
                excel in their sport but also maintain a balanced and healthy lifestyle. Her dedication to the
                well-being of our athletes is a cornerstone of our program.</p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}
