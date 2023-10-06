import { FC } from "react";

import TitleSection from "@/components/atoms/TitleSection";
import JobItem from "./JobItem";

//import useFeaturedJobs from "@/hooks/useFeaturedJobs";
//import { JobType } from "@/types";

interface FeaturedJobsProps { }

const FeaturedJobs: FC<FeaturedJobsProps> = ({ }) => {
    //const { jobs, isLoading, error } = useFeaturedJobs();

    return (
        <div className="mt-32 mb-10">
            <TitleSection word1="Featured" word2="jobs" />
            <div className="grid grid-cols-4 gap-8 mt-12">
                {[0, 1, 2].map((item: number) => (
                    <JobItem key={item} image="/images/company.png" jobType="full time" name="email marketing" type="agency" location="tangerang, jakarta" desc="lorem ipsum" category={["marketing", "design"]} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedJobs;