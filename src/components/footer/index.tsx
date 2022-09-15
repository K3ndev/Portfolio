import React from "react";
import {motion} from 'framer-motion'
import SttPortal from "../sttPortal/index";

 const Footer: React.FC = () => {
  return (
    <>
      <div className="flex justify-center pb-10 text-center absolute bottom-0 left-0 right-0"
      
      >
        <div>
          <div className="text-font-Secondary prose prose-sm text-xs font-Montserrat ">
            Build by me ©2022
          </div>
          <div className="text-font-Secondary prose prose-sm text-xs font-Montserrat">
            Inspired by auspham.dev
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <SttPortal />
      </div>

      <div className="hidden fixed bottom-[7rem] right-0 p-6 w-24 md:flex justify-center">
        <motion.div className="flex rotate-90 md:gap-1 cursor-default"
        initial={{ originX: 10}} animate={{ originX: 0.5 }} transition={{ duration: 1}}
        >
          <div className="text-font-Secondary/40 text-sm transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 duration-900 hover:text-trinary">
            <a href="mailto:jkenneth_racelis@pm.me">jkenneth_racelis@pm.me</a>
          </div>
          <span className=" border-t-2 w-28 text-font-Secondary/40" />
        </motion.div>
      </div>
    </>
  );
}
export default Footer