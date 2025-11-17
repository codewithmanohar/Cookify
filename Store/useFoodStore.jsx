// /Store/useIngredientsStore.js
import { create } from "zustand";

const useFoodStore = create((set) => ({
  food_type: "Potato",
  food_ingridient: [],

  setFoodType: (newType) => set({ food_type: newType }),

  // Add food ingredient
  addIngredient: (item) =>
    set((state) => ({
      food_ingridient: [...state.food_ingridient, item],
    })),

  // Remove food ingredient
  removeIngredient: (item) =>
    set((state) => ({
      food_ingridient: state.food_ingridient.filter((i) => i !== item),
    })),
}));

export default useFoodStore;
