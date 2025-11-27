import { features, imgs } from "@/lib/data";
import Image from "next/image";
import { Button } from "./ui/button";
import { Footer } from "./Footer";
import { LoginDialog } from "./login-dialog";


export default function Landing() {
  return (
    <div className="relative w-full h-[80vh] pt-16">
      {/* Background Image */}
      <Image
        src={imgs.landing_ui}
        alt="hero background"
        fill
        className="object-cover -z-10 mt-14 opacity-80"
      />

      {/* Content on top of background */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="flex flex-col gap-5 items-center text-gray-800">
          <h1 className="text-7xl font-bold ">Your AI Chef for Instant Recipes</h1>
          <h2 className="text-3xl font-semibold ">Select ingredients → AI creates delicious recipes instantly.</h2>
          <LoginDialog />
        </div>
      </div>

      <section className="flex items-center justify-center gap-10 flex-col my-10 mt-24 py-10">
        <h1 className="text-4xl font-bold text-black">How CookMateAI Works</h1>
        <div className="max-w-7xl flex items-center justify-center flex-wrap gap-10">
          {features.map((item, index) => (
            <div
              className="max-w-xs bg-gray-50 rounded-2xl px-5 py-10 flex flex-col items-center"
              key={index}>
              <span className="text-primary">{item.icon}</span>
              <h1 className="text-xl font-bold py-2">{item.title}</h1>
              <h2 className="text-sm text-zinc-500 max-w-56 text-center ">{item.description}</h2>
              <Image
                className="object-fill py-5"
                src={item.image}
                width={250}
                height={50}
                alt="features_img"
              />
            </div>
          ))}

        </div>
      </section>

      <section className="flex items-center justify-center gap-10 flex-col my-10 mt-24 py-10 bg-white">
        <h1 className="text-4xl text-black font-bold">What Our Users Say</h1>
        <Image 
          width={100}
          height={100}
          src={imgs.profile}
          className="rounded-full"
         alt="image"/>
        <div className="max-w-2xl text-center">
          <p>"CookMateAI transformed my weeknight dinners! I used to struggle with meal ideas, but now I get delicious recipes instantly."</p>
        </div>
        <h2 className="text-xl text-orange-500 font-bold text-center">- Anaya Sharma</h2>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

