import React from "react";
import Card from "../../components/card/index";

export default function Profile() {
  // TEST DATA
  const DATA = [
    {
      title: "Portfolio",
      disc: "My portfolio - React",
      language: "Javascript",
      id: 1,
      url: "https://github.com/K3ndev/Portfolio",
    },
    {
      title: "search-anime",
      disc: "A react application that can search an anime, that use jikan API.",
      language: "Javascript",
      id: 2,
      url: "https://search-anime.vercel.app/",
    },
    {
      title: "hotel-reservation",
      disc: "A step by step form reservation that build in ReactJs  ",
      language: "Javascript",
      id: 3,
      url: "https://k3n-hotel-reservation.vercel.app/",
    },
    {
      title: "Proj 4",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      language: "Javascript",
      id: 4,
      url: "",
    },
    {
      title: "Proj 5",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      language: "Javascript",
      id: 5,
      url: "",
    },
    {
      title: "Proj 6",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      language: "Javascript",
      id: 6,
      url: "",
    },
  ];

  return (
    <section
      className="px-10 mb-72 md:w-3/4 md:m-auto lg:w-2/3 md:h-screen md:snap-start md:flex md:items-center"
      id="Projects"
    >
      <div>
        <div>
          <h1 className="text-trinary mb-3 prose prose-xl md:prose-2xl font-Raleway md:mb-1">
            Projects.
          </h1>
        </div>

        <div className="grid gap-6 md:gap-1 lg:gap-3 grid-cols-1 mt-10 md:mt-0 md:grid-cols-2 lg:grid-cols-3">
          {DATA.map((item) => (
            <Card key={item.id} proj={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
