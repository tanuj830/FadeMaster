import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { IoIosClose } from "react-icons/io";

interface EditModalProps {
  dataObject: {
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    city: string;
    disp: string;
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
  const [title, setTitle] = React.useState(dataObject.title);
  const [employer, setEmployer] = React.useState(dataObject.employer);
  const [startDate, setStartDate] = React.useState(dataObject.startDate);
  const [endDate, setEndDate] = React.useState(dataObject.endDate);
  const [city, setCity] = React.useState(dataObject.city);
  const [disp, setDisp] = React.useState(dataObject.disp);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    for (var i = 0; i < mainDataArray.length; i++) {
      var dataToUpdate = { title, employer, startDate, endDate, disp, city };
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
                <Label>Title</Label>
                <Input
                  required
                  className="w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Title</Label>
                <Input
                  required
                  className="w-full"
                  value={employer}
                  onChange={(e) => setEmployer(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Start Date</Label>
                <Input
                  required
                  className="w-full"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>End Date</Label>
                <Input
                  required
                  className="w-full"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>City</Label>
                <Input
                  required
                  className="w-full"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Description</Label>
                <Input
                  required
                  className="w-full"
                  value={disp}
                  onChange={(e) => setDisp(e.target.value)}
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
