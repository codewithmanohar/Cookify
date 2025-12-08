import generateRecipe from "@/lib/gemini";
import generateImageURL from "@/lib/pexel";
import RecipeModel from "@/models/Recipe";
import { connectDB } from "@/lib/mongoose";   // Make sure this exists



// -------------------- GET  --------------------
export async function GET(req) {
  try {
    const recipe_img = await generateImageURL("Chicken Butter Masala");

    return Response.json({
      url: recipe_img,
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}


// -------------------- POST  --------------------
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { selectedIngredients, food_type, userId } = body;

    if (!selectedIngredients || !food_type) {
      return Response.json(
        { message: "selectedIngredients and food_type are required" },
        { status: 400 }
      );
    }
    if (!userId) {
      return Response.json(
        { message: "userId is required" },
        { status: 400 }
      );
    }
    

    // 1. Generate recipe text (using Gemini)
    const recipe_data = await generateRecipe(food_type, selectedIngredients);
    console.log(recipe_data);
    // Generate recipe image
    const recipe_img = await generateImageURL(recipe_data?.dish_name);

    // 3. Save recipe in MongoDB
    const savedRecipe = await RecipeModel.create({
      dish_name: recipe_data.dish_name,
      RECIPE_INGREDIENTS: recipe_data.RECIPE_INGREDIENTS,
      COOKING_INSTRUCTIONS: recipe_data.COOKING_INSTRUCTIONS,
      recipe_img: recipe_img,
      createdBy: userId,
    });

    // Return API Response
    return Response.json({
      message: "Recipe generated & saved!",
      recipe_data, 
      recipe_img
    });
  } catch (error) {
    console.log("Error in recipe route:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}



