import Image from "next/image";

const Jeromes = () => {
  return <section className="text-left text-xl w-full max-w-full jeromes flex justify-center items-stretch pt-24 pb-36 md:pb-44">
    <div className="flex-1" style={{ backgroundImage: 'url(/jeromes/left.jpg)'}}></div>
    <div className="py-32 px-12 md:px-20 lg:px-40 flex flex-col items-left flex-co -my-20" style={{ background: "#ECE9E4", maxWidth: "1120px" }}>
      <p className="mb-8 font-garamond quoted relative text-2xl">“As a group, we are committed to forging the best brand partnerships and delivering results at scale. Our experience founding Duty Free Americas has taught us a lot about fast growth and innovation. One of the great privileges we have is to be able to give back to causes close to our heart, and with the Falic Family Foundation we support a number of charitable organisations in the United States and internationally, making a real difference to diverse communities”</p>
      <div className="text-sm">
        <p className="uppercase">Jerome Falic</p>
        <p className="mb-8" style={{ color: "#D5C5AC" }}>DFA CEO & PRINCIPAL OF FALIC FAMILY FOUNDATION</p>
        <Image width="0" height="0" className="w-48 h-auto" alt="Jerome Falic" src="/Arthur_Miller_signature.svg" />
      </div>
    </div>
    <div className="flex-1 bg-red-400" style={{ backgroundImage: 'url(/jeromes/right.jpg)'}}></div>
  </section>
}

export default Jeromes;
