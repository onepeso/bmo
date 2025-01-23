import Image from "next/image";

export default function FacilityRental() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <section className="flex flex-col gap-5 p-10 md:px-0 md:py-10 mb-5">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Facility Rental
        </h1>
        <div className="flex flex-col-reverse gap-5 md:flex-col">
          <p className="leading-7">
            Looking for the perfect space to host your next event or practice
            session? At{" "}
            <span className="font-bold text-orange-500">
              BMO Elite Performance
            </span>
            , we offer versatile facility rentals tailored to meet your needs.
            Whether you’re planning a party or need access to our training
            tunnels for a private session, we’ve got you covered.{" "}
            <span className="font-bold">
              {" "}
              Please contact us for more information on availability and
              pricing.
            </span>
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Party Rentals
          </h4>
          <p>
            Celebrate your special occasion with us! Our facility offers ample
            space for parties, providing a fun and safe environment for guests
            of all ages. Contact us at 681-260-1421 to learn more about booking
            your party.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Tunnel Rentals
          </h4>
          <p>
            Our top-of-the-line training tunnels are available for rent, giving
            athletes the space to improve their skills. Perfect for baseball,
            softball, and other training needs, our tunnels provide an ideal
            environment for focused practice. Reach out to 681-260-1421 for more
            details or to reserve your session. Let us help make your event or
            training session a success. Contact us today to reserve your space
            at BMO Elite Performance!
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Image
            className="w-full h-32 object-cover rounded-lg"
            alt="Facility Pictures"
            src="/images/baseball-stadium.webp"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="p-5 lg:p-0">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-5">
          See Our Facility
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image
            className="w-full h-72 object-cover rounded-lg"
            alt="Facility Pictures"
            src="/images/bmo-training-11.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-center rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo8.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo9.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-center rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo2.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo13.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo10.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo3.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo6.webp"
            width={500}
            height={500}
          />
          <Image
            className="w-full h-72 object-cover object-top rounded-lg"
            alt="Facility Pictures"
            src="/images/training-bmo7.webp"
            width={500}
            height={500}
          />
          <div></div>
        </div>
      </section>
    </main>
  );
}
