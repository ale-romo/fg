import Image from "next/image";

interface Props {
  src: string;
}

const ActiveImg = ({ src } : Props) => {
  return <div className={"w-full h-full overflow-hidden"}>
    <div style={{ backgroundImage: `url(${src})`}} className="bg-cover bg-center transition ease-in-out duration-300 w-full h-full hover:scale-110 bg-top" />
  </div>
}
export default ActiveImg;
