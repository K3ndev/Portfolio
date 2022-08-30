import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Burger } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export default function Nav() {
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

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-trinary origin-bottom-left md:hidden"
        style={{ scaleX }}
      />

      <nav className="px-10 py-12 flex justify-between md:fixed md:w-full">
        <div className="font-Roboto-Slab leading-5 text-trinary prose prose-lg md:text-2xl md:leading-6">
          K3n
          <br />
          dev.
        </div>
        <ul className="hidden md:flex md:gap-5 font-Raleway text-font-Secondary">
          <li className="hover:text-trinary first-letter:text-trinary">
            <a href="#Profile">Profile</a>
          </li>
          <li className="hover:text-trinary first-letter:text-trinary">
            <a href="#Projects">Projects</a>
          </li>
          <li className="hover:text-trinary first-letter:text-trinary">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <div className=" md:hidden">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            color="#76BA99"
          />
        </div>
      </nav>
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
