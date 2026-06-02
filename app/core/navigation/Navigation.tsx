"use client";

import { useState, useRef } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import CustomBanner from "@/app/components/custom-banner/CustomBanner";
import { FaXTwitter } from "react-icons/fa6";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [formsDropdownOpen, setFormsDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const formsDropdownRef = useRef(null);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      subLinks: [
        { name: "One-on-One", link: "/services/oneonone" },
        { name: "Facility Rentals", link: "/services/facility-rentals" },
        { name: "Camps and Events", link: "/services/camps-and-events" },
      ],
    },
    { name: "Contact", link: "/contact" },
    {
      name: "Forms",
      subLinks: [
        { name: "Waiver Form", link: "/waiver" },
        { name: "Feedback Form", link: "/feedback" },
      ],
    },
  ];

  const handleMenuClick = () => {
    setMobileMenu(!mobileMenu);
    document.body.style.overflow = mobileMenu ? "unset" : "hidden";
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    document.body.style.overflow = "unset";
  };

  const closeDropdowns = () => {
    setServicesDropdownOpen(false);
    setFormsDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    if (formsDropdownOpen) setFormsDropdownOpen(false);
  };

  const toggleFormsDropdown = () => {
    setFormsDropdownOpen(!formsDropdownOpen);
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
  };

  const socialIconClass = "text-white hover:text-orange-400 transition-colors cursor-pointer";

  return (
    <>
      <CustomBanner />
      <header className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 relative overflow-visible z-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_#f97316_1px,_transparent_1px)] bg-[size:40px_100%] opacity-20" />
        </div>
        
        <div className="relative border-b-2 border-orange-500">
          <nav className="mx-auto max-w-screen-xl text-white flex items-center justify-between px-4 py-3 relative z-[200]">
            <Link href="/" className={`relative z-10 ${mobileMenu ? 'hidden' : ''}`}>
              <Image
                src="/images/bmo-logo.png"
                width={90}
                height={10}
                alt="bmo-logo"
                className="h-auto"
              />
            </Link>

            <div className="gap-1 hidden lg:flex flex-1 justify-center text-sm relative overflow-visible">
              {menuLinks.map((link) =>
                link.subLinks ? (
                  <div
                    key={link.name}
                    className="relative h-full"
                    onMouseEnter={() => {
                      if (link.name === "Services") {
                        setServicesDropdownOpen(true);
                        setFormsDropdownOpen(false);
                      } else {
                        setFormsDropdownOpen(true);
                        setServicesDropdownOpen(false);
                      }
                    }}
                    onMouseLeave={() => {
                      if (link.name === "Services") {
                        setServicesDropdownOpen(false);
                      } else {
                        setFormsDropdownOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="text-white/80 hover:text-orange-400 transition-colors px-3 py-2 rounded-md hover:bg-white/5 flex items-center gap-1 font-medium"
                      aria-expanded={
                        link.name === "Services"
                          ? servicesDropdownOpen
                          : formsDropdownOpen
                      }
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {(link.name === "Services"
                      ? servicesDropdownOpen
                      : formsDropdownOpen) && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-56 bg-slate-800 text-white rounded-xl shadow-2xl shadow-black/50 z-[100] overflow-hidden border border-slate-700/50">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-slate-700/50" />
                          <div className="absolute top-0 left-0 w-0 h-0 border-l-[9px] border-r-[9px] border-b-[9px] border-l-transparent border-r-transparent border-b-slate-800" />
                        </div>
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.link}
                            onClick={closeDropdowns}
                          >
                            <div className="block px-4 py-3 hover:bg-orange-500 transition-colors text-sm font-medium border-b border-slate-700/30 last:border-0">
                              {subLink.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.link}
                    className="text-white/80 hover:text-orange-400 transition-colors px-3 py-2 rounded-md hover:bg-white/5 font-medium"
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>

            <div className="gap-3 hidden lg:flex items-center">
              <Link href="https://www.facebook.com/profile.php?id=61578664407686" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <FaFacebookSquare className={socialIconClass} size={18} />
              </Link>
              <Link href="https://x.com/BmoElite" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <FaXTwitter className={socialIconClass} size={18} />
              </Link>
              <Link href="https://www.instagram.com/bmoeliteperformance/" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <FaInstagram className={socialIconClass} size={18} />
              </Link>
              <Link href="https://www.youtube.com/@BMOElitePerformance" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <FaYoutube className={socialIconClass} size={18} />
              </Link>
              <Link href="https://www.tiktok.com/@bmo.elite.perform" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <AiFillTikTok className={socialIconClass} size={18} />
              </Link>
              <Link 
                href="/booking"
                className="ml-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-full font-bold text-sm transition-colors"
              >
                Book Now
              </Link>
            </div>

            {mobileMenu && (
              <button
                onClick={handleMenuClick}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-[60] lg:hidden"
                aria-label="Close Menu"
              >
                <HiMiniXMark className="text-white" size={28} />
              </button>
            )}

            {!mobileMenu && (
              <button
                onClick={handleMenuClick}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors z-50 lg:hidden"
                aria-label="Toggle Menu"
              >
                <HiMiniBars3 size={24} className="text-white" />
              </button>
            )}
          </nav>
        </div>

        {mobileMenu && (
          <div className="fixed inset-0 bg-black z-40 lg:hidden">
            <nav className="flex flex-col items-center justify-center h-full space-y-6 text-2xl w-full">
              <Image
                src="/images/bmo-logo.png"
                width={120}
                height={10}
                alt="bmo-logo"
                className="h-auto"
              />
              {menuLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.name} className="relative w-full text-center">
                    <button
                      onClick={
                        link.name === "Services"
                          ? toggleServicesDropdown
                          : toggleFormsDropdown
                      }
                      className="text-white hover:text-orange-400 transition-colors text-xl font-semibold flex items-center justify-center gap-2 w-full"
                      aria-expanded={
                        link.name === "Services"
                          ? servicesDropdownOpen
                          : formsDropdownOpen
                      }
                    >
                      {link.name}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {(link.name === "Services"
                      ? servicesDropdownOpen
                      : formsDropdownOpen) && (
                      <div className="mt-3 bg-slate-800 text-white rounded-xl shadow-xl z-10 w-full overflow-hidden border border-slate-700/50">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.link}
                            onClick={() => {
                              closeMobileMenu();
                              closeDropdowns();
                            }}
                          >
                            <div className="block px-4 py-3 text-lg hover:bg-orange-500 transition-colors border-b border-slate-700/30 last:border-0">
                              {subLink.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.link}
                    className="text-white hover:text-orange-400 transition-colors text-xl font-semibold"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <Link 
                href="/booking"
                className="mt-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-bold transition-colors"
                onClick={closeMobileMenu}
              >
                Book Now
              </Link>
              <div className="gap-6 flex items-center mt-12">
                <Link href="https://www.facebook.com/BMOElitePerformance">
                  <FaFacebookSquare className={socialIconClass} size={28} />
                </Link>
                <Link href="https://x.com/BmoElite">
                  <FaXTwitter className={socialIconClass} size={28} />
                </Link>
                <Link href="https://www.tiktok.com/@bmo.elite.perform">
                  <AiFillTikTok className={socialIconClass} size={28} />
                </Link>
                <Link href="https://www.instagram.com/BMOElite21">
                  <FaInstagram className={socialIconClass} size={28} />
                </Link>
                <Link href="https://www.youtube.com/@BMOElite2321">
                  <FaYoutube className={socialIconClass} size={28} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}