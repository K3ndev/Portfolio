import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { saveAs } from 'file-saver';
import { useAtom } from "jotai";
import { activeDiv } from "../../store/activeDiv";

export default function Profile() {

  // animation state 
  const [opacityIncrease, setOpacityIncrease] =  useState(0)
  const [delayIncrease, setDelayIncrease] =  useState(1)

  // listener for div is visible or not
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });
  const isIntersecting = entry?.isIntersecting;

  // jotai states
  const [isVisible, setIsVisible] = useAtom(activeDiv);
  const matches = useMediaQuery('((min-width: 768px)');

  // change if the listener isVisible or not
  useEffect(() => {
    if (isIntersecting) {
      setIsVisible({
        isVisible_profile: true,
        isVisible_projects: false,
        isVisible_contact: false,
      });
      setOpacityIncrease(1)
    }
    if(isIntersecting === false && matches){
      setOpacityIncrease(0)
      setDelayIncrease(0)
    }
  }, [isIntersecting]);


  // downloading a file 
  function saveAs(content: any, fileName: string) {
    const a = document.createElement("a");
    const isBlob = content.toString().indexOf("Blob") > -1;
    let url = content;
    if (isBlob) {
      url = window.URL.createObjectURL(content);
    }
    a.href = url;
    a.download = fileName;
    a.click();
    if (isBlob) {
      window.URL.revokeObjectURL(url);
    }
  }
  function downloadFile() {
    const file = 'https://k3ndev.vercel.app/Kenneth-Racelis_Resume.docx.pdf';
    saveAs(file, "Kenneth-Racelis_Resume.docx.pdf");
  }

  return (
    <section
      className="px-10 flex flex-col mb-[26rem] md:w-3/4 md:mx-auto md:mb-0 lg:w-1/2 md:h-screen md:snap-start md:flex md:justify-center"
      id="Profile"
    >
      <motion.div initial={{ opacity: 0}} animate={{ opacity: opacityIncrease }} transition={{ duration: 0.5, delay: delayIncrease}}>
        <div>
          <h1 ref={ref} className="font-Raleway text-trinary prose prose-sm md:prose-base mb-5 mt-5 md:mt-0">
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
          
          <motion.button whileTap={{ scale: 1.1  }} onClick={downloadFile} className=" font-Raleway inline-block text-trinary prose prose-lg mt-12 border border-trinary py-5 px-7 hover:bg-trinary/10 cursor-pointer"
          >Get My Resume</motion.button>
        </div>
      </motion.div>
    </section>
  );
}