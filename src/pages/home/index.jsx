import React from 'react';
import Profile from '../profile/index';
import Projects from '../projects/index';
import Contact from '../contact/index';

export default function Home() {
  return (
    <main className=" bg-primary px-10">
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}
