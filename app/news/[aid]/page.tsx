import getArticle, { getNews } from "@/lib/getNews";
import Image from "next/image";

export async function generateStaticParams() {
  const news = getNews();
  return news.map(article => ({aid: article.aid}));
}

interface Params {
  params: {
    aid: string;
  }
}

const Article = ({ params: { aid }}: Params) => {
  const article = getArticle(aid);

  if (!article) return <div>Nothing to see here</div>

  return <>
    <section className='flex flex-col text-center text-lg items-center p-8 pb-0 md:pb-0 md:p-20'>
      <h2 className="font-montserrat">{article.title}</h2>
      <h4>{article.desc}</h4>
      <p className="font-montserrat uppercase font-semibold mb-6 mt-2" style={{ fontSize: "9px" }}>August 2023</p>
      <Image src={article.img} height="577" width="954" alt={article.title} className="w-full h-auto pb-10"/>
      <p className="w-4/5 pb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <div className="flex items-center">
        <p className="lg:text-left w-full lg:w-1/2 lg:pr-4 pb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <Image className="w-full lg:w-1/2 lg:pl-4 h-auto pb-10" src="https://picsum.photos/473/577" height="577" width="473" alt="" />
      </div>
      <p className="text-center w-5/6 pb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <Image src="https://picsum.photos/954/577" height="577" width="954" className="w-full h-auto" alt="" />
    </section>
  </>
}

export default Article;
