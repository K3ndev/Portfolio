import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Burger } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useAtom } from "jotai";
import { activeDiv } from "../../store/activeDiv";

interface props{
  scrollToProfile: ()=> void, 
  scrollToProjects: ()=> void,
  scrollToContact: ()=> void;
}

export default function Nav(props: props) {
  // progress bar animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // burger
  const [opened, setOpened] = useState(false);

  // scroll burger auto close [ x: 0, y: 245]
  const [scroll] = useWindowScroll();
  if (scroll.y > 520 && opened) {
    setOpened(false);
  }

  //destructuring for scrollTo Div
  const { scrollToProfile, scrollToProjects, scrollToContact } = props;

  // jotai states
  const [isVisible, setIsVisible] = useAtom(activeDiv);
  const { isVisible_profile, isVisible_projects, isVisible_contact } =
    isVisible;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-trinary origin-bottom-left md:hidden"
        style={{ scaleX }}
      />

      <motion.nav className="px-10 py-12 flex justify-between md:fixed md:w-full "
        initial={{ y: -250}} animate={{ y: 0 }} transition={{ duration: 1}}
      >
        <div className="font-Roboto-Slab leading-5 text-trinary prose prose-lg md:text-2xl md:leading-6">
          K3n
          <br />
          dev.
        </div>
        <ul className="hidden md:flex md:gap-5 font-Raleway text-font-Secondary">
          <li>
            <button
              onClick={() => scrollToProfile()}
              className={`hover:text-trinary first-letter:text-trinary ${
                isVisible_profile ? "text-trinary" : ""
              }`}
              id={`${
                isVisible_profile ? "underline-active" : "underline-link"
              }`}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToProjects()}
              className={`hover:text-trinary first-letter:text-trinary ${
                isVisible_projects ? "text-trinary" : ""
              }`}
              id={`${
                isVisible_projects ? "underline-active" : "underline-link"
              }`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToContact()}
              className={`hover:text-trinary first-letter:text-trinary ${
                isVisible_contact ? "text-trinary" : ""
              }`}
              id={`${
                isVisible_contact ? "underline-active" : "underline-link"
              }`}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className=" md:hidden">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            color="#76BA99"
          />
        </div>
      </motion.nav>
      {opened && (
        <motion.div
          className="flex justify-center pt-4 pb-14 animate-pulse"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="mailto:jkenneth_racelis@pm.me"
            className=" font-Raleway inline-block text-primary bg-trinary hover:bg-trinary/75 prose prose-sm border py-3 px-7 rounded-full"
          >
            Say Hello
          </a>
        </motion.div>
      )}
    </>
  );
}