import { getNews } from '@/lib/getNews';
import ColCard from "@/components/ColCard";
import Hero from "@/components/Hero";
import Jeromes from '@/components/Jeromes';

export default function News() {
  const news = getNews();

  const MAX_DESC_LENGTH = 200;

  const truncatedDesc = (desc: string) => {
    if (desc.length <= MAX_DESC_LENGTH) {
      return desc;
    }

    const truncated = desc.substr(0, MAX_DESC_LENGTH);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    return lastSpaceIndex > 0 ? `${truncated.substr(0, lastSpaceIndex)}...` : `${truncated}...`;
  };


  return (
    <>
      <Hero bg="/homepage/hero.webp">
        <h1 className="font-garamond">News</h1>
        <p className="text-sm w-60">Stay connected to the latest news, developments, and insights from each of the Falic Group’s 8 Houses.</p>
      </Hero>
      <section className="flex flex-wrap my-24 gap-y-12">
        {news.map((article: any, i: number) => {
          const props = {
            title: article.title,
            desc: truncatedDesc(article.desc),
            img: article.img,
          }
          return <div key={i} className={`flex w-full lg:w-1/2`}>
            <div className={`flex w-full ${i % 2 === 0  ? "lg:pr-2" : "lg:pl-2"}`}>
              <ColCard fancy  {...props} />
            </div>
          </div>
        }, {start:1})}
      </section>
      <Jeromes />
    </>
  )
}
