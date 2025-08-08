import { Suspense } from "react";
import HandleProtocolClient from "./client";

export default function HandleProtocolPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Protocol Handler</h1>
      <Suspense fallback={<p>Loading protocol data...</p>}>
        <HandleProtocolClient />
      </Suspense>
    </main>
  );
}
