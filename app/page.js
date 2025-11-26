"use client"
import Home from "@/components/Home";
import LandingUI from "@/components/LandingUI";
import { useSession } from "next-auth/react";


export default function page() {
  const {data: session} = useSession();
  // If logged in → show Home Page
  if (session) {
    return <Home user={session.user} />;
  }

  // If not logged in → show Landing UI
  return <LandingUI />;

}
