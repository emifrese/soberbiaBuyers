import { styled } from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid white;
`;

export const HeaderName = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  max-width: 80%;
`


export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  gap: 1rem;
  width: 200px;
`;

export const LinkListElement = styled.li`
  padding: 0.5rem 0.75rem;
  background-color: red;
  list-style: none;
  border-radius: 1rem;
  text-align: center;

  a{
    text-decoration: none;
    color: white
  }
`;
