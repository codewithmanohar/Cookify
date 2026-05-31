"use client";

import { Button } from "@/components/ui/button";
import useIngredientsStore from "@/store/use-food-store";
import { Search, Sparkles } from "lucide-react";
import { INGREDIENTS, MEAL_CATEGORIES } from "@/lib/data";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Counter() {
  const {
    food_type,
    food_ingridient,
    addIngredient,
    removeIngredient,
  } = useIngredientsStore();

  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!food_type) {
      toast.info("Please select the Food Type!");
      router.push("/");
    }
  }, []);

  const toggleOption = (item) => {
    if (food_ingridient.includes(item)) {
      removeIngredient(item);
    } else {
      addIngredient(item);
    }
  };

  // Get sub-category names for the selected meal (e.g. ["Vegetables", "Dairy & Eggs", ...])
  const subCategoryNames = MEAL_CATEGORIES[food_type] ?? [];

  // Get the full sub-category objects from INGREDIENTS matching the meal's sub-categories
  const mealSubCategories = subCategoryNames
    .map((name) => INGREDIENTS.find((cat) => cat.category === name))
    .filter(Boolean);

  // Search: search across all items in the meal's sub-categories
  const filteredIngredients = mealSubCategories.flatMap((cat) =>
    cat.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <div className="container mx-auto my-14">
        <div className="mx-auto max-w-5xl">

          {/* Heading */}
          <h1 className="text-center py-10 text-4xl font-semibold">
            What ingredients do you have?
          </h1>

          {/* Search Box */}
          <form className="mx-auto max-w-2xl mt-10">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Search className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />
              <input
                placeholder="Search for Ingredient"
                className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>

          {/* Search Results */}
          {search && (
            <div className="max-w-2xl mx-auto mt-4 border rounded-xl p-4 bg-background shadow-sm">
              <div className="flex flex-wrap gap-4">
                {filteredIngredients.length > 0 ? (
                  filteredIngredients.map((item, index) => (
                    <Button
                      key={index}
                      variant={
                        food_ingridient.includes(item.name)
                          ? "destructive"
                          : "outline"
                      }
                      onClick={() => toggleOption(item.name)}
                    >
                      {item.name} {item.icon}
                    </Button>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No ingredients found
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Ingredients grouped by sub-category */}
          {!search && (
            <section className="mx-auto max-w-2xl">
              {mealSubCategories.map((cat, catIndex) => (
                <div key={catIndex}>
                  {/* Sub-category heading */}
                  <h2 className="text-xl text-center font-semibold tracking-tight py-10">
                    {cat.category}
                  </h2>

                  {/* Items */}
                  <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
                    {cat.items.map((item, itemIndex) => (
                      <Button
                        key={itemIndex}
                        variant={
                          food_ingridient.includes(item.name)
                            ? "destructive"
                            : "outline"
                        }
                        onClick={() => toggleOption(item.name)}
                      >
                        {item.name} {item.icon}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Generate Recipe Button */}
          <form className="mx-auto max-w-5xl flex justify-center py-10">
            <Link href="/result">
              <Button
                className="px-6 py-3 text-lg w-xl rounded-2xl"
                size="xl"
              >
                <Sparkles className="mr-2" />
                <span>Generate Recipe</span>
              </Button>
            </Link>
          </form>

          {/* Footer */}
          <section>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}