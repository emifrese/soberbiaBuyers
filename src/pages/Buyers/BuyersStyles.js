import { styled } from "styled-components";

export const BuyerContainer = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BuyerByIdLabel = styled.label`

`

export const BuyerByIDInput = styled.input`
`

export const BuyersList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; 
`;

export const BuyerItem = styled.li`
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px;
  border-radius: 0.5rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.background}
`;

export const BuyerNameContainer = styled.div`
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  width: 100%;
  background-color: rgba(255,255,255,0.4);

  h3 {
    padding-left: 1rem
  }
`;

export const BuyerIDPayContainer = styled.div`
    font-size: 0.75rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const PayTitleContainer = styled.div`
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  width: 100%;
  background-color: rgba(255,255,255,0.4);
  
  p {
    text-align: center;
  }
`

export const BuyersPayContainer = styled.div`
  
`