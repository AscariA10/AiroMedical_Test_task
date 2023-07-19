import { create } from "zustand";
// import axios from "axios";

// const instance = axios.create({
//    baseURL: "https://api.punkapi.com/v2/beers?page=1",
// });

export const useBeerStore = create(set => ({
   recipesList: [],
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
}));
