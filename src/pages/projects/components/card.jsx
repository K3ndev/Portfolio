/* eslint-disable react/prop-types */
import React from 'react';
import { FaFileCode, FaArrowRight } from 'react-icons/fa';

export default function Card(props) {
  const {
    title,
    disc,
    language,
    url,
    // eslint-disable-next-line react/destructuring-assignment
  } = props.proj;

  // circle condition
  //   const circleStatus = () => {
  //     if (language === 'Javascript') {
  //       return <span className="block bg-[#f1e05a] h-3 w-3 rounded-full" />;
  //     }
  //     if (language === 'Typescript') {
  //       return <span className="block bg-[#3178c6] h-3 w-3 rounded-full" />;
  //     }

  //     return <span className="block bg-trinary h-3 w-3 rounded-full" />;
  //   };

  return (
    <div className="flex justify-between border p-4 flex-col gap-2 border-font-Secondary/20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:border-trinary cursor-default">
      <div>
        <div className="flex gap-1 items-center mb-2">
          <FaFileCode className="text-font-Primary" />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-font-Primary prose prose-base font-Raleway hover:text-trinary hover:underline"
          >
            {title}
          </a>
        </div>

        <div>
          <p className="prose prose-sm text-font-Secondary font-Montserrat">
            {disc}
          </p>
        </div>
      </div>

      <span className="flex items-center mt-5 prose prose-sm text-trinary gap-3 font-Raleway">
        {/* {circleStatus()} */}
        <FaArrowRight />
        {language}
      </span>
    </div>
  );
}
