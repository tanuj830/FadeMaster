"use client";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { UpdateIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { error } from "console";
import { File, Plus, Router } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ResumeBuilder = () => {
  const [resumes, setResumes] = useState([] as any[]);
  // useEffect(() => {

  // }, [user]);

  const router = useRouter();

  return (
    <div className="h-[80vh] lg:h-ful w-full">
      {resumes.length > 0 ? (
        <div>Tool</div>
      ) : (
        <div className="flex justify-center h-full w-full items-center ">
          {/* <h6>Your current route is {path}</h6> */}
          <div className="flex flex-col items-center text-center gap-5">
            <span className="w-fit bg-secondary p-5 rounded-full ">
              <File className="w-10 h-10 text-primary" />
            </span>
            <div className="md:w-[60%]">
              <h5 className="text-foreground font-medium my-4">
                You dont have any resume created
              </h5>
              <p className="text-muted-foreground text-wrap leading-7 text-sm">
                You currently dont have any resume on which you worked on,
                please create some so that you can see them right here.
              </p>
            </div>{" "}
            <Link href="/dashboard/resume-builder/playground">
              <Button className="text-primary-foreground">
                Create a new resume
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
