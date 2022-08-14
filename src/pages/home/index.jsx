import React from 'react';
import Profile from '../profile/index';
import Projects from '../projects/index';
import Contact from '../contact/index';
import Nav from './components/navigation/index';

export default function Home() {
  return (
    <main className="bg-primary md:max-h-screen md:overflow-y-scroll md:snap md:snap-y md:snap-mandatory relative">
      <Nav />
      <Profile />
      <Projects />
      <Contact />

      {/* notes  */}
      {/* tailwind-Scroll snapping has different behaviour in chrome */}
      {/* reeact-navlink with tailwind-scrol snapping is not working  */}
    </main>
  );
}
