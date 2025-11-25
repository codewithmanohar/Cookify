import hero_img from "../public/hero_img.png"
import dish_img from "../public/dish_img.png"
import img1 from "../public/img1.png"
import img2 from "../public/img2.png"
import img3 from "../public/img3.png"
import img4 from "../public/img4.png"
import img5 from "../public/img5.png"
import img6 from "../public/img6.png"
import about_img1 from "../public/about_img1.png"
import about_img2 from "../public/about_img2.png"
import about_img3 from "../public/about_img3.png"
import hero_about_img from "../public/hero_about_img.png"
import { CalendarCheck, ChefHat, Lightbulb } from "lucide-react"
import profile from "../public/profile.png"
import logo from "../public/chef-hat.png"
import loading from "../public/loading.gif"

export const imgs = {
    logo, 
    hero_img, 
    dish_img,
    hero_about_img, 
    profile,
    loading
    
}

export const INGREDIENTS = [
  {
    category: "Vegetables",
    categoryTag: "vegan",
    items: [
      { name: "Carrot", icon: "🥕", tag: "vegan" },
      { name: "Tomato", icon: "🍅", tag: "vegan" },
      { name: "Garlic", icon: "🧄", tag: "vegan" },
      { name: "Onion", icon: "🧅", tag: "vegan" },
      { name: "Potato", icon: "🥔", tag: "vegan" },
      { name: "Broccoli", icon: "🥦", tag: "vegan" },
      { name: "Spinach", icon: "🥬", tag: "vegan" },
      { name: "Bell Pepper", icon: "🫑", tag: "vegan" },

      // added new
      { name: "Cucumber", icon: "🥒", tag: "vegan" },
      { name: "Cabbage", icon: "🥬", tag: "vegan" },
      { name: "Mushroom", icon: "🍄", tag: "vegan" },
      { name: "Corn", icon: "🌽", tag: "vegan" },
    ],
  },

  {
    category: "Meat & Poultry",
    categoryTag: "non-veg",
    items: [
      { name: "Chicken Breast", icon: "🍗", tag: "non-veg" },
      { name: "Ground Beef", icon: "🥩", tag: "non-veg" },

      // added new
      { name: "Mutton", icon: "🍖", tag: "non-veg" },
      { name: "Turkey", icon: "🦃", tag: "non-veg" },
    ],
  },

  {
    category: "Seafood",
    categoryTag: "non-veg",
    items: [
      { name: "Shrimp", icon: "🦐", tag: "non-veg" },
      { name: "White Fish", icon: "🐟", tag: "non-veg" },

      // added new
      { name: "Salmon", icon: "🐠", tag: "non-veg" },
      { name: "Crab", icon: "🦀", tag: "non-veg" },
    ],
  },

  {
    category: "Dairy & Eggs",
    categoryTag: "veg",
    items: [
      { name: "Egg", icon: "🥚", tag: "non-veg" },
      { name: "Milk", icon: "🥛", tag: "veg" },
      { name: "Cheese", icon: "🧀", tag: "veg" },
      { name: "Butter", icon: "🧈", tag: "veg" },

      // added new
      { name: "Yogurt", icon: "🥛", tag: "veg" },
      { name: "Cream", icon: "🍶", tag: "veg" },
    ],
  },

  {
    category: "Baking & Grains",
    categoryTag: "vegan",
    items: [
      { name: "Flour", icon: "⚪", tag: "vegan" },
      { name: "Rice", icon: "🍚", tag: "vegan" },
      { name: "Pasta", icon: "🍝", tag: "vegan" },

      // added new
      { name: "Bread", icon: "🍞", tag: "vegan" },
      { name: "Oats", icon: "🌾", tag: "vegan" },
    ],
  },

  {
    category: "Spices & Herbs",
    categoryTag: "vegan",
    items: [
      { name: "Salt", icon: "🧂", tag: "vegan" },
      { name: "Black Pepper", icon: "🌶️", tag: "vegan" },
      { name: "Oregano", icon: "🌿", tag: "vegan" },
      { name: "Thyme", icon: "🌱", tag: "vegan" },

      // added new
      { name: "Cumin", icon: "🟤", tag: "vegan" },
      { name: "Turmeric", icon: "🟡", tag: "vegan" },
      { name: "Red Chili Powder", icon: "🌶️", tag: "vegan" },
    ],
  },

  {
    category: "Pantry Staples",
    categoryTag: "vegan",
    items: [
      { name: "Olive Oil", icon: "🫒", tag: "vegan" },
      { name: "Vinegar", icon: "🍶", tag: "vegan" },

      // new
      { name: "Soy Sauce", icon: "🧪", tag: "vegan" },
      { name: "Coconut Milk", icon: "🥥", tag: "vegan" },
    ],
  },

  {
    category: "Sweeteners",
    categoryTag: "veg",
    items: [
      { name: "Sugar", icon: "🍬", tag: "vegan" },
      { name: "Honey", icon: "🍯", tag: "veg" },

      // added new
      { name: "Jaggery", icon: "🟫", tag: "vegan" },
      { name: "Maple Syrup", icon: "🍁", tag: "vegan" },
    ],
  },
];



