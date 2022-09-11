import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersection } from "@mantine/hooks";
import { useAtom } from "jotai";
import { activeDiv } from "../../store/activeDiv";

export default function Profile() {
  // listener for div is visible or not
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });
  const isIntersecting = entry?.isIntersecting;

  // jotai states
  const [isVisible, setIsVisible] = useAtom(activeDiv);

  // change if the listener isVisible or not
  useEffect(() => {
    if (isIntersecting) {
      setIsVisible({
        isVisible_profile: true,
        isVisible_projects: false,
        isVisible_contact: false,
      });
    }
  }, [isIntersecting]);

  return (
    <section
      className="px-10 flex flex-col mb-72 md:w-3/4 md:mx-auto md:mb-0 lg:w-1/2 md:h-screen md:snap-start md:flex md:justify-center"
      id="Profile"
    >
      <div ref={ref}>
        <div>
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
            I&apos;m React developer. I build a front-end application that
            contributes to the entire product's success. View a selection of my
            work under projects section.
          </p>
        </div>
        <div className="">
          <motion.a
            whileTap={{ scale: 0.9 }}
            target="_blank"
            href="https://docs.google.com/document/d/1_1IBzECs29eryEUL-8Yr32n4-MIBvdF6/edit?usp=sharing&ouid=105405203970849961978&rtpof=true&sd=true"
            className=" font-Raleway inline-block text-trinary prose prose-lg mt-12 border border-trinary py-5 px-7 hover:bg-trinary/10"
          >
            Get My Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
