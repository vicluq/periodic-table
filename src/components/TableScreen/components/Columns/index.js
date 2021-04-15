import React from "react";
import { Container } from "./styles";
import Element from "../ElementSquare";

function Column({ id, elements, changeSelectedElem, selectedElem }) {
  return (
    <Container rows={elements.lenght}>
      {elements.map(
        (elem) => (
          <Element
            key={elem.symbol}
            atomicMass={elem.atomicMass}
            atomicNumber={elem.atomicNumber}
            name={elem.name}
            symbol={elem.symbol}
            groupBlock={elem.groupBlock}
            changeSelectedElem={changeSelectedElem}
            selectedElem={selectedElem}
          />
        )
      )}
    </Container>
  );
}

export default Column;
