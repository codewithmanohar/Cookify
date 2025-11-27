import { ChefHat, Facebook, Instagram, Twitter, X, XIcon, Youtube } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { RiYoutubeLine } from "react-icons/ri";
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <section className='container mx-auto max-w-6xl'>
      <div className='grid grid-cols-3 py-5 gap-x-52'>

        <div>
          <div className='text-primary flex gap-1'>
            <ChefHat />
            <span className='text-xl'>CookMateAI.Com</span>
          </div>
          <span className='text-xs text-gray-500'>CookMateAI: Your culinary assistant for delightful recipes.</span>
        </div>

        <div>
          <h1 className='font-bold text-xl py-5'>Quick Links</h1>
          <div className='flex flex-col gap-1'>
            <Link href="/favorite" >Favorite</Link>
            <Link href="/profile" >Profile</Link>
            <Link href="/about" >About</Link>
            <Link href="/privacy_policy" >Privacy Policy</Link>
            <Link href="/terms" >Terms of Service</Link>
          </div>
        </div>

        <div>
          <h1 className='text-xl font-bold '>Follow Us</h1>
          <div className='flex gap-5 py-8 items-center'>
            <a href="https://www.facebook.com" target='_blank'><LuFacebook size={25} /></a>
            <a href="https://www.x.com" target='_blank'><FaXTwitter size={25} /></a>
            <a href="https://www.youtube.com" target='_blank'><RiYoutubeLine size={30} /></a>
            <a href="https://www.instagram.com" target='_blank'><FiInstagram size={25} /></a>

          </div>
        </div>

      </div>

      <div className='py-10 '>
        <h3 className='text-center text-sm text-gray-500'>© 2025 CookMateAI. All rights reserved.</h3>
      </div>

    </section>
  )
}
