// import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useBeerStore } from "../../store/useBeerStore";

import {
   SectionWrapper,
   BeerImgThumb,
   BeerImg,
   GeneralInfo,
   IngredientsInfo,
   BrewingInfo,
   StatsInfo,
} from "./SingleRecipeWindow.styled";

export const SingleRecipeWindow = () => {
   const choosenRecipe = useBeerStore(state => state.choosenRecipe);

   const { name, image_url, description, tagline, method, ebc, ibu, ph, srm, ingredients } =
      choosenRecipe;
   const hops = ingredients?.hops;
   const malt = ingredients?.malt;
   console.log(choosenRecipe);
   return Object.keys(choosenRecipe).length !== 0 ? (
      <SectionWrapper>
         <BeerImgThumb>
            <BeerImg src={image_url} alt={name} />
         </BeerImgThumb>
         <GeneralInfo>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{tagline}</p>
         </GeneralInfo>
         <IngredientsInfo>
            <h2>Ingredients</h2>
            <h3>Hops</h3>
            <ul>
               {hops?.map(element => (
                  <li key={nanoid()}>
                     <span>{element.name} </span>
                     <span>
                        weight: {element.amount.value} {element.amount.unit}
                     </span>
                     <span> add at: {element.add}</span>
                     <span> taste attribute: {element.attribute}</span>
                  </li>
               ))}
            </ul>
            <h3>Malt</h3>
            <ul>
               {malt?.map(element => (
                  <li key={nanoid()}>
                     <span>{element.name} </span>
                     <span>
                        weight: {element.amount.value} {element.amount.unit}
                     </span>
                  </li>
               ))}
            </ul>
            <h3>Yeasts: {ingredients?.yeast} </h3>
         </IngredientsInfo>
         <BrewingInfo>
            <h2>Brewing Conditions</h2>
            <p>Fermentation temperature: {method?.fermentation?.temp.value} &#8451;</p>
            <p>Mash duration: {method?.mash_temp[0].duration} min</p>
            <p>Mash temperature: {method?.mash_temp[0].temp.value} &#8451;</p>
         </BrewingInfo>
         <StatsInfo>
            <h2>Beer Stats</h2>
            <p>ebc {ebc}</p>
            <p>ibu {ibu}</p>
            <p>ph {ph}</p>
            <p>srm {srm}</p>
         </StatsInfo>
      </SectionWrapper>
   ) : null;
};
