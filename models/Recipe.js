import mongoose from "mongoose";
import User from "./User";

const IngredientSectionSchema = new mongoose.Schema({
  section: String,
  items: [String],
});

const InstructionSchema = new mongoose.Schema({
  step: Number,
  text: String,
});

const RecipeSchema = new mongoose.Schema(
  {
    dish_name: { type: String, required: true },
    RECIPE_INGREDIENTS: [IngredientSectionSchema],
    COOKING_INSTRUCTIONS: [InstructionSchema],
    recipe_img: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: ture
    }
  },
  { timestamps: true }
);

export default mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);
