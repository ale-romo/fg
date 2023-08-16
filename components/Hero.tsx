import { FC, ReactNode } from "react";
import ActiveImg from "./ActiveImg";
import Link from "next/link";
interface Props {
  bg?: string;
  children?: ReactNode;
}
const Hero: FC<Props> = ({bg, children}) => {
  return <section className="w-full h-v80 flex justify-center items-center px-10 md:px-20">
    {bg &&
      <Link href="/" className="z-0 absolute w-full h-v80 block">
        <ActiveImg src={bg}/>
      </Link>
    }
    <div className="z-10 flex h-full w-full flex-col justify-center items-center text-white pointer-events-none">
      {children}
    </div>
  </section>
}
export default Hero;
