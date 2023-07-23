import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
   flex-basis: 80%;

   display: flex;
   flex-wrap: wrap;
   gap: 40px;

   padding: 40px;
   border: 1px dashed red;
`;

export const BeerImgThumb = styled.div`
   flex-basis: 60%;
   height: 300px;
   margin-left: auto;
   margin-right: auto;
`;

export const BeerImg = styled.img`
   object-fit: contain;
   width: 100%;
   height: 100%;
`;

export const GeneralInfo = styled.div`
   flex-basis: 80%;
   margin-left: auto;
   margin-right: auto;
`;

export const IngredientsInfo = styled.div`
   flex-growth: 1;
`;

export const BrewingInfo = styled.div`
   flex-growth: 1;
`;

export const StatsInfo = styled.div`
   flex-growth: 1;
`;
