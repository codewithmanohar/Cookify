import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home({user}) {

  return (
    <div className="container mx-auto my-14 relative">
      <section className="w-full">
        <HeroSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}