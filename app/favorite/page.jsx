"use client"
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { RECIPE_CARDS } from '@/lib/data'
import Image from 'next/image'
import useFoodStore from '@/Store/useFoodStore'
import { useEffect } from 'react'
import Link from 'next/link'

const page = () => {
    const { recipes, getAllRecipes, recipesLoading } = useFoodStore();

    useEffect(() => {
        getAllRecipes();
    }, []);

    if (recipesLoading) {
        return <span>loading data</span>
    }

    return (
        <div className='container mx-auto my-14'>
            <section>
                <Header />
            </section>
            {/* Hero Section */}

            <div className="min-h-[400px]  flex flex-col items-center justify-center text-center px-4">
                <h1 className='text-primary text-5xl font-semibold py-5 '>
                    Your Favorite Flavors 🍛
                </h1>
                <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
                    Rediscover your culinary journey with your hand-picked collection of delightful recipes.
                </p>
            </div>

            {/* Recipe Cards */}
            {recipes && (
                <section className='flex items-center justify-center gap-14 py-10 max-w-5xl mx-auto flex-wrap'>
                    {recipes.map((card, index) => (
                        <div
                            key={index}
                            className='rounded-xl max-w-xs bg-gray-100 pb-5'
                        >
                            <Image
                                src={card.recipe_img}
                                width={320}
                                height={100}
                                alt='image' />

                            <div className='text-wrap p-5'>
                                <h2 className='font-bold'>{card.dish_name}</h2>
                                {/* <h4 className='text-sm text-wrap'>{card.description}</h4> */}
                            </div>
                            <div className='gap-5 flex items-center px-5  '>

                                <Button
                                    variant="outline"
                                    asChild
                                >
                                    <Link href={`/recipe/${card._id}`} >
                                        View Recipe
                                    </Link>
                                </Button>
                                <Button variant="default">Remove</Button>
                            </div>
                        </div>
                    ))}
                </section>
            )}


            <section>
                <Footer />
            </section>
        </div>
    )
}

export default page