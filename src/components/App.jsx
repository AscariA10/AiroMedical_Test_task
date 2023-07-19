import { useEffect } from "react";
import { useBeerStore } from "../store/useBeerStore";

export const App = () => {
   const recipesList = useBeerStore(state => state.recipesList);
   const getBeerList = useBeerStore(state => state.getRecipesList);
   useEffect(() => {
      if (recipesList.length === 0) {
         getBeerList();
      }
   }, [recipesList.length, getBeerList]);
   // useEffect(async () => {
   //    const beerList = await useBeerStore(state => state.getRecipesList);
   //    setBeerList(beerList);
   // });
   console.log(recipesList);
   return <div>React homework template</div>;
};
