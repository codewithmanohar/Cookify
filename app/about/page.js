import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { features, imgs } from "@/lib/data"
import { MagnetIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const page = () => {
  return (
    <>
     <div className="container mx-auto">
        <section className="min-w-20">
            <Header />
        </section>
        {/* Hero section */}
        <div 
            className="min-h-[350px] flex flex-col items-center justify-center text-center px-4 bg-gray-200 max-w-4xl rounded-2xl mx-auto mt-32 mb-10"
        >
                <h1 className='text-primary text-5xl font-semibold py-5 '>
                    Your Favorite Flavors 🍛
                </h1>
                <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
                    Rediscover your culinary journey with your hand-picked collection of delightful recipes.
                </p>
        </div>

        {/* features */}
        <section className="flex items-center justify-center gap-10 flex-col my-10">
            <h1 className="text-2xl font-bold">How CookMateAI Works</h1>
            <div className="max-w-7xl flex items-center justify-center flex-wrap gap-10">
                {features.map((item , index) => (
                    <div
                        className="max-w-xs bg-gray-50 rounded-2xl px-5 py-10 flex flex-col items-center"
                        key={index}>
                        <span  className="text-primary">{item.icon}</span>
                        <h1 className="text-xl font-bold py-2">{item.title}</h1>
                        <h2 className="text-sm text-zinc-500 max-w-56 text-center ">{item.description}</h2>
                        <Image 
                            className="object-fill py-5"
                            src={item.image}
                            width={250} 
                            height={50} 
                            alt="features_img"/>
                    </div>
                ))}

            </div>
        </section>

        {/* Our Mission */}
        <div 
            className="min-h-[350px] flex flex-col items-center justify-center text-center px-4 bg-gray-200 max-w-4xl rounded-2xl mx-auto mt-32 mb-10"
        >
                <h1 className='text-primary text-5xl font-semibold py-5 '>
                    Our Culinary Mission
                </h1>
                <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
                    At CookMateAI, we believe that cooking should be an adventure. Our mission is to seamlessly blend artificial intelligence with culinary creativity, empowering home cooks to explore new flavors, reduce food waste, and discover the joy of personalized recipes tailored to their unique tastes and available ingredients. We're here to spark your next kitchen masterpiece.
                </p>
        </div>

        {/* Teach Hunt */}
        <div 
            className="min-h-[350px] flex flex-col items-center justify-center text-center px-4 bg-gray-200 max-w-4xl rounded-2xl mx-auto mt-32 mb-10"
        >
                <h1 className=' text-5xl font-semibold py-10 '>
                    Ready to Start Cooking?
                </h1>
                <Link href="/result" >
                    <Button>Generate Your Next Recipe <MagnetIcon /></Button>
                </Link>
        </div>

        <section>
            <Footer />
        </section>
     </div>
    </>
  )
}

export default page