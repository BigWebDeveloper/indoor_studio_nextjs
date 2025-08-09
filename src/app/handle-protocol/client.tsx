"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function HandleProtocolPage() {
  const searchParams = useSearchParams();
  const [trackName, setTrackName] = useState<string | null>(null);
  useEffect(() => {
    const rawUrl = searchParams.get("url"); // e.g. web+music://be-mine
    console.log(rawUrl);
    if (!rawUrl) return;

    try {
      const cleaned = rawUrl.replace(/^web\+music:\/\//, "").replace(/\/$/, "");

      setTrackName(decodeURIComponent(cleaned));
    } catch (err) {
      setTrackName(null);
    }

    console.log();
  }, [searchParams]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold">Handle Protocol</h1>
      {trackName ? (
        <p className="text-lg mt-4">
          🎵 Now Playing: <strong>{` ${trackName}.mp3`}</strong>
          <audio src={`${trackName}.mp3`} controls autoPlay className="mt-4" />
        </p>
      ) : (
        <p className="mt-4 text-gray-500">Loading...</p>
      )}
    </main>
  );
}
