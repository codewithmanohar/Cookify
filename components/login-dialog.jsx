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
import useFoodStore from "@/Store/useFoodStore"
import { Sparkle, Trash } from "lucide-react"
import { signIn } from "next-auth/react"
import { useParams } from "next/navigation"

export function LoginDialog({ id }) {
  const { removeRecipe } = useFoodStore();


  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="primary" className="bg-primary hover:bg-green-600 text-gray-100 hover:text-gray-100" >
            <Sparkle />
            <span>Generate Recipe</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Login to Generate Your Recipes</DialogTitle>

          </DialogHeader>
          <DialogFooter >
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => signIn("google")} className="bg-gray-800 hover:bg-gray-900" type="submit">
              
              <span>Login with Google</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
