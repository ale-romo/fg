import Hero from "@/components/Hero";
import Image from "next/image";
import EventCard from "@/components/EventCard";

const events = [
  {
    img: "/foundation/golf23.webp",
    title: "DFA Golf Day 2023",
    desc: `Raised $1 million to fight cancer.`,
    aid: "/foundation"
  },
  {
    img: "/foundation/runway.webp",
    title: "DFA's MIA Runway Challenge'",
    desc: `Raised money for American Cancer Society.`,
    aid: "/foundation"
  },
  {
    img: "/foundation/tumor.webp",
    title: "Children's Tumor Foundation",
    desc: `FFF raises money to improve the health and well-being of individuals and families affected by NF`,
    aid: "/foundation"
  },
  {
    img: "/foundation/dimagio.webp",
    title: "Joe DiMaggio Children's Hospital",
    desc: `FFF raises money to support pediatric healthcare in Florida and beyond.`,
    aid: "/foundation"
  },
  {
    img: "/foundation/nicklaus.webp",
    title: "Nicklaus Children's Hospital",
    desc: `Raised $1 million to fight cancer.`,
    aid: "/foundation"
  },
  {
    img: "/foundation/golf22.webp",
    title: "DFA Golf Day 2022",
    desc: `Raised $375,000 for Mourning Family Foundation`,
    aid: "/foundation"
  }
];

export default function Group() {
  return (
    <>
      <Hero bg="/foundation/hero.webp">
        <h1>Falic Family Foundation</h1>
      </Hero>
      <section className="bg-secondary p-10 md:p-20 flex flex-col gap-y-10 text-center items-center">
        <Image src="/foundation/icon.webp" height="164" width="179" alt="The Falic Foundation" />
        <p className="w-full text-center md:w-5/6 text-xl">
        &ldquo;As a group, we are dedicated to forging exceptional brand partnerships and delivering results at scale. Our experience in founding Duty Free Americas has equipped us with valuable insights into fast growth and innovation. One of our greatest privileges is the ability to give back to causes that are close to our hearts. Through the Falic Family Foundation, we support various charitable organisations both in the United States and internationally, making a meaningful impact in diverse communities.&rdquo;
        </p>
        <div>
          <p className="uppercase">-Jerome Falic</p>
          <p className="font-montserrat font-thin text-sm">DFA CEO & PRINCIPAL OF FALIC FAMILY FOUNDATION</p>
        </div>
      </section>
      <section className="bg-primary flex justify-center p-8 lg:p-20">
        <div className="max-w-screen-xl flex flex-wrap">
          {events && events.map(event => (
            <div key={event.title} className="w-full md:w-1/2 lg:w-1/3">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
