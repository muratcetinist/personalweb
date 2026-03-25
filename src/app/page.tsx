import { Hero } from "@/components/sections/hero";
import { Contact } from "@/components/sections/contact";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <CursorGlow />
      <main className="relative z-10 flex h-screen items-center justify-center px-8">
        <div className="flex flex-col items-start gap-8">
          <Hero />
          <Divider />
          <Contact />
        </div>
      </main>
    </>
  );
}
