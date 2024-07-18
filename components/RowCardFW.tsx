import { FC } from "react";
import ActiveImg from "./ActiveImg";

interface Props {
  img: string;
  title: string;
  description: string;
  alignment: boolean;
}

const RowCard: FC<Props> = ({ img, title, description, alignment }) => {
  return <div className={`w-full flex flex-col justify-center ${alignment ? "lg:flex-row" : 'lg:flex-row-reverse'}`}>
    <div className="w-full lg:w-1/2 h-80 lg:max-w-screen-sm">
      <ActiveImg src={img} />
    </div>
    <div className="w-full lg:w-1/2 flex items-center text-center justify-center py-6 px-8 text-white lg:max-w-screen-sm">
      <div className={`w-4/5 ${alignment ? "lg:text-right" : "lg:text-left"}`}>
        <h3 className={`pb-4 ${alignment ? "lg:text-left" : "lg:text-right"}`}>{title}</h3>
        <p className={`${alignment ? "lg:text-left" : "lg:text-right"}`} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  </div>
}

export default RowCard;
