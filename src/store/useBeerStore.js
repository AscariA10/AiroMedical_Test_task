import { create } from "zustand";
import axios from "axios";

const instance = axios.create({
   baseURL: "https://api.punkapi.com/v2/beers?page=1",
});

export const useBeerStore = create(set => ({
   // *storage
   recipesList: [],

   // ?methods
   getRecipesList: async () => {
      try {
         const result = await instance.get();

         set(state => {
            console.log(result);
            return { recipesList: [...result] };
         });
      } catch (error) {
         console.log(`this is ${error}`);
      }
   },
}));
