"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      img: "/url.png",
      content: `I developed this fully responsive MERN web app with authentication
            and authorization using
              React, Express, Typescript, tailwind, MongoDB and Nodejs.
            Developed feature to authorize the user and user can short the long
            url and delete the shorten url. Implemented feature to store data in
            database.`,
      url: "https://url-client-gamma.vercel.app/",
      code: "https://github.com/Vadivel-Babu/urlClient",
    },
    {
      img: "/cart.png",
      content: `I developed this fully responsiveMERN web app with authentication
            and authorization using React, Express, Typescript, tailwind, MongoDB and Nodejs.
            Developed feature to store data in frontend in local storage to keep the data persisted.Implemented routing feature using react-router.`,
      url: "https://cart-kd38.vercel.app/",
      code: "https://github.com/Vadivel-Babu/reduxcart",
    },
  ];
  return (
    <div
      id="projects"
      className="text-white h-[100dvh] mt-[150px] pt-10 md:mt-20 "
    >
      <motion.h1
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, translateY: 0 },
        }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-2xl md:text-5xl mb-2 md:mb-4 font-bold text-center"
      >
        <span className="text-purple-100">My </span>Projects
      </motion.h1>
      <motion.div
        style={{ opacity: 1 }}
        className="flex gap-5 flex-wrap items-center justify-center"
      >
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: i * 0.2, duration: 0.5 },
            }}
            key={i}
            viewport={{ once: true, amount: 0.5 }}
            animate={{ translateX: 0 }}
            className="max-w-[300px]  flex flex-col items-center  p-3 border-2 border-purple gap-3  md:mt-10  rounded-lg"
          >
            <Image src={project.img} width={250} height={250} alt="url" />
            <p>{project.content}</p>
            <div className="flex gap-4">
              <a
                href={project.url}
                target="blank"
                className="relative inline-flex h-12 w-[100px] overflow-hidden rounded-full p-[1px]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,purple_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Live site
                </span>
              </a>
              <a
                className="p-[3px] relative"
                target="blank"
                href={project.code}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Code
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
