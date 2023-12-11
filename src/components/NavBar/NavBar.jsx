import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  const navOptions = (
    <>
      <li>
        <Link smooth to="/#about">
          About
        </Link>
      </li>
      <li>
        <Link smooth to="/#skills">
          Skills
        </Link>
      </li>
      <li>
        <Link smooth to="/#work">
          Work
        </Link>
      </li>
      <li>
        <Link smooth to="/#education">
          Education
        </Link>
      </li>
      <li>
        <Link smooth to="/#contact">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-10 bg-slate-900 text-white md:px-10 py-2 md:py-5">
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
            <img className="w-10 h-10" src="/src/assets/logo.svg" alt="logo" />
            <a className="md:text-lg text-xs uppercase">Naimul Abeer</a>
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
