import Hero from "@/components/Hero";
import Jeromes from "@/components/Jeromes";

const Careers = () => {
  return (
    <>
      <Hero bg="/careers/hero-careers.jpg">
        <h1 className="font-garamond">Join Us</h1>
        <p className="text-sm text-sm w-60 md:w-[291px] lg:w-[291px]">
          Join the leaders in travel retail, luxury goods, and global
          distribution.
        </p>
      </Hero>

      <section className="flex flex-col gap-8 items-center pb-16 py-20 justify-center linear-gradient(to bottom, #FBFBF9, #FFFFFF) p-12 lg:p-20 rounded border-white border-4 shadow-2xl lg:mt-20">
        <h3 className="text-center text-4xl lg:text-6xl">
          Fast-paced, disruptive
          <br />
          and family-oriented.
        </h3>
        <p className="text-3lg text-center">
          That is how we define ourselves at Falic Group. If you are a dynamic
          team player eager to reach your full potential, we want to hear from
          you!
        </p>
        <p className="text-3lg text-center">
          At Falic Group, we are dedicated to providing our employees with an
          exceptional work-life experience and opportunities for career
          development. This commitment is reflected in our long-tenured team
          members, many of whom have been with us for years, if not decades.
          Ready to become part of our Falic Group family?
        </p>
        <p className="text-3lg text-center">
          Stay tuned for exciting career opportunities in global and in-market
          operations, supply chain, retail, finance, creative, marketing, public
          relations, and e-commerce.
        </p>
      </section>

      <section className="p-10 pb-0 md:p-20 md:pb-0 flex flex-col items-center">
        <h3 className="text-center text-4xl lg:text-6xl mb-12">
          Career opportunities
        </h3>
        <p className="text-center flex flex-col gap-4 font-garamond text-2xl mb-20">
          Looking for a career with Falic Group? Contact Us 
          <a
            href="mailto:hello@falicgroup.com"
            className="underline hover:text-primary font-garamond"
            style={{ color: "#935D19" }}
          >
            HELLO@FALICGROUP.COM
          </a>
        </p>
      </section>
      <Jeromes />
    </>
  );
};

export default Careers;
