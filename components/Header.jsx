import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { imgs } from "@/lib/data";
import { ChefHatIcon, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";





export const Header = () => {
  return (
    <div className="shadow-xl backdrop-blur-md bg-white/30 border border-white/20 dark:bg-zinc-900/30 dark:border-white/10 fixed top-0  ">
      <NavigationMenu className=" w-full">
        <NavigationMenuList className="flex gap-10 items-center justify-between w-screen px-8 py-4">


          <NavigationMenuItem>
            
              <Link href="/" className="flex gap-2 items-center  flex-row">
                <ChefHatIcon className="text-primary" size={25} />
                <span className="text-primary text-xl tracking-wide">CookMateAI</span>
              </Link>
            
          </NavigationMenuItem>

          <div className="flex gap-5 items-center">
            <NavigationMenuItem>
              <Link
                href="/recipes"
                className="text-md ">
                <span>My Recipes</span>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/about"
                className="text-md ">
                <span>About</span>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/profile"
                className="text-md ">
                <span>profile</span>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
