import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {

// async function fetchData() {
//   const res = await fetch("http://localhost:3000/api/Auth");
//   const data = await res.json();
//   console.log(data);
// }

// fetchData();


  return (
    <div className="container mx-auto my-14 relative">
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
