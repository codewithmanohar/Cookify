import { ChefHat } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { RiYoutubeLine } from "react-icons/ri";
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <section className="container mx-auto max-w-6xl px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">

        {/* Logo + Description */}
        <div className="flex flex-col items-start">
          <div className="text-primary flex gap-2 items-center">
            <ChefHat />
            <span className="text-xl font-semibold">CookMateAI.Com</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            CookMateAI: Your culinary assistant for delightful recipes.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:mx-auto">
          <h1 className="font-bold text-xl pb-3">Quick Links</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/favorite">Favorite</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy_policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

        {/* Social */}
        <div className="lg:ml-auto">
          <h1 className="text-xl font-bold">Follow Us</h1>
          <div className="flex gap-6 py-6 items-center">
            <a href="https://www.facebook.com" target="_blank"><LuFacebook size={25} /></a>
            <a href="https://www.x.com" target="_blank"><FaXTwitter size={25} /></a>
            <a href="https://www.youtube.com" target="_blank"><RiYoutubeLine size={30} /></a>
            <a href="https://www.instagram.com" target="_blank"><FiInstagram size={25} /></a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="py-5 border-t">
        <h3 className="text-center text-xs text-gray-500">
          © 2025 CookMateAI. All rights reserved.
        </h3>
      </div>

    </section>
  );
};
