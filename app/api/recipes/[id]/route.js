import { connectDB } from "@/lib/mongoose";
import Recipe from "@/models/Recipe";

export async function GET(req, context) {
  try {
    // Correctly accessing the route parameters via the 'context' object
    await connectDB() ; 
    const { id } = await context.params; 

    if(!id) return Response.json({message : "cannot found id "});
    const res = await Recipe.findById(id);

    if(!res) return Response.json({message : "Cannot found recipe"},{status : 404});

    return Response.json(res );
    
  } catch (error) {
    console.error("Error fetching data:", error);
    
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Alternative (more common) syntax for clarity:
// export async function GET(req, { params }) {
//   try {
//     const { id } = params; 
//     // ... rest of the code
//   } catch (error) { ... }
// }