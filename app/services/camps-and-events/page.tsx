import Image from "next/image";

export default function CampAndEvents() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <section className="flex flex-col gap-5 p-10 md:px-0 md:py-10 mb-5">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Camp and Events
        </h1>
        <div className="flex flex-col-reverse gap-5 md:flex-col">
          <p className="leading-7">
            At{" "}
            <span className="font-bold text-orange-500">
              BMO Elite Performance
            </span>
            , we offer a variety of specialized camps and events designed to
            help athletes of all ages enhance their skills and reach their full
            potential. Our programs are perfect for baseball and softball
            players looking to improve their performance in a focused,
            professional environment. From skill-building camps to competitive
            training events, we provide a dynamic and engaging experience for
            every athlete.
          </p>
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
          Our Upcoming Camps
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p>No Camps Currently...</p>
        </div>
      </section>
      <section className="p-5 lg:p-0">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-5">
          Our Upcoming Events
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p>No Events Currently...</p>
        </div>
      </section>
    </main>
  );
}