import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useFoodStore from "@/store/use-food-store"
import { Sparkle, Trash, Mail } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc"

export function LoginDialog({ id }) {
  const { removeRecipe } = useFoodStore();
  const router = useRouter();

  return (
    <Dialog>
      <form onSubmit={(e) => e.preventDefault()}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="bg-primary hover:bg-pink-600 text-white"   >
            <Sparkle />
            <span>Generate Recipe</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Login to Generate Your Recipes</DialogTitle>

          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-col gap-3 mt-4 w-full sm:space-x-0 sm:justify-center">
            <Button onClick={() => signIn("google")} variant="outline" className="w-full" type="button">
              <FcGoogle className="mr-2 h-5 w-5" />
              <span>Login with Google</span>
            </Button>
            <DialogClose asChild>
              <Button onClick={() => router.push("/login")} variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Login with Email
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
