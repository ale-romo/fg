import Hero from "@/components/HeroVideo";
import Jeromes from "@/components/Jeromes";
import Image from "next/image";

const data = {
  hero: [
    {
      num: "8",
      text: "Houses",
    },
    {
      num: "23",
      text: "Countries",
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
        "/houses/retail-1.jpg",
        "/houses/retail-2.jpg",
        "/houses/retail-3.jpg",
      ],
    },
    {
      title: "Wines & Spirits",
      desc: "Expertise and exceptional terroir define our prestigious estates, from Psagot Winery to Bearhug and Gila Tequila. We are also the trusted distribution and retail partner for the world’s most recognised wine and spirits producers, each embodying exceptional craftsmanship, quality and storytelling.",
      images: [
        "/houses/wines-1.jpg",
        "/houses/wines-2.jpg",
        "/houses/wines-3.jpg",
      ],
    },
    {
      title: "Fragance & Cosmetics",
      desc: "Heritage meets modernity in our collection of iconic fragrance, cosmetics, and hair care brands, including Perry Ellis, Hard Candy, and HeadKandy. We are celebrated for crafting distinctive fragrances for fashion, celebrity, and lifestyle brands, while providing an expert beauty concierge experience in our retail stores. Additionally, we collaborate with both historic houses and emerging niche cosmetics brands to expand their distribution on a global scale.",
      images: [
        "/houses/fragance-1.jpg",
        "/houses/fragance-2.jpg",
        "/houses/fragance-3.jpg",
      ],
    },
    {
      title: "Fashion, Interiors & Licensing",
      desc: "Home to iconic brands such as Christian Lacroix, Reebok LATAM, Fendi Casa and Divano Mobilia, our Fashion & Interiors division is dedicated to exceptional craftsmanship, innovation, and high-end design. From glamorous red carpets to exquisite home furnishings, our partners at Falic Group embody refinement and undeniable style. We also specialise in retail licensing, ensuring that these legacy names reach a wider audience while maintaining their prestigious reputation across LATAM including The Macallan, CHANEL, Champion, Reebok and Fendi Casa.",
      images: [
        "/houses/Fendi.png",
        "/houses/fashion-2.jpg",
        "/houses/fashion-3.jpg",
      ],
    },
    {
      title: "Real Estate, Hospitality & Food & Beverages",
      desc: "Falic Group proudly owns a selection of regional hotels, bars, and restaurants across the United States and Latin America, including the W Hotel Panama and the Condado Plaza Hotel in Puerto Rico. These destinations offer vibrant spaces to meet, unwind, and enjoy unforgettable experiences.",
      images: ["/houses/re-1.jpg", "/houses/re-2.jpg", "/houses/re-3.jpg"],
    },
    {
      title: "Media",
      desc: "Falic Group proudly operates several prominent regional news networks that connect people, places, and businesses. Our largest network, Bloomberg Línea, partners with the world’s leading lifestyle brands to share their campaigns with over 5 million monthly users and more than 1 million social media followers across Latin America.",
      images: [
        "/houses/media-1.jpg",
        "/houses/media-2.jpg",
        "/houses/media-3.jpg",
      ],
    },
    {
      title: "Distribution",
      desc: "Falic Group is the partner of choice for world leading brands looking for distribution across the US, LATAM, Israel, Middle East & Africa. Falic Group holds more than 30 distribution centres across 4 continents, not only in duty free but supplying duty paid operations, retail goods, fashion, furniture, alcohol distribution, cruise ships and fragrances.",
      images: ["/houses/distributionmap.png"],
    },
    {
      title: "Other Activities",
      desc: "Falic Group proudly operates a diverse range of businesses including medical supplies, payment card services, and gas stations.",
      images: [
       
        "/houses/other-2.jpg",
        
      ],
    },
  ],
};

const Houses = () => {
  return (
    <>
      <Hero bg="/houses/houses.mp4">
        <h1 className="font-garamond">Houses</h1>
        <p className="text-sm w-80 md:w-[441px] lg:w-[441px]">
          Falic Group owns a portfolio of brands and serves as the trusted
          partner for world-leading luxury groups. These prestigious groups,
          including LVMH, Richemont, Chanel, Edrington, and more, have chosen
          Falic Group to represent and drive their international growth in key
          markets.
        </p>
      </Hero>
      <section
        className="hidden md:flex w-full max-w-full justify-center flex-wrap gap-10 px-10 bottom-10 mb-12 lg:mb-24"
        style={{ backgroundColor: "#B18F6130" }}
      >
        <div
          className="w-full flex justify-around py-10"
          style={{ maxWidth: "1120px", color: "#79776F" }}
        >
          {data.hero.map((s) => (
            <div
              key={s.text}
              className="flex flex-col items-start font-garamond"
            >
              <h2 className="text-8xl">{s.num}</h2>
              <h4 className="text-2xl font-garamond">{s.text}</h4>
            </div>
          ))}
        </div>
      </section>
      <div className="flex md:hidden justify-around gap-10 p-10 w-full bg-[#B18F6130] text-[#79776F] mb-12 lg:mb-24">
        {data.hero.map((s) => (
          <div key={s.text} className="flex flex-col items-center ">
            <h2 className="pb-2 font-garamond">{s.num}</h2>
            <h4 className=" text-lg font-garamond">{s.text}</h4>
          </div>
        ))}
      </div>
      <section className="flex flex-col gap-14 mb-24 px-5 md:px-10 lg:px-0">
        {data?.houses &&
          data.houses.map((house, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col gap-6 items-center text-left w-full p-10 md:p-20 lg:p-20 rounded border-white border-4 shadow-2xl`}
                style={{
                  backgroundImage:
                    i % 2 === 0
                      ? "linear-gradient(to bottom, #FBFBF9, #FFFFFF)"
                      : "linear-gradient(to bottom, #F2E7D9, #FFFFFF)",
                }}
              >
                <div className="flex flex-col md:flex-row justify-between pt-6 lg:pt-0 pb-6 md:pb-24">
                  <h2 className="w-full md:w-5/12 mb-4 md:mb-0">
                    {house.title}
                  </h2>
                  <p
                    className="w-full md:w-7/12 text-sm md:pl-12"
                    style={{ color: "#6B7280" }}
                  >
                    {house.desc}
                  </p>
                </div>
                <ul className="flex flex-col md:flex-row w-full max-w-screen-lg justify-center">
                  {house.images.map((img: string, j) => {
                    return (
                      <li
                        key={j}
                        className={`${
                          house.title === "Distribution"
                            ? "w-full"
                            : house.title === "Other Activities"
                            ? "w-full lg:w-1/3"
                            : "w-full lg:w-1/3"
                        } px-2 pb-4 md:pb-0 relative`}
                      >
                        <Image
                          className="w-full h-auto"
                          src={img}
                          alt={house.title}
                          height="236"
                          width="335"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </section>
      <Jeromes />
    </>
  );
};

export default Houses;
