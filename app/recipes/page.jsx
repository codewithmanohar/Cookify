"use client"
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import useFoodStore from '@/Store/useFoodStore'
import { useEffect } from 'react'
import Link from 'next/link'
import { DeleteDialog } from '@/components/delete-dialog'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Loading from '@/components/Loading'

const page = () => {
    const { recipes, getAllRecipes, recipesLoading, removeRecipe } = useFoodStore();


    useEffect(() => {
        getAllRecipes();
    }, []);

    if (recipesLoading) {
       return <Loading />
    }

    // Handle case where recipe is not found after loading
    if (!recipes) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                <h1 className="text-3xl font-bold text-red-600">Recipe Not Found</h1>
                <p className="mt-2 text-gray-600">The recipe could not be loaded or does not exist.</p>
                <Button className="mt-6" onClick={() => router.push('/')}>
                    Go to Recipes List
                </Button>
            </div>
        );
    }
    return (
        <div className='container mx-auto my-14'>
            <section>
                <Header />
            </section>
            {/* Hero Section */}

            <div className="min-h-[400px]  flex flex-col items-center justify-center text-center px-4">
                <h1 className='text-primary text-5xl font-semibold py-5 '>
                    Your Recipes Flavors 🍛
                </h1>
                <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
                    Rediscover your culinary journey with your hand-picked collection of delightful recipes.
                </p>
            </div>

            {/* Recipe Cards */}
            {recipes && (
                <section className='flex items-center justify-center gap-14 py-10 max-w-5xl mx-auto flex-wrap '>
                    {recipes.map((card, index) => (
                        <Card key={index} className="max-w-xs rounded-xl overflow-hidden p-2">
                            {/* Image Section */}
                            <div className="w-full h-40 relative">
                                <Image
                                    src={card.recipe_img}
                                    alt="image"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>

                            <CardHeader className="p-5">
                                <CardTitle className="text-lg font-bold">{card.dish_name}</CardTitle>
                                {/* <p className="text-sm">{card.description}</p> */}
                            </CardHeader>

                            <CardFooter className="flex items-center gap-4 px-5 pb-5">
                                <Button variant="outline" asChild>
                                    <Link href={`/recipes/${card._id}`}>View Recipe</Link>
                                </Button>

                                <DeleteDialog id={card._id}  />
                            </CardFooter>
                        </Card>
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