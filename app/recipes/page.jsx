"use client"
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import useFoodStore from '@/Store/useFoodStore'
import { useEffect } from 'react'
import Link from 'next/link'
import { DeleteDialog } from '@/components/delete-dialog'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Loading from '@/components/Loading'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import PaginationDemo from '@/components/pagination'
import { toast } from 'react-toastify'
import DemoRecipes from '@/components/sample-recipes/DemoRecipes'

const page = () => {
    const { recipes, getAllRecipes, recipesLoading, totalPages, currentPage } = useFoodStore();
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.id)
            getAllRecipes(session.user.id, 1);
    }, [session]);


    if (recipesLoading) {
        return <Loading message="Recipes loading..." />
    }

    // Handle case where recipe is not found after loading
    if (!recipes) {
        return (
            <DemoRecipes />
        );
    }
    return (
        <div className='container mx-auto my-14'>
            {/* Hero Section */}

            <div className="min-h-[400px]  flex flex-col items-center justify-center text-center px-4">
                <h1 className='text-primary text-4xl sm:text-5xl font-semibold py-5 '>
                    Your Recipes Flavors 🍛
                </h1>
                <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
                    Rediscover your culinary journey with your hand-picked collection of delightful recipes.
                </p>
            </div>

            {/* Recipe Cards */}
            {recipes && (
                <section className='flex items-center justify-center gap-14 py-10 max-w-5xl mx-auto flex-wrap '>
                    {recipes?.map((card, index) => (
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
                            </CardHeader>

                            <CardFooter className="flex items-center gap-4 px-5 pb-5">
                                <Button variant="outline" asChild>
                                    <Link href={`/recipes/${card._id}`}>View Recipe</Link>
                                </Button>

                                <DeleteDialog id={card._id} />
                            </CardFooter>
                        </Card>
                    ))}

                </section>
            )}

            <section>
                <PaginationDemo
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(p) => getAllRecipes(session?.user?.id, p)}
                />

            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default page