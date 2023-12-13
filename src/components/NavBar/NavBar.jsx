import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoImage, setLogoImage] = useState("/abeerlogo.png");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsScrolled(true);
      setLogoImage("/abeerlogowhite.png");
    } else {
      setIsScrolled(false);
      setLogoImage("/abeerlogo.png");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navOptions = (
    <>
      <motion.li whileHover={{ color: "#718096" }}>
        <Link smooth to="/#about">
          About
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#718096" }}>
        <Link smooth to="/#skills">
          Skills
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#718096" }}>
        <Link smooth to="/#work">
          Work
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#718096" }}>
        <Link smooth to="/#education">
          Education
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#718096" }}>
        <Link smooth to="/#contact">
          Contact
        </Link>
      </motion.li>
    </>
  );

  return (
    <div>
      <div
        className={`navbar fixed z-10 ${
          isScrolled ? "bg-black" : "bg-opacity-10 bg-slate-900"
        } text-white md:px-10 py-2 `}
      >
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <motion.img
              animate={{ textShadow: "0 0 12px #313131" }}
              className="w-16 h-16"
              src={logoImage}
              alt="logo"
            />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
