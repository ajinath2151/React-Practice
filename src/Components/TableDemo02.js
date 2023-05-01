import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  size: {
    fontSize: 18,
  },
  size2: {
    height: 400,
    width: "60%",
  },
}));

const rows = [
  { id: 1, lastName: "Shinde", firstName: "Ajinath", age: 27 },
  { id: 2, lastName: "Bodkhe", firstName: "Amol", age: 28 },
  { id: 3, lastName: "Satale", firstName: '', age: 19 },
  { id: 4, lastName: null, firstName: "Gorakh", age: 26 },
  { id: 5, lastName: "Dhande", firstName: "Bhagwan", age: 26 },
  { id: 6, lastName: "Rindhe", firstName: "Danodhar", age: 60 },
  { id: 7, lastName: "Kachre", firstName: "Haribhau", age: 65 },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150, editable: true },
  { field: "lastName", headerName: "Last Name", width: 150, editable: true },
  {
    field: "age",
    headerName: "Age",
    width: 110,
    editable: true,
    type: "number",
  },
  {
    field: "fullName",
    headerName: "Full Name",
    description: " this column is valueGetter and not sortable",
    sortable: false,
    width: 160,
    valueGetter: (param) =>
      `${param.getValue(param.id, "firstName") || ""}
  ${param.getValue(param.id, "lastName") || ""}`,
  },
];

function TableDemo02() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  return (
    <>
      <h3>another table</h3>
      <div className={classes.size2}>
        <DataGrid
          className={classes.size}
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        ></DataGrid>
      </div>
    </>
  );
}
export default TableDemo02;
