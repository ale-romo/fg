import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  colors?: string;
}

const ButtonA:FC<Props> = ({href, children, colors}) => <Link href={href} target="_self" className={`inline-flex py-2 px-7 border-2 border-solid uppercase font-montserrat font-medium text-xs ${colors ? colors : 'border-black text-black hover:text-white hover:bg-black'}`}>{children}</Link>

export default ButtonA;
