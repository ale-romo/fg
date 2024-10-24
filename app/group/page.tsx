import RowCardFW from "@/components/RowCardFW";
import Hero from "@/components/Hero";
import Image from "next/image";


const stats = [
  {
    stat: "9",
    desc: "Houses",
    year: "",
  },
  {
    stat: "50+",
    desc: "Businesses",
    year: "",
  },
  {
    stat: "250+",
    desc: "Stores",
    year: "",
  },
  {
    stat: "5+",
    desc: "Ecommerce",
    year: "",
  },
  {
    stat: "6,000+",
    desc: "Employees",
    year: "",
  },
];

const values = [
  {
    img: "/group/collaborative.webp",
    title: "A collaborative approach",
    description: `At Falic Group, our experienced team is dedicated to forging partnerships that drive results. We work hand-in-hand with brands to ensure success. From logistics and operations to sales, marketing, product innovation, and client support, our collaborative, forward-thinking approach is recognised globally.`,
  },
  {
    img: "/group/visionary.webp",
    title: "Visionary & Growth",
    description: `Falic Group embodies a visionary spirit paired with a growth-oriented mindset, dedicated to developing future-proof business strategies and new revenue streams across the world. We strategically target a new generation of luxury consumers, projected to represent 80% of global purchases by 2030*.<br/>*Source: Bain & Company Report, 2023`,
  },
  {
    img: "/group/excellence.webp",
    title: "Commitment to Excellence",
    description: `Falic Group is dedicated to staying ahead of the curve by embracing modern technology and digital innovations to disrupt traditional markets. Our commitment to excellence is reflected in our omnichannel experiences and our strategic partnerships with world-class brands, distributors, and talent.`,
  },
];

export default function Group() {
  return (
    <>
      <Hero bg="/homepage/hero.webp">
        <h1>The Group</h1>
        <div className="hidden lg:flex justify-around flex-wrap gap-10 px-10 absolute w-full bottom-10">
          {stats.map((s) => (
            <div key={s.desc} className="flex flex-col items-center">
              <h2 className="pb-2">{s.stat}</h2>
              <h4 className="uppercase text-lg">{s.desc}</h4>
              {s.year && <p>{s.year}</p>}
              <hr className="w-12 mt-3" />
            </div>
          ))}
        </div>
      </Hero>
      <div className="flex text-white lg:hidden justify-around flex-wrap gap-10 px-10 w-full bg-accent py-8">
        {stats.map((s) => (
          <div key={s.desc} className="flex flex-col items-center">
            <h2 className="pb-2">{s.stat}</h2>
            <h4 className="uppercase text-lg">{s.desc}</h4>
            {s.year && <p>{s.year}</p>}
            <hr className="w-12 mt-3" />
          </div>
        ))}
      </div>
      <section className="bg-secondary p-8 md:p-20 flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 gap-x-20 max-w-screen-xl">
          <div className="w-full md:w-1/2">
            <Image src="/homepage/group.webp" width="492" height="329" className="w-full h-auto" alt="Falic brothers" />
          </div>
          <div className="w-full md:w-1/2 flex gap-8 flex-col">
            <p>
              Founded in 2001 by brothers Jerome, Leon, and Simon Falic, Falic Group has emerged as a global powerhouse in the luxury sector. Beginning with Duty Free Americas, the largest travel retailer in the Americas, the group has successfully expanded into nine diverse sectors, with presence in markets worldwide and becoming a trusted partner to the world&apos;s leading brands.
            </p>
            <p>
              Now in its second generation, the Falic family continues to propel the group’s global success, celebrated for their unmatched expertise in international markets and dedication to innovation, rapid growth, and excellence. Committed to philanthropy, the Falic Family Foundation works tirelessly to create a positive impact on communities around the globe.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 flex flex-col items-center bg-primary">
        <h2 className="text-center text-white mb-4 font-semibold">
          Our Values
        </h2>
        {values.map((value, i) => (
          <RowCardFW key={value.title} {...value} alignment={!!(i % 2)}/>
        ))}
      </section>
    </>
  );
}
