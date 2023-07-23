import styled from "@emotion/styled";

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const ListWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 40px;
`;

export const RecipesList = styled.ul`
   list-style: none;
   display: block;
   flex-basis: 15%;
   padding: 20px;
   font-size: 24px;
`;

export const DeleteButton = styled.button`
   width: 100px;
   min-height: 25px;
   margin-left: auto;
   margin-right: auto;
   font-size: 24px;
`;
