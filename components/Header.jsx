"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ChefHatIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const  Header = () => {
  const { data: session } = useSession();


  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-xl backdrop-blur-md bg-white/30 border-b border-white/20 dark:bg-zinc-900/30 dark:border-white/10">
      <div className="flex items-center justify-between w-full px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ChefHatIcon className="text-primary" size={26} />
          <span className="text-primary text-xl font-semibold tracking-wide">CookMateAI</span>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          {session && (
            <NavigationMenuList className="flex gap-8 items-center">
              <NavigationMenuItem>
                <Link href="/recipes" className="text-md">
                  <span>My Recipes</span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className="text-md">
                  <span>About</span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/profile" className="text-md">
                  <span>Profile</span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/login"
                  className="text-md"
                  onClick={() => signOut("google")}>
                  <span>Logout</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          )}

          {!session && (
            <NavigationMenuList className="flex gap-8 items-center">
              <NavigationMenuItem>
                <Link 
                  href="/login" 
                  className="text-md"
                  onClick={() => signIn("google")}
                >
                  <span>Sign</span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className="text-md">
                  <span>Sign Up</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          )}


        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={28} />
          </SheetTrigger>

          <SheetContent side="right" className="w-52">
            <div className="flex flex-col gap-6 mt-10 px-5">
              <Link href="/recipes" className="text-lg">
                My Recipes
              </Link>

              <Link href="/about" className="text-lg">
                About
              </Link>

              <Link href="/profile" className="text-lg">
                Profile
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
