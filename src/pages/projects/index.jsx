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
  ];

  return (
    <section className="mb-72">
      <div>
        <h1 className="text-trinary mb-3 prose prose-lg">Projects.</h1>
      </div>
      <div>
        <p className="text-font-Secondary prose prose-sm">
          These are my open source projects which are fetched direclty from
          Github.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 mt-10">
        {DATA.map((item) => (
          <Card key={item.id} proj={item} />
          // console.log(item);
        ))}
      </div>
    </section>
  );
}
