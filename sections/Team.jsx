import Image from "next/image";
import { useState } from "react";
import { Title } from "../components/Title";
import Team1 from "../images/Team1.png";

function Team() {
  const [team, setTeam] = useState([
    {
      name: "Boukef AhmedRami",
      position: "FullStack Web Developer",
      imageURL: Team1,
      description:
        "Can you make it pop can you make the font bigger? nor I know somebody who can do this for a reasonable cost make it sexy you are lucky to even be doing this for us can you pimp this powerpoint, need more geometry patterns can you punch up the fun level on these icons.",
    },
    {
      name: "BOUHAMAR Mohamedemir",
      position: "Frontend Developer",
      imageURL: Team1,
      description:
        "Can you make it pop can you make the font bigger? nor I know somebody who can do this for a reasonable cost make it sexy you are lucky to even be doing this for us can you pimp this powerpoint, need more geometry patterns can you punch up the fun level on these icons.",
    },
    {
      name: "KOUICEM Wail",
      position: "Backend Developer",
      imageURL: Team1,
      description:
        "Can you make it pop can you make the font bigger? nor I know somebody who can do this for a reasonable cost make it sexy you are lucky to even be doing this for us can you pimp this powerpoint, need more geometry patterns can you punch up the fun level on these icons.",
    },
    {
      name: "Younes BOUKACEM",
      position: "Backend Developer",
      imageURL: Team1,
      description:
        "Can you make it pop can you make the font bigger? nor I know somebody who can do this for a reasonable cost make it sexy you are lucky to even be doing this for us can you pimp this powerpoint, need more geometry patterns can you punch up the fun level on these icons.",
    },
  ]);
  const handleClick = (index) => {
    let table = [...team];
    let elem = table[index];
    table[index] = table[0];
    table[0] = elem;
    setTeam(table);
  };
  return (
    <div id="team" className="container my-10">
      <Title section="Our Team" title="Our Fantastic Team" />
      <div className="md:flex justify-center md:justify-start gap-4 my-10">
        <div className="h-full mb-6 md:mb-0 md:w-2/5 rounded-2xl relative">
          <Image
            src={team[0].imageURL}
            alt="Team1"
            height="100%"
            width="100%"
            layout="responsive"
            objectFit="contain"
          />
          <div className="p-10 w-full absolute bottom-0 left-0">
            <p className="text-white text-lg mb-6">{team[0].name}</p>
            <p className="text-white text-sm">{team[0].position}</p>
          </div>
        </div>
        <div className="md:w-3/5 flex flex-col justify-between">
          <div className="my-8 md:my-0">
            <p className="font-semibold mb-4 text-3xl text-primary">
              {team[0].name}
            </p>
            <p className="text-secondary mb-2 text-lg">{team[0].position}</p>
            <p className="text-primary text-lg">{team[0].description}</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div
              onClick={() => handleClick(1)}
              className="rounded-2xl relative"
            >
              <Image
                src={team[1].imageURL}
                alt="Team1"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="contain"
              />
              <div className="p-6 w-full absolute bottom-0 left-0">
                <p className="text-white text-lg mb-3">{team[1].name}</p>
                <p className="text-white text-sm">{team[1].position}</p>
              </div>
            </div>
            <div
              onClick={() => handleClick(2)}
              className="rounded-2xl relative"
            >
              <Image
                src={team[2].imageURL}
                alt="Team1"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="contain"
              />
              <div className="p-6 w-full absolute bottom-0 left-0">
                <p className="text-white text-lg mb-3">{team[2].name}</p>
                <p className="text-white text-sm">{team[2].position}</p>
              </div>
            </div>
            <div
              onClick={() => handleClick(3)}
              className="rounded-2xl relative"
            >
              <Image
                src={team[3].imageURL}
                alt="Team1"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="contain"
              />
              <div className="p-6 w-full absolute bottom-0 left-0">
                <p className="text-white text-lg mb-3">{team[3].name}</p>
                <p className="text-white text-sm">{team[0].position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
