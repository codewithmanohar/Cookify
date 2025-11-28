import { connectDB } from "@/lib/mongoose";
import Recipe from "@/models/Recipe";

export async function GET(req, context) {
  try {
    await connectDB();
    const {id} = await context.params; 
    const recipes = await Recipe.find({createdBy : id}).sort({ createdAt: -1 }); // newest first

    return Response.json({
      success: true,
      count: recipes.length,
      recipes,
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
