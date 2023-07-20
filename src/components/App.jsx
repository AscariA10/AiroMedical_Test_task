import { useEffect } from "react";
import { useBeerStore } from "../store/useBeerStore";

import { SingleRecipeWindow } from "./SingleRecipeWindow";

export const App = () => {
   //*storage
   const recipesList = useBeerStore(state => state.recipesList);

   //?methods
   const getRecipesList = useBeerStore(state => state.getRecipesList);
   const setChoosenRecipe = useBeerStore(state => state.setChoosenRecipe);

   useEffect(() => {
      if (recipesList.length === 0) {
         getRecipesList();
      }
   }, [recipesList.length, getRecipesList]);

   const visibleList = recipesList.slice(0, 15);

   function handleClick(elementId) {
      const selectedRecipe = visibleList.find(element => element.id === elementId);
      setChoosenRecipe(selectedRecipe);
   }

   // console.log(recipesList);
   // console.log(visibleList);

   return (
      <>
         <ul>
            {visibleList.map(element => (
               <li
                  key={element.id}
                  onClick={event => {
                     event.preventDefault();
                     handleClick(element.id);
                  }}
               >
                  {element.name}
               </li>
            ))}
         </ul>
         <SingleRecipeWindow />
      </>
   );
};
