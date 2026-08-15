"use client"
import { useState } from "react";
import { features, imgs, recipe } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { LoginDialog } from "./login-dialog";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Landing() {
  const recipesPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(recipe.length / recipesPerPage);
  
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipe.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  return (
    <div className="relative w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full min-h-[80vh] pt-24 sm:pt-28 overflow-hidden">

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
            <h1 
               style={{ color: "#FFF8F0", textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold ">
              Your AI Chef for Instant Recipes
            </h1>
            <h2 
               style={{ color: "#FEF3E2", textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
              className="text-sm sm:text-xl md:text-2xl font-semibold max-w-xl text">
              Select ingredients → AI creates delicious recipes instantly.
            </h2>

            <LoginDialog />
          </div>
        </div>
      </div>

      {/* ================= SAMPLE RECIPES SECTION ================= */}
      <section className="flex flex-col items-center justify-center gap-8 my-10 mt-10 px-4 py-10 w-full rounded-2xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-black text-center">
          Explore Sample Recipes
        </h1>
        
        {recipe && recipe.length > 0 && (
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5 place-items-center">
              {currentRecipes.map((card, index) => (
                <Card
                  key={index}
                  className="rounded-xl overflow-hidden p-2 flex flex-col h-full shadow-sm bg-white w-full max-w-sm"
                >
                  <div className="w-full h-40 relative">
                    <Image
                      src={card.recipe_img}
                      alt="image"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <CardHeader className="p-3 flex-grow flex items-center justify-center text-center">
                    <CardTitle className="text-base font-bold">
                      {card.dish_name}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="px-3 pb-3 mt-auto">
                    <Button className="w-full text-sm">
                      <Link href={`/sample_recipes/${card._id}`} className="w-full">View Recipe</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                  variant="outline"
                >
                  Previous
                </Button>
                <span className="text-sm font-medium text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <Button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                  variant="outline"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        )}
      </section>

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
