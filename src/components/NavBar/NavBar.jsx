const NavBar = () => {
  return (
    <nav className="w-10/12 mx-auto mb-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Statistics</a>
              </li>
              <li>
                <a>Applied Jobs</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex lg:gap-5">
          <a className="hover:underline" href="">
            Statistics
          </a>
          <a className="hover:underline" href="">
            Applied Jobs
          </a>
          <a className="hover:underline" href="/blog">
            Blog
          </a>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white">
            Start Applying
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
