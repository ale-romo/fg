import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}

const ButtonA: FC<Props> = ({ href, children, secondary }) => (
  <Link
    href={href}
    target="_self"
    className="inline-flex py-2 px-7 text-xl rounded font-garamond transition-colors duration-300 hover:bg-[#ECE9E4] bg-[#E5E7EB]"
  >
    {children}
  </Link>
);

export default ButtonA;
