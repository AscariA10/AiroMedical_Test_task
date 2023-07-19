import { useBeerStore } from "../store/useBeerStore";

export const App = () => {
   async function GetBeersList() {
      const beerList = await useBeerStore(state => state.getRecipesList);
      return beerList;
   }

   const beers = GetBeersList();
   console.log(beers);
   return <div>React homework template</div>;
};
