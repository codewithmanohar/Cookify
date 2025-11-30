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
import useFoodStore from "@/Store/useFoodStore"
import { Trash } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { toast } from "react-toastify"

export function DeleteDialog({ id }) {
  const { removeRecipe } = useFoodStore();
  const router = useRouter();

  const handleDelete = async () => {
    const promise = removeRecipe(id);
    toast.promise(promise, {
      pending: "Deleting your Recipe...",
      success: "Recipe deleted successfully! 🎉",
      error: "Something went wrong ❌"
    });

    const success = await promise; 
    if (success)
      router.push("/");
    else
      console.error("Recipe not deleted. An error occurred.");
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-red-500 hover:bg-red-600 text-gray-100 hover:text-gray-100" >
            <Trash />
            <span>Delete</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you sure ? Do you want to delete</DialogTitle>

          </DialogHeader>
          <DialogFooter >
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-600" type="submit">
              <Trash />
              <span>Delete</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
