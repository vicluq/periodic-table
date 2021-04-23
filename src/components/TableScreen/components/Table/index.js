import React, { useCallback } from "react";
import { TableBox, Table } from "./styles";
import Column from "../Columns";

import filterByAtomicNumber from "../../../../util/filterByAtomicNumber";

function PeriodicTable({ data, changeSelectedElem, selectedElem, groupBlocks }) {
  // Will give a sigle column
  const renderColumn = useCallback(
    (group, index) => {
      const { id, elements, gridArea, rows, color } = group;

      return (
        <Column
          key={id}
          id={id}
          index={index}
          elements={filterByAtomicNumber(data, elements)}
          gridArea={gridArea}
          rows={rows}
          color={color}
          changeSelectedElem={changeSelectedElem}
          selectedElem={selectedElem}
        />
      );
    },
    [data, changeSelectedElem, selectedElem]
  );

  // Will give an array of columns
  const renderTableContent = useCallback(() => {
    const columns = Object.values(groupBlocks).map((group, index) =>
      renderColumn(group, index)
    );
    return columns;
  }, [renderColumn, groupBlocks]);

  return (
    <TableBox>
      <Table>{renderTableContent()}</Table>
    </TableBox>
  );
}

export default PeriodicTable;
