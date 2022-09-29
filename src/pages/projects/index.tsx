import { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion'
import Card from "../../components/card/index";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useAtom } from "jotai";
import { activeDiv } from "../../store/activeDiv";

export default function Profile() {
  // TEST DATA
  const DATA = [
    {
      title: "Portfolio",
      disc: "React: My portfolio",
      language: "Typescript, Tailwind, Jotai, Framer motion",
      id: 1,
      url: "https://github.com/K3ndev/Portfolio",
    },
    {
      title: "search-anime",
      disc: "React: An application that can search for an anime that uses the Jikan API.",
      language: "Typescript, Tailwind, ReactQuery",
      id: 2,
      url: "https://search-anime.vercel.app/",
    },
    {
      title: "hotel-reservation",
      disc: "React: A step by step form reservation",
      language: "Typescript, Mantine",
      id: 3,
      url: "https://k3n-hotel-reservation.vercel.app/",
    },
    {
      title: "book-store",
      disc: "Next.js: book store",
      language: "Typescript, Tailwind, Zustand, Firebase",
      id: 4,
      url: "https://k3n-book-store.vercel.app/",
    },
    {
      title: "Proj 5",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      language: "Typescript",
      id: 5,
      url: "",
    },
    {
      title: "Proj 6",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      language: "Typescript",
      id: 6,
      url: "",
    },
  ];

  // animation state 
  const [opacityIncrease, setOpacityIncrease] = useState(0)
  const matches = useMediaQuery('((min-width: 768px)');

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
        isVisible_projects: true,
        isVisible_contact: false,
      });
      setOpacityIncrease(1)
    }
    if (isIntersecting === false && matches) {
      setOpacityIncrease(0)
    }
  }, [isIntersecting]);

  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: opacityIncrease }} transition={{ duration: 0.5 }}
      className="px-10 mb-72 md:w-3/4 md:m-auto lg:w-2/3 md:h-screen md:snap-start md:flex md:items-center"
      id="Projects"
    >
      <div >
        <div>
          <h1 className="text-trinary mb-3 prose prose-xl md:prose-2xl font-Raleway md:mb-1" ref={ref}>
            Projects.
          </h1>
        </div>

        <div className="grid gap-6 md:gap-1 lg:gap-3 grid-cols-1 mt-10 md:mt-0 md:grid-cols-2 lg:grid-cols-3" >
          {DATA.map((item) => (
            <Card key={item.id} proj={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}