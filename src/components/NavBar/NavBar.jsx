import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

function NavBar() {
  const navOptions = (
    <>
      <motion.li
        whileHover={{
          color: "#00b7c7",
          textShadow: "1px 1px 11px rgba(30,158,165,0.65)",
        }}
      >
        <Link smooth to="/#about">
          <a className="tooltip tooltip-left" data-tip="About">
            <FaUser className="inline-block mr-2 lg:mb-2" />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7" }}>
        <Link smooth to="/#skills">
          <a className="tooltip tooltip-left" data-tip="Skills">
            <FaCode className="inline-block mr-2 lg:mb-2" />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7" }}>
        <Link smooth to="/#work">
          <a className="tooltip tooltip-left" data-tip="Work">
            <FaBriefcase className="inline-block mr-2 lg:mb-2" />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7 lg:mb-2" }}>
        <Link smooth to="/#education">
          <a className="tooltip tooltip-left" data-tip="Education">
            <FaGraduationCap className="inline-block mr-2 lg:mb-2" />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7" }}>
        <Link smooth to="/#contact">
          <a className="tooltip tooltip-left" data-tip="Contact">
            <FaEnvelope className="inline-block mr-2 lg:mb-2" />
          </a>
        </Link>
      </motion.li>
    </>
  );

  const mobileNavOptions = (
    <>
      <motion.li
        whileHover={{
          color: "#00b7c7",
          textShadow: "1px 1px 11px rgba(30,158,165,0.65)",
        }}
      >
        <Link smooth to="/#about">
          About
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7" }}>
        <Link smooth to="/#skills">
          Skills
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7" }}>
        <Link smooth to="/#work">
          Work
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7" }}>
        <Link smooth to="/#education">
          Education
        </Link>
      </motion.li>
      <motion.li whileHover={{ color: "#00b7c7" }}>
        <Link smooth to="/#contact">
          Contact
        </Link>
      </motion.li>
    </>
  );

  return (
    <div>
      <div
        className={
          "lg:mt-[90px] mt-10 navbar absolute z-10 md:px-20 lg:px-80 lg:py-[10px] "
        }
      >
        <div className="navbar-start">
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
              {mobileNavOptions}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <motion.img
              whileHover={{
                scale: 1.2,
                boxShadow: "4px 4px 26px rgba(92,218,216,0.73),",
              }}
              className="w-16 h-16"
              src="/logo.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="navbar-end fixed z-10 right-10 top-[320px] hidden xl:flex">
          <ul className="menu px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
