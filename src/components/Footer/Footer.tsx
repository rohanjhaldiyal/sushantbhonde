import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer px-4 py-2 md:px-10 md:py-4 bg-base-200 text-base-content flex flex-col md:flex-row items-center justify-between">
      <aside className="mb-4 md:mb-0">
        <p>Copyright © 2024. All rights reserved.</p>
      </aside>
      <nav className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://www.youtube.com/@almostagamestudioags3448/videos"
            target="_blank"
          >
            <FaYoutube className="text-3xl md:text-4xl cursor-pointer p-1 hover:p-0 hover:text-[#FF0000]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sushantbhonde322/"
            target="_blank"
          >
            <FaLinkedinIn className="text-3xl md:text-4xl cursor-pointer p-1 hover:p-0 hover:text-[#0077b5]" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
