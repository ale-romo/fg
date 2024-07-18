const data = [
  {
    aid: "sample-1",
    img: "/news/news-1.webp",
    title: "Wines & Spirits",
    category: "",
    date: "",
    desc: 'The Macallan and Duty Free Americas open first-of-it’s kind shop in Americas travel retail.',
  },
  {
    aid: "sample-2",
    img: "/news/news-2.webp",
    title: "Wines & Spirits",
    category: "",
    date: "",
    desc: 'Sotheby’s Worldwide Chairman of Wines & Spirits for 32 years joins BlockBar. ',
  },
  {
    aid: "sample-3",
    img: "/news/news-3.webp",
    title: "Retail",
    category: "",
    date: "",
    desc: "Duty Free Americas wins 'Best Community Engagement' Award for our 2023 DFA Golf Day, bringing together the global travel retail community to raise $1 million to fight cancer.",
  },
  {
    aid: "sample-4",
    img: "/news/news-4.webp",
    title:"Retail",
    category: "",
    date: "",
    desc: 'Duty Free Americas open the first airport store for Toys"R"Us in the world in Terminal A at Dallas Fort Worth International Airport.',
  },
  {
    aid: "sample-5",
    img: "/news/news-5.webp",
    title:"Fashion & interiors",
    category: "",
    date: "",
    desc: 'Falic Group opens a Reebok store at the Multiplaza, Panama.',
  },
  {
    aid: "sample-6",
    img: "/news/news-6.webp",
    title:"Retail",
    category: "",
    date: "",
    desc: 'Visa and Duty Free Americas partner to provide exclusive benefits to travellers.',
  },
];

const getArticle = (aid: string) => {
  return data.find((article) => article.aid === aid) || null;
};

export const getNews = () => {
  return data.map((article) => {
    return {
      img: article.img,
      aid: article.aid,
      title: article.title,
      desc: article.desc,
      date: article.date,
      category: article.category,
    };
  });
};

export default getArticle;
