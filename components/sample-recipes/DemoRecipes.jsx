"use client"
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { recipe } from '@/lib/data'

const DemoRecipes = () => {
    return (
        <div className='container mx-auto my-14'>
            {/* Hero Section */}

            <div className="min-h-[400px] flex flex-col items-center justify-center text-center px-4">
                <h1 className='text-primary text-4xl sm:text-5xl font-semibold py-5 '>
                    Sample Recipes Flavors 🍛
                </h1>
                <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
                    Rediscover your culinary journey with your hand-picked collection of delightful recipes.
                </p>
            </div>

            {/* Recipe Cards */}
            {recipe && (
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 max-w-4xl mx-auto px-5">

                    {recipe.map((card, index) => (
                        <Card
                            key={index}
                            className="rounded-xl overflow-hidden p-2 flex flex-col h-full"
                        >
                            {/* Image Section */}
                            <div className="w-full h-40 relative">
                                <Image
                                    src={card.recipe_img}
                                    alt="image"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>

                            <CardHeader className="p-5 flex-grow">
                                <CardTitle className="text-lg font-bold">
                                    {card.dish_name}
                                </CardTitle>
                            </CardHeader>

                            <CardFooter className="px-5 pb-5 mt-auto">
                                <Button className="w-full">
                                    <Link href={`/sample/${card._id}`}>View Recipe</Link>
                                </Button>
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

export default DemoRecipes