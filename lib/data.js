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
import landing_ui from "../public/landing_ui.png"

export const imgs = {
  logo,
  hero_img,
  dish_img,
  hero_about_img,
  profile,
  loading,
  landing_ui,
  profile

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



export const recipe = [
  {
    "_id": "6936c228789a19ec532f8e48",
    "dish_name": "Mutton Fusion Biryani",
    "RECIPE_INGREDIENTS": [
      {
        "section": "Main Ingredients",
        "items": [
          "500g Mutton, cut into medium pieces",
          "2 cups Basmati Rice",
          "2 large Onions, thinly sliced",
          "1 tbsp Garlic paste",
          "1/2 cup plain Yogurt",
          "2 tbsp Butter",
          "2 tbsp Olive Oil"
        ],
        "_id": "6936c228789a19ec532f8e49"
      },
      {
        "section": "Spices & Seasoning",
        "items": [
          "1.5 tsp Salt (divided)",
          "1 tsp Turmeric Powder",
          "1 tsp Red Chili Powder",
          "1/2 tsp Black Pepper powder",
          "1 tsp Oregano"
        ],
        "_id": "6936c228789a19ec532f8e4a"
      },
      {
        "section": "Fusion Element",
        "items": [
          "1 tbsp Soy Sauce"
        ],
        "_id": "6936c228789a19ec532f8e4b"
      }
    ],
    "COOKING_INSTRUCTIONS": [
      {
        "step": 1,
        "text": "Combine mutton pieces with yogurt, garlic paste, 1 tsp salt, turmeric powder, red chili powder, black pepper, oregano, and soy sauce. Mix well and let it marinate for at least 1 hour, or preferably overnight in the refrigerator.",
        "_id": "6936c228789a19ec532f8e4c"
      },
      {
        "step": 2,
        "text": "Heat 1 tbsp olive oil and 1 tbsp butter in a large heavy-bottomed pot or Dutch oven over medium heat. Add the thinly sliced onions and fry until deeply golden brown and crispy. Remove half of the fried onions and set aside for garnish.",
        "_id": "6936c228789a19ec532f8e4d"
      },
      {
        "step": 3,
        "text": "To the remaining onions in the pot, add the marinated mutton. Sauté on medium-high heat for 10-15 minutes until the mutton is browned and the masala starts to thicken. Add about 1/2 cup water, cover, and cook on low heat until the mutton is tender (approximately 45-60 minutes), stirring occasionally.",
        "_id": "6936c228789a19ec532f8e4e"
      },
      {
        "step": 4,
        "text": "While mutton is cooking, wash and soak basmati rice for 30 minutes. Drain. In a separate large pot, bring plenty of water to a rolling boil. Add 1/2 tsp salt and the soaked rice. Cook until the rice is 70% cooked (al dente). Drain immediately.",
        "_id": "6936c228789a19ec532f8e4f"
      },
      {
        "step": 5,
        "text": "In the same pot as the mutton, spread the cooked mutton curry evenly at the bottom. Layer the partially cooked rice over the mutton. Drizzle the remaining 1 tbsp olive oil and 1 tbsp butter over the rice. Sprinkle the reserved fried onions on top.",
        "_id": "6936c228789a19ec532f8e50"
      },
      {
        "step": 6,
        "text": "Cover the pot tightly with a lid (you can seal the edges with dough if preferred). Cook on very low heat for 20-25 minutes, allowing the flavors to meld and the rice to cook through with the steam.",
        "_id": "6936c228789a19ec532f8e51"
      },
      {
        "step": 7,
        "text": "Gently fluff the biryani with a fork before serving. Serve hot.",
        "_id": "6936c228789a19ec532f8e52"
      }
    ],
    "recipe_img": "https://images.pexels.com/photos/18698239/pexels-photo-18698239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "createdBy": "69281e539ae0dae2e5ee9b66",
    "createdAt": "2025-12-08T12:18:48.720Z",
    "updatedAt": "2025-12-08T12:18:48.720Z",
    "__v": 0
  },
  {
    "_id": "69369f66d255fa053769f4d7",
    "dish_name": "Nariyal Aloo Tamatar Pulao (Coconut Potato Tomato Pulao)",
    "RECIPE_INGREDIENTS": [
      {
        "section": "Main Ingredients",
        "items": [
          "1.5 cups Basmati Rice, washed and soaked for 20 minutes",
          "2 medium Potatoes, peeled and diced",
          "1 large Onion, finely chopped",
          "2 medium Tomatoes, pureed or finely chopped",
          "1 cup Coconut Milk",
          "2 cups Water",
          "2 tbsp Olive Oil",
          "1 tsp Sugar",
          "1 tbsp Butter",
          "1/4 cup Cucumber, diced (for garnish/side)"
        ],
        "_id": "69369f66d255fa053769f4d8"
      },
      {
        "section": "Spices & Seasonings",
        "items": [
          "1 tsp Cumin Seeds",
          "1/2 tsp Turmeric Powder",
          "1 tsp Red Chili Powder (adjust to taste)",
          "1 tsp Salt (or to taste)",
          "1/2 tsp Black Pepper powder",
          "1/2 tsp Dried Oregano",
          "1/4 tsp Dried Thyme",
          "1 tsp Soy Sauce (light)"
        ],
        "_id": "69369f66d255fa053769f4d9"
      }
    ],
    "COOKING_INSTRUCTIONS": [
      {
        "step": 1,
        "text": "Heat olive oil in a heavy-bottomed pan or pressure cooker over medium heat. Add cumin seeds and let them splutter.",
        "_id": "69369f66d255fa053769f4da"
      },
      {
        "step": 2,
        "text": "Add chopped onions and sauté until translucent and light golden brown.",
        "_id": "69369f66d255fa053769f4db"
      },
      {
        "step": 3,
        "text": "Add pureed/chopped tomatoes, turmeric powder, red chili powder, salt, black pepper, and soy sauce. Cook for 5-7 minutes until the tomatoes soften and the oil starts to separate.",
        "_id": "69369f66d255fa053769f4dc"
      },
      {
        "step": 4,
        "text": "Add the diced potatoes and sugar. Mix well and cook for another 3-4 minutes.",
        "_id": "69369f66d255fa053769f4dd"
      },
      {
        "step": 5,
        "text": "Drain the soaked rice and add it to the pan. Gently mix with the vegetable and spice mixture for 1-2 minutes.",
        "_id": "69369f66d255fa053769f4de"
      },
      {
        "step": 6,
        "text": "Pour in the coconut milk and water. Bring the mixture to a boil.",
        "_id": "69369f66d255fa053769f4df"
      },
      {
        "step": 7,
        "text": "Reduce heat to low, cover the pan tightly, and cook for 15-20 minutes, or until all the liquid is absorbed and the rice is cooked. (If using a pressure cooker, cook for 1 whistle on medium heat and let the pressure release naturally).",
        "_id": "69369f66d255fa053769f4e0"
      },
      {
        "step": 8,
        "text": "Once cooked, gently fluff the rice with a fork. Add butter, dried oregano, and dried thyme. Mix gently.",
        "_id": "69369f66d255fa053769f4e1"
      },
      {
        "step": 9,
        "text": "Garnish with diced cucumber and serve hot.",
        "_id": "69369f66d255fa053769f4e2"
      }
    ],
    "recipe_img": "https://images.pexels.com/photos/1199956/pexels-photo-1199956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "createdBy": "69281e539ae0dae2e5ee9b66",
    "createdAt": "2025-12-08T09:50:30.684Z",
    "updatedAt": "2025-12-08T09:50:30.684Z",
    "__v": 0
  },
  {
    "_id": "69369f25d255fa053769f4ca",
    "dish_name": "Gajar ka Halwa (Carrot Halwa)",
    "RECIPE_INGREDIENTS": [
      {
        "section": "Main Ingredients",
        "items": [
          "500g Carrots (grated)",
          "1 cup Milk (full-fat recommended)",
          "1/2 cup Sugar (adjust to taste)",
          "4 tbsp Butter (or Ghee)",
          "1/2 tsp Cardamom powder",
          "1/4 cup Cashews or Almonds (chopped, optional)"
        ],
        "_id": "69369f25d255fa053769f4cb"
      },
      {
        "section": "Garnish",
        "items": [
          "2 tbsp Chopped nuts (cashews, almonds, pistachios)"
        ],
        "_id": "69369f25d255fa053769f4cc"
      }
    ],
    "COOKING_INSTRUCTIONS": [
      {
        "step": 1,
        "text": "Wash, peel, and grate the carrots. Set aside.",
        "_id": "69369f25d255fa053769f4cd"
      },
      {
        "step": 2,
        "text": "In a heavy-bottomed pan or kadai, melt the butter over medium heat.",
        "_id": "69369f25d255fa053769f4ce"
      },
      {
        "step": 3,
        "text": "Add the grated carrots to the melted butter and sauté for 5-7 minutes until they soften slightly and lose their raw smell.",
        "_id": "69369f25d255fa053769f4cf"
      },
      {
        "step": 4,
        "text": "Pour in the milk and bring it to a gentle boil. Reduce the heat to low-medium and let it simmer.",
        "_id": "69369f25d255fa053769f4d0"
      },
      {
        "step": 5,
        "text": "Cook, stirring occasionally, until most of the milk has been absorbed by the carrots and evaporated (this can take 20-30 minutes).",
        "_id": "69369f25d255fa053769f4d1"
      },
      {
        "step": 6,
        "text": "Add the sugar and cardamom powder. Continue to cook, stirring frequently, until the sugar dissolves and the mixture thickens. The halwa will become glossy.",
        "_id": "69369f25d255fa053769f4d2"
      },
      {
        "step": 7,
        "text": "If using, add the chopped cashews or almonds during the last 5 minutes of cooking.",
        "_id": "69369f25d255fa053769f4d3"
      },
      {
        "step": 8,
        "text": "Continue to cook until all the liquid has evaporated and the halwa starts to leave the sides of the pan. This indicates it's well cooked and has a rich texture.",
        "_id": "69369f25d255fa053769f4d4"
      },
      {
        "step": 9,
        "text": "Remove from heat. Garnish with additional chopped nuts before serving warm.",
        "_id": "69369f25d255fa053769f4d5"
      }
    ],
    "recipe_img": "https://images.pexels.com/photos/5453716/pexels-photo-5453716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "createdBy": "69281e539ae0dae2e5ee9b66",
    "createdAt": "2025-12-08T09:49:25.472Z",
    "updatedAt": "2025-12-08T09:49:25.472Z",
    "__v": 0
  },
  {
    "_id": "69341d69d7dbbaf15a426e43",
    "dish_name": "Shahi Malai Paneer",
    "RECIPE_INGREDIENTS": [
      {
        "section": "For the Homemade Paneer",
        "items": [
          "1 litre full-fat Milk",
          "2 tablespoons Vinegar"
        ],
        "_id": "69341d69d7dbbaf15a426e44"
      },
      {
        "section": "For the Shahi Gravy",
        "items": [
          "2 tablespoons Butter",
          "1 tablespoon Olive Oil",
          "1 cup full-fat Yogurt, whisked until smooth",
          "1/2 cup heavy Cream",
          "1/4 cup grated mild Cheese (like mozzarella or processed cheese)",
          "1 tablespoon Honey",
          "1 teaspoon Sugar",
          "1/2 teaspoon cardamom powder",
          "1/4 teaspoon white pepper powder",
          "Salt to taste"
        ],
        "_id": "69341d69d7dbbaf15a426e45"
      },
      {
        "section": "For Garnish",
        "items": [
          "1 tablespoon fresh Cream"
        ],
        "_id": "69341d69d7dbbaf15a426e46"
      }
    ],
    "COOKING_INSTRUCTIONS": [
      {
        "step": 1,
        "text": "To prepare the paneer, bring the milk to a rolling boil in a heavy-bottomed pot, stirring occasionally to prevent it from sticking to the bottom.",
        "_id": "69341d69d7dbbaf15a426e47"
      },
      {
        "step": 2,
        "text": "Once the milk is boiling, reduce the heat to low and gradually add the vinegar. Stir gently until the milk curdles completely and greenish whey separates from the milk solids.",
        "_id": "69341d69d7dbbaf15a426e48"
      },
      {
        "step": 3,
        "text": "Turn off the heat. Line a colander with a muslin or cheesecloth and pour the curdled milk through it to separate the solids (chenna) from the whey.",
        "_id": "69341d69d7dbbaf15a426e49"
      },
      {
        "step": 4,
        "text": "Rinse the chenna under cold water to remove any lingering taste of vinegar. Squeeze the cloth to remove excess water, then place it on a flat plate and press it with a heavy object for 1-2 hours to set. Once set, cut the paneer into cubes.",
        "_id": "69341d69d7dbbaf15a426e4a"
      },
      {
        "step": 5,
        "text": "For the gravy, heat the butter and olive oil in a non-stick pan over low-medium heat.",
        "_id": "69341d69d7dbbaf15a426e4b"
      },
      {
        "step": 6,
        "text": "Ensure the heat is low, then slowly add the whisked yogurt. Stir continuously for 2-3 minutes to prevent it from splitting.",
        "_id": "69341d69d7dbbaf15a426e4c"
      },
      {
        "step": 7,
        "text": "Stir in the heavy cream, honey, sugar, salt, white pepper powder, and cardamom powder. Mix until well combined.",
        "_id": "69341d69d7dbbaf15a426e4d"
      },
      {
        "step": 8,
        "text": "Add the grated cheese and continue to stir on low heat until the cheese melts completely and the gravy becomes smooth and creamy.",
        "_id": "69341d69d7dbbaf15a426e4e"
      },
      {
        "step": 9,
        "text": "Allow the gravy to simmer gently for 5-7 minutes, until it thickens slightly. Adjust seasoning if necessary.",
        "_id": "69341d69d7dbbaf15a426e4f"
      },
      {
        "step": 10,
        "text": "Gently add the prepared paneer cubes to the gravy. Stir carefully to coat the paneer without breaking the cubes.",
        "_id": "69341d69d7dbbaf15a426e50"
      },
      {
        "step": 11,
        "text": "Let the paneer simmer in the gravy for 2-3 minutes, allowing it to absorb the rich flavors.",
        "_id": "69341d69d7dbbaf15a426e51"
      },
      {
        "step": 12,
        "text": "Turn off the heat, transfer to a serving bowl, and garnish with a swirl of fresh cream. Serve hot with naan bread or basmati rice.",
        "_id": "69341d69d7dbbaf15a426e52"
      }
    ],
    "recipe_img": "https://images.pexels.com/photos/10345736/pexels-photo-10345736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "createdBy": "69281e539ae0dae2e5ee9b66",
    "createdAt": "2025-12-06T12:11:21.190Z",
    "updatedAt": "2025-12-06T12:11:21.190Z",
    "__v": 0
  },
  {
    "_id": "6933ed6281ef8abdac7f96db",
    "dish_name": "Tomato Potato Pulao with Cucumber Salad",
    "RECIPE_INGREDIENTS": [
      {
        "section": "For the Pulao",
        "items": [
          "1 cup Basmati rice, rinsed and soaked for 20 minutes",
          "2 medium potatoes, peeled and diced",
          "2 large tomatoes, finely chopped",
          "2 tablespoons olive oil",
          "1 teaspoon salt, or to taste",
          "1/2 teaspoon freshly ground black pepper",
          "2 cups water"
        ],
        "_id": "6933ed6281ef8abdac7f96dc"
      },
      {
        "section": "For the Cucumber Salad",
        "items": [
          "1 large cucumber, peeled and thinly sliced",
          "1 tablespoon vinegar",
          "1 teaspoon olive oil",
          "A pinch of salt",
          "A pinch of black pepper"
        ],
        "_id": "6933ed6281ef8abdac7f96dd"
      }
    ],
    "COOKING_INSTRUCTIONS": [
      {
        "step": 1,
        "text": "Heat 2 tablespoons of olive oil in a medium-sized pot over medium heat. Add the diced potatoes and cook for 5-7 minutes until they are light golden brown.",
        "_id": "6933ed6281ef8abdac7f96de"
      },
      {
        "step": 2,
        "text": "Add the chopped tomatoes, salt, and black pepper to the pot. Sauté for 4-5 minutes until the tomatoes soften and become pulpy.",
        "_id": "6933ed6281ef8abdac7f96df"
      },
      {
        "step": 3,
        "text": "Drain the soaked rice and add it to the pot. Gently stir for one minute to coat the rice grains with the tomato-potato mixture.",
        "_id": "6933ed6281ef8abdac7f96e0"
      },
      {
        "step": 4,
        "text": "Pour in 2 cups of water and bring the mixture to a boil. Once boiling, reduce the heat to the lowest setting.",
        "_id": "6933ed6281ef8abdac7f96e1"
      },
      {
        "step": 5,
        "text": "Cover the pot with a tight-fitting lid and let it simmer for 15-20 minutes, or until all the water is absorbed and the rice is fully cooked.",
        "_id": "6933ed6281ef8abdac7f96e2"
      },
      {
        "step": 6,
        "text": "Turn off the heat and let the pulao rest, covered, for 5 minutes. This helps the grains to separate.",
        "_id": "6933ed6281ef8abdac7f96e3"
      },
      {
        "step": 7,
        "text": "While the pulao is resting, prepare the salad. In a small bowl, combine the sliced cucumber, vinegar, 1 teaspoon olive oil, and a pinch of salt and pepper. Toss well.",
        "_id": "6933ed6281ef8abdac7f96e4"
      },
      {
        "step": 8,
        "text": "Fluff the pulao gently with a fork and serve hot with the refreshing cucumber salad on the side.",
        "_id": "6933ed6281ef8abdac7f96e5"
      }
    ],
    "recipe_img": "https://images.pexels.com/photos/29944219/pexels-photo-29944219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "createdBy": "69281e539ae0dae2e5ee9b66",
    "createdAt": "2025-12-06T08:46:26.075Z",
    "updatedAt": "2025-12-06T08:46:26.075Z",
    "__v": 0
  },
  {
    "_id": "692dc766b848b73166bc7826",
    "dish_name": "Creamy Gajar ka Halwa (Carrot Pudding)",
    "RECIPE_INGREDIENTS": [
      {
        "section": "Main Ingredients",
        "items": [
          "500g carrots, peeled and finely grated",
          "2 cups full-fat milk",
          "3 tablespoons butter",
          "1/2 cup sugar (adjust to taste)",
          "1/4 cup heavy cream",
          "1/2 teaspoon cardamom powder"
        ],
        "_id": "692dc766b848b73166bc7827"
      },
      {
        "section": "For Garnish (Optional)",
        "items": [
          "2 tablespoons slivered almonds",
          "2 tablespoons chopped pistachios"
        ],
        "_id": "692dc766b848b73166bc7828"
      }
    ],
    "COOKING_INSTRUCTIONS": [
      {
        "step": 1,
        "text": "In a heavy-bottomed pan or kadai, melt the butter over medium heat. Add the grated carrots and sauté for 8-10 minutes, stirring frequently, until the carrots soften and the raw smell disappears.",
        "_id": "692dc766b848b73166bc7829"
      },
      {
        "step": 2,
        "text": "Pour in the milk and bring the mixture to a boil. Once boiling, reduce the heat to low-medium and let it simmer. Stir occasionally to prevent sticking at the bottom.",
        "_id": "692dc766b848b73166bc782a"
      },
      {
        "step": 3,
        "text": "Continue to cook until the milk is almost completely absorbed by the carrots. This process can take about 20-25 minutes.",
        "_id": "692dc766b848b73166bc782b"
      },
      {
        "step": 4,
        "text": "Add the sugar and mix well. The sugar will melt and release moisture, making the mixture slightly liquid again. Continue to cook, stirring continuously, until the moisture evaporates and the halwa thickens.",
        "_id": "692dc766b848b73166bc782c"
      },
      {
        "step": 5,
        "text": "Stir in the heavy cream and cardamom powder. Cook for another 3-5 minutes until the halwa comes together, becomes glossy, and starts to leave the sides of the pan.",
        "_id": "692dc766b848b73166bc782d"
      },
      {
        "step": 6,
        "text": "Turn off the heat. Garnish with slivered almonds and pistachios. Serve the creamy Gajar ka Halwa warm.",
        "_id": "692dc766b848b73166bc782e"
      }
    ],
    "recipe_img": "https://images.pexels.com/photos/20446398/pexels-photo-20446398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "createdBy": "69281e539ae0dae2e5ee9b66",
    "createdAt": "2025-12-01T16:50:46.906Z",
    "updatedAt": "2025-12-01T16:50:46.906Z",
    "__v": 0
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
  profile_img: profile,
  name: "Anya Sharma",
  email: "anya.sharma@example.com"
};


export const features = [
  {
    id: 1,
    title: "Inspire",
    description: "Start by picking ingredients or exploring cuisines.",
    icon: <Lightbulb size={75} />,
    image: about_img1
  },
  {
    id: 2,
    title: "Generate",
    description: "Our AI crafts a unique recipe just for you.",
    icon: <ChefHat size={75} />,
    image: about_img2
  },
  {
    id: 3,
    title: "Cook & Save",
    description: "Enjoy your dish and save it to your favorites.",
    icon: <CalendarCheck size={75} />,
    image: about_img3
  }
];


