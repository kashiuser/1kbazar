import React, { useEffect } from "react";
import Sidenav from "../components/sidebar/Sidenav";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function NewsRoom() {
  const [tabelData, setTableData] = React.useState(null);

  useEffect(() => {
    getNewsRoomList();
  }, []);
  const [formData, setFormData] = React.useState([""]);
  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const getNewsRoomList = async () => {
    try {
      const res = await axios.get(
        "https://1kbazzar-api.moshimoshi.cloud/blog/news"
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
      headerName: "Title",
      field: "title",
      editable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Description",
      field: "description",
      editable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Category",
      field: "category",
      editable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Read Time",
      field: "readTime",
      editable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Image",
      field: "image",
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
    minWidth: 120,
  };
  return (
    <div className="bg-red-50">
      <Sidenav />
      <div className="bg-red-50 lg:pl-[250px] xl:pl-[350px] 2xl:pl-[350px] text-black  pr-6">
        <div className="pl-2 py-2 bg-red-50      text-3xl  text-black pt-2 ">
          Welcome to 1k News Room 📰🗞️
        </div>
        <div className="h-screen">
          <Grid align="right">
            <button
              className="bg-white text-black p-2 m-2 rounded hover:bg-red-500 hover:text-white hover:shadow-white"
              onClick={handleOpen}
            >
              Add News Room!!
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
            <div>
              {/* <Button onClick={handleOpen}>Open modal</Button> */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form action="">
                    {console.log(formData)}
                    <h1 className="py-5">Enter the News Details</h1>

                    <TextField
                      onChange={(e) => onChange(e)}
                      id="title"
                      placeholder="Enter the News Title"
                      label="News Title"
                      style={{ marginBottom: "24px" }}
                      fullWidth
                    />
                    <TextField
                      onChange={(e) => onChange(e)}
                      id="description"
                      placeholder="Enter the News Description"
                      label="News Description"
                      style={{ marginBottom: "24px" }}
                      fullWidth
                    />
                    <TextField
                      onChange={(e) => onChange(e)}
                      id="readTime"
                      placeholder="Enter the News Read Time"
                      label="News Read Time"
                      style={{ marginBottom: "24px" }}
                      fullWidth
                    />
                    <TextField
                      onChange={(e) => onChange(e)}
                      type="file"
                      id="image"
                      placeholder="Upload the image"
                      style={{ marginBottom: "24px" }}
                      fullWidth
                    />
                  </form>
                  <div className="flex flex-row ">
                    <Button
                      onClick={handleClose}
                      color="secondary"
                      variant="outlined"
                      style={{ marginRight: "3px" }}
                      onChange={(e) => onChange(e)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handelFormSubmit();
                        handleClose;
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsRoom;
