import { FC, ReactNode } from "react";
import ActiveVideo from "./ActiveVideo";

interface Props {
  bg?: string;
  children?: ReactNode;
}
const Hero: FC<Props> = ({bg, children}) => {
   return (
     <section className="w-full h-[600px] md:h-[820px] flex justify-center items-center px-10 md:px-20 relative max-w-full">
       {bg && (
         <div className="z-0 absolute w-full h-full block">
           <ActiveVideo src={bg} />
         </div>
       )}
       <div className="z-10 flex h-full w-full flex-col justify-center items-start text-white pointer-events-none">
         {children}
       </div>
     </section>
   );
}
export default Hero;
