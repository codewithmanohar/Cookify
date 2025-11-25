"use client";

// export default function LoginButton() {
  
//   if (session) {
//     return (
//       <>
//         <p>Hi, {session.user.name}</p>
//         <button onClick={() => signOut()}>Logout</button>
//       </>
//     );
//   }

//   return <button >Login with Google</button>;
// }

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
  const { data: session } = useSession();
  
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
      </CardHeader>
      
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => signIn("google")}
        >
          Login with Google
        </Button>
      {/* </CardFooter> */}
    </Card>
  )
}

