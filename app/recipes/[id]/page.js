'use client';

import { useParams, useRouter } from 'next/navigation';
import useFoodStore from '@/store/useFoodStore';
import { useEffect } from 'react';
import { ChefHat, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { DeleteDialog } from '@/components/delete-dialog';
import Loading from '@/components/Loading';

export default function PostPage() {
  const params = useParams();
  const postId = params.id;
  const router = useRouter();

  const { recipesLoading, getRecipeById, recipeById } = useFoodStore();

  useEffect(() => {
    getRecipeById(postId);
  }, [postId, getRecipeById]);

  if (recipesLoading) return <Loading message="Recipes laoding..." />;

  if (!recipeById) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <p className="mt-2 text-gray-600">
          The recipe with ID "{postId}" could not be loaded or does not exist.
        </p>
        <Button className="mt-6" onClick={() => router.push('/')}>
          Go to Recipes List
        </Button>
      </div>
    );
  }

  return (
    <div className='px-4 sm:px-6 lg:px-0'>
      <div className='mx-auto container max-w-5xl my-10 sm:my-14'>

        {/* Header */}
        <section className='text-center py-8 sm:py-10 flex flex-col items-center'>
          <h1 className='text-primary text-3xl sm:text-4xl md:text-5xl font-semibold py-3 sm:py-5'>
            {recipeById.dish_name}
          </h1>
          <p className='text-gray-500 text-xs sm:text-sm max-w-xl sm:max-w-2xl leading-relaxed'>
            A rich, creamy, and mildly spiced Indian curry, perfect for a cozy dinner.
          </p>
        </section>

        {/* Image Section */}
        <section className="my-4 sm:my-6">
          {recipeById.recipe_img ? (
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={recipeById.recipe_img}
                alt={recipeById.dish_name || "Dish image"}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-48 sm:h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </section>

        {/* Ingredients */}
        <section className='my-8 sm:my-10 px-4 sm:px-10 py-5 bg-gray-50 rounded-xl shadow-inner'>
          <h1 className='text-xl sm:text-2xl pb-3 sm:pb-5 font-bold flex gap-2 items-center'>
            Ingredients <ShoppingCart className='w-5 h-5 sm:w-6 sm:h-6' />
          </h1>

          {recipeById.RECIPE_INGREDIENTS?.map((Ingredient, index) => (
            <div key={index} className='mb-5 sm:mb-6'>
              <h2 className='text-lg sm:text-xl font-semibold py-2 sm:py-3 text-gray-800 border-b border-gray-200'>
                {Ingredient.section}
              </h2>
              <div className='flex flex-col gap-2 pt-2'>
                {Ingredient.items.map((item, itemIndex) => (
                  <h3 key={itemIndex} className='text-sm sm:text-base text-gray-600 flex items-center gap-3'>
                    <ChefHat className='text-primary w-4 h-4' /> {item}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Cooking Instructions */}
        <section className='py-8 sm:py-10'>
          <h1 className='text-xl sm:text-2xl py-3 sm:py-5 font-bold flex gap-2 items-center'>
            Cooking Instructions <ChefHat className='w-5 h-5 sm:w-6 sm:h-6' />
          </h1>

          {recipeById.COOKING_INSTRUCTIONS?.map((item, index) => (
            <div
              key={index}
              className='flex gap-4 sm:gap-5 mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow'>
              <span className='font-bold text-base sm:text-lg text-primary min-w-[25px] sm:min-w-[30px] text-center'>
                {item.step}.
              </span>
              <span className='text-gray-700 text-sm sm:text-base leading-relaxed'>{item.text}</span>
            </div>
          ))}
        </section>

        {/* Delete Button */}
        <section className='flex items-center justify-center my-8 sm:my-10'>
          <DeleteDialog id={postId} />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
