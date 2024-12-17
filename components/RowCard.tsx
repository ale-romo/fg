import { FC } from 'react';
import Image from 'next/image';
import ButtonA from "./ButtonA";

interface Props {
  title?: string,
  img: string,
  aid?: string,
  desc?: string,
  btnText?: string,
  reverse?: boolean,
}

const RowCard: FC<Props> = ({title, img, aid, desc, btnText, reverse}: Props) => {
  const link = `/news/${aid ? aid : ""}`;

  return (
    <div className={`p-8 md:p-20 flex flex-col ${reverse ? "lg:flex-row-reverse": "lg:flex-row"}  items-center`}>
      <div className="w-full lg:w-1/2 relative lg:pr-20 pb-8 lg:pb-0">
        <Image src={img} width="954" height="658" alt={title || ""} className="w-full max-w-full h-auto"/>
      </div>
      <div className={`w-full lg:w-1/2 ${reverse ? "lg:pr-16": "lg:pl-16"}`}>
        {title && <h3 className="mb-4">{title}</h3>}
        {desc && <p>{desc}</p>}
        {btnText &&
          <div className="mt-10">
            <ButtonA href={link}>{btnText}</ButtonA>
          </div>}
      </div>
    </div>
  );
}

export default RowCard;
