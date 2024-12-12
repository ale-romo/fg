interface Props {
  src: string; // URL of the video
}

const ActiveVideo = ({ src }: Props) => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      {/* Background Video */}
      <video
        src={src}
        className="absolute top-0 left-0 w-full h-full object-cover transition ease-in-out duration-300 hover:scale-110"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default ActiveVideo;
