import Link from "next/link";
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
}

const ColCard: FC<Props> = ({title, category, date, img, aid, desc, btnText}: Props) => {
  const link = `/${aid}`;

  return (
    <div className="p-8 md:p-20">
      <div className="flex flex-col gap-y-4">
        <Image className="w-full h-auto" src={img} alt={title} height="334" width="763" />
        <h3>{title}</h3>
        {category && date && <p className="text-gray-500">{category}<br />{date}</p>}
        {desc && <p>{desc}</p>}
      </div>
      {btnText &&
        <div className="mt-10">
          <ButtonA  href={link}>{btnText}</ButtonA>
        </div>}
    </div>
  );
}

export default ColCard;
