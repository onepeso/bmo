"use client";

import { useState, useRef} from "react";
// Restoring original external icon imports
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
// Restoring original Next.js component imports
import Image from "next/image";
import Link from "next/link";
import CustomBanner from "@/app/components/custom-banner/CustomBanner";


export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [formsDropdownOpen, setFormsDropdownOpen] = useState(false);
  // Restoring original ref types (though only used when mobile menu is active)
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

  // Click-based toggles for MOBILE ONLY (renamed from toggle...Mobile for clarity)
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    if (formsDropdownOpen) setFormsDropdownOpen(false);
  };

  const toggleFormsDropdown = () => {
    setFormsDropdownOpen(!formsDropdownOpen);
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
  };


  // Styles utility for the social icons (using original bmo-primary concept)
  const socialIconClass = "text-white hover:text-bmo-primary transition-colors cursor-pointer";

  return (
    <>
      <CustomBanner />
      <header className="bg-black p-5">
        <nav className="mx-auto max-w-screen-xl text-white flex items-center justify-between">
          <Link href="/">
            <Image
              // Placeholder image URL replaced with original src path structure
              src="/images/bmo-logo.png"
              width={100}
              height={10}
              alt="bmo-logo"
              className="h-auto"
            />
          </Link>
          {/* ------------------------------------------
            DESKTOP NAVIGATION (Hover Logic is preserved)
            ------------------------------------------
          */}
          <div className="gap-6 hidden md:flex flex-1 justify-center text-lg font-medium">
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
                    className="text-white hover:text-bmo-primary transition-colors p-2"
                    aria-expanded={link.name === "Services" ? servicesDropdownOpen : formsDropdownOpen}
                  >
                    {link.name}
                  </button>
                  {/* Dropdown Content */}
                  {(link.name === "Services"
                    ? servicesDropdownOpen
                    : formsDropdownOpen) && (
                    <div
                      className="absolute left-24 transform -translate-x-1/2 mt-0 w-56 bg-orange-500 text-white rounded-lg shadow-xl z-50 overflow-hidden"
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.link}
                          onClick={closeDropdowns}
                        >
                          <div className="block px-4 py-3 hover:bg-orange-700 transition-colors text-base">
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
                  className="text-white hover:text-bmo-primary transition-colors p-2"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
          {/* Desktop Social Icons (Restored imported icons) */}
          <div className="gap-4 hidden md:flex items-center">
            <Link href="https://www.facebook.com/BMOElitePerformance">
              <FaFacebookSquare className="text-white hover:text-bmo-primary" size={20} />
            </Link>
            <Link href="https://www.tiktok.com/@bmo.elite.perform">
              <AiFillTikTok className="text-white hover:text-bmo-primary" size={21} />
            </Link>
            <Link href="https://www.instagram.com/BMOElite21">
              <FaInstagram className="text-white hover:text-bmo-primary" size={21} />
            </Link>
            <Link href="https://www.youtube.com/@BMOElite2321">
              <FaYoutube className="text-white hover:text-bmo-primary" size={21} />
            </Link>
          </div>

          {/* ------------------------------------------
            MOBILE MENU TOGGLE BUTTON (Restored imported icons)
            ------------------------------------------
          */}
          <button
            onClick={handleMenuClick}
            className="p-2 hover:bg-orange-700 rounded-lg transition-colors right-4 top-4 z-50 md:hidden"
            aria-expanded={mobileMenu}
            aria-label="Toggle Menu"
          >
            {!mobileMenu ? (
              <HiMiniBars3 size={24} />
            ) : (
              <HiMiniXMark className="text-white" size={30} />
            )}
          </button>
          
          {/* ------------------------------------------
            MOBILE MENU OVERLAY (Click Logic)
            ------------------------------------------
          */}
          {mobileMenu && (
            <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center p-8">
              <nav className="flex flex-col items-center space-y-8 text-2xl w-full max-w-sm">
                <Image
                  src="/images/bmo-logo.png"
                  width={150}
                  height={10}
                  alt="bmo-logo"
                  className="mb-8 h-auto"
                />
                {menuLinks.map((link) =>
                  link.subLinks ? (
                    <div key={link.name} className="relative w-full text-center">
                      <button
                        // Click logic for mobile dropdowns
                        onClick={
                          link.name === "Services"
                            ? toggleServicesDropdown
                            : toggleFormsDropdown
                        }
                        className="text-white hover:text-orange-500 transition-colors text-2xl font-semibold"
                        aria-expanded={link.name === "Services" ? servicesDropdownOpen : formsDropdownOpen}
                      >
                        {link.name}
                      </button>
                      {(link.name === "Services"
                        ? servicesDropdownOpen
                        : formsDropdownOpen) && (
                        <div
                          ref={
                            link.name === "Services"
                              ? servicesDropdownRef
                              : formsDropdownRef
                          }
                          className="mt-4 bg-orange-500 text-white rounded-lg shadow-lg z-10 w-full overflow-hidden"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.link}
                              onClick={() => {
                                closeMobileMenu(); // Close overlay
                                closeDropdowns(); // Close dropdown states
                              }}
                            >
                              <div className="block px-4 py-3 text-xl hover:bg-orange-700 transition-colors">
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
                      className="text-white hover:text-orange-500 transition-colors text-2xl font-semibold"
                      onClick={closeMobileMenu} // Close mobile menu on link click
                    >
                      {link.name}
                    </Link>
                  ),
                )}
              </nav>
               {/* Mobile Social Icons (Restored imported icons) */}
               <div className="gap-6 flex items-center mt-12">
                  <Link href="https://www.facebook.com/BMOElitePerformance">
                    <FaFacebookSquare className={socialIconClass} size={30} />
                  </Link>
                  <Link href="https://www.tiktok.com/@bmo.elite.perform">
                    <AiFillTikTok className={socialIconClass} size={32} />
                  </Link>
                  <Link href="https://www.instagram.com/BMOElite21">
                    <FaInstagram className={socialIconClass} size={32} />
                  </Link>
                  <Link href="https://www.youtube.com/@BMOElite2321">
                    <FaYoutube className={socialIconClass} size={32} />
                  </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
