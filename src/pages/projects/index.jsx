import React from 'react';
import Card from './components/card';

export default function Profile() {
  // TEST DATA
  const DATA = [
    {
      title: 'Portfolio',
      disc: 'My portfolio built with React, Tailwind, Framer motion and Vercel.',
      language: 'Javascript',
      id: 1,
      url: 'https://github.com/K3ndev/Portfolio',
    },
    {
      title: 'Proj 2',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      language: 'Typescript',
      id: 2,
      url: '',
    },
    {
      title: 'Proj 3',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      language: 'Python',
      id: 3,
      url: '',
    },
    {
      title: 'Proj 4',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      language: 'Javascript',
      id: 4,
      url: '',
    },
    {
      title: 'Proj 5',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      language: 'Javascript',
      id: 5,
      url: '',
    },
    {
      title: 'Proj 6',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      language: 'Javascript',
      id: 6,
      url: '',
    },
  ];

  return (
    <section
      className="px-10 mb-72 md:w-3/4 md:m-auto lg:w-2/3 md:h-screen md:snap-start md:flex md:items-center"
      id="Projects"
    >
      <div className="">
        <div className="">
          <h1 className="text-trinary mb-3 prose prose-xl md:prose-2xl font-Raleway md:mb-1">
            Projects.
          </h1>
        </div>

        <div className="grid gap-6 md:gap-1 lg:gap-3 grid-cols-1 mt-10 md:mt-0 md:grid-cols-2 lg:grid-cols-3">
          {DATA.map((item) => (
            <Card key={item.id} proj={item} />
            // console.log(item);
          ))}
        </div>
      </div>
    </section>
  );
}
