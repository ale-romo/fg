import { FC } from 'react';
import Image from "next/image";
import ButtonA from "./ButtonA";

interface Props {
  title: string,
  img: string,
  aid?: string,
  category?: string,
  date?: string,
  desc?: string,
  btnText?: string,
  fancy?: boolean,
}

const ColCard: FC<Props> = ({title, category, date, img, aid, desc, btnText, fancy}: Props) => {
  const link = `/${aid}`;

  return (
    <div className={`flex flex-col w-full ${fancy ? 'bg-white rounded p-2 drop-shadow-2xl': ''}`}>
      <Image className={`w-full h-auto rounded mb-10 ${fancy ? 'rounded': ''}`} src={img} alt={title} height="334" width="763" />
      <div className={`flex flex-col gap-y-4 flex-grow ${fancy ? 'p-8' : ''}`}>
        <h3>{title}</h3>
        {category && date && <p className="text-gray-500">{category}<br />{date}</p>}
        {desc && <p style={{ color: "#6B7280"}}>{desc}</p>}
        {btnText &&
          <div className="mt-10 flex flex-grow items-end">
            <ButtonA  href={link} secondary>{btnText}</ButtonA>
          </div>}
      </div>
    </div>
  );
}

export default ColCard;
