import { useEffect } from "react";
import { useBeerStore } from "../../store/useBeerStore";
import { Recipe } from "components/Recipe/Recipe";
import { SingleRecipeWindow } from "../SingleRecipeWindow/SingleRecipeWindow";

import { Wrapper, RecipesList, ListWrapper, DeleteButton } from "./App.styled.js";

export const App = () => {
   //*storage
   const selectedRecipes = useBeerStore(state => state.selectedRecipes);
   const recipesList = useBeerStore(state => state.recipesList);

   //?methods
   const deleteSelectedRecipes = useBeerStore(state => state.deleteSelectedRecipes);
   const getRecipesList = useBeerStore(state => state.getRecipesList);
   const setChoosenRecipe = useBeerStore(state => state.setChoosenRecipe);
   // const toggleSelectedRecipe = useBeerStore(state => state.toggleSelectedRecipe);

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
   return (
      <Wrapper>
         <ListWrapper>
            {selectedRecipes.length > 0 ? (
               <DeleteButton type="button" onClick={handleDelete}>
                  delete recipes
               </DeleteButton>
            ) : null}

            <RecipesList>
               {visibleList.map(element => (
                  <Recipe key={element.id} elementInfo={element} handleClick={handleClick}>
                     {element.name}
                  </Recipe>
               ))}
            </RecipesList>
         </ListWrapper>
         <SingleRecipeWindow />
      </Wrapper>
   );
};
