"use client";
import React from "react";
import Input from "../Input";
import { TiArrowRightThick } from "react-icons/ti";
import { IoAdd } from "react-icons/io5";
import PreviousAddedItems from "./PreviousAddedItems";
interface ProjectProps {
  setProjectPageCompleted: Function;
  setProjectPageData: Function;
  projectPageData: Array<{
    title: string;
    startDate: string;
    endDate: string;
    skills: string;
    disp: string;
  }>;
}

const Project: React.FC<ProjectProps> = ({
  setProjectPageCompleted,
  setProjectPageData,
  projectPageData,
}) => {
  const [title, setTitle] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [disp, setDisp] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setProjectPageCompleted(true);
    let data = {
      title,
      skills,
      startDate,
      endDate,
      disp,
    };
    setProjectPageData([...projectPageData, data]);
  };
  const handleAddEducation = () => {};

  return (
    <div className="h-full  w-full p-5 md:p-10">
      <div className="flex justify-start h-full flex-col gap-5">
        <div>
          <h2 className="text-[1.4rem] lg:text-[1.8rem] font-medium">
            Please enter your <span className="text-[#0000ff]"> Project </span>{" "}
            info
          </h2>
          <small className="text-md text-muted-foreground leading-10">
            Project tells about your skills.
          </small>
        </div>
        <div>
          <PreviousAddedItems
            setData={setProjectPageData}
            data={projectPageData}
          />
        </div>
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input
                value=""
                label="Title"
                placeholder="ProfilePro"
                setText={setTitle}
              />
              <Input
                value=""
                label="Skills"
                placeholder="ReactJS, NextJS, JavaScript, TypeScript..."
                setText={setSkills}
              />
              <Input
                value=""
                label="Start Year"
                placeholder="2020-2024"
                setText={setStartDate}
              />
              <Input
                value=""
                label="End Year"
                placeholder="2020-2024"
                setText={setEndDate}
              />
              <Input
                value=""
                label="Description"
                placeholder="Explain your project"
                setText={setDisp}
              />
            </div>
            <div className="flex items-center gap-5">
              <button
                type="submit"
                onClick={handleAddEducation}
                className=" py-5 mt-5 font-medium w-fit  lg:mt-10 flex items-center justify-center gap-3"
              >
                <span className="text-2xl font-bold p-1  border border-gray-600 rounded-full">
                  <IoAdd />
                </span>
                <span>Add more</span>
                {/* <span className="text-2xl">
                <TiArrowRightThick />
              </span> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Project;
