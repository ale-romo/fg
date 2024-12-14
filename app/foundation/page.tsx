import Hero from "@/components/Hero";
import Image from "next/image";
import EventCard from "@/components/EventCard";
import ColCard from "@/components/ColCard";

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
      <Hero bg="/foundation/hero-foundation.jpg">
        <h1>Falic Family Foundation</h1>
        <p className="text-sm w-60">Falic Family Foundation has donated over $100 million to support a number of charitable organisations in the United States and internationally. Stay updated on our recent community initiatives and discover how the Falic Family Foundation continues to make a difference worldwide.</p>
      </Hero>
      <section className="m-10 md:my-20 flex items-start">
        <div className="w-1/3 flex justify-start items-start">
          <Image src="/foundation/icon.webp" height="164" width="179" alt="The Falic Foundation" className="ml-10" />
        </div>
        <div className="w-2/3 flex flex-col items-start">
          <p className="w-full text-left font-garamond text-2xl quoted relative mb-12">
            As a group, we are committed to forging the best brand partnerships and delivering results at scale. Our experience founding Duty Free Americas has taught us a lot about fast growth and innovation. One of the great privileges we have is to be able to give back to causes close to our heart, and with the Falic Family Foundation we support a number of charitable organisations in the United States and internationally, making a real difference to diverse communities”
          </p>
          <div className="text-sm">
            <p className="uppercase">Jerome Falic</p>
            <p className="mb-8" style={{ color: "#D5C5AC" }}>DFA CEO & PRINCIPAL OF FALIC FAMILY FOUNDATION</p>
            <Image width="0" height="0" className="w-48 h-auto" alt="Jerome Falic" src="/Arthur_Miller_signature.svg" />
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:mb-20">
        <div className="flex flex-wrap mb-24 gap-y-12">
          {events && events.map((event, i) => (
            <div key={event.title} className="flex w-full md:w-1/2">
              <div className={`flex w-full ${i % 2 === 0  ? "lg:pr-2" : "lg:pl-2"}`}>
                <ColCard fancy {...event} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
