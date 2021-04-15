import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2px;

  display: grid;
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  align-content: end;
`;
