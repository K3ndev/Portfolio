import React from 'react';
import Nav from './components/navigation/index';

export default function Profile() {
  return (
    <>
      <Nav />
      <section className="pb-72">
        <span className="block text-trinary prose prose-sm mt-10">
          Hi, My name is
        </span>
        <h1 className="text-font-Primary prose prose-2xl">Kenneth Racelis.</h1>
        <h1 className="text-font-Secondary prose prose-2xl leading-8">
          I build things for the web.
        </h1>

        <p className="text-font-Secondary prose prose-sm mt-4">
          I&apos;m a self-taught front end developer. I build a website with
          Javascript, React and design using Tailwind and Framer motion. Im
          focused on improving website performance, responsiveness and
          accessibility.
        </p>

        <button
          className="prose prose-base mt-10 text-trinary border border-trinary py-5 px-7"
          type="button"
        >
          Get My Resume
        </button>
      </section>
    </>
  );
}
