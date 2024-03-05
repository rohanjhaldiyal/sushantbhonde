import Link from "next/link";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-200 fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-xl lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/#Home">Home</Link>
              </li>
              <li>
                <Link href="/#About">About</Link>
              </li>
              <li>
                <Link href="/#Projects">Projects</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl rounded-full">
            Sushant Bhonde
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/#Home" className="btn btn-ghost text-lg rounded-full">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#About" className="btn btn-ghost text-lg rounded-full">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#Projects"
                className="btn btn-ghost text-lg rounded-full"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="https://www.youtube.com/@almostagamestudioags3448/videos" 
            target="_blank"
          >
            <FaYoutube className="text-4xl cursor-pointer p-1 mr-1 hover:p-0 hover:text-[#FF0000]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sushantbhonde322/"
            target="_blank"
          >
            <FaLinkedinIn className="text-4xl cursor-pointer p-1 mr-1 hover:p-0 hover:text-[#0077b5]" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
