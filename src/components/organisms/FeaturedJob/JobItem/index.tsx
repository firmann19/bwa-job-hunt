import { Badge } from "@/components/ui/badge";
//import { JobType, categoryJobType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface JobItemProps {
    desc: string;
    category: string[]
    name: string;
    type: string;
    location: string;
    image: string;
    jobType: string;
}

const JobItem: FC<JobItemProps> = ({
    category,
    desc,
    image,
    jobType,
    location,
    name,
    type,
    //skills,
}) => {
    return (
        <div className="border border-border p-6 cursor-pointer">
            <div className="flex flex-row justify-between items-start">
                <Image src={image} alt={image} width={48} height={48} />
                <span className="px-4 py-1 rounded border text-xs font-semibold text-primary border-primary">
                    {jobType}
                </span>
            </div>
            <div className="my-4">
                <div className="font-semibold text-lg">{name}</div>
                <div className="text-muted-foreground mb-3">
                    {type} . {location}
                </div>
                <div
                    className="text-muted-foreground h-12 line-clamp-2 text-ellipsis"
                    dangerouslySetInnerHTML={{ __html: desc }}
                ></div>
            </div>
            <div className="space-x-2">
                {category.map((item: string, i: number) => (
                    <Badge
                        key={item + i}
                        variant="outline"
                        className="rounded border-primary bg-primary/5 text-primary"
                    >
                        {item}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default JobItem;