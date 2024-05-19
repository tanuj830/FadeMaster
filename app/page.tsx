"use client";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import Link from "next/link";
import * as socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:8000");

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
