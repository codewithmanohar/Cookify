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
import { Trash } from "lucide-react"
import { useParams } from "next/navigation"

export function DeleteDialog({id}) {
    const { removeRecipe } = useFoodStore();
    // const params = useParams();
    // const id = params.id ; 

      const handleDelete = async () => {
    // 1. Ensure removeRecipe is awaited since it likely performs an async operation (like database deletion)
    console.log(id)
    const success = await removeRecipe(id); 

    if (success) {
      // Replaced alert() with console.log (for notification, typically use a Toast library)
      console.log("Recipe Deleted successfully");
      
      // Navigate the user back to the home page after successful deletion
      router.push("/");
    } else {
      // Properly structure the else block to only log failure if 'success' is false
      console.error("Recipe not deleted. An error occurred.");
    }
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
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
