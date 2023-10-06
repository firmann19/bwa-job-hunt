"use client"


import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";
//import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

interface LatestJobsProps { }

const LatestJobs: FC<LatestJobsProps> = ({ }) => {
    //const { jobs, isLoading, error } = useFeaturedJobs();

    return (
        <div className="py-16 mt-32 mb-10 relative">
            <TitleSection word1="Latest" word2="jobs open" />

            <div className="mt-12 grid grid-cols-3 gap-8">
                {[0, 1, 2].map((item: number) => (
                    <JobItem key={item} image="/images/company2.png" desc="lorem Ipsum" jobType = "full time" location = "tangerang, jakarta" name = "Programmer" type = "agency" skills = { ["marketing", "design"]} />
                ))}
            </div>
        </div>
    );
};

export default LatestJobs;