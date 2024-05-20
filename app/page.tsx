"use client";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
