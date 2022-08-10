import React from 'react';
import Nav from './components/navigation/index';

export default function Profile() {
  return (
    <>
      <Nav />
      <section className="flex flex-col mb-72 md:w-3/4 md:m-auto lg:w-1/2 md:h-screen md:snap-start">
        <div className="">
          <h1 className="text-trinary prose prose-sm mb-5">Hi, My name is</h1>
        </div>
        <div className="">
          <h2 className="text-font-Primary prose prose-2xl md:text-5xl">
            Kenneth Racelis.
          </h2>
        </div>
        <div className="">
          <h3 className="text-font-Secondary prose prose-2xl mt-2 md:text-5xl">
            I build things for the web.
          </h3>
        </div>
        <div className="">
          <p className="text-font-Secondary prose prose-sm my-5">
            I&apos;m a self-taught front end developer. I build a website with
            Javascript, React and design using Tailwind and Framer motion. Im
            focused on improving website performance, responsiveness and
            accessibility.
          </p>
        </div>
        <div className="">
          <a
            href="##"
            className=" inline-block text-trinary prose mt-12 border border-trinary py-5 px-7"
          >
            Get My Resume
          </a>
        </div>
      </section>
    </>
  );
}
