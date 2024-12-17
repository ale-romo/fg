import Hero from "@/components/HeroVideo";
import Image from "next/image";
import ColCard from "@/components/ColCard";
import { getNews } from "@/lib/getNews";
import ButtonA from "@/components/ButtonA";
import Jeromes from "@/components/Jeromes";

const news = getNews();

const content = {
  hero: {
    title: "Falic Group",
    subtitle:
      "Leaders in travel retail, luxury goods and global distribution since 2001.",
  },
  we: {
    title: "Who We Are",
    text: "Renowned for its unparalleled global expertise and commitment to excellence, the Falic Group was founded in 2001 as a family-run organisation operating businesses across eight sectors: Retail, Wines & Spirits, Fragrance & Cosmetics, Fashion & Interiors, Real Estate, Hospitality & Food & Beverages, Media, Distribution, Licenses & Other Activities.",
    img: "/homepage/we.webp",
  },
  news: [
    {
      aid: "sample-1",
      img: "/homepage/news-1.webp",
      title: "Wines & Spirits",
      category: "",
      date: "",
      desc: "The Macallan and Duty Free Americas open first-of-it’s kind shop in Americas travel retail.",
    },
    {
      aid: "sample-2",
      img: "/homepage/news-2.png",
      title: "Distribution",
      category: "",
      date: "",
      desc: "UETA MEA launches with distribution across the Middle East and Africa, plus dedicated support for diplomatic missions.",
    },
  ],
  houses: {
    title: "Houses",
    img: "/homepage/houses.jpg",
    desc: "Across our 9 distinguished global Houses, we proudly encapsulate a rich tapestry of heritage, boundless innovation, and unparalleled luxury.",
    aid: "houses",
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
    aid: "group",
    btnText: "Learn more",
  },
  foundation: {
    title: "Falic Family Foundation",
    img: "homepage/foundation.png",
    desc: "DFA Golf Day 2023 raising $1 million to fight cancer wins ‘Best Example of Community Engagement’ Award at The Moodies 2023 Travel Journey Omnichannel Awards",
    aid: "/foundation",
    btnText: "Learn more",
  },
};

export default function Home() {
  return (
    <>
      <Hero bg="/homepage/hero.mp4">
        <h1 className="font-garamond">{content.hero.title}</h1>
        <p className="text-sm w-60 md:w-[291px] lg:w-[291px]">
          {content.hero.subtitle}
        </p>
      </Hero>
      <section className="text-primary w-full flex flex-col items-center p-8 pb-10 md:my-24 md:p-0">
        <Image
          src="/fg-monogram.svg"
          width="263"
          height="27"
          alt={content.we.title}
          className="mb-16"
        />
        <h2 className="mb-12">{content.we.title}</h2>
        <p className="text-center text-2xl lg:text-3xl pb-14  max-w-screen-xl font-garamond px-0 md:px-20 lg:px-2 text-[#4B5563]">
          {content.we.text}
        </p>
        <Image
          src="/homepage/we.jpg"
          alt=""
          width="0"
          height="0"
          className="object-contain w-full mb-12"
        />
        <p
          className="max-w-screen-md text-2xl font-garamond text-center px-0 md:px-20 lg:px-0"
          style={{ color: "#9CA3AF" }}
        >
          With a diverse team of over 6,000 employees spanning more than 21
          countries, our global ecosystem includes more than 250 retail and
          e-commerce stores.
        </p>
      </section>
      <section className="flex flex-wrap mb-24 px-10 md:px-10 lg:px-0">
        {content.news.slice(0, 2).map(
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
                className={`w-full lg:w-1/2 flex lg:first:pr-4 lg:last:pl-4 mb-10 md:mb-10 lg:mb-0`}
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
      <section className="w-full m-8 md:mx-0 md:mt-20 md:mb-40 flex flex-col items-center bg-accent/20 max-w-full ">
        <div className="w-full -my-20 " style={{ maxWidth: " 1120px" }}>
          <Image
            src="/homepage/retail.png"
            alt=""
            width="0" 
            height="0"
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="text-center px-10 md:px-0 mt-20 md:mt-0">
        <h3>Retail</h3>
        <p
          className="max-w-screen-sm mb-10 md:mb-24"
          style={{ color: "#6B7280" }}
        >
          Duty Free Americas launches into train retail channel in partnership
          with Adani Airport Holdings Limited, starting with operating
          Eurotunnel Terminal.
        </p>
      </section>
      <section className="flex flex-col lg:flex-row mb-0 lg:mb-32">
        <div className="w-full flex lg:justify-end lg:w-1/2 lg:pr-4">
          <ColCard fancy {...content.group} />
        </div>
        <div className="w-full flex lg:justify-start lg:w-1/2 lg:pl-4">
          <ColCard fancy {...content.houses} />
        </div>
      </section>
      <section className="mb-24 flex flex-col items-center">
        <Image
          src={content.foundation.img}
          width="0"
          height="0"
          className="w-full h-auto mb-14"
          alt={content.foundation.title}
        />
        <Image
          src="/foundation-monogram.svg"
          width="263"
          height="33"
          alt={content.we.title}
          className="mb-14"
        />
        <h2 className="text-center mb-10">{content.foundation.title}</h2>
        <p
          className="text-center text-2xl pb-10 font-garamond md:max-w-4xl px-8 md:px-10 lg:px-0"
          style={{ color: "#4B5563" }}
        >
          {content.foundation.desc}
        </p>
        <ButtonA href={content.foundation.aid}>
          {content.foundation.btnText}
        </ButtonA>
      </section>
      <Jeromes />
    </>
  );
}
