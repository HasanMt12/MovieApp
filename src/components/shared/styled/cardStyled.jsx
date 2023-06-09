import styled from 'styled-components';

export const Container = styled.div `
    margin-top:90px;
`

export const MovieSection = styled.div `
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
`

export const Card = styled.div `
   cursor:pointer;
   border-radius: 10px;
   border:3px solid rgba(249, 249, 249, 0.1);
   overflow:hidden;
   box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   
   img{
      width:100%;
      height:100%;
      object-fit:cover;
   }

   &:hover{
      transform: scale(1.05);
      border-color:rgba(249, 249, 249, 0.8);
      box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   }
`
export const FlexCenter = styled.div `
   display: flex;
   justify-content: center;
   item-align: center;
`
