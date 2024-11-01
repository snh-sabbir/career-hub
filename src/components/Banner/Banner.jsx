const Banner = () => {
  return (
    <div className="flex items-center mb-10">
      <div>
        <h1 className="text-7xl font-semibold">
          One Step<br></br>Closer To Your<br></br>
          <span className="text-[#8c81ff]">Dream Job</span>
        </h1>
        <br />
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p><br />
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white">
            Get Started
          </a>
        </div>
      </div>
      <img src="../../../public/assets/images/user.png" alt="" />
    </div>
  );
};

export default Banner;
