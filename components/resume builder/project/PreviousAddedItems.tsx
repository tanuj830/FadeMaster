import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";
import EditModal from "./EditModal";

interface PreviousAddedItemsProps {
  data: Array<any>;
  setData: Function;
}

const PreviousAddedItems: React.FC<PreviousAddedItemsProps> = ({
  data,
  setData,
}) => {
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [editData, setEditData] = React.useState({} as any);

  const handleDelete = (d: any) => {
    var result = data.filter((item) => item != d);
    setData(result);
  };

  return (
    <div>
      {showEditModal ? (
        <EditModal
          dataObject={editData}
          mainDataArray={data}
          setShowEditModal={setShowEditModal}
          setData={setData}
        />
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
        {data.map((d) => (
          <div className="bg-muted p-5 rounded-xl flex flex-col gap-2 justify-between  h-40 overflow-hidden ">
            <div className="flex flex-col md:items-start  gap-1 h-32 ">
              <div className="flex flex-col  overflow-hidden	h-[50%]">
                <label className="text-[8px] text-muted-foreground uppercase">
                  title
                </label>
                <h6 className="md:text-xs text-secondary-foreground">
                  {d.title}
                </h6>
              </div>
              <div className="flex flex-col overflow-hidden h-[50%]">
                <label className="text-[8px] text-muted-foreground uppercase">
                  skills
                </label>
                <h6 className="md:text-xs text-secondary-foreground">
                  {d.skills}
                </h6>
              </div>
              {/* <div className="flex flex-col  overflow-hidden h-full	 w-[25%]">
                <label className="text-[8px] text-gray-300 uppercase">
                  description
                </label>
                <h6 className="text-[12px] ">{d.disp}</h6>
              </div>
              <div className="flex flex-col  overflow-hidden h-full	w-[25%]">
                <label className="text-[8px] text-gray-300 uppercase">
                  duration
                </label>
                <h6 className="text-[12px] ">
                  {d.startDate}-{d.endDate}
                </h6>
              </div> */}
            </div>
            {/* buttons */}
            <div className="flex items-end h-8 flex-row justify-end gap-4 ">
              <button
                className="text-md md:text-xl rounded-full text-primary "
                onClick={() => {
                  setShowEditModal(true);
                  setEditData(d);
                }}
              >
                <CiEdit />
              </button>
              <button
                className="text-md md:text-lg rounded-full text-primary "
                onClick={() => handleDelete(d)}
              >
                <IoTrashBinOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousAddedItems;
