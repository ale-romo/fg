import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  colors?: string;
}

const ButtonA:FC<Props> = ({href, children, colors}) => <Link href={href} target="_self" className={`inline-flex py-2 px-7 rounded-2xl uppercase font-montserrat font-medium text-xs ${colors ? colors : 'bg-white text-primary  hover:bg-secondary'}`}>{children}</Link>

export default ButtonA;
