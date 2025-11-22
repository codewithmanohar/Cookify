// app/posts/[id]/page.js (Client Component - must include 'use client')
'use client';

import { useParams } from 'next/navigation';
import useFoodStore from '@/Store/useFoodStore';
import { useEffect } from 'react';
import { ChefHat, Heart, RotateCcw, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { Header } from '@/components/Header';

export default function PostPage() {
  // Get the route parameters
  const params = useParams();
  const postId = params.id;
  const {recipesLoading , getRecipeById , recipeById } = useFoodStore(); 

  useEffect(() => {
    getRecipeById(postId);
  },[]);
  return (
    <div>
        {recipeById && <div className='mx-auto container max-w-5xl  my-14'>
        <section>
          <Header/>
        </section>
        <section className='text-center py-10 w-full flex items-center justify-center flex-col'>
          <h1 className='text-primary text-5xl font-semibold py-5 '>
            {/* Classic Butter Chicken 🍛 */}
            {recipeById.dish_name}
          </h1>
          <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
            A rich, creamy, and mildly spiced Indian curry, perfect for a cozy dinner. Best served with naan bread or basmati rice.
          </p>
        </section>
        <section className="my-6">
          {recipeById.recipe_img ? (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src={recipeById.recipe_img}
                alt="dish image"
                fill
                className="object-cover"
              />
            </div>

          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-xl animate-pulse" />
          )}
        </section>


        <section className='my-10 px-10 py-5 bg-gray-50 rounded-xl'>
          <h1 className='text-2xl py-5 font-bold flex gap-2 items-center'>Ingredients <ShoppingCart /></h1>
          {recipeById.RECIPE_INGREDIENTS.map((Ingredient, index) => (
            <div key={index}>
              <h2 className='text-xl font-semibold py-5'>{Ingredient.section}</h2>
              {Ingredient.items.map((item, index) => (
                <div key={index} className='flex flex-col gap-3'>
                  <h3 className='text-sm text-gray-600 flex items-center gap-2'>
                    <ChefHat className='text-primary' size={15} /> {item}
                  </h3>

                </div>
              ))}
            </div>
          ))}
        </section>

        <section className='py-10'>
          <h1 className='text-2xl py-10 font-bold flex gap-2 items-center'>
            Cooking Instructions <ShoppingCart />
          </h1>

          {recipeById.COOKING_INSTRUCTIONS.map((item, index) => (
            <div
              key={index}
              className='flex gap-5'>
              <span className='font-bold '>{item.step}.</span>
              <span>{item.text}</span>
            </div>
          ))}
        </section>

        <section className='flex gap-5 items-center justify-center my-10' >
          <Button variant='outline'><Heart /> Save Recipe</Button>
          <Button variant='default'><RotateCcw /> Generate Variation</Button>
        </section>

        <section>
          <Footer />
        </section>
      </div>}
    </div>
  );
}