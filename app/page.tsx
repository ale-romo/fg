import Hero from "@/components/Hero";
import Image from "next/image";
import ColCard from "@/components/ColCard";
import RowCard from "@/components/RowCard";
import { getNews } from "@/lib/getNews";

const news = getNews();

const content = {
  hero: {
    title: "Falic Group",
  },
  we: {
    title: "Who we are",
    text: "Renowned for its unparalleled global expertise and commitment to excellence, the Falic Group was founded in 2001 as a family-run organisation operating businesses across nine sectors: retail, wines & spirits, fragrance & cosmetics, fashion, interiors & licensing, real estate & hospitality, media, distribution, tobacco, and other activities. With a diverse team of over 6,000 employees spanning more than 21 countries, our global ecosystem includes more than 250 retail and e-commerce stores.",
    img: "/homepage/we.webp",
  },
  houses: {
    title: "Houses",
    img: "/homepage/houses.webp",
    desc: "Across our 9 distinguished global Houses, we proudly encapsulate a rich tapestry of heritage, boundless innovation, and unparalleled luxury.",
    aid: 'houses',
    btnText: "Learn more",
  },
  group: {
    title: "Falic Group",
    img: "/homepage/group.webp",
    desc: `Established in 2001, Falic Group is a family-owned and operated business home
    to a number of prestigious brands across nine Houses. Known for our unrivalled
    expertise in global markets and commitment to excellence, Falic Group is
    committed to growth and innovation in the name of our Houses and affiliated
    high quality producers.`,
    aid: 'group',
    btnText: "Learn more",
  },
  foundation: {
    title: "FALIC FAMILY FOUNDATION",
    img: "/foundation/hero.webp",
    desc: "DFA Golf Day 2023 raising $1 million to fight cancer wins ‘Best Example of Community Engagement’ Award at The Moodies 2023 Travel Journey Omnichannel Awards",
    aid: "/foundation",
    btnText: "Learn more",
  }
};

export default function Home() {
  return (
    <>
      <Hero bg="/homepage/hero.webp">
        <h1 className="uppercase">{content.hero.title}</h1>
      </Hero>
     <section className="text-white bg-primary w-full flex flex-col items-center p-8 pb-0 md:pb-0 md:p-20">
        <h2>{content.we.title}</h2>
        <p className="text-center text-lg pb-10  max-w-screen-xl">{content.we.text}</p>
        <div className="relative w-full h-v20 -mb-12 md:h-v50 md:-mb-60">
          <Image src="/homepage/we.webp" alt="" fill className="object-contain" />
        </div>
      </section>
      <section className="flex flex-wrap home-padded">
        {news.slice(0, 2).map(
          (article: any, i: number) => {
            const props = {
              title: article.title,
              img: article.img,
              desc: article.desc,
              aid: article.aid,
              padded: true,
            };
            return (
              <div
                key={i}
                className={`lg:w-1/2 flex ${
                  Math.floor(i / 2) + (i % 2) === 0
                    ? "bg-white lg:justify-end"
                    : "bg-secondary lg:justify-start"
                }`}
              >
                <div className="lg:max-w-screen-sm">
                  <ColCard {...props} />
                </div>
              </div>
            );
          },
          { start: 1 }
        )}
      </section>
      <div className="w-full bg-primary p-8 md:p-20 flex flex-col items-center">
        <div className="relative w-full h-v30 -mt-44 md:h-v40">
          <Image src="/homepage/Dior.webp" alt="" fill className="object-contain" />
        </div>
      </div>
      <section className="flex flex-col lg:flex-row">
        <div className="w-full flex bg-white lg:justify-end">
          <div className="lg:max-w-screen-sm">
            <ColCard {...content.group} />
          </div>
        </div>
        <div className="w-full flex bg-secondary lg:justify-start">
          <div className="lg:max-w-screen-sm">
            <ColCard {...content.houses} />
          </div>
        </div>
      </section>
      <section className="bg-primary text-white">
        <RowCard {...content.foundation} />
      </section>
      <section className="text-center text-xl">
        <div className="p-12 md:pt-20 pb-0 bg-secondary flex items-center flex-col">
          <p className="mb-8 max-w-screen-md">“As a group, we are committed to forging the best brand partnerships and delivering results at scale. Our experience founding Duty Free Americas has taught us a lot about fast growth and innovation. One of the great privileges we have is to be able to give back to causes close to our heart, and with the Falic Family Foundation we support a number of charitable organisations in the United States and internationally, making a real difference to diverse communities”</p>
          <p className="uppercase">-Jerome Falic</p>
          <p className="font-montserrat font-thin text-sm">DFA CEO & PRINCIPAL OF FALIC FAMILY FOUNDATION</p>
        </div>
      </section>
    </>
  );
}
