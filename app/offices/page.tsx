import Hero from "@/components/Hero";
import Jeromes from "@/components/Jeromes";
import Image from "next/image";

const offices = [
  {
    city: "Bogota, Colombia",
  },
  {
    city: "Hollywood, Florida - USA",
  },
  {
    city: "Laredo, Texas - USA",
  },
  {
    city: "London, UK",
  },
  {
    city: "Macau, Asia",
  },
  {
    city: "Mexico City, Mexico",
  },
  {
    city: "Montevideo, Uruguay",
  },
  {
    city: "Panama City, Panama",
  },
  {
    city: "Paris, France",
  },
  {
    city: "Punta Cana, Dominican Republic",
  },
  {
    city: "Rio de Janeiro, Brazil",
  },
  {
    city: "San Juan, Puerto Rico",
  },
  {
    city: "Singapore",
  },
  {
    city: "Tel Aviv, Israel",
  },
  {
    city: "Caracas, Venezuela",
  },
  {
    city: "Dubai",
  },
  {
    city: "Lima, Peru",
  },
  {
    city: "Oranjestad, Aruba",
  },
  {
    city: "Santiago, Chile",
  },
];

const where = {
  title: "Where We Are",
  desc: "Falic Group is headquartered in Miami, Florida, with a strong international presence that includes offices in Bogota, London, Los Angeles, Macau, Mexico City, Montevideo, New York, Panama City, Paris, Punta Cana, Rio de Janeiro, San Juan, Singapore, and Tel Aviv. Our diverse team of over 6,000 individuals worldwide drives our commitment to excellence and innovation across all markets.",
  img: "/offices/hero-offices.jpg",
  reverse: true,
};

interface ItemProps {
  start: number;
  end: number;
}

const Offices = () => {
    const RenderItems = ({ start, end} : ItemProps) => ( <ul className="w-full md:w-1/2 lg:w-1/3">
    {offices && offices.slice(start, end).map((office, i) => (
      <li
        key="i"
        className="h-16 text-center px-4 text-2xl font-garamond"
      >{office.city}</li>
    ))}
  </ul>
  );

  return (
    <>
      <Hero bg="/offices/hero-offices.jpg">
        <h1 className="font-garamond">Our Offices</h1>
        <p className="text-sm w-60 md:w-[307px] lg:w-[307px]">
          The Falic Group operates from strategically located offices around the
          world, reflecting our global reach and commitment to excellence.
        </p>
      </Hero>
      <section className="flex flex-col items-center justify-center my-20">
        <Image
          src="/fg-monogram.svg"
          width="263"
          height="27"
          alt={where.title}
          className="mb-16"
        />
        <h2 className="mb-12">{where.title}</h2>
        <p className="text-center font-garamond text-2xl lg:text-3xl leading-relaxed px-12 md:px-20 lg:px-0">
          {where.desc}
        </p>
      </section>
      <section className="w-full m-8 md:mx-0 md:mt-20 md:mb-40 flex flex-col items-center bg-accent/20 max-w-full">
        <div className="w-full my-0 lg:-my-20" style={{ maxWidth: " 1120px" }}>
          <Image
            src="/offices/offices-beach.jpg"
            alt=""
            width="0"
            height="0"
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center relative mb-20 px-5 md:px-10 lg:px-0">
        <ul className="flex flex-wrap w-full px-4 md:px-8 pb-6 md:pb-16 lg:pb-28 lg:px-20 linear-gradient(to bottom, #FBFBF9, #FFFFFF) p-20 rounded border-white border-4 shadow-2xl">
          <h3 className="w-full text-center text-6xl pb-12">
            Worldwide Locations
          </h3>
          <RenderItems start={0} end={6} />
          <RenderItems start={6} end={13} />
          <RenderItems start={13} end={19} />
        </ul>
      </section>
      <Jeromes />
    </>
  );
};

export default Offices;
