"use client";
import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Chat from "./Chat";
import { useTheme } from "next-themes";
import * as socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:8000");

const CodeChatPlayGround = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([] as any[]);

  window.onmessage = function (e) {
    if (e.data && e.data.language) {
      console.log(e.data);
      // handle the e.data which contains the code object
    }
  };

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <>
      <div className="h-full hidden lg:inline-block w-full">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={80}>
            <iframe
              height="100%"
              src={`https://onecompiler.com/embed/python?codeChangeEvent=true&${
                theme.theme === "dark" ? "theme=dark" : null
              }`}
              width="100%"
            ></iframe>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel className="px-5 " defaultSize={20}>
            <Chat />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="h-full inline-block lg:hidden w-full">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={80}>
            <iframe
              height="100%"
              src={`https://onecompiler.com/embed/python?codeChangeEvent=true&${
                theme.theme === "dark" ? "theme=dark" : null
              }`}
              width="100%"
            ></iframe>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel className="lg:px-5 " defaultSize={20}>
            <Chat />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default CodeChatPlayGround;
