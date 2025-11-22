// /Store/useIngredientsStore.js
import axios from "axios";
import { create } from "zustand";

const useFoodStore = create((set) => ({
  food_type: "",
  food_ingridient: [],
  
  // API states 
  recipe: null , 
  loading: false , 
  error: null ,

  // Recipe states 
  recipes : null , 
  recipesLoading : false , 

  // Recipe by Id 
  recipeById : null , 

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

    // Generate Recipe (API Request)
    getRecipe: async () => {
        set({loading: true , error: null}); 
        try {
          const res = await fetch("http://localhost:3000/api/generate" , {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
              food_type: useFoodStore.getState().food_type,
              selectedIngredients : useFoodStore.getState().food_ingridient,
            }),
          }); 

          if(!res.ok){
            throw new Error("Failed to generate recipe"); 
          }

          const data = await res.json(); 

          set({
            recipe: data , 
            loading: false,
          })
        } catch (error) {
          set({
            error: error.message, 
            loading: false ,
          })
        }
    },

    // Clear generated recipe 
    clearRecipe: () => set({recipe: null}),

    getAllRecipes: async () => {
      try {
        set({recipesLoading : true});
        const res = await axios.get("http://localhost:3000/api/recipes"); 
        console.log("recipes_data: ",res.data.recipes);
        set({
          recipes : res.data.recipes,
          recipesLoading : false , 
        });
      } catch (error) {
        set({recipesLoading : false});
        console.log("Error fetching all reciepe store :" , error.message); 
        return null
      }
      
    },
    
    getRecipeById: async (id) => {
      try {
        set({recipesLoading : true });
        const res = await axios.get(`http://localhost:3000/api/recipes/${id}`)
        console.log('DATA :' , res.data);
        set({
          recipeById: res.data,
          recipesLoading: false
        })
      } catch (error) {
        set({recipesLoading : false});
        console.log("Error in fetching recipeById");
        return Response.json(error.message);
      }
    }
}));

export default useFoodStore;
