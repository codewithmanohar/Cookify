"use client";
import { Button } from "@/components/ui/button";
import useIngredientsStore from "@/Store/useFoodStore";
import { Search, Sparkles } from "lucide-react";
import { INGREDIENTS } from "@/lib/data"
import { Footer } from "@/components/Footer";
import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";



export default function Counter() {
  const { food_type, food_ingridient, addIngredient, removeIngredient } = useIngredientsStore();
  const router = useRouter();
  useEffect(() => {
    if(!food_type) {
      toast.info("Please select the Food Type!");
      router.push("/")
    }
  },[])

  const toggleOption = (item) => {
    if (food_ingridient.includes(item)) {
      removeIngredient(item);
    } else {
      addIngredient(item);
    }
  };



  return (
    <>
      <div className="container mx-auto my-14">

        <div className=" mx-auto max-w-5xl">
          <h1 className="text-center py-10 text-4xl  font-semibold">What ingredients do you have?</h1>
          <form
            action=""
            className="mx-auto max-w-2xl mt-10">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Search className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

              <input
                placeholder="Search for Ingredient"
                className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                type="text"
              />
            </div>
          </form>
          {/* select ingridients */}
          <section className="mx-auto max-w-2xl ">
            {INGREDIENTS.map((Ingredient, index) => (
              (food_type == "non-veg" || (food_type == "veg" && (Ingredient.categoryTag == "veg" || Ingredient.categoryTag == "vegan")) || (food_type == "vegan" && Ingredient.categoryTag == "vegan") ) ? (
                <div key={index}>
                <h1 className="text-xl text-center font-semibold tracking-tight py-10">
                  {Ingredient.category}
                </h1>
                <div className="flex flex-row  gap-10 items-center justify-center flex-wrap ">
                  {Ingredient.items.map((item, index) =>
                    (food_type === "non-veg" ||
                      (food_type === "veg" && (item.tag === "veg" || item.tag === "vegan")) ||
                      (food_type === "vegan" && item.tag === "vegan")) ? (

                      <Button
                        key={index}
                        variant={food_ingridient.includes(item.name) ? "destructive" : "outline"}
                        onClick={() => toggleOption(item.name)}
                      >
                        {item.name} {item.icon}
                      </Button>

                    ) : null
                  )}

                </div>

              </div>
              ): null
              
            ))}
          </section>

          {/* Generate Recipie Button  */}
          <form className="mx-auto max-w-5xl flex justify-center py-10">
            <Link href="/result">
              <Button className="px-6 py-3 text-lg w-xl rounded-2xl" size="xl">
                <Sparkles className="mr-2" />
                <span>Generate Recipe</span>
              </Button>
            </Link>
          </form>



          <section>
            <Footer />
          </section>

        </div>
      </div>
    </>
  );
}



