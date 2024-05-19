"use client";
import ProjectPreview from "./project/ProjectPreview";
import ExperiencePreview from "./experience/ExperiencePreview";
import EducationPreview from "./education/EducationPreview";
import ContactPreview from "./contact/ContactPreview";
import { Button } from "../ui/button";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
interface PreviewProps {
  contactPageData: {
    name: string;
    address: string;
    city: string;
    postalcode: string;
    phone: string;
    email: string;
    linkedin: string;
  };
  educationPageData: Array<{
    year: string;
    degree: string;
    school: string;
    grade: string;
  }>;
  experiencePageData: Array<{
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    city: string;
    disp: string;
  }>;
  projectPageData: Array<{
    title: string;
    skills: string;
    startDate: string;
    endDate: string;
    disp: string;
  }>;
  isExistingData: Boolean;
  resumeID: string;
}

const Preview: React.FC<PreviewProps> = ({
  contactPageData,
  educationPageData,
  experiencePageData,
  projectPageData,
  isExistingData,
  resumeID,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { user } = useKindeBrowserClient();
  const handleSave = () => {
    const data = {
      contact: contactPageData,
      education: educationPageData,
      experience: experiencePageData,
      project: projectPageData,
      userEmail: user?.email,
    };

    if (resumeID) {
      // update data

      axios
        .post(`http://localhost:8000/resume/update/${resumeID}`, data)
        .then((res) => console.log("updated"))
        .catch((err) => console.log(err));
    } else {
      // create new data

      axios
        .post("http://localhost:8000/resume/create", data)
        .then((res) => console.log("saved"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="w-full h-full  border border-muted shadow-sm">
      <div className="">
        <div className="flex justify-end items-center gap-3">
          <Button onClick={handleSave} variant={"secondary"} className="">
            Save
          </Button>

          <Button
            onClick={() => {
              handlePrint(null, () => componentRef.current);
            }}
            className="text-primary-foreground"
          >
            Download Resume
          </Button>
        </div>
      </div>
      <div
        ref={componentRef}
        className="bg-white text-black w-full h-screen py-5 px-10 "
      >
        {Object.keys(contactPageData) ? (
          <div>
            <ContactPreview contactPageData={contactPageData} />
            <EducationPreview educationPageData={educationPageData} />
            <ExperiencePreview experiencePageData={experiencePageData} />
            <ProjectPreview projectPageData={projectPageData} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Preview;
