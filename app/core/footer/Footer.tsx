import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/bmo-logo.png"
                width={80}
                height={10}
                alt="BMO Elite Performance"
                className="h-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premier baseball and softball training facility dedicated to developing athletes of all levels.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={16} className="text-orange-500" />
                <span className="text-sm">761 Opequon Lane, Kearneysville WV</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} className="text-orange-500" />
                <a href="tel:6812601421" className="text-sm hover:text-orange-500 transition-colors">681-260-1421</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} className="text-orange-500" />
                <a href="mailto:info@bmoeliteperformance.com" className="text-sm hover:text-orange-500 transition-colors">info@bmoeliteperformance.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-slate-400 hover:text-orange-500 transition-colors text-sm">About Us</Link>
              <Link href="/services/camps-and-events" className="block text-slate-400 hover:text-orange-500 transition-colors text-sm">Camps & Events</Link>
              <Link href="/booking" className="block text-slate-400 hover:text-orange-500 transition-colors text-sm">Book a Session</Link>
              <Link href="/services/facility-rentals" className="block text-slate-400 hover:text-orange-500 transition-colors text-sm">Facility Rentals</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <Link href="/terms-of-condition" className="hover:text-orange-500 transition-colors">Terms of Condition</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} BMO Elite Performance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};