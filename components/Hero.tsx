"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-36 pb-20 h-[100dvh] md:pt-52">
      <div>
        <Spotlight fill="#d42fed" className="w-[50%]" />
        <motion.h1
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0", transition: { delay: 1.2 } }}
          className="text-white text-3xl md:text-5xl"
        >
          Hello 🖐️,
          <br /> I&apos;m{" "}
          <span className="text-purple font-bold">Jhon Mathew</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0", transition: { delay: 1.5 } }}
          className="text-white mt-5 text-xl md:text-2xl max-w-[500px]"
        >
          I&apos;m a{" "}
          <span className="text-purple-100 font-semibold">
            Frontend Developer{" "}
          </span>
          🧑‍💻 passionate about bring designs to life with precision and
          responsiveness, creating seamless user journeys.
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.8 } }}
          href="#projects"
          className="mt-5 inline-flex h-12 animate items-center justify-center rounded-2xl border border-purple-800 bg-[linear-gradient(110deg,#000103,45%,#40014a,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors"
        >
          My work
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
