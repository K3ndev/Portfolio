import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Nav() {
  // progress bar animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // hamburger
  // const [isBurger, setIsBurger] = useState(false);
  // console.log(isBurger);
  // const handleKeyDown = (e) => {
  //   if (e.keyCode === 27) {
  //     console.log('You pressed the escape key!');
  //   }
  // };

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
        <div className="flex space-y-2 flex-col justify-center md:hidden">
          <span className="block w-6 h-0.5 bg-trinary" />
          <span className="block w-8 h-0.5 bg-trinary" />
        </div>
      </nav>
    </>
  );
}
