import Hero from "@/components/HeroVideo";
import Image from "next/image";
import ColCard from "@/components/ColCard";
import RowCard from "@/components/RowCard";
import { getNews } from "@/lib/getNews";
import ButtonA from "@/components/ButtonA";
import Jeromes from "@/components/Jeromes";

const news = getNews();

const content = {
  hero: {
    title: "Falic Group",
    subtitle: "Leaders in travel retail, luxury goods and global distribution since 2001.",
  },
  we: {
    title: "Who we are",
    text: "Renowned for its unparalleled global expertise and commitment to excellence, the Falic Group was founded in 2001 as a family-run organisation operating businesses across nine sectors: retail, wines & spirits, fragrance & cosmetics, fashion, interiors & licensing, real estate & hospitality, media, distribution, tobacco, and other activities. With a diverse team of over 6,000 employees spanning more than 21 countries, our global ecosystem includes more than 250 retail and e-commerce stores.",
    img: "/homepage/we.webp",
  },
  houses: {
    title: "Houses",
    img: "/homepage/houses.jpg",
    desc: "Across our 9 distinguished global Houses, we proudly encapsulate a rich tapestry of heritage, boundless innovation, and unparalleled luxury.",
    aid: 'houses',
    btnText: "Learn more",
  },
  group: {
    title: "Falic Group",
    img: "/homepage/group.jpg",
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
    img: "homepage/foundation.png",
    desc: "DFA Golf Day 2023 raising $1 million to fight cancer wins ‘Best Example of Community Engagement’ Award at The Moodies 2023 Travel Journey Omnichannel Awards",
    aid: "/foundation",
    btnText: "Learn more",
  }
};

export default function Home() {
  return (
    <>
      <Hero bg="/homepage/hero.mp4">
        <h1 className="font-garamond">{content.hero.title}</h1>
        <p className="text-sm w-60">{content.hero.subtitle}</p>
      </Hero>
     <section className="text-primary w-full flex flex-col items-center p-8 pb-10 md:pb-20 md:p-0">
        <h2 className="">{content.we.title}</h2>
        <p className="text-center text-lg pb-10  max-w-screen-xl">{content.we.text}</p>
        <div className="relative w-full">
          <Image src="/homepage/we.jpg" alt="" width="0" height="0" className="object-contain w-full" />
        </div>
      </section>
      <section className="flex flex-wrap mb-20">
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
                className={`lg:w-1/2 flex lg:first:pr-4 lg:last:pl-4`}
              >
                <div className="w-full">
                  <ColCard {...props} />
                </div>
              </div>
            );
          },
          { start: 1 }
        )}
      </section>
      <section className="w-full m-8 md:mx-0 md:mt-20 md:mb-40 flex flex-col items-center bg-accent/20 max-w-full">
        <div className="w-full -my-20" style={{maxWidth: ' 1120px'}}>
          <Image src="/homepage/Dior.webp" alt="" width="0" height="0" className="w-full h-auto" />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div className="w-full flex lg:justify-end lg:w-1/2 lg:pr-4">
          <ColCard fancy {...content.group} />
        </div>
        <div className="w-full flex lg:justify-start lg:w-1/2 lg:pl-4" >
          <ColCard fancy {...content.houses} />
        </div>
      </section>
      <section className="">
        <Image src={content.foundation.img} width="0" height="0" className="w-full h-auto" alt={content.foundation.title} />
        <h2 className="text-center">{content.foundation.title}</h2>
        <p className="text-center text-lg pb-10  max-w-screen-xl font.garamond">{content.foundation.desc}</p>
        <ButtonA href={content.foundation.aid}>{content.foundation.btnText}</ButtonA>
      </section>
      <Jeromes />
    </>
  );
}
