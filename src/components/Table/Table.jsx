import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
width: 700px;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
    width: 10vw;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
  input {
    width: 10vw;
  }
`;

const TableMarkup = ({ titles, data, onDeleteRow, onEdit, onSave, editedRowIndex, setEditedRowIndex }) => {
  const handleEdit = (rowIndex, field, value) => {
    onEdit(rowIndex, field, value);
    setEditedRowIndex(null); // Reset the editing state
  };

  const handleSave = (rowIndex) => {
    onSave(rowIndex);
    setEditedRowIndex(null);
  };
  return (
    <StyledTable>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {titles.map((title, colIndex) => (
              <td key={colIndex}>
                {
                  editedRowIndex === rowIndex ? (
                    <input
                      type="text"
                      value={item[title]}
                      onChange={(e) => onEdit(rowIndex, title, e.target.value)}
                    />
                  ) :
                    (
                      item[title]
                    )
                }
              </td>
            ))}
            <td>
              <button onClick={() => onDeleteRow(rowIndex)}>X</button>
            </td>
            {editedRowIndex === rowIndex ? (
              <>
               <td>
                <button onClick={() => handleSave(rowIndex)}>Save</button>
              </td>
              </>
            ) : (
              <td>
                <button onClick={() => setEditedRowIndex(rowIndex)}>Edit</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </tfoot> */}
    </StyledTable>
  );
};

export default function Table({ data, onDeleteRow, onEdit, onSave }) {
  const [editedRowIndex, setEditedRowIndex] = useState(null);

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const titles = Object.keys(data[0]);

  return (
    <TableMarkup
      titles={titles}
      data={data}
      onDeleteRow={onDeleteRow}
      onEdit={onEdit}
      onSave={onSave}
      editedRowIndex={editedRowIndex}
      setEditedRowIndex={setEditedRowIndex}
    />
  );
}