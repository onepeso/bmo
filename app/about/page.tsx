import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto max-w-screen-xl" role="main">
      <article className="flex flex-col gap-5 p-10 md:px-0 md:py-10 mb-5">
        <header>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
            About Us
          </h1>
        </header>
        <div className="flex flex-col gap-5 leading-7">
          <p>Welcome to{" "}
            <span className="font-bold text-orange-500">
              BMO Elite Performance
            </span>{" "}
            a premier baseball and softball training facility dedicated to developing athletes of all levels through expert coaching, discipline, and a passion for excellence. Located in a state-of-the-art facility,
            BMO Elite Performance is the vision of founders Miguel and Francisca Olivo, who share a commitment to helping young athletes grow stronger—physically, mentally, and emotionally—on and off the field.
          </p>
          <p>At BMO Elite Performance, we believe greatness is built through preparation, hard work, and heart. Our training programs are designed to support every athlete&apos;s journey,
             whether they&apos;re just starting out or preparing for the next level of competition. We focus on fundamentals, advanced skills, strength and agility, and the mental side of the game, all while creating 
             a positive and professional environment.
          </p>

          <p>As a family-owned business, we pride ourselves on creating a welcoming and supportive
            environment. The moment you walk through our doors, you become part of our family. Join us at BMO Elite
            Performance and take the first step towards becoming the best version of yourself.</p>
          <figure>
            <Image
              className="md:h-72 w-full object-cover rounded-lg object-top"
              alt="BMO Elite Performance facility exterior showing the main entrance"
              src={"/images/banner-bmo.webp"}
              width={1000}
              height={1000}
              priority
            />
          </figure>
        </div>
      </article>

      <section className="flex flex-col gap-10 p-10 md:px-0 md:py-10" aria-labelledby="facility-heading">
        <div className="flex flex-col gap-2">
          <h2 id="facility-heading" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Our Facility
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            <span className="text-orange-500 font-bold">
              We are open 6 days a week{" "}
            </span>
            please visit our{" "}
            <Link
              href="https://bmo-elite-performance.square.site/"
              className="font-bold underline"
              aria-label="Visit our online scheduler to book your session"
            >
              online scheduler
            </Link>{" "}
            for availability{" "}
          </p>
        </div>

        <section aria-labelledby="services-heading">
          <h3 id="services-heading" className="font-bold text-2xl mb-4">What We Offer:</h3>
          <ul className="space-y-4 list-none">
            <li className="leading-7">• Private Baseball & Softball Lessons: One-on-one sessions for hitting, pitching, catching, and fielding.</li>
            <li className="leading-7">• Catcher Training: Specialized instruction for catchers focused on blocking, receiving, throwing mechanics, and game management.</li>
            <li className="leading-7">• Team Training: Customized coaching programs for teams looking to improve their performance together.</li>
            <li className="leading-7">• Group Clinics & Camps: Seasonal camps and group classes that teach skills, teamwork, and competition in a fun environment.</li>
            <li className="leading-7">• Strength & Conditioning Classes: Held in our exclusive training area, these classes focus on building strength, speed, and endurance safely and effectively.</li>
            <li className="leading-7">• Agility Program: Our agility program helps athletes improve their speed, footwork, explosiveness, and coordination—all essential tools to compete at a higher level.</li>
            <li className="leading-7">• Nutrition & Wellness Guidance: Support from Francisca to help athletes fuel properly, recover smarter, and build healthy habits.</li>
            <li className="leading-7">• College Prep & Recruitment Support: For advanced athletes pursuing collegiate opportunities, we offer video development, exposure training, and recruiting guidance.</li>
          </ul>
        </section>

        <section aria-labelledby="facility-gallery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 id="facility-gallery" className="sr-only">Facility Gallery</h2>
          <figure>
            <Image
              className="w-full h-72 object-cover object-top rounded-lg"
              alt="Training area showing baseball equipment and training space"
              src="/images/training-bmo.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-top rounded-lg"
              alt="Indoor batting cages and training area"
              src="/images/bmo-3.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-center rounded-lg"
              alt="Strength and conditioning area"
              src="/images/bmo-4.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-top rounded-lg"
              alt="Professional training equipment and space"
              src="/images/training-bmo4.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-top rounded-lg"
              alt="Multi-purpose training facility"
              src="/images/bmo-5.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-center rounded-lg"
              alt="Advanced training equipment and space"
              src="/images/bmo-6.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-top rounded-lg"
              alt="Professional baseball training facility"
              src="/images/bmo-2.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-top rounded-lg"
              alt="State-of-the-art training equipment"
              src="/images/bmo-1.webp"
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              className="w-full h-72 object-cover object-center rounded-lg"
              alt="Comprehensive training facility overview"
              src="/images/training-bmo5.webp"
              width={500}
              height={500}
            />
          </figure>
        </section>

        <section aria-labelledby="why-choose-heading">
          <h3 id="why-choose-heading" className="font-bold text-2xl mb-4">Why Choose BMO Elite Performance:</h3>
          <ul className="space-y-4 list-none">
            <li className="leading-7">• Professional-Level Experience: Miguel&apos;s MLB career and Francisca&apos;s award-winning leadership ensure every athlete benefits from expert-level training and support.</li>
            <li className="leading-7">• Dedicated Coaching Staff: In addition to Miguel and Francisca, we have a team of experienced coaches specializing in softball and various aspects of baseball. Each coach brings unique expertise to ensure every athlete receives the focused attention they need.</li>
            <li className="leading-7">• Specialized Facilities: Our facility includes an exclusive area just for strength and conditioning classes, allowing athletes to train safely and effectively with the right equipment and space.</li>
            <li className="leading-7">• Agility-Focused Development: We offer a full agility training program designed to improve balance, foot speed, quickness, and total body control—helping athletes of all ages enhance their athleticism.</li>
            <li className="leading-7">• Technology Integration: We&apos;ve integrated PitchLogic into our pitching training sessions—providing detailed metrics on spin rate, velocity, release point, and more. We&apos;re committed to staying ahead of the game and plan to introduce more cutting-edge technology soon to help athletes track progress and maximize performance.</li>
            <li className="leading-7">• Customized Approach: Every athlete is different. We develop personalized plans that match each player&apos;s goals, level, and needs.</li>
            <li className="leading-7">• Family Environment: We foster a supportive atmosphere where athletes feel motivated, confident, and valued—on and off the field.</li>
            <li className="leading-7">• Whole-Athlete Focus: With Francisca&apos;s background in nutrition and wellness, we educate and support athletes in developing healthy habits for peak performance and recovery.</li>
          </ul>

          <div className="mt-10">
            <h4 className="font-bold text-xl mb-4">Success You Can See</h4>
            <p className="leading-7">Families who train at BMO Elite consistently report increased confidence, sharper skills, and a greater love for the game. Athletes don&apos;t just improve—they transform, learning how to work hard, push boundaries, and enjoy the process.</p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold text-xl mb-4">Our Mission</h4>
            <p className="leading-7">Our mission at BMO Elite Performance is to build more than just athletic talent—we aim to inspire work ethic, resilience, and belief in oneself. With the combined guidance of Miguel and Francisca, athletes learn to care for both their craft and their character. We believe that with the right training, support, and mindset, every young athlete can become a game-changer in life.</p>
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-2 p-10 md:p-5 lg:p-0 mt-16" aria-labelledby="founders-heading">
        <div className="flex flex-col gap-2">
          <h2 id="founders-heading" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            About the Founders: Miguel & Francisca Olivo
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            <span className="text-orange-500 font-bold">
              We want you to reach your peak{" "}
            </span>{" "}
            let us help you achieve this
          </p>
        </div>

        <section className="my-5" aria-labelledby="founders-profiles">
          <h3 id="founders-profiles" className="sr-only">Founder Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="flex flex-col gap-2">
              <figure className="relative">
                <Image
                  className="w-full h-[400px] object-cover object-top rounded-lg mb-3"
                  alt="Miguel Olivo - Baseball and Fitness Coach"
                  src="/images/miguel.webp"
                  width={500}
                  height={500}
                />
                <figcaption className="absolute bottom-3 left-0 w-full bg-orange-500 bg-opacity-85 text-white p-2 rounded-b-lg">
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Miguel Olivo
                  </h4>
                  <p>Baseball and Fitness Coach</p>
                </figcaption>
              </figure>
              <p>Miguel Olivo brings over 14 years of experience as a Major League Baseball catcher, having played professionally in the United States, Mexico, 
                and the Dominican Republic. He now uses his lifetime of knowledge and love for the game to train 
                the next generation of athletes with the same passion, discipline, and attention to detail that defined his career.</p>
            </article>
            <article className="flex flex-col gap-2">
              <figure className="relative">
                <Image
                  className="w-full h-[400px] object-cover object-top rounded-lg mb-3"
                  alt="Francisca Olivo - Nutritionist Coach"
                  src="/images/francisca.webp"
                  width={500}
                  height={500}
                />
                <figcaption className="absolute bottom-3 left-0 w-full bg-orange-500 bg-opacity-85 text-white p-2 rounded-b-lg">
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Francisca Olivo
                  </h4>
                  <p>Nutritionist Coach</p>
                </figcaption>
              </figure>
              <p>Francisca Olivo is a certified nutritionist, wellness coach, and accomplished business leader. She is the 2024 recipient of the Women in Supply Chain Award, a national recognition for 
                outstanding women making significant impacts in the logistics industry. Francisca is also an award winner in coaching, engagement, and leadership, reflecting her powerful influence in both the 
                corporate and athletic worlds. At BMO Elite, she brings her strategic mindset and deep care for people into everything she does—leading efforts in athlete wellness, nutrition, and mental strength.</p>
            </article>
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-6 p-10 md:p-5 lg:p-0 mt-16 border-t border-gray-100" aria-labelledby="contact-heading">
        <div className="flex flex-col gap-8">
          <h2 id="contact-heading" className="scroll-m-20 text-3xl font-semibold tracking-tight">Location & Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-10">
            <div className="flex flex-col space-y-8 bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl">
              <div>
                <h3 className="text-3xl font-bold text-orange-500 mb-6 tracking-tight">BMO Elite Performance</h3>
                <address className="not-italic text-gray-700 space-y-2">
                  <p className="text-lg font-medium">761 Opequon Lane</p>
                  <p className="text-lg font-medium">Kearneysville, West Virginia</p>
                </address>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <span className="font-semibold text-lg text-gray-600">Phone:</span>
                  <a href="tel:681-260-1421" className="text-orange-500 hover:text-orange-600 transition-all duration-300 text-lg font-medium group-hover:translate-x-1" aria-label="Call us at 681-260-1421">681-260-1421</a>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="font-semibold text-lg text-gray-600">Email:</span>
                  <a href="mailto:olivobaseball2121@gmail.com" className="text-orange-500 hover:text-orange-600 transition-all duration-300 text-lg font-medium group-hover:translate-x-1" aria-label="Email us at olivobaseball2121@gmail.com">olivobaseball2121@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl">
              <p className="text-gray-700 italic text-xl leading-relaxed">
                Join the BMO Elite Performance family and experience a new level of training—where passion meets purpose, and potential becomes performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
