import jobs from '../../../public/jobs.json';
import Job from '../Job/Job';

const FeaturedJob = () => {
  return (
    <div className='p-5'>
      <div className="grid items-center text-center mb-16">
        <h1 className="font-bold text-4xl mb-8">Featured Jobs</h1>
        <p className="text-gray-500 mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {
            jobs.map(job => <Job job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJob;
