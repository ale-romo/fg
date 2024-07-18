import Link from "next/link";
import { FC } from 'react';
import ButtonA from "./ButtonA";
import Image from "next/image";

interface Props {
  title: string,
  img: string,
  aid: string,
  category?: string,
  date?: string,
  desc?: string,
  btnText?: string,
}

const EventCard: FC<Props> = ({title, category, date, img, aid, desc, btnText}: Props) => {
  const link = `/news/${aid}`;

  return (
    <div className="md:px-4">
      <Link className="flex flex-col gap-y-4 mb-10" href={link}>
        <Image src={img} width="292" height="253" alt={title} className="w-full h-auto"/>
        <h3 className="text-sm">{title}</h3>
        {category && date && <p className="text-gray-500">{category}<br />{date}</p>}
        {desc && <p className="text-sm">{desc}</p>}
      </Link>
      {btnText && <ButtonA  href={link}>{btnText}</ButtonA>}
    </div>
  );
}

export default EventCard;