export const RECIPE_INGREDIENTS = [
  {
    section: "Main Ingredients",
    items: [
      "500g boneless, skinless chicken thighs, cut into 1-inch pieces",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "½ tsp turmeric powder",
      "1 cup plain yogurt",
    ],
  },

  {
    section: "Sauce",
    items: [
      "2 tbsp unsalted butter",
      "1 large onion, finely chopped",
      "1 can (400g) crushed tomatoes",
      "½ cup cashews, soaked in warm water",
      "1 cup heavy cream",
      "½ tsp garam masala",
      "Salt to taste",
    ],
  },

  {
    section: "Garnish & Serving",
    items: [
      "Fresh cilantro, chopped (for garnish)",
      "Naan bread or basmati rice (for serving)",
    ],
  },
];

export const COOKING_INSTRUCTIONS = [
  {
    step: 1,
    text: "Marinate chicken: In a bowl, combine chicken, ginger-garlic paste, chili powder, turmeric, and yogurt. Mix well and let it marinate for at least 30 minutes, or preferably longer in the refrigerator."
  },
  {
    step: 2,
    text: "Prepare sauce base: In a large pan or pot, melt butter over medium heat. Add chopped onions and sauté until golden brown, about 8–10 minutes."
  },
  {
    step: 3,
    text: "Blend sauce: Add the crushed tomatoes and soaked cashews to the pan. Cook for 5 minutes. Let it cool slightly, then transfer to a blender and blend until smooth. Add a splash of water if needed to achieve a smooth consistency."
  },
  {
    step: 4,
    text: "Cook chicken: In the same pan, add marinated chicken pieces and cook until lightly browned on all sides and mostly cooked through, about 5–7 minutes. Remove chicken and set aside."
  },
  {
    step: 5,
    text: "Combine and simmer: Pour the blended sauce back into the pan. Add the cooked chicken, heavy cream, and garam masala. Stir well to combine all ingredients."
  },
  {
    step: 6,
    text: "Finish: Bring the curry to a gentle simmer. Cook for another 10–15 minutes, stirring occasionally, until the sauce thickens and the chicken is fully cooked and tender. Season with salt to taste."
  },
  {
    step: 7,
    text: "Serve: Garnish generously with fresh chopped cilantro and serve hot with warm naan bread or fluffy basmati rice."
  }
];

export const RECIPE_CARDS = [
  {
    id: 1,
    title: "Spicy Garlic Noodles",
    description: "Quick and flavorful noodles with a kick of chili and aromatic garlic.",
    image: img1, 
  },
  {
    id: 2,
    title: "Creamy Tomato Pasta",
    description: "Rich and creamy pasta dish with ripe tomatoes and fresh basil.",
    image: img2,
  },
  {
    id: 3,
    title: "Lemon Herb Roasted Chicken",
    description: "Tender chicken roasted with zesty lemon and a blend of aromatic herbs.",
    image: img3,
  },
  {
    id: 4,
    title: "Vegetable Curry Bowl",
    description: "A hearty and flavorful curry packed with seasonal vegetables and spices.",
    image: img4,
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey, molten center, perfect for dessert lovers.",
    image: img5,
  },
  {
    id: 6,
    title: "Mediterranean Salad",
    description: "Fresh and vibrant salad with crisp vegetables, feta cheese, and olives.",
    image: img6,
  },
];

export const favoriteCuisines = [
  { id: 1, label: "Indian", checked: true },
  { id: 2, label: "Asian", checked: true },
  { id: 3, label: "Mediterranean", checked: false },
  { id: 4, label: "French", checked: false },
  { id: 5, label: "Italian", checked: true },
  { id: 6, label: "Mexican", checked: false },
  { id: 7, label: "Japanese", checked: false },
  { id: 8, label: "Thai", checked: false }
];


export const PROFILE_INFO = {
    profile_img : profile, 
    name : "Anya Sharma", 
    email : "anya.sharma@example.com"
};


export const features = [
  {
    id: 1,
    title: "Inspire",
    description: "Start by picking ingredients or exploring cuisines.",
    icon: <Lightbulb size={75}/>,
    image: about_img1
  },
  {
    id: 2,
    title: "Generate",
    description: "Our AI crafts a unique recipe just for you.",
    icon: <ChefHat size={75}/>,
    image: about_img2
  },
  {
    id: 3,
    title: "Cook & Save",
    description: "Enjoy your dish and save it to your favorites.",
    icon: <CalendarCheck size={75}/>,
    image: about_img3
  }
];


