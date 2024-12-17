"use client";

import Image from "next/image";
import { navItems } from "./navbar";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <section className="flex flex-col w-full items-center pb-8 lg:pb-14">
    <Image src="/contact-monogram.svg" height="38" width="30"  alt="Contact us" className="mb-5" />
    <p className="text-xs uppercase flex flex-col gap-2 items-center tracking-widest mb-24">
      <span className="" style={{ color: "#9CA3AF"}}>CONTACT US</span>
      <a href="mailto:hello@falicgroup.com" className="underline" style={{ color: "##1F2937" }}>hello@falicgroup.com</a>
    </p>
    <Image src="/logo-mono.svg" height="381" width="1200"  alt="Falic Group" className="w-full max-w-full h-full pb-16 px-10 md:px-20 lg:px-0" />
    <div className="hidden sm:flex flex-row justify-between px-8 lg:px-20 items-center text-xs uppercase gap-8 pb-16" style={{ color: "##1F2937" }}>
      {navItems.map((item, i) => <Link key={`footerNav-${i}`} href={item.href}>{item.title}</Link>)}
    </div>
    <p className="text-xs tracking-widest" style={{ color: "#9CA3AF"}}>
      © {currentYear} Falic Group
    </p>
  </section>
}

export default Footer;
