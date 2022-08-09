/* eslint-disable react/prop-types */
import React from 'react';
import { FaFileCode, FaArrowRight } from 'react-icons/fa';

export default function Card(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { title, disc, language } = props.proj;

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
    <div className="flex border p-4 flex-col gap-2 border-font-Secondary/20">
      <div className="flex gap-1 items-center">
        <FaFileCode className="text-font-Primary" />
        <a href="##" className="text-trinary prose prose-base">
          {title}
        </a>
      </div>
      <div>
        <p className="prose prose-sm text-font-Secondary ">{disc}</p>
      </div>
      <span className="flex items-center mt-5 prose prose-sm text-trinary gap-3">
        {/* {circleStatus()} */}
        <FaArrowRight />
        {language}
      </span>
    </div>
  );
}
