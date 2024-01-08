import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-blue-300 text-primary-content text-9xl font-black grid place-content-center">
              Testing
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              Testing
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </main>

      <section>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
        <h1>testing layout</h1>
      </section>
    </div>
  );
}
