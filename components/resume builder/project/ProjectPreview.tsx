import React from "react";

interface ProjectPreviewProps {
  projectPageData: Array<{
    title: string;
    skills: string;
    startDate: string;
    endDate: string;
    disp: string;
  }>;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ projectPageData }) => {
  return (
    <div>
      <div className="mt-2">
        <h2 className="bg-gray-200 py-1 rounded-sm text-xs w-full text-center font-bold uppercase">
          Projects
        </h2>
      </div>
      {projectPageData.length > 0
        ? projectPageData.map((data) => (
            <div className="py-1">
              <div className="text-xs flex justify-between py-[2px]">
                <span className=" font-semibold text-sm">
                  {data.title}{" "}
                  {data.skills.length > 0 ? (
                    <span className="italic font-normal">| {data.skills}</span>
                  ) : null}
                </span>
                <span className="italic font-semibold text-sm">
                  {data.startDate} {data.endDate}
                </span>
              </div>

              <p className="text-xs">{data.disp}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default ProjectPreview;
