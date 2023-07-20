import { create } from "zustand";

export const useBeerStore = create(set => ({
   // * storage
   recipesList: [],
   selectedRecipes: [],
   choosenRecipe: {},

   // ? methods
   getRecipesList: async () => {
      try {
         const response = await fetch(`https://api.punkapi.com/v2/beers?page=1`);

         const data = await response.json();

         set(() => ({
            recipesList: data,
         }));
      } catch (error) {
         console.log(`this is ${error}`);
      }
   },
   toggleSelectedRecipe: recipeId => {
      set(state => {
         const { selectedRecipes } = state;
         const isSelected = selectedRecipes.includes(recipeId);
         const updateSelectedRecipes = isSelected
            ? selectedRecipes.filter(id => id !== recipeId)
            : [...selectedRecipes, recipeId];
         return { selectedRecipes: updateSelectedRecipes };
      });
   },
   setChoosenRecipe: recipe => {
      set({ choosenRecipe: recipe });
   },
}));
