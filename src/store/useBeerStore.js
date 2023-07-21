import { create } from "zustand";

export const useBeerStore = create(set => ({
   // * storage
   recipesList: [],
   selectedRecipes: [],
   choosenRecipe: {},
   currentPage: 1,

   // ? methods
   getRecipesList: async () => {
      try {
         const { currentPage } = useBeerStore.getState();
         const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);

         const data = await response.json();

         set(state => {
            return {
               recipesList: data,
               currentPage: state.currentPage + 1,
            };
         });
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
   deleteSelectedRecipes: () => {
      set(state => {
         const { recipesList, selectedRecipes } = state;
         const remainingRecipes = recipesList.filter(
            element => !selectedRecipes.includes(element.id)
         );
         return { recipesList: remainingRecipes, selectedRecipes: [] };
      });
   },
}));
