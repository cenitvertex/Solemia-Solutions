import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solutions } from "@/components/solutions";
import { WhySolemia } from "@/components/why-solemia";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-solemia-coral/20 selection:text-solemia-charcoal">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solutions />
        <WhySolemia />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
