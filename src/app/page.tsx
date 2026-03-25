import { Hero } from "@/components/sections/hero";
import { Contact } from "@/components/sections/contact";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { MorphingBlobs } from "@/components/ui/morphing-blobs";
import { LocalTime } from "@/components/ui/local-time";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      {/* Atmosphere layers */}
      <MorphingBlobs />
      <FloatingParticles />
      <GrainOverlay />
      <CursorGlow />
      <LocalTime />

      {/* Content */}
      <main className="relative z-10">
        {/* Hero — full viewport, cinematic entrance */}
        <section className="flex h-screen items-center justify-center px-8">
          <div className="flex flex-col items-start gap-8">
            <Hero />
            <Divider />
            <Contact />
          </div>
        </section>

      </main>
    </>
  );
}
