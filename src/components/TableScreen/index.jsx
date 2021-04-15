import React, { useState, useCallback } from "react";
import PeriodicTable from "./components/Table";
import { Container } from "./style";

function TableScreen({ data }) {
  const [selectedElem, setSelectedElem] = useState("");

  const changeSelectedElement = useCallback(
    (atomicNumber) => {
      if (atomicNumber === selectedElem) setSelectedElem(null);
      else setSelectedElem(atomicNumber);
    },
    [selectedElem]
  );

  const renderContent = useCallback(() => {
    if (!data || data.length === 0) {
      return <h2>Empty data</h2>;
    }

    return (
      <PeriodicTable
        data={data}
        changeSelectedElem={changeSelectedElement}
        selectedElem={selectedElem}
      />
    );
  }, [data, changeSelectedElement, selectedElem]);

  return (
    <Container>
      <div>TABLE CAPTION</div>
      {renderContent()}
    </Container>
  );
}

export default TableScreen;
