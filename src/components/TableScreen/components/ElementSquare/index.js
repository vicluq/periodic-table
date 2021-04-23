import React, { useContext } from "react";
import { ElementCard } from "./style";
import DataContext from "../../../../services/context";

const ElementSquare = ({
  atomicNumber,
  atomicMass,
  symbol,
  name,
  groupBlock,
  changeSelectedElem,
  selectedElem,
}) => {
  const { content } = useContext(DataContext);
  return (
    <ElementCard
      onClick={changeSelectedElem.bind(null, atomicNumber)}
      bgndColor={content.colors.byGroupType[groupBlock]}
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
};

export default ElementSquare;
