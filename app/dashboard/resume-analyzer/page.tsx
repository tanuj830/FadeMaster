import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import Link from "next/link";
import React from "react";

const ResumeAnalyzer = () => {
  return (
    <div className="h-[80vh] lg:h-full w-full">
      <div className="flex justify-center h-full w-full items-center ">
        {/* <h6>Your current route is {path}</h6> */}
        <div className="flex flex-col items-center text-center gap-5">
          <span className="w-fit bg-secondary p-5 rounded-full ">
            <File className="w-10 h-10 text-primary" />
          </span>
          <div className="md:w-[60%]">
            <h5 className="text-foreground font-medium my-4">
              You dont have any notes created
            </h5>
            <p className="text-muted-foreground text-wrap leading-7 text-sm">
              You currently dont have any resume to analyze. Add resume to
              ananlyze it's ATS score.
            </p>
          </div>
          <Link href="/dashboard/resume-analyzer/playground">
            <Button className="text-primary-foreground">
              Analyze a new resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
