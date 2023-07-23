import { useState } from "react";

import { useBeerStore } from "../../store/useBeerStore";

import { RecipeItem } from "./Recipe.styled";

export const Recipe = ({ children, elementInfo, handleClick }) => {
   const toggleSelectedRecipe = useBeerStore(state => state.toggleSelectedRecipe);

   const [selected, setSelected] = useState(false);

   return (
      <RecipeItem
         onClick={event => {
            event.preventDefault();
            handleClick(elementInfo.id);
         }}
         onContextMenu={event => {
            event.preventDefault();
            toggleSelectedRecipe(elementInfo.id);
            setSelected(!selected);
         }}
         bg={selected ? "red" : null}
      >
         {children}
      </RecipeItem>
   );
};
