'use client';

import { useParams, useRouter } from 'next/navigation';
import useFoodStore from '@/Store/useFoodStore';
import { useEffect } from 'react';
import { ChefHat, ShoppingCart, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { DeleteDialog } from '@/components/delete-dialog';
import { imgs } from '@/lib/data';
import Loading from '@/components/Loading';


export default function PostPage() {
  // Get the route parameters
  const params = useParams();
  const postId = params.id;

  // Use the App Router's useRouter hook from 'next/navigation'
  const router = useRouter();

  const { recipesLoading, getRecipeById, recipeById } = useFoodStore();

  // Fetch recipe data on mount
  useEffect(() => {
    // Added dependencies for correctness to prevent stale closure issues
    getRecipeById(postId);
  }, [postId, getRecipeById]);



  // Handle loading state
  if (recipesLoading) {
    return <Loading />
  }

  // Handle case where recipe is not found after loading
  if (!recipeById) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-3xl font-bold text-red-600">Recipe Not Found</h1>
        <p className="mt-2 text-gray-600">The recipe with ID "{postId}" could not be loaded or does not exist.</p>
        <Button className="mt-6" onClick={() => router.push('/')}>
          Go to Recipes List
        </Button>
      </div>
    );
  }

  // Main render content
  return (
    <div>

      <div className='mx-auto container max-w-5xl my-14'>

        <section className='text-center py-10 w-full flex items-center justify-center flex-col'>
          <h1 className='text-primary text-5xl font-semibold py-5 '>
            {recipeById.dish_name}
          </h1>
          <p className=' text-gray-500 text-sm text-wrap max-w-2xl'>
            A rich, creamy, and mildly spiced Indian curry, perfect for a cozy dinner. Best served with naan bread or basmati rice.
          </p>
        </section>

        <section className="my-6">
          {recipeById.recipe_img ? (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={recipeById.recipe_img}
                alt={recipeById.dish_name || "Dish image"}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </section>

        <section className='my-10 px-10 py-5 bg-gray-50 rounded-xl shadow-inner'>
          <h1 className='text-2xl py-5 font-bold flex gap-2 items-center'>
            Ingredients <ShoppingCart className='w-6 h-6' />
          </h1>

          {/* Ensure RECIPE_INGREDIENTS exists before mapping */}
          {recipeById.RECIPE_INGREDIENTS && recipeById.RECIPE_INGREDIENTS.map((Ingredient, index) => (
            <div key={index} className='mb-6'>
              <h2 className='text-xl font-semibold py-3 text-gray-800 border-b border-gray-200'>{Ingredient.section}</h2>
              <div className='flex flex-col gap-2 pt-2'>
                {Ingredient.items.map((item, itemIndex) => (
                  <h3 key={itemIndex} className='text-base text-gray-600 flex items-center gap-3'>
                    <ChefHat className='text-primary w-4 h-4' /> {item}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className='py-10'>
          <h1 className='text-2xl py-5 font-bold flex gap-2 items-center'>
            Cooking Instructions <ChefHat className='w-6 h-6' />
          </h1>

          {/* Ensure COOKING_INSTRUCTIONS exists before mapping */}
          {recipeById.COOKING_INSTRUCTIONS && recipeById.COOKING_INSTRUCTIONS.map((item, index) => (
            <div
              key={index}
              className='flex gap-5 mb-6 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow'>
              <span className='font-bold text-lg text-primary min-w-[30px] text-center'>{item.step}.</span>
              <span className='text-gray-700 leading-relaxed'>{item.text}</span>
            </div>
          ))}
        </section>

        <section className='flex gap-5 items-center justify-center my-10' >
          <DeleteDialog id={postId} />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}