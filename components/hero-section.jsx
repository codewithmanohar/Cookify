"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import { imgs } from "@/lib/data"
import Link from "next/link"
import useIngredientsStore from "@/store/use-food-store"

export const HeroSection = () => {
  const { setFoodType } = useIngredientsStore();

  return (
    <section className="w-full py-10 px-6 sm:px-10 bg-transparent flex justify-center">
      <Card className="w-full max-w-6xl min-h-[450px] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-10 shadow-lg rounded-2xl border border-gray-200">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 gap-8 text-center md:text-left">
          <CardHeader className="p-0 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-5">
              <CardTitle className="text-xl sm:text-4xl font-bold whitespace-nowrap">
                What can we cook today?
              </CardTitle>
            </div>
          </CardHeader>

          {/* BUTTONS */}
          <CardContent className="flex flex-wrap mx-auto flex-col sm:flex-row md:justify-start gap-4 p-0">
            <Link href="/ingredients" onClick={() => setFoodType("Breakfast")}>
              <Button className="w-52 sm:w-full bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                🌅 Breakfast
              </Button>
            </Link>
            <Link href="/ingredients" onClick={() => setFoodType("Lunch")}>
              <Button className="w-52 sm:w-full bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                🍱 Lunch
              </Button>
            </Link>
            <Link href="/ingredients" onClick={() => setFoodType("Dinner")}>
              <Button className="w-52 sm:w-full bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                🍽️ Dinner
              </Button>
            </Link>
            <Link href="/ingredients" onClick={() => setFoodType("Snacks")}>
              <Button className="w-52 sm:w-full bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                🥪 Snacks
              </Button>
            </Link>
            <Link href="/ingredients" onClick={() => setFoodType("Desserts")}>
              <Button className="w-52 sm:w-full bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                🍰 Desserts
              </Button>
            </Link>
            <Link href="/ingredients" onClick={() => setFoodType("Healthy")}>
              <Button className="w-52 sm:w-full bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                🥗 Healthy
              </Button>
            </Link>
            <Link href="/ingredients" onClick={() => setFoodType("High Protein")}>
              <Button className="w-52 sm:w-full bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                💪 High Protein
              </Button>
            </Link>
          </CardContent>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            alt="Delicious food"
            src={imgs.hero_img}
            width={350}
            height={350}
            className="object-contain w-3/4 md:w-full max-h-[400px]"
            priority
          />
        </div>
      </Card>
    </section>
  )
}
