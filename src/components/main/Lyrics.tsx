import Image from "next/image";
import { songData } from "./data";
import { JSX } from "react";

const lyricsGenerator = (i: string): JSX.Element[] => {
  return i.split("\n").map((line, index) => {
    if (
      line.startsWith("CHORUS:") ||
      line.startsWith("INTRO:") ||
      line.startsWith("PRE-CHORUS:") ||
      line.startsWith("VERSE 1:") ||
      line.startsWith("HOOK:")
    ) {
      return (
        <p key={index} className="font-bold mt-4">
          {line}
        </p>
      );
    } else {
      return (
        <p key={index} className="font-light">
          {line}
        </p>
      );
    }
  });
};

export default function Lyrics() {
  const { title, description, lyrics, artistName } = songData;
  return (
    <div className="sm:w-10/12 w-199/200 m-auto">
      <Image
        src="/images/bemine.webp"
        width={400}
        height={400}
        alt="artcover"
        className="py-10 w-100 m-auto"
      />
      <div>
        <h2 className="text-[3.2rem] font-black underline">Richiezo Lyrics</h2>
        <p className="first-letter:font-light leading-9 first-letter:float-left first-letter:p-4 first-letter:pl-0 first-letter:text-[5rem]">
          {description}
        </p>
      </div>
      <div className="mt-10 text-center ">
        <h2 className="font-extrabold underline text-xl">
          {artistName} - {title} Lyrics
        </h2>
        <div className={` mt-6 whitespace-pre-wrap leading-7`}>
          {lyricsGenerator(lyrics)}
        </div>
      </div>
    </div>
  );
}
