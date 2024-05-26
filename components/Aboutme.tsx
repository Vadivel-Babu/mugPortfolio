"use client";
import { motion, useScroll } from "framer-motion";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
import React, { useRef } from "react";

const Aboutme = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <div
      id="aboutme"
      className="text-white h-[100dvh] mt-10 pt-10 max-w-[550px]"
    >
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{
          opacity: 1,
          translateX: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-center text-2xl md:text-5xl font-bold"
      >
        About <span className="text-purple">Me</span>
      </motion.h1>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{
          opacity: 1,
          translateX: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.6 }}
        className="p-3 mt-10 rounded-2xl shadow-2xl shadow-purple-100"
      >
        <div className="rounded-full mr-2 float-left w-[150px] h-[150px] overflow-hidden">
          <Image
            src="/img.jpg"
            alt="developer"
            width={250}
            height={250}
            className="object-cover h-full transition duration-500 hover:scale-110"
          />
        </div>

        <p className="text-wrap text-sm md:text-lg ">
          As a frontend developer with a background in mechanical engineering, I
          bring a unique blend of technical expertise and creative
          problem-solving skills to web development. With experience in building
          responsive applications using{" "}
          <span className="text-purple-100 font-semibold">
            HTML, CSS, JavaScript, and React,
          </span>{" "}
          I excel in creating intuitive user interfaces. My engineering
          background enhances my analytical abilities and systematic approach to
          troubleshooting, ensuring every project is functional and visually
          appealing.
        </p>
        <div className="mt-2 flex  items-center gap-3 flex-wrap">
          <h1 className="text-xl md:text-3xl">Skills:</h1>
          <FaReact className="text-xl md:text-3xl text-cyan-600" />
          <RiTailwindCssFill className="text-xl md:text-3xl text-sky-500" />
          <FaHtml5 className="text-xl md:text-3xl text-orange-500" />
          <FaCss3 className="text-xl md:text-3xl text-yellow-300" />
          <SiJavascript className="text-xl md:text-3xl text-yellow-400" />
          <SiTypescript className="text-xl md:text-3xl text-sky-600" />
          <RiNextjsFill className="text-xl md:text-3xl text-slate-200" />
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
