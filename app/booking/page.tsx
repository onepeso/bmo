'use client'

import React from 'react';
import { Award, Calendar, Briefcase } from 'lucide-react';

/**
 * Placeholder data for the coaches.
 * In a real Next.js application, this would likely come from an API or static file.
 * 
 * 
 */

interface Coach {
  id: number;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  imageUrl: string; // Now points to a path in the /public folder
  bookLink: string;
}

const COACHES_DATA = [
  {
    id: 1,
    name: "Miguel Olivo",
    title: "Baseball and Fitness Coach",
    specialty: "Baseball",
    bio: "Miguel Olivo brings over 14 years of experience as a Major League Baseball catcher, having played professionally in the United States, Mexico, and the Dominican Republic. He now uses his lifetime of knowledge and love for the game to train the next generation of athletes with the same passion, discipline, and attention to detail that defined his career.",
    imageUrl: "/images/miguel.webp",
    bookLink: "https://bmo-elite-performance.square.site/"
  },
  {
    id: 2,
    name: "Tony Allen",
    title: "Softball Coach",
    specialty: "Softball",
    bio: "Tony brings a strong and focused background in softball, with years of experience training and developing athletes in: Pitching, Hitting, and Speed & Agility.",
    imageUrl: "/images/tonyallen.webp",
    bookLink: "https://aandtathletictraining.setmore.com/book?step=time-slot&products=s95b03081fdc460a143e7fc96d13ac1881765204e&type=service&staff=ra7c3031d2565a742479c5c21769ac6190b26f2de-d&staffSelected=true"
  },
];

/**
 * Component for a single coach's profile card.
 * Designed with a flexible layout for mobile (stacked) and desktop (side-by-side).
 */
const CoachCard = ({ coach }: { coach: Coach }) => (
  <article 
    className="bg-white p-6 shadow-2xl rounded-xl transition-transform hover:scale-[1.02] duration-300 border-t-4 border-orange-600"
    aria-labelledby={`coach-name-${coach.id}`}
  >
    <div className="md:flex md:space-x-6">
      
      {/* Coach Image (Left/Top) */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
        <img 
          src={coach.imageUrl} 
          alt={`Portrait of ${coach.name}`} 
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full ring-4 ring-orange-200"
        />
      </div>

      {/* Coach Info and Booking Button (Right/Bottom) */}
      <div className="w-full md:w-2/3">
        <h2 id={`coach-name-${coach.id}`} className="text-2xl font-bold text-gray-900 mb-1">
          {coach.name}
        </h2>
        
        <p className="text-lg font-semibold text-orange-600 flex items-center mb-3">
          <Briefcase className="w-5 h-5 mr-2" />
          {coach.title}
        </p>
        
        <div className="text-gray-700 text-sm space-y-2 mb-4">
          <p className="flex items-start">
            <Award className="w-4 h-4 mr-2 mt-1 text-yellow-500 flex-shrink-0" />
            <span className="font-medium text-gray-800">Specialty:</span> {coach.specialty}
          </p>
          <p className="text-gray-600">
            {coach.bio}
          </p>
        </div>

        {/* BOOK NOW Button */}
        <button 
        onClick={() => window.open(coach.bookLink, '_blank')} // Redirects to the bookLink in a new tab
          className="w-full md:w-auto mt-4 px-8 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-150 transform hover:scale-[1.03] flex items-center justify-center uppercase tracking-wider"
          aria-label={`Book a coaching session with ${coach.name}`}
        >
          <Calendar className="w-5 h-5 mr-2" />
          BOOK NOW
        </button>
      </div>
    </div>
  </article>
);


/**
 * Main application component representing the Next.js page content.
 * Renamed from 'App' to 'BookingPage' for Next.js App Router best practice.
 */
const BookingPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12 font-sans">
      
      {/* Page Header */}
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Book our Amazing Coaches
        </h1>
        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
          Elevate your Baseball & Softball skills with guidance from our top experts.
        </p>
      </header>

      {/* Hero/Banner Image Section */}
      {/* <section className="mb-12" aria-label="Team Overview">
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <img 
            // Updated placeholder background color to orange-600 (#f97316)
            src="https://placehold.co/1200x200/f97316/ffffff?text=Coaching+Team+Image" 
            alt="A professional team working collaboratively"
            className="w-full h-32 sm:h-48 object-cover"
            role="presentation"
          />
        </div>
      </section> */}

      {/* Coaches Grid Section */}
      <section className="max-w-6xl mx-auto" aria-labelledby="coaches-list-heading">
        <h2 id="coaches-list-heading" className="sr-only">Available Coaches</h2>
        
        {/* Responsive Grid/Stack for Coaches */}
        <div className="space-y-10">
          {COACHES_DATA.map(coach => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </section>

      {/* Footer/CTA Section (Semantic Enhancement) */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          Not sure who to pick? Contact us for a free 15-minute consultation to find your perfect match.
        </p>
        <p>+1 681-260-1421</p>
      </footer>
    </main>
  );
};

export default BookingPage;