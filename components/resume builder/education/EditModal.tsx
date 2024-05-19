import React from "react";
import { IoIosClose } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
interface EditModalProps {
  dataObject: {
    year: string;
    school: string;
    degree: string;
    grade: string;
  };
  mainDataArray: Array<any>;
  setShowEditModal: Function;
  setData: Function;
}

const EditModal: React.FC<EditModalProps> = ({
  dataObject,
  mainDataArray,
  setShowEditModal,
  setData,
}) => {
  const [year, setYear] = React.useState(dataObject.year);
  const [degree, setDegree] = React.useState(dataObject.degree);
  const [school, setSchool] = React.useState(dataObject.school);
  const [grade, setGrade] = React.useState(dataObject.grade);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    for (var i = 0; i < mainDataArray.length; i++) {
      var dataToUpdate = { year, degree, school, grade };
      var result = mainDataArray.filter((item) => item != dataObject);
      setData([...result, dataToUpdate]);
    }

    setShowEditModal(false); // closing model
  };

  return (
    <div className="fixed w-full h-screen top-0 bottom-0 right-0 left-0 flex z-[1000] bg-[#cccccc89] text-muted-foreground">
      <div className="w-[95%] md:w-[60%] lg:w-[40%] m-auto bg-background  rounded-lg ">
        <div className="flex  items-center justify-between p-5  border-b border-muted shadow-sm">
          <h6>Update</h6>
          <button className="text-3xl" onClick={() => setShowEditModal(false)}>
            <IoIosClose />
          </button>
        </div>
        <div className="p-7 flex justify-center  items-center w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="form flex flex-col gap-3 w-full">
              <div className="grid w-full  items-center gap-1.5">
                <Label>Degree</Label>
                <Input
                  required
                  className="w-full"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Year</Label>
                <Input
                  required
                  className="w-full"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>School</Label>
                <Input
                  required
                  className="w-full"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Grade</Label>
                <Input
                  required
                  className="w-full"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  type="text"
                />
              </div>
            </div>

            <div className="py-5 flex justify-end items-center gap-4">
              <Button
                className="bg-white text-black hover:text-white  "
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </Button>
              <Button className="text-white">Update Details </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
