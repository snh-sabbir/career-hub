const JobCategory = () => {
  return (
    <div className="mx-auto py-5 px-12">
      <div className="grid items-center text-center mb-16">
        <h1 className="font-bold text-4xl mb-8">Job Category List</h1>
        <p className="text-gray-500 mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="flex justify-between gap-4 mx-6">
        <div>
          <img
            className="mb-3"
            src="../../../public/assets/icons/accounts.png"
            alt=""
          />
          <div>
            <h1 className="font-bold">Account & Finance</h1>
            <p>
              <small className="text-gray-500">300 Jobs Available</small>
            </p>
          </div>
        </div>

        <div>
          <img
            className="mb-3"
            src="../../../public/assets/icons/creative.png"
            alt=""
          />
          <div>
            <h1 className="font-bold">Creative Design</h1>
            <p>
              <small className="text-gray-500">100+ Jobs Available</small>
            </p>
          </div>
        </div>

        <div>
          <img
            className="mb-3"
            src="../../../public/assets/icons/marketing.png"
            alt=""
          />
          <div>
            <h1 className="font-bold">Marketing & Sales</h1>
            <p>
              <small className="text-gray-500">150 Jobs Available</small>
            </p>
          </div>
        </div>

        <div>
          <img
            className="mb-3"
            src="../../../public/assets/icons/chip.png"
            alt=""
          />
          <div>
            <h1 className="font-bold">Engineering Job</h1>
            <p>
              <small className="text-gray-500">224 Jobs Available</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
