import Link from "next/link";
import { shareLink } from "./data";

export default function ArtistInfo() {
  return (
    <div className="mt-6">
      <div className="font-extralight flex justify-between">
        <h3>
          by{" "}
          <span className="border-1 rounded-full px-2">Azeez Ishola Oloto</span>
        </h3>
        <h4>MAY 29, 2023</h4>
      </div>
      <h1 className="mt-6 sm:text-[3.2rem] text-4xl max-sm:leading-10 font-black">
        BE MINE Lyrics by Richiezo
      </h1>
      <div className="flex gap-4 mt-2 items-center">
        <p>Share:</p>
        <ul className="flex gap-3">
          {shareLink.map(({ Icon, title, url }, index) => {
            return (
              <li key={index} className="animate-wiggle">
                <Link href={url} target="_blank" title={title} rel="noopener">
                  <Icon size={18} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
