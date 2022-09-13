import React from "react";
import { FaFileCode, FaArrowRight } from "react-icons/fa";
import validateUrl from "../../helper/validateUrl";

interface props {
  proj: {
    title: string,
    disc: string,
    language: string,
    url: string
  }
}

const Card: React.FC<props> = (props) => {

  // destructuring 
  const { title, disc, language, url } = props.proj;

  return (
    <div className="flex justify-between border p-4 flex-col gap-2 border-font-Secondary/20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:border-trinary cursor-default min-h-max">
      <div>
        <div className="flex gap-1 items-center mb-2">
          <FaFileCode className="text-font-Primary" />
          <a
            href={validateUrl(url)}
            target="_blank"
            rel="noreferrer"
            className="text-font-Primary prose prose-base font-Raleway hover:text-trinary hover:underline"
          >
            {title}
          </a>
        </div>

        <div>
          <p className="prose prose-sm text-font-Secondary font-Montserrat line-clamp-2">
            {disc}
          </p>
        </div>
      </div>

      <span className="flex items-center mt-5 prose prose-sm text-trinary gap-3 font-Raleway">
        <FaArrowRight />
        {language}
      </span>
    </div>
  );
}

export default Card;