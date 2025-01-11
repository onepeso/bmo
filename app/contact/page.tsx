import Link from "next/link"

export default function Contact() {
  return (
    <main>
      <section className=" mx-auto max-w-screen-xl flex flex-col gap-5 p-10 md:px-0 md:py-10 mb-5">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">Reach Out </h1>
        <div className="flex flex-col-reverse gap-5 md:flex-col">
          <p className="leading-7">Have questions or feedback? We're just a message away!</p>
        </div>
      </section>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-xl p-8 space-y-6 my-16 bg-white rounded-lg shadow-md">
          <header className="text-center">
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </header>

          {/* Contact Information Section */}
          <section className="mb-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div>
                <h3 className="font-semibold">Call or Visit</h3>
                <p>+1 681-260-1421</p>
                <p>olivobaseball2121@gmail.com</p>
                <p>761 opequon LN, Kearneysville WV</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.617353582045!2d-77.93789527702825!3d39.39790865065451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca01c5d4b44417%3A0x95a76b60e99dd8b0!2sBMO%20Elite%20Performance!5e0!3m2!1sen!2sus!4v1736556624929!5m2!1sen!2sus" width="500" height="450" className="border-0 my-5" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <Link
                  href="https://maps.app.goo.gl/ybJxcJp5BGJkvoG67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Get Directions
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center mb-4">
              <div>
                <h3 className="font-semibold">Or Contact Us Online</h3>
                <p>Submit the form below to connect with us.</p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section>
            <form>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div >

    </main >
  );
}
