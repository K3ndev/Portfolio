import React, { useRef, useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CopyButton, ActionIcon, Tooltip } from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons";
import { useIntersection } from "@mantine/hooks";
import {motion} from 'framer-motion'
import { useAtom } from "jotai";
import { activeDiv } from "../../store/activeDiv";
import Footer from "../../components/footer/index";

const Contact: React.FC = () => {

  // animation 
  const [opacityIncrease, setOpacityIncrease] =  useState(0)

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
        isVisible_profile: false,
        isVisible_projects: false,
        isVisible_contact: true,
      });
      setOpacityIncrease(1)
    }
    if(isIntersecting === false){
      setOpacityIncrease(0)
    }
  }, [isIntersecting]);


  return (
    <section
      className="px-10 flex flex-col md:w-3/4 md:m-auto lg:w-1/2 md:h-screen md:snap-start md:flex md:justify-center relative"
      id="Contact"
    >
      <motion.div 
        initial={{ opacity: 0}} animate={{ opacity: opacityIncrease }} transition={{ duration: 0.5}}
        className="mb-[30rem] md:mb-0">
        <h2 className="text-trinary prose prose-xl md:prose-2xl mb-3 font-Raleway">
          Get in touch.
        </h2>
        <p className="text-font-Secondary prose prose-base font-Montserrat">
          If you want to work together, don&apos;t hesitate to contact me.
        </p>

        <div className="flex items-center">
          <motion.a
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
            href="mailto:jkenneth_racelis@pm.me"
            className="block text-font-Primary underline prose prose-base mt-2 font-Raleway hover:text-trinary"
          >
            jkenneth_racelis@pm.me
          </motion.a>

          {/* copy email */}
          <CopyButton value="jkenneth_racelis@pm.me" timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? "Copied" : "Copy"}
                withArrow
                position="right"
              >
                <ActionIcon onClick={copy}>
                  {copied ? (
                    <IconCheck size={16} className="text-trinary" />
                  ) : (
                    <IconCopy size={16} className="hover:text-trinary" />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </div>
        <div className="flex gap-2 mt-7" ref={ref}>
          <a
            href="https://github.com/K3ndev"
            target="_blank"
            rel="noreferrer"
            className="text-font-Secondary hover:text-trinary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jkenneth-racelis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-font-Secondary hover:text-trinary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/k3n_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-font-Secondary hover:text-trinary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
}

export default Contact;

// make it hidden the right button email