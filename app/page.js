import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="container mx-auto my-14 relative bg-gradient-to-r from-orange-200 via-yellow-100 to-pink-100
">
        <section className="w-full">
          <Header />
        </section>
        <section className="w-full">
         <HeroSection />
        </section>
        <section>
          <Footer />
        </section>
    </div>
  );
}
