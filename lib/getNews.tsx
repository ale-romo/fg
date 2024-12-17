const data = [
  {
    aid: "sample-1",
    img: "/news/news-1.webp",
    title: "DFA Golf Day 2023",
    category: "",
    date: "",
    desc: "Raised $1 million to fight cancer.",
  },
  {
    aid: "sample-2",
    img: "/news/news-2.webp",
    title: "DFA's MIA Runway Challenge",
    category: "",
    date: "",
    desc: "Raised money for American Cancer Society. ",
  },
  {
    aid: "sample-3",
    img: "/news/news-3.webp",
    title: "Children's Tumor Foundation",
    category: "",
    date: "",
    desc: "FFF raises money to improve the health and well-being of individuals and families affected by NF",
  },
  {
    aid: "sample-4",
    img: "/news/news-4.webp",
    title: "DFA Golf Day 2022",
    category: "",
    date: "",
    desc: "Duty Free Americas wins Best Community Engagement Award for our 2023 DFA Golf Day, bringing together the global travel retail community to raise $375,000 to fight cancer.",
  },
  {
    aid: "sample-5",
    img: "/news/news-5.webp",
    title: "Joe DiMaggio Children's Hospital",
    category: "",
    date: "",
    desc: "FFF raises money to support pediatric healthcare in Florida and beyond.",
  },
  {
    aid: "sample-6",
    img: "/news/news-6.webp",
    title: "Nicklaus Children's Hospital",
    category: "",
    date: "",
    desc: "Raised $1 million to fight cancer.",
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
