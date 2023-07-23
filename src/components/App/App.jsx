import { useEffect } from "react";
import { useBeerStore } from "../../store/useBeerStore";

import { SingleRecipeWindow } from "../SingleRecipeWindow/SingleRecipeWindow";

import { Wrapper, RecipesList } from "./App.styled.js";

export const App = () => {
   //*storage
   const selectedRecipes = useBeerStore(state => state.selectedRecipes);
   const recipesList = useBeerStore(state => state.recipesList);

   //?methods
   const deleteSelectedRecipes = useBeerStore(state => state.deleteSelectedRecipes);
   const getRecipesList = useBeerStore(state => state.getRecipesList);
   const setChoosenRecipe = useBeerStore(state => state.setChoosenRecipe);
   const toggleSelectedRecipe = useBeerStore(state => state.toggleSelectedRecipe);

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

   function handleDelete() {
      deleteSelectedRecipes();
   }
   // console.log(recipesList);
   // console.log(visibleList);

   return (
      <Wrapper>
         {selectedRecipes.length > 0 ? (
            <button type="button" onClick={handleDelete}>
               delete recipes
            </button>
         ) : null}

         <RecipesList>
            {visibleList.map(element => (
               <li
                  key={element.id}
                  onClick={event => {
                     event.preventDefault();
                     handleClick(element.id);
                  }}
                  onContextMenu={event => {
                     event.preventDefault();
                     toggleSelectedRecipe(element.id);
                  }}
               >
                  {element.name}
               </li>
            ))}
         </RecipesList>
         <SingleRecipeWindow />
      </Wrapper>
   );
};
