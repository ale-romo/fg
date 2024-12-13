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
    className="inline-flex py-2 px-7 text-xl rounded font-garamond"
    style={{
      color: secondary ? '#92400E' : 'black',
      backgroundColor: secondary ? '#F9FAFB' : '#E5E7EB',
    }}
  >
    {children}
  </Link>
);

export default ButtonA;
