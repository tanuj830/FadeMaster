"use client";
import Contact from "@/components/resume builder/contact/Contact";
import Education from "@/components/resume builder/education/Education";
import Experience from "@/components/resume builder/experience/Experience";
import Preview from "@/components/resume builder/Preview";
import Project from "@/components/resume builder/project/Project";
import React, { useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";

interface ContactType {
  name: string;
  address: string;
  city: string;
  postalcode: string;
  phone: string;
  email: string;
  linkedin: string;
}

type ExistingDatatype = {
  contact: ContactType;
  experience: Array<any>;
  education: Array<any>;
  project: Array<any>;
};

const page = () => {
  const data = useParams();
  console.log(data);
  // 1: Contact Details
  const [contactPageCompleted, setContactPageCompleted] = React.useState(false);
  const [contactPageActive, setContactPageActive] = React.useState(true);
  const [contactPageData, setContactPageData] = React.useState(
    {} as ContactType
  );
  // 2: Education Details
  const [educationPageCompleted, setEducationPageCompleted] =
    React.useState(false);
  const [educationPageActive, setEducationPageActive] = React.useState(false);
  const [educationPageData, setEducationPageData] = React.useState([
    {
      year: "2020-2024",
      degree: "Bachelor of Science in Computer Science",
      school: "Graphic Era Hill University",
      grade: "8.1/10",
    },
  ] as any);

  // 3: Experience Details
  const [experiencePageCompleted, setExperiencePageCompleted] =
    React.useState(false);
  const [experiencePageActive, setExperiencePageActive] = React.useState(false);
  const [experiencePageData, setExperiencePageData] = React.useState([
    {
      title: "Web Developer Intern",
      employer: "Visit Uttarakhand",
      startDate: "Mar 2023",
      endDate: "May 2023",
      city: "Dehradun",
      disp: "Build and optimized the front-end of a web application using ReactJS and NextJS framework; implemented performance enhancements that reduced page load time by 40 percent.",
    },
  ] as any);
  // {
  //   title: "Founder",
  //   employer: "ProfilePro.",
  //   startDate: "Jan 2024",
  //   endDate: "Present",
  //   city: "Dehradun",
  //   disp: "Building ProfilePro.: A web application which will help users to increase there productivity by 20 times. ",
  // }
  // 3: Project Details
  const [projectPageCompleted, setProjectPageCompleted] = React.useState(false);
  const [projectPageActive, setProjectPageActive] = React.useState(false);
  const [projectPageData, setProjectPageData] = React.useState([
    {
      title: "Talkify",
      skills: "ReactJS, NextJS, NodeJS",
      startDate: "Dec 2023",
      endDate: "Dec 2023",
      disp: "Executed and led the development of Talkify, a revolutionary web application that combined advanced language      capabilities and cutting-edge speech recognition technology, driving a 40 percent boost in user engagement and reducing      customer support issues by 25 percent.",
    },
  ] as any);
  const buttons = [
    {
      resumeID: 1,
      text: "Contact",
    },
    {
      resumeID: 2,
      text: "Education",
    },
    {
      resumeID: 3,
      text: "Experiences",
    },
    {
      resumeID: 4,
      text: "Projects",
    },
    {
      resumeID: 5,
      text: "Achievements",
    },
  ];

  // Function for showing resume component on the basis of resumeID
  const handleclick = (resumeID: Number) => {
    if (resumeID === 1) {
      setContactPageActive(true);
      setEducationPageActive(false);
      setExperiencePageActive(false);
      setProjectPageActive(false);
    } else if (resumeID === 2) {
      setContactPageActive(false);
      setEducationPageActive(true);
      setExperiencePageActive(false);
      setProjectPageActive(false);
    } else if (resumeID === 3) {
      setContactPageActive(false);
      setEducationPageActive(false);
      setExperiencePageActive(true);
      setProjectPageActive(false);
    } else if (resumeID === 4) {
      setContactPageActive(false);
      setEducationPageActive(false);
      setExperiencePageActive(false);
      setProjectPageActive(true);
    }
  };

  const [isUserModiExistData, setIsUserModiExistData] = React.useState(false); // is user updaitng exixting resume
  const [dataFetchCompleted, setDataFetchCompleted] = React.useState(false);
  const [resumeID, setResumeID] = React.useState<any>();
  const [userPrevData, setUserPrevData] = React.useState<ExistingDatatype>();
  const searchparams = useSearchParams();
  useEffect(() => {
    setResumeID(searchparams.get("resumeid") || "");
    if (resumeID)
      axios
        .get(`https://profileproserver.onrender.com/resume/${resumeID}`)
        .then((res) => {
          // axios.get(`http://localhost:8000/resume/${resumeID}`).then((res) => {
          // setUserPrevData(res.data);
          // if (resumeID) setDataFetchCompleted(true);
          if (res.data !== undefined) {
            setIsUserModiExistData(true);
            setContactPageData(res.data.contact);
            setEducationPageData(res.data.education);
            setExperiencePageData(res.data.experience);
            setProjectPageData(res.data.project);
          } else {
            setContactPageData({
              name: "Tanuj Bhatt",
              address: "Sunshine Enclave, Clement Town",
              city: "Dehradun",
              postalcode: "248002",
              phone: "7668088539",
              email: "tanujbhatt65@gmail.com",
              linkedin: "https://tanujbhatt.in/",
            });
          }
        });
  }, [resumeID]);
  return (
    <>
      <div className="lg:hidden flex flex-col-reverse lg:flex-row gap-5">
        <div className="flex  flex-col w-full lg:w-[50%]">
          <div className="flex justify-evenly mt-5 ">
            <div className="border-b h-2 w-full absolute  border-secondary -z-10" />
            {buttons.map((btn) => (
              <div key={btn.resumeID} className="flex flex-col items-center ">
                <div className="rounded-full h-3 w-3 bg-[#0000ff]" />
                <button
                  className="text-xs py-1 md:px-4 bg-muted rounded-3xl"
                  onClick={() => handleclick(btn.resumeID)}
                >
                  {btn.text}
                </button>
              </div>
            ))}
          </div>
          {contactPageActive ? (
            <Contact
              setContactPageCompleted={setContactPageCompleted}
              setContactPageData={setContactPageData}
              contactPageData={contactPageData}
            />
          ) : null}
          {educationPageActive ? (
            <Education
              setEducationPageCompleted={setEducationPageCompleted}
              setEducationPageData={setEducationPageData}
              educationPageData={educationPageData}
            />
          ) : null}
          {experiencePageActive ? (
            <Experience
              setExperiencePageCompleted={setExperiencePageCompleted}
              setExperiencePageData={setExperiencePageData}
              experiencePageData={experiencePageData}
            />
          ) : null}
          {projectPageActive ? (
            <Project
              setProjectPageCompleted={setProjectPageCompleted}
              setProjectPageData={setProjectPageData}
              projectPageData={projectPageData}
            />
          ) : null}
        </div>
        <div className="w-full lg:w-[50%]">
          <Preview
            contactPageData={contactPageData}
            educationPageData={educationPageData}
            experiencePageData={experiencePageData}
            projectPageData={projectPageData}
            isExistingData={isUserModiExistData}
            resumeID={resumeID}
          />
        </div>
      </div>

      {/* pc view */}
      <div className="hidden lg:inline w-full gap-5">
        <ResizablePanelGroup
          direction="horizontal"
          className=" w-full rounded-lg "
        >
          <ResizablePanel defaultSize={60}>
            <div className="flex  flex-col w-full ">
              <div className="flex justify-evenly mt-5 ">
                <div className="border-b h-2 w-full absolute border-secondary -z-10" />
                {buttons.map((btn) => (
                  <div
                    key={btn.resumeID}
                    className="flex flex-col items-center "
                  >
                    *
                    {/* <div className="rounded-full h-3 w-3 bg-[#0000ff]" /> */}
                    <button
                      className="text-xs py-1 md:px-4 bg-muted rounded-3xl"
                      onClick={() => handleclick(btn.resumeID)}
                    >
                      {btn.text}
                    </button>
                  </div>
                ))}
              </div>
              {contactPageActive ? (
                <Contact
                  setContactPageCompleted={setContactPageCompleted}
                  setContactPageData={setContactPageData}
                  contactPageData={contactPageData}
                />
              ) : null}
              {educationPageActive ? (
                <Education
                  setEducationPageCompleted={setEducationPageCompleted}
                  setEducationPageData={setEducationPageData}
                  educationPageData={educationPageData}
                />
              ) : null}
              {experiencePageActive ? (
                <Experience
                  setExperiencePageCompleted={setExperiencePageCompleted}
                  setExperiencePageData={setExperiencePageData}
                  experiencePageData={experiencePageData}
                />
              ) : null}
              {projectPageActive ? (
                <Project
                  setProjectPageCompleted={setProjectPageCompleted}
                  setProjectPageData={setProjectPageData}
                  projectPageData={projectPageData}
                />
              ) : null}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40}>
            <div className="w-full ">
              <Preview
                contactPageData={contactPageData}
                educationPageData={educationPageData}
                experiencePageData={experiencePageData}
                projectPageData={projectPageData}
                isExistingData={isUserModiExistData}
                resumeID={resumeID}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
