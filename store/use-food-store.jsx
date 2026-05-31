import { api } from "@/lib/axiosInstance";
import { create } from "zustand";

const useFoodStore = create((set) => ({
  food_type: "",
  food_ingridient: [],

  // API states
  recipe: null,
  loading: false,
  error: null,

  // Recipe states
  recipes: null,
  recipesLoading: false,
  totalPages: 1,
  currentPage: 1,

  // Recipe by Id
  recipeById: null,

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

  // Generate Recipe
  getRecipe: async (userId) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const res = await api.post("/api/generate", {
        food_type: useFoodStore.getState().food_type,
        selectedIngredients: useFoodStore.getState().food_ingridient,
        userId,
      });

      set({
        recipe: res.data,
        loading: false,
      });

      return res.data;
    } catch (error) {
      set({
        loading: false,
        error:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      });

      return null;
    }
  },

  // Clear generated recipe
  clearRecipe: () => set({ recipe: null }),

  // Get all recipes
  getAllRecipes: async (id, page = 1) => {
    try {
      set({ recipesLoading: true });

      const res = await api.get(
        `/api/recipes/user/${id}?page=${page}`
      );

      set({
        recipes: res.data.recipes,
        totalPages: res.data.totalPages,
        currentPage: res.data.currentPage,
        recipesLoading: false,
      });

      return res.data;
    } catch (error) {
      set({ recipesLoading: false });

      console.log(
        "Error fetching all recipes:",
        error.response?.data || error.message
      );

      return null;
    }
  },

  // Get recipe by id
  getRecipeById: async (id) => {
    try {
      set({ recipesLoading: true });

      const res = await api.get(`/api/recipes/${id}`);

      set({
        recipeById: res.data,
        recipesLoading: false,
      });

      return res.data;
    } catch (error) {
      set({ recipesLoading: false });

      console.log(
        "Error fetching recipeById:",
        error.response?.data || error.message
      );

      return null;
    }
  },

  // delete recipe
  removeRecipe: async (id) => {
    try {
      set({ isDeleting: true });

      const res = await api.delete(`/api/recipes/${id}`);

      set({ isDeleting: false });

      return res.data;
    } catch (error) {
      set({ isDeleting: false });

      console.log(
        "Error deleting recipe:",
        error.response?.data || error.message
      );

      return null;
    }
  },
}));

export default useFoodStore;