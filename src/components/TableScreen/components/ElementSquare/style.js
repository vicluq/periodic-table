import styled from "styled-components";

export const ElementCard = styled.div`
  height: 85px;
  width: 100%;
  padding: 4px;
  margin: 2px;

  /* border: 1px solid #000; */
  background-color: ${(props) => props.bgndColor};
  opacity: ${(props) => props.selected ? 1 : 0.7};
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  align-content: center;
  text-align: center;
  font-size: 0.9rem;

  &:hover {
    transform: scale(1.05);
  }

  & .elementData {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
