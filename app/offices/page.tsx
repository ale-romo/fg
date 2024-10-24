import Hero from "@/components/Hero";
import RowCard from "@/components/RowCard";
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
  title: "Where are we?",
  desc: "Falic Group is headquartered in Miami, Florida, with a strong international presence that includes offices in Bogota, London, Los Angeles, Macau, Mexico City, Montevideo, New York, Panama City, Paris, Punta Cana, Rio de Janeiro, San Juan, Singapore, and Tel Aviv. Our diverse team of over 6,000 individuals worldwide drives our commitment to excellence and innovation across all markets.",
  img: "/offices/building.webp",
  reverse: true,
}

interface ItemProps {
  start: number;
  end: number;
}

const Offices = () => {
    const RenderItems = ({ start, end} : ItemProps) => ( <ul className="w-full md:w-1/2 lg:w-1/3">
    {offices && offices.slice(start, end).map((office, i) => (
      <li
        key="i"
        className="h-16 text-center px-4 text-lg"
      >{office.city}</li>
    ))}
  </ul>
  );

  return (
    <>
      <Hero bg="/offices/hero.webp">
        <h1>Our offices</h1>
      </Hero>
      <section className="flex flex-col items-center bg-secondary justify-center">
        <RowCard {...where} />
      </section>
      <section className="bg-primary flex flex-col justify-center overflow-hidden relative p-8 lg:p-20">
        <h2 className="bg-secondary w-full text-center py-10 font-montserrat font-semibold">Worldwide locations</h2>
        <ul className="flex flex-wrap bg-secondary w-full px-4 md:px-8 pb-6 md:pb-16 lg:pb-28 lg:px-20">
          <RenderItems start={0} end={6} />
          <RenderItems start={6} end={13} />
          <RenderItems start={13} end={19} />
        </ul>
      </section>
      <div className="-mt-14 md:-mt-24 lg:-mt-40 w-2/3 mx-auto relative">
        <Image src="/offices/store.webp" height="370" width="787" alt="" className="w-full h-auto z-10" />
      </div>
    </>
  );
};

export default Offices;
