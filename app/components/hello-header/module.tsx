"use client";
import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["900"] });

const items = [
  { text1: "React", text2: "Frontend", color: "text-sky-400" },
  { text1: "Svelte", text2: "Frontend", color: "text-orange-300" },
  { text1: "Rust", text2: "Backend", color: "text-fuchsia-400" },
  { text1: "Go", text2: "Backend", color: "text-blue-400" }
];

export default function HelloHeader() {
  const [index, setIndex] = useState(0);
  const directionRef = useRef(1);

  const time = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex == 0) {
          directionRef.current = 1;
        } else if (prevIndex == 3) {
          directionRef.current = -1;
        }

        return prevIndex + directionRef.current;
      });
    }, time);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`${inter.className} text-[1.7rem]/[2rem] text-white font-black`}
    >
      <span className="text-yellow-300">Hello!</span>
      {" My name is "}
      <span translate="no" className="text-red-400">
        Toffee.35
      </span>
      {". I am a "}
      <span className="text-green-400">Web Developer</span>
      {" specializing in "}
      <div className="h-[2rem] overflow-hidden inline-flex flex-col">
        {items.map(({ text1, text2, color }, i) => (
          <div
            translate="no"
            key={i}
            style={{ transform: `translateY(-${index * 2}rem)` }}
            className={`flex justify-evenly space-x-2 ${color} transition-transform duration-400`}
          >
            <span>{text1}</span>
            <span>{text2}</span>
          </div>
        ))}
      </div>
      {" development."}
    </h2>
  );
}
