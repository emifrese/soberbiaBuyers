import { styled } from "styled-components";

export const StatsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1rem;
`;

export const StatItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid red;
`;
