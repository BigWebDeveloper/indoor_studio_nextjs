"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HandleProtocolClient() {
  const searchParams = useSearchParams();
  const [trackName, setTrackName] = useState<string | null>(null);

  useEffect(() => {
    const url = searchParams.get("url");
    if (url) {
      try {
        const parsed = new URL(url);
        const name = parsed.searchParams.get("name");
        setTrackName(name);
      } catch (err) {
        console.error("Invalid protocol URL:", url);
      }
    }
  }, [searchParams]);

  return (
    <div>
      {trackName ? (
        <p>Now playing: {trackName}</p>
      ) : (
        <p>Loading or invalid track data...</p>
      )}
    </div>
  );
}
