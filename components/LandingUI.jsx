import { features, imgs } from "@/lib/data";
import Image from "next/image";
import { LoginDialog } from "./login-dialog";
import { Footer } from "./Footer";

export default function Landing() {
  return (
    <div className="relative w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative mt-16 w-full min-h-[60vh] sm:min-h-[75vh] pt-10 sm:pt-20 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={imgs.landing_ui}
            alt="hero background"
            fill
            priority
            className="object-cover object-center sm:object-[center_top] opacity-90"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/30 sm:bg-black/10"></div>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="flex flex-col gap-4 sm:gap-5 items-center text-gray-100 text-center max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
              Your AI Chef for Instant Recipes
            </h1>
            <h2 className="text-sm sm:text-xl md:text-2xl font-semibold max-w-xl">
              Select ingredients → AI creates delicious recipes instantly.
            </h2>

            <LoginDialog />
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <section className="flex flex-col items-center justify-center gap-8 my-10 mt-24 px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-black text-center">
          How CookMateAI Works
        </h1>

        <div className="
          max-w-7xl 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 sm:gap-10 place-items-center
        ">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-gray-50 rounded-2xl px-6 py-10 flex flex-col items-center shadow-sm"
            >
              <span className="text-primary">{item.icon}</span>

              <h1 className="text-lg sm:text-xl font-bold py-2 text-center">
                {item.title}
              </h1>

              <p className="text-sm text-zinc-500 text-center max-w-56">
                {item.description}
              </p>

              <Image
                className="object-fill py-5"
                src={item.image}
                width={200}
                height={150}
                alt="features_img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="flex flex-col items-center justify-center gap-5 my-10 mt-24 py-10 px-4 bg-white">
        <h1 className="text-2xl sm:text-4xl text-black font-bold text-center">
          What Our Users Say
        </h1>

        <Image
          width={90}
          height={90}
          src={imgs.profile}
          className="rounded-full"
          alt="user profile"
        />

        <div className="max-w-2xl text-center text-sm sm:text-base px-2">
          <p>
            "Cookify transformed my weeknight dinners! I used to struggle with
            meal ideas, but now I get delicious recipes instantly."
          </p>
        </div>

        <h2 className="text-lg sm:text-xl text-orange-500 font-bold text-center">
          - Anaya Sharma
        </h2>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
