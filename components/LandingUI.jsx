import { imgs } from "@/lib/data";
import Image from "next/image";


export default function Landing() {
  return (
   <div className="container min-h-screen mx-auto pt-16">
    <section className="w-full mx-auto">
        <Image 
            width={1000}
            height={1000}
            src={imgs.landing_ui}

            alt="profile"/>
    </section>
   </div>
  );
}
