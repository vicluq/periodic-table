import styled from "styled-components";

export const TableBox = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Table = styled.div`
  height: 80%;
  width: 90%;

  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: 1fr;

`;
