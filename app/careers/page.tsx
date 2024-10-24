import Hero from "@/components/Hero";
import ButtonB from "@/components/ButtonB";

const positions = [
  {
    title: "Data Science Engineer, Geospatial",
    date: "09/25/2023",
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    btnText: "Coming soon"
  },
  {
    title: "Data Science Engineer, Geospatial",
    date: "09/25/2023",
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    btnText: "Coming soon"
  },
  {
    title: "Data Science Engineer, Geospatial",
    date: "09/25/2023",
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    btnText: "Coming soon"
  },
];

const Careers = () => {
  return (
    <>
      <Hero bg="/careers/hero.webp">
        <h1>Join us</h1>
      </Hero>

      <section className="bg-primary text-white flex flex-col gap-8 items-center py-20 justify-center">
        <h3 className="text-center text-2xl max-w-screen-xl">Fast-paced, disruptive and family-oriented.</h3>
        <p className="w-5/6 lg:w-2/3 text-lg text-center max-w-screen-x">
          That is how we define ourselves at Falic Group. If you are a dynamic team player eager to reach your full potential, we want to hear from you!
        </p>
        <p className="w-5/6 lg:w-2/3 text-lg text-center max-w-screen-x">
          At Falic Group, we are dedicated to providing our employees with an exceptional work-life experience and opportunities for career development. This commitment is reflected in our long-tenured team members, many of whom have been with us for years, if not decades. Ready to become part of our Falic Group family? Stay tuned for exciting career opportunities in global and in-market operations, supply chain, retail, finance, creative, marketing, public relations, and e-commerce.
        </p>
      </section>

      <section className="bg-secondary p-10 pb-0 md:p-20 md:pb-0 flex flex-col items-center">
        <h3 className="flex text-center border-black border-b-2 leading-8 mb-8">Career opportunities</h3>
        {/* <ul className="flex flex-col lg:flex-row gap-y-3 w-full max-w-screen-xl">
          {positions.map((position, i) => (
            <li
              key={i}
              className="w-full lg:w-1/3 flex flex-col"
            >
              <div className="bg-primary text-white px-6 py-20 mx-2 text-center font-montserrat">
                <ButtonB href="/careers">{position.btnText}</ButtonB>
              </div>
            </li>
          ))}
        </ul> */}
        <p>
          LOOKING FOR A CAREER WITH FALIC GROUP? CONTACT US AT <a href="mailto:hello@falicgroup.com" className="underline uppercase font-semibold hover:text-primary">HELLO@FALICGROUP.COM</a>
        </p>
      </section>
    </>
  );
};

export default Careers;
