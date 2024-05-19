import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { IoSendOutline } from "react-icons/io5";

const Chat = () => {
  const [roomid, setRoomid] = React.useState("");
  const [idCopied, setIdCopied] = React.useState(false);
  useEffect(() => {
    setRoomid(localStorage.getItem("roomid") || "");
  }, []);

  useEffect(() => {
    if (idCopied) {
      setTimeout(() => {
        setIdCopied(false);
      }, 2000);
    }
  }, [idCopied]);

  return (
    <div className=" flex flex-col justify-between gap-1 h-full   w-full shadow-lg bg-muted   rounded-lg overflow-y-scroll hideScrollbar">
      <div className="h-[90%] overflow-y-scroll p-3 hideScrollbar">
        <h6 className="text-md font-medium">
          Chat Box{" "}
          <span
            className="text-muted-foreground text-xs hover:underline cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(roomid);
              setIdCopied(true);
            }}
          >
            #{roomid}
          </span>
        </h6>
        <p className="text-xs text-secondary-foreground">
          Chat with your roommates{" "}
          {idCopied ? (
            <span className="text-primary text-md">ID Copied </span>
          ) : null}
        </p>
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>
        {/* ------------------------ */}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>{" "}
        <div className="flex justify-start items-center mt-5">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Anuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hello
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col mt-1 ">
            <small className="text-xs italic">Tanuj</small>
            <span className="bg-background px-2 py-1 rounded-lg text-xs">
              Hii hdkajhd kjahdjh asjdhak
            </span>
          </div>
        </div>
        {/* --------------------*/}
      </div>
      {/* input chat  */}
      <div className="h-[9%] bg-muted border  rounded-lg overflow-hidden  ">
        <div className="flex items-center relative  w-full h-full">
          <input
            className=" w-full h-full outline-none px-4 text-sm bg-background"
            placeholder="Hii roommate"
          />
          <span className=" rounded-md p-2 absolute right-1 top-1 bottom-1 flex justify-center items-center bg-background cursor-pointer">
            {/* <SendHorizontalIcon className="w-5 h-7" /> */}
            <IoSendOutline className="w-5 h-7" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
