import React, { useState } from "react";
import Link from "next/link";

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-red-50">
        <div className="pt-2 pl-2 mb-2 bg-red-50 flex justify-center">
          <Link href="/" className="">
            <img src="/Logo.png" className="h-[100px] w-[200px] " alt="" />
          </Link>
        </div>

        <button className="toggle-button " onClick={() => setIsOpen(!isOpen)}>
          <div className="hover:bg-[#F1AC33]  hover:text-black p-2 m-2 rounded bg-red-500 text-white hover:shadow-white">
            OPEN MENU
          </div>
        </button>
      </div>

      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          <div className="hover:bg-[#F1AC33] hover:text-black p-2 px-4 m-2 rounded bg-red-500 text-white hover:shadow-white">
            x
          </div>
        </button>

        <div className="nav-list">
          <Link href="/Dashboard">
            <li className="">Dashboard</li>
          </Link>
          <Link href="/HomeBanner">
            <li className="">Home Banner</li>
          </Link>
          <Link href="/HomeTestimonial">
            <li className="">Home Testimonial</li>
          </Link>
          <Link href="/RetailerBanner">
            <li className="">Retailer Banner</li>
          </Link>
          <Link href="/RetailerTestimonial">
            <li className="">Retailer Testimonial</li>
          </Link>
          <Link href="/AboutBanner">
            <li className="">About Banner</li>
          </Link>
          <Link href="/JobOpenings">
            <li>Job Openings !</li>
          </Link>
          <Link href="/ContactForm">
            <li>Contact Form</li>
          </Link>
          <Link href="/Teams">
            <li>Teams</li>
          </Link>
          <Link href="/Blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/LifeAt1k">
            <li>Life At 1k</li>
          </Link>
          <Link href="/Founders">
            <li>Founders</li>
          </Link>
          <Link href="/Subscribe">
            <li>Subscribe</li>
          </Link>
          <Link href="/NewsRoom">
            <li>1k News Room</li>
          </Link>
          <Link href="/FAQ">
            <li>F.A.Q</li>
          </Link>
          <Link href="/Brands">
            <li>Brands</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
