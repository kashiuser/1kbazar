import React, { useEffect } from "react";
import Sidenav from "../components/sidebar/Sidenav";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import Grid from "@mui/material/Grid";
import FormPopup from "../components/Popup";
import axios from "axios";

function Blogs() {
  const [tabelData, setTableData] = React.useState(null);
  // const url = "http://moshimoshi.cloud:3000/blog/blogList";
  useEffect(() => {
    getCareerList();
  }, []);
  const [formData, setFormData] = React.useState({
    ID: "",
    Job_Title: "",
    Department: "",
    Location: "",
  });
  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const getCareerList = async () => {
    try {
      const res = await axios.get(
        "https://1kbazzar-api.moshimoshi.cloud/blog/blogList"
      );
      console.log(res.data.data);
      setTableData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  // const handelFormSubmit = async () => {
  //   await fetch(url, { method: "POST", body: JSON.stringify(formData) })
  //     .then((resp) => resp.json())
  //     // .then((resp) => getCareerList())
  //     .catch((err) => console.log(err));
  // };
  // console.log(formData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columnDefs = [
    { headerName: "ID", field: "_id" },
    {
      headerName: "title",
      field: "title",
      editable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "body",
      field: "body",
      editable: true,
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
    resizable: true,
    minWidth: 450,
  };
  return (
    <div className="">
      <Sidenav />
      <div className="bg-red-50  text-black pr-6">
        <div className="pl-2 py-2 bg-red-50      text-3xl  text-black pt-2 ">
          Welcome to Blogs Page 📝
        </div>
        <div className="h-screen">
          <Grid align="right">
            <button
              className="bg-white text-black p-2 m-2 rounded hover:bg-red-500 hover:text-white hover:shadow-white"
              onClick={handleOpen}
            >
              Add Career!!
            </button>
          </Grid>
          <div
            id="myGrid"
            class="ag-theme-alpine pl-2 h-[350px] w-[100%] text-black"
          >
            <AgGridReact
              defaultColDef={defaultColDef}
              columnDefs={columnDefs}
              rowData={tabelData}
              pagination={true}
              enableCellChangeFlash={true}
              onCellValueChanged={(params) => {
                // handle update to cell value here
              }}
            />
            <FormPopup
              open={open}
              handleClose={handleClose}
              data={formData}
              onChange={onChange}
              // handelFormSubmit={handelFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
