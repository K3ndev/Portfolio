import React from 'react';
import Profile from '../profile/index';
import Projects from '../projects/index';
import Contact from '../contact/index';

export default function Home() {
  return (
    <main className="bg-primary px-10 md:max-h-screen md:overflow-y-scroll md:snap md:snap-y md:snap-mandatory">
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}
