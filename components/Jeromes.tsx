import Image from "next/image";

const Jeromes = () => {
  return <section className="text-center text-xl w-full max-w-full jeromes flex justify-center items-stretch pt-10 pb-36">
    <div className="flex-1" style={{ backgroundImage: 'url(/jeromes/left.jpg)'}}></div>
    <div className="p-12 md:py-20 flex flex-col items-center flex-co -my-10" style={{ background: "#ECE9E4", maxWidth: "1120px" }}>
      <p className="mb-8 max-w-screen-md">“As a group, we are committed to forging the best brand partnerships and delivering results at scale. Our experience founding Duty Free Americas has taught us a lot about fast growth and innovation. One of the great privileges we have is to be able to give back to causes close to our heart, and with the Falic Family Foundation we support a number of charitable organisations in the United States and internationally, making a real difference to diverse communities”</p>
      <p className="uppercase">-Jerome Falic</p>
      <p className="font-thin text-sm">DFA CEO & PRINCIPAL OF FALIC FAMILY FOUNDATION</p>
    </div>
    <div className="flex-1 bg-red-400" style={{ backgroundImage: 'url(/jeromes/right.jpg)'}}></div>
  </section>
}

export default Jeromes;
