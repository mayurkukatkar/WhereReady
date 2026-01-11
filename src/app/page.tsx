import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { SolutionFlow } from "@/components/sections/SolutionFlow";
import { ClientShowcase } from "@/components/sections/ClientShowcase";
import { Packages } from "@/components/sections/Packages";
import { FAQ } from "@/components/sections/FAQ";
import { FinalDream } from "@/components/sections/FinalDream";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <Header />
      <Hero />
      <Problems />
      <SolutionFlow />
      <ClientShowcase />
      <Packages />
      <FAQ />
      <FinalDream />
      <Footer />
    </main>
  );
}
