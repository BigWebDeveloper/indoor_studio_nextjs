import Image from "next/image";
import { ratingData } from "./data";
import Link from "next/link";

export default function DownloadSong() {
  return (
    <div className="w-10/12 m-auto mt-10">
      <h1 className="text-center underline text-2xl font-bold text-orange-primary">
        Download the song below
      </h1>
      <audio src="/be-mine.mp3" controls className="mx-auto my-2" />
      <Link href="be-mine.mp3" title="download" download="Richiezo-Be_Mine">
        <Image
          src="/images/download-button.webp"
          width={240}
          height={57}
          alt="download"
          className="w-60 h-auto cursor-pointer mx-auto"
          unoptimized
          loading="lazy"
          quality={60}
        />
      </Link>

      <div className="grid my-6 border-1 border-dashed p-5  md:w-10/12 xl:w-5/12 w-full m-auto">
        <h2 className="underline text-center text-xl py-1 ">Rating</h2>
        {ratingData.map((i, index) => (
          <p key={index} className="m-auto text-[.8rem] font-light">
            <span>{i}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
