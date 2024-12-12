import Hero from "@/components/Hero";
import Image from "next/image";

const data = {
  hero: [
    {
      num: "9",
      text: "Houses",
    },
    {
      num: "50+",
      text: "Businesses",
    },
  ],
  houses: [
    {
      title: "Retail",
      desc: "Duty Free Americas combines legacy and innovation as our flagship brand. As the largest travel retailer in the Americas, DFA operates over 250 stores and a e-commerce platform across the United States and internationally at major airports, seaports, train and border locations. Our future is driven by digital retail innovations like BlockBar, a global blockchain-based marketplace for wines and spirits, and Paneco, the leading e-commerce delivery platform in Singapore and Israel.",
      images: [
        "/houses/retail-1.webp",
        "/houses/retail-2.webp",
        "/houses/retail-3.webp",
      ]
    },
    {
      title: "Wines & Spirits",
      desc: "Expertise and exceptional terroir define our prestigious estates, from Psagot Winery to Bearhug and Gila Tequila. We are also the trusted distribution and retail partner for the world’s most recognised wine and spirits producers, each embodying exceptional craftsmanship, quality and storytelling.",
      images: [
        "/houses/wines-1.webp",
        "/houses/wines-2.webp",
        "/houses/wines-3.webp",
      ]
    },
    {
      title: "Fragance & cosmetics",
      desc: "Heritage meets modernity in our collection of iconic fragrance, cosmetics, and hair care brands, including Perry Ellis, Hard Candy, and HeadKandy. We are celebrated for crafting distinctive fragrances for fashion, celebrity, and lifestyle brands, while providing an expert beauty concierge experience in our retail stores. Additionally, we collaborate with both historic houses and emerging niche cosmetics brands to expand their distribution on a global scale.",
      images: [
        "/houses/fragance-1.webp",
        "/houses/fragance-2.webp",
        "/houses/fragance-3.webp",
      ]
    },
    {
      title: "Fashion & interiors",
      desc: "Home to iconic brands such as Christian Lacroix, Reebok LATAM, Fendi Casa and Divano Mobilia, our Fashion &amp; Interiors division is dedicated to exceptional craftsmanship, innovation, and high-end design. From glamorous red carpets to exquisite home furnishings, our partners at Falic Group embody refinement and undeniable style. We also specialise in retail licensing, ensuring that these legacy names reach a wider audience while maintaining their prestigious reputation across LATAM.",
      images: [
        "/houses/fashion-1.webp",
        "/houses/fashion-2.webp",
        "/houses/fashion-3.webp",
      ]
    },
    {
      title: "Real Estate & Hospitality",
      desc: "Falic Group proudly owns a selection of regional hotels, bars, and restaurants across the United States and Latin America, including the W Hotel Panama and the Condado Plaza Hotel in Puerto Rico. These destinations offer vibrant spaces to meet, unwind, and enjoy unforgettable experiences.",
      images: [
        "/houses/re-1.webp",
        "/houses/re-2.webp",
        "/houses/re-3.webp",
      ]
    },
    {
      title: "Media",
      desc: "Falic Group proudly operates several prominent regional news networks that connect people, places, and businesses. Our largest network, Bloomberg Línea, partners with the world’s leading lifestyle brands to share their campaigns with over 5 million monthly users and more than 1 million social media followers across Latin America.",
      images: [
        "/houses/media-1.webp",
        "/houses/media-2.webp",
        "/houses/media-3.webp",
      ]
    },
    {
      title: "Distribution",
      desc: "As leaders in innovative distribution solutions for the United States and Latin American markets, Falic Group operates over 30 distribution centres across four continents. Our extensive network not only supports duty-free operations but also supplies duty-paid goods, retail merchandise, fashion, furniture, alcohol, cruise ships, and fragrances.",
      images: [
        "/houses/distribution-1.webp",
        "/houses/distribution-2.webp",
        "/houses/distribution-3.webp",
      ]
    },
    {
      title: "Tobacco",
      desc: "Through Duty Free Americas, Falic Group has established itself as a key player in the tobacco industry across the United States and Latin America.",
      images: [
        "/houses/tobacco-1.webp",
        "/houses/tobacco-2.webp",
        "/houses/tobacco-3.webp",
      ]
    },
    {
      title: "Other activities",
      desc: "Falic Group proudly operates a diverse range of businesses, including medical supplies, payment card services, and gas stations.",
      images: [
        "/houses/other-1.webp",
        "/houses/other-2.webp",
        "/houses/other-3.webp",
      ]
    },
  ]
};

const Houses = () => {
  return (
    <>
      <Hero bg="/homepage/hero.webp">
        <h1 className="py-3 text-center w-full">Houses</h1>
        <p className="w-full md:w-5/6 lg:w-1/2 p-3 text-center">
          Falic Group owns a portfolio of brands and serves as the trusted partner for world-leading luxury groups. These prestigious groups, including LVMH, Richemont, Chanel, Edrington, and more, have chosen Falic Group to represent and drive their international growth in key markets.
        </p>
        <div className="hidden md:flex justify-around flex-wrap gap-10 px-10 absolute w-1/2 bottom-10">
          {data.hero.map((s) => (
            <div key={s.text} className="flex flex-col items-center">
              <h2 className="pb-2">{s.num}</h2>
              <h4 className="uppercase text-lg">{s.text}</h4>
              <hr className="w-12 mt-3" />
            </div>
          ))}
        </div>
      </Hero>
      <div className="flex md:hidden justify-around gap-10 p-10 w-full bg-accent text-white">
          {data.hero.map((s) => (
            <div key={s.text} className="flex flex-col items-center">
              <h2 className="pb-2">{s.num}</h2>
              <h4 className="uppercase text-lg">{s.text}</h4>
              <hr className="w-12 mt-3" />
            </div>
          ))}
        </div>
      <section>
        {data?.houses &&
          data.houses.map((house, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col gap-6 items-center text-center w-full p-8 md:p-20 md:py-10`}
              >
                <div className="w-4/5 max-w-screen-xl">
                  <h2 className="">{house.title}</h2>
                  <p>{house.desc}</p>
                </div>
                <ul className="flex flex-col md:flex-row w-full max-w-screen-lg">
                  {house.images.map((img: string, j) => {
                      return (
                        <li key={j} className="w-full lg:w-1/3 px-2 pb-4 md:pb-0 relative">
                          <Image className="w-full h-auto" src={img} alt={house.title} height="236" width="335" />
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Houses;
