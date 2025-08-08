import Header from "@/components/header/Header";
import ArtImage from "@/components/main/ArtImage";
import ArtistInfo from "@/components/main/ArtistInfo";
import Lyrics from "@/components/main/Lyrics";
import DownloadSong from "@/components/main/DownloadSong";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { shareLink2 } from "@/components/main/data";
import Link from "next/link";

const page = () => {
  return (
    <div className="overflow-hidden h-full relative">
      <Header />
      <div
        id="main-section"
        className="grid mt-30 xl:grid-cols-[70%_30%] md:grid-cols-[60%_40%] grid-cols-1 gap-x-6 w-11/12 m-auto"
      >
        <div id="left">
          <ArtImage />
          <ArtistInfo />
          <Lyrics />
          <DownloadSong />
        </div>
        <div
          id="right"
          className="flex flex-col items-center gap-4 justify-center bg-black sm:h-110 h-full py-10"
        >
          <Image
            src="/images/artist.jpg"
            width={196}
            height={196}
            alt="artcover"
            className="rounded-full"
            sizes="(max-width: 768px) 100px, 196px"
            priority
          />
          <ul className="flex gap-5">
            {shareLink2.map(({ Icon, title, url }, index) => {
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
      <Footer />
    </div>
  );
};

export default page;
