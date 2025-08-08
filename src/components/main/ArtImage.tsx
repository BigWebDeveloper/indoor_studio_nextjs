import Image from "next/image";

export default function ArtImage() {
  return (
    <div className="flex h-[270px] relative overflow-hidden">
      <Image
        src="/images/bemine.webp"
        width={500}
        height={500}
        alt="art cover"
        className="absolute flex w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      <div className="z-1 backdrop-blur-2xl bg-black/60 absolute w-full h-full"></div>
      <Image
        src="/images/bemine.webp"
        width={500}
        height={500}
        alt="art cover"
        className="z-2 w-auto flex h-auto p-3 max-xl:hidden"
        priority
      />
      <div className="w-full z-2 p-[10px]">
        <iframe
          src="https://audiomack.com/embed/richiezo/song/be-mine"
          width="100%"
          height="252"
          title="audiomack-frame"
        />
      </div>
    </div>
  );
}
