const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="grid gap-3 border p-5 rounded-md">
      <img className="w-[100px]" src={logo} alt="" />
      <h3 className="font-bold">{job_title}</h3>
      <small className="text-gray-500">{company_name}</small>
      <div className="flex gap-2">
        <div className="border border-[#7f8ffe] p-1 rounded-md">
          <p className="text-[#7f8ffe]">{remote_or_onsite}</p>
        </div>
        <div className="border border-[#7f8ffe] p-1 rounded-md">
          <p className="text-[#7f8ffe]">{job_type}</p>
        </div>
      </div>
      <div className="flex gap-4 p-2">
        <div className="flex gap-1">
          <img
            className="w-[30px]"
            src="../../../public/assets/icons/Location.png"
            alt=""
          />
          <p>{location}</p>
        </div>
        <div className="flex gap-1">
          <img
            className="w-[30px]"
            src="../../../public/assets/icons/money.png"
            alt=""
          />
          <p>Salary: {salary}</p>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white">
          View Details
        </a>
      </div>
    </div>
  );
};

export default Job;
