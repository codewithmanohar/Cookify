"use client"
import { CustomToggle } from '@/components/customToggle'
import { EditDialog } from '@/components/edit-dialog'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { favoriteCuisines, PROFILE_INFO } from '@/lib/data'
import { CookingPot } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const { data: session } = useSession()

    return (
        <>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Profile Header */}
                <div
                    className="
                        min-h-[150px] flex flex-col sm:flex-row 
                        items-center justify-between
                        gap-6 sm:gap-0 mt-28 sm:mt-36
                        px-6 py-6 border rounded-2xl bg-white shadow-sm
                    "
                >
                    <div className="flex gap-6 items-center text-start">
                        <Image
                            alt={session?.user?.name || "profile_name"}
                            width={90}
                            height={90}
                            src={session?.user?.image || PROFILE_INFO.profile_img}
                            className="rounded-full"
                        />  

                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold">
                                {session?.user?.name}
                            </h2>
                            <h4 className="text-sm text-gray-600">
                                {session?.user?.email}
                            </h4>
                        </div>
                    </div>

                    <EditDialog id={session?.user?.id} />
                </div>

                {/* Preferences */}
                <section className="mt-12">
                    <h1 className="text-xl sm:text-2xl font-bold py-5">Preferences</h1>

                    {/* Dietary Restrictions */}
                    <div>
                        {/* <h2 className="text-lg font-semibold py-3">
                            Dietary Restrictions
                        </h2>

                        <div className="space-y-4">
                            {["Vegetarian", "Non-Vegetarian", "Vegan"].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between text-sm"
                                >
                                    <span>{item}</span>
                                    <CustomToggle />
                                </div>
                            ))}
                        </div> */}
                    </div>

                    {/* Favorite Cuisines */}
                    <div className="mt-10">
                        <h1 className="text-xl sm:text-2xl font-bold">
                            Favorite Cuisines
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 py-6">
                            {favoriteCuisines.map((item, index) => (
                                <div className="flex items-center gap-3" key={index}>
                                    <Checkbox
                                        className="border-2 border-gray-500"
                                        checked={item.checked}
                                        id={item.id}
                                    />
                                    <Label htmlFor={item.id} className="text-sm sm:text-base">
                                        {item.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Culinary Stats */}
                <section className="mt-10">
                    <h2 className="text-xl sm:text-2xl font-bold">
                        Your Culinary Journey
                    </h2>

                    <div className="flex items-center gap-4 py-5 text-sm sm:text-base">
                        <CookingPot className="text-primary w-5 h-5" />
                        <span>Recipes Generated This Month: 12</span>
                    </div>
                </section>

                {/* Footer */}
                <section className="mt-14">
                    <Footer />
                </section>

            </div>
        </>
    )
}

export default page
