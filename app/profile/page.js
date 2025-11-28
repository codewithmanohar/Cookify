"use client"
import { CustomToggle } from '@/components/customToggle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { favoriteCuisines, PROFILE_INFO } from '@/lib/data'
import { CookingPot } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const {data: session} = useSession();
    

    return (
        <>
            <div className="max-w-5xl mx-auto ">
                <div className="min-h-[150px] flex items-center justify-between  text-center px-4 border border-2 mt-36 rounded-2xl">
                    <div className='flex gap-10 items-center'>


                        <Image
                            alt='profile_img'
                            width={100}
                            height={100}
                            src={session?.user?.image || PROFILE_INFO.profile_img}
                            className='rounded-full'
                        />

                        <div className=' text-start'>
                            <h2 className='text-2xl font-bold'>{session?.user?.name}</h2>
                            <h4>{session?.user?.email}</h4>
                        </div>
                    </div>
                    <Button variant="outline" >Edit Profile</Button>
                </div>

                {/* preference */}
                <section>
                    <h1 className='text-2xl font-bold py-10'>Preferences</h1>

                    <div>
                        <h2 className='text-md font-bold py-5'>Dietary Restrictions</h2>
                        <div className='flex items-center justify-between py-2 text-sm '>
                            <span>Vegiterian</span>
                            <span>Toggle</span>
                        </div>
                        <div className='flex items-center justify-between py-2 text-sm'>
                            <span>Non-Vegetarian</span>
                            <span>Toggle</span>
                        </div>
                        <div className='flex items-center justify-between py-2 text-sm '>
                            <span>Vegan</span>
                            <span>Toggle</span>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-2xl font-bold py-10'>Favorite Cuisines</h1>
                        <div className='grid grid-cols-2 gap-y-4 gap-x-16 py-10'>
                            {favoriteCuisines.map((item, index) => (
                                <div
                                    className='flex gap-5'
                                    key={index} >
                                    
                                        <Checkbox
                                            className="border-2 border-gray-500"
                                            checked={item.checked}
                                            id={item.id} />
                                        <Label htmlFor={item.id}>{item.label}</Label>
                                    
                                </div>
                            ))}

                        </div>
                    </div>


                </section>

                <section>
                    <h2 className='text-2xl font-bold'>Your Culinary Journey</h2>
                    <div className='flex gap-5 py-5'>
                        <CookingPot  className='text-primary' />
                        <span>Recipes Generated This Month: 12</span>
                    </div>

                </section>

                <section>
                    <Footer />
                </section>
            </div>

        </>
    )
}

export default page