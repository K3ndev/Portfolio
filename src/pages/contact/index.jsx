import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Footer from './components/footer/index';

export default function Contact() {
  return (
    <>
      <section className="mb-96 flex flex-col">
        <h2 className="text-trinary prose prose-lg mb-3">Get in touch.</h2>
        <p className="text-font-Secondary prose prose-sm">
          If you want to work together, don&apos;t hesitate to contact me.
        </p>
        <a
          href="##"
          className="block text-font-Primary underline prose prose-sm mt-2"
        >
          jkenneth_racelis@pm.me
        </a>
        <div className="flex gap-2 mt-7">
          <a href="##" className="text-trinary">
            <FaGithub />
          </a>
          <a href="##" className="text-trinary">
            <FaLinkedinIn />
          </a>
          <a href="##" className="text-trinary">
            <FaTwitter />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
