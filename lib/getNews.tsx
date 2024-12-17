const data = [
  {
    aid: "sample-1",
    img: "/news/news1.png",
    title: "Distribution",
    category: "",
    date: "",
    desc: "UETA MEA launches with distribution across the Middle East and Africa, plus dedicated support for diplomatic missions.",
  },
  {
    aid: "sample-2",
    img: "/news/news2.png",
    title: "Retail",
    category: "",
    date: "",
    desc: "Duty Free Americas launches into train retail channel in partnership with Adani Airport Holdings Limited, starting with operating Eurotunnel Terminal.",
  },
  {
    aid: "sample-3",
    img: "/news/news3.png",
    title: "Falic Family Foundation",
    category: "",
    date: "",
    desc: "Duty Free Americas wins 'Best Community Engagement' Award for our 2023 DFA Golf Day, bringing together the global travel retail community to raise $1 million to fight cancer.",
  },
  {
    aid: "sample-4",
    img: "/news/news4.png",
    title: "Retail",
    category: "",
    date: "",
    desc: "Duty Free Americas open the first airport store for Toys R Us in the world in Terminal A at Dallas Fort Worth International Airport.",
  },
  {
    aid: "sample-5",
    img: "/news/news5.png",
    title: "Fashion & Interiors",
    category: "",
    date: "",
    desc: "Falic Group opens a Reebok store at the Multiplaza, Panama.",
  },
  {
    aid: "sample-6",
    img: "/news/news6.png",
    title: "Retail",
    category: "",
    date: "",
    desc: "Visa and Duty Free Americas partner to provide exclusive benefits to travellers.",
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
