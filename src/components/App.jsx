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
   const visibleList = recipesList.slice(0, 15);
   console.log(recipesList);
   console.log(visibleList);
   return (
      <ul>
         {visibleList.map(({ id, name }) => (
            <li key={id}>{name}</li>
         ))}
      </ul>
   );
};
