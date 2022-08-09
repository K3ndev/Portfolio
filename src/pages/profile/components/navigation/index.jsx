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
        className="fixed top-0 left-0 right-0 h-1 bg-trinary origin-bottom-left"
        style={{ scaleX }}
      />
      <nav className="flex justify-between py-14">
        <div>
          <h1 className="text-trinary prose prose-lg leading-5">
            K3n
            <br />
            dev.
          </h1>
        </div>

        <div className="flex space-y-2 flex-col justify-center">
          <span className="block w-6 h-0.5 bg-trinary" />
          <span className="block w-8 h-0.5 bg-trinary" />
        </div>

        {/* {isBurger ? (
          <div className="h-screen w-screen bg-trinary border" />
        ) : (
          <div
            className="flex space-y-2 flex-col justify-center"
            onClick={() => {
              setIsBurger(!isBurger);
            }}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex="0"
          >
            <span className="block w-6 h-0.5 bg-trinary" />
            <span className="block w-8 h-0.5 bg-trinary" />
          </div>
        )} */}

        {/* https://www.youtube.com/watch?v=74ys-dT94mA */}
      </nav>
    </>
  );
}
