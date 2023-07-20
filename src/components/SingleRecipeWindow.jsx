// import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useBeerStore } from "../store/useBeerStore";

export const SingleRecipeWindow = () => {
   const choosenRecipe = useBeerStore(state => state.choosenRecipe);

   const { name, image_url, description, tagline, method, ebc, ibu, ph, srm, ingredients } =
      choosenRecipe;
   const hops = ingredients?.hops;
   const malt = ingredients?.malt;
   console.log(choosenRecipe);
   return (
      <section>
         <img src={image_url} alt={name} width={20} />
         <h1>{name}</h1>
         <p>{description}</p>
         <p>{tagline}</p>
         <div>
            <h2>Ingredients</h2>
            <h3>Hops</h3>
            <ul>
               {hops?.map(element => (
                  <li key={nanoid()}>
                     <p>{element.name}</p>
                     <p>
                        weight: {element.amount.value} {element.amount.unit}
                     </p>
                     <p>add at: {element.add}</p>
                     <p>taste attribute: {element.attribute}</p>
                  </li>
               ))}
            </ul>
            <h3>Malt</h3>
            <ul>
               {malt?.map(element => (
                  <li key={nanoid()}>
                     <p>{element.name}</p>
                     <p>
                        weight: {element.amount.value} {element.amount.unit}
                     </p>
                  </li>
               ))}
            </ul>
            <h3>Yeasts: {ingredients?.yeast} </h3>
         </div>
         <div>
            <h2>Brewing Conditions</h2>
            <p>Fermentation temperature: {method?.fermentation.temp.value} &#8451;</p>
            <p>Mash duration: {method?.mash_temp[0].duration} min</p>
            <p>Mash temperature: {method?.mash_temp[0].temp.value} &#8451;</p>
         </div>
         <div>
            <h2>Beer Stats</h2>
            <p>ebc {ebc}</p>
            <p>ibu {ibu}</p>
            <p>ph {ph}</p>
            <p>srm {srm}</p>
         </div>
      </section>
   );
};
