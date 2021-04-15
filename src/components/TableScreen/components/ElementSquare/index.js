import React from "react";
import { ElementCard } from "./style";
import colorByGroup from "../../../../util/colorByGroup";

const ElementSquare = ({
  atomicNumber,
  atomicMass,
  symbol,
  name,
  groupBlock,
  changeSelectedElem,
  selectedElem,
}) => (
  <ElementCard
    onClick={changeSelectedElem.bind(null, atomicNumber)}
    bgndColor={colorByGroup(groupBlock)}
    selected={selectedElem === atomicNumber || !selectedElem}
  >
    <div className="elementData">
      <p>{atomicNumber}</p>
      <p>{atomicMass?.toString().slice(0, 5)}</p>
    </div>
    <h2>{symbol}</h2>
    <p>{name}</p>
  </ElementCard>
);

export default ElementSquare;
