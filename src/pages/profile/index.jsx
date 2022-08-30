import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section
      className="px-10 flex flex-col mb-72 md:w-3/4 md:mx-auto md:mb-0 lg:w-1/2 md:h-screen md:snap-start md:flex md:justify-center"
      id="Profile"
    >
      <div className="">
        <div className="">
          <h1 className="font-Raleway text-trinary prose prose-sm md:prose-base mb-5">
            Hi, my name is
          </h1>
        </div>
        <div className="">
          <h2 className="font-Raleway text-font-Primary prose prose-2xl text-4xl md:text-6xl">
            Kenneth Racelis.
          </h2>
        </div>
        <div className="">
          <h3 className="font-Raleway text-font-Secondary prose prose-2xl text-4xl mt-2 md:text-6xl">
            I build things for the web.
          </h3>
        </div>
        <div className="">
          <p className="font-Montserrat text-font-Secondary prose prose-sm md:prose-md my-5">
            I&apos;m a self-taught front end developer. I build a website with
            React and design using different css framework. Im focused on
            improving website performance, responsiveness and accessibility.
          </p>
        </div>
        <div className="">
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="##"
            className=" font-Raleway inline-block text-trinary prose prose-lg mt-12 border border-trinary py-5 px-7 hover:bg-trinary/10"
          >
            Get My Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
