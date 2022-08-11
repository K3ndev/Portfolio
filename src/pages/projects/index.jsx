import React from 'react';
import Card from './components/card';

export default function Profile() {
  // TEST DATA
  const DATA = [
    {
      title: 'Proj1',
      disc: `Real-time file sharing system. Using NodeJS, React.JS SocketIO, MongoDB,
      Chai, WebdriverIO for testing.`,
      language: 'Javascript',
      id: 1,
    },
    {
      title: 'Proj2',
      disc: `2Real-time file sharing system. Using NodeJS, React.JS SocketIO, MongoDB,
      Chai, WebdriverIO for testing.`,
      language: 'Typescript',
      id: 2,
    },
    {
      title: 'Proj3',
      disc: `2Real-time file sharing system. Using NodeJS, React.JS SocketIO, MongoDB,
      Chai, WebdriverIO for testing.`,
      language: 'Python',
      id: 3,
    },
    {
      title: 'Proj4',
      disc: `2Real-time file sharing system. Using NodeJS, React.JS SocketIO, MongoDB,
      Chai, WebdriverIO for testing.`,
      language: 'Javascript',
      id: 4,
    },
    {
      title: 'Proj5',
      disc: `2Real-time file sharing system. Using NodeJS, React.JS SocketIO, MongoDB,
      Chai, WebdriverIO for testing.`,
      language: 'Javascript',
      id: 5,
    },
    {
      title: 'Proj6',
      disc: `2Real-time file sharing system. Using NodeJS, React.JS SocketIO, MongoDB,
      Chai, WebdriverIO for testing.`,
      language: 'Javascript',
      id: 5,
    },
  ];

  return (
    <section className="mb-72 md:w-3/4 md:m-auto lg:w-2/3 md:h-screen md:snap-start md:flex md:items-center">
      <div className="">
        <div className="">
          <h1 className="text-trinary mb-3 prose prose-lg font-Raleway">
            Projects.
          </h1>
        </div>
        <div>
          <p className="text-font-Secondary prose prose-sm font-Montserrat">
            These are my open source projects which are fetched direclty from
            Github.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {DATA.map((item) => (
            <Card key={item.id} proj={item} />
            // console.log(item);
          ))}
        </div>
      </div>
    </section>
  );
}