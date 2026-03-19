import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhoWeServe } from "@/components/who-we-serve";
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
        <WhoWeServe />
        <Solutions />
        <WhySolemia />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
