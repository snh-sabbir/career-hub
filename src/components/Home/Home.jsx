import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;