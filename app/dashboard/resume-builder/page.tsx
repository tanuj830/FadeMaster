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
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    axios
      .get(`https://profileproserver.onrender.com/resume/all/${user?.email}`)
      .then((res) => setResumes(res.data))
      .catch((error) => console.log(error));
    // axios
    //   .get(`http://localhost:8000/resume/all/${user?.email}`)
    //   .then((res) => setResumes(res.data))
    //   .catch((error) => console.log(error));
  }, [user]);

  const router = useRouter();
  // const handleclick = (resume:Object)=>{
  //   router.push(
  //     {
  //          pathname: '/dashboard/resume-builder/playground/',
  //               query:  {data: JSON.stringify(resume)}
  //     }
  //   )
  // }
  return (
    <div className="h-[80vh] lg:h-ful w-full">
      {resumes.length > 0 ? (
        <div>
          <div className="flex justify-end items-center mb-3">
            <Button
              className="flex items-center justify-center gap-2"
              size={"sm"}
            >
              <Plus className="w-5 h-5" /> <span> Create Resume</span>
            </Button>
          </div>
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
            {resumes?.map((resume) => (
              <Link
                // onClick={() =>
                //   router.push("/dashboard/resume-builder/playground/")
                // }
                key={resume._id}
                href={{
                  pathname: `/dashboard/resume-builder/playground/`,
                  query: { resumeid: resume._id },
                }}
                className="w-full p-3 md:p-5  rounded-tr-[40px] rounded-sm bg-muted overflow-hidden"
              >
                <img
                  src="/resume.jpeg"
                  className="object-cover h-40 w-full object-top rounded-tr-[40px] rounded-sm"
                  alt=""
                />

                <div className=" pt-4">
                  <h6 className="overflow-hidden text-sm">
                    {resume.contact?.name}
                  </h6>
                  <small className=" mt-1 text-xs flex gap-1 items-center text-muted-foreground">
                    <UpdateIcon />
                    <span>{resume.Date.slice(0, 10)}</span>
                  </small>
                </div>
              </Link>
            ))}
          </div>
        </div>
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
