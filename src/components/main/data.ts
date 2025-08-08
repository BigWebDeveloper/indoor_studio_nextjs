import { FaFacebook, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { shareLinkType } from "./types";
import { songDataType } from "./types";
import { FaInstagram } from "react-icons/fa6";

export const shareLink: shareLinkType[] = [
  {
    Icon: FaFacebook,
    title: "facebook-pro",
    url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faudiomack.com%2Frichiezo%2Fsong%2Fbe-mine&picture=https%3A%2F%2Fassets.audiomack.com%2Frichiezo%2Fc55c9e7c2c58cddc312bff279b05488117ea9111c18e7dcf97dc80c3ec1b5a4f.jpeg&name=Now%20Playing&caption=%20&description=BE%20MINE%20by%20Richiezo%20via%20%40audiomack&_rdc=1&_rdr",
  },
  {
    Icon: IoLogoWhatsapp,
    title: "whatsapp-share",
    url: "whatsapp://send?text=https://audiomack.com/richiezo/song/be-mine",
  },
  {
    Icon: FaTwitter,
    title: "twitter-share",
    url: "https://twitter.com/intent/tweet/?text=https://audiomack.com/richiezo/song/be-mine/?url=https://audiomack.com/embed/richiezo/song/be-mine",
  },
];

export const shareLink2: shareLinkType[] = [
  {
    Icon: FaFacebook,
    title: "facebook-pro",
    url: "https://www.facebook.com/Richiezo1/",
  },
  {
    Icon: FaTiktok,
    title: "tiktok-pro",
    url: "https://www.tiktok.com/@_richiezo",
  },
  {
    Icon: FaInstagram,
    title: "instagram-pro",
    url: "https://www.instagram.com/_richie.zo/",
  },
  {
    Icon: FaTwitter,
    title: "twitter-pro",
    url: "https://twitter.com/_richiezo",
  },
];

export const songData: songDataType = {
  title: "Be mine ",
  artistName: "Richiezo",

  lyrics: `
INTRO:
Richie lomoyeh o  
wo wo wo wo wo wo

HOOK:
hmmm  
The way you girls have been walking sexy am in love with your behind  
The way you shake that your buddy if na your matter omo I go fight.  
Tell me what should I do cause I don't know why but you must be mine  
The way you dey give me joy and give me peace, I must hold you tight

CHORUS:
Hmmmm, cause you must be mine.  
Hmmmnnnnmmmm, cause you are so fine  
Hmmm hmm cause you must be mine  
Yeah yeah yeah yeah yeah.

PRE-CHORUS:
Oskalalala  
Oskolololo  
Eskalalala  
Hmmmmmm you must be mine.  
Eskalalala  
Eskolololo  
Eskalalala  
Hmmmmmmm you must be mine

VERSE 1:
This kind thing you dey carry e dey shake o  
Na original no be fake o  
Slow down no no no break o  
Make I put money like say na bet o  
You know my life is at stake o  
Come see daddy don't be late o  
Make anybody no hate o  
If you be Rihanna me I be Drake o  
The way you dey whine girl, you dey burst man brain you dey burst man brain  
The way you dey dance girl, you wan make badman to dey go insane  
Girl you know say na you na you. x2  
Baby girl make I be your boo, if na the last card I spend on you

PRE-CHORUS:
Eskalalala  
Eskelelele  
Eskalalala  
Hmmmmmm you are divine.  
Eskalalala  
Eskalalala  
Eskalalala  
Hmmmmmmm with your behind

CHORUS:
Hmmmm, cause you must be mine.  
Hmmmnnnnmmmm, cause you are so fine  
Hmmm hmm cause you must be mine  
Yeah yeah yeah yeah yeah.

PRE-CHORUS:
Oskalalala  
Oskolololo  
Eskalalala  
Hmmmmmm you must be mine.  
Eskalalala  
Eskolololo  
Eskalalala  
Hmmmmmmm you must be mine`,
  description: `
Richiezo releases 'Be Mine' from his upcoming single, which is set to be released in few weeks; He specially did the song for every queen and princess out there so special. feel the vibes. Enjoy!!!.
Here's the official audio and lyrics of Richiezo's new song, on this track title-'BE MINE', Richie lyrics got fans talking.....Enjoy!`,
};

export const ratingData: string[] = [
  "Delivery: 1.8/2",
  "Lyricism: 1.6/2",
  "relatability: 1.5/2",
  "Mixing and Production: 1.9/2",
  "Replay Value: 1.8/2",
];
