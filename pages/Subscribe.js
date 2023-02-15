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

function Subscribe() {
  const [tabelData, setTableData] = React.useState(null);

  useEffect(() => {
    getSubscribeList();
  }, []);
  const [formData, setFormData] = React.useState([""]);
  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const getSubscribeList = async () => {
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
    {
      headerName: "Update",
      filter: false,
      cellRendererFramework: (params) => (
        <center onClick={() => handleUpdate(params.data)}>
          <button type="button" class="btn btn-outline-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
        </center>
      ),
    },
    {
      headerName: "Delete",
      filter: false,
      cellRendererFramework: (params) => (
        <center onClick={() => handleDelete(params.data)}>
          <button type="button" class="btn btn-outline-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </center>
      ),
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
    <div className="">
      <Sidenav />
      <div className="bg-red-50  lg:pl-[250px] xl:pl-[350px] 2xl:pl-[350px]  text-black  pr-6">
        <div className="pl-2 py-2 bg-red-50      text-3xl  text-black pt-2 ">
          Welcome to Subscribe Page 🧑‍💻
        </div>
        <div className="h-screen">
          <Grid align="right">
            <button
              className="bg-white text-black p-2 m-2 rounded hover:bg-red-500 hover:text-white hover:shadow-white"
              onClick={handleOpen}
            >
              Add Subscribe!!
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
                    <h1 className="py-5">Enter the New Blog Details</h1>

                    <TextField
                      onChange={(e) => onChange(e)}
                      id="Blog Title"
                      placeholder="Enter the Blog Title "
                      label="Blog Title Heading"
                      style={{ marginBottom: "24px" }}
                      fullWidth
                    />
                    <TextField
                      id="Experience"
                      placeholder="Enter the Blog Body"
                      label="Body"
                      fullWidth
                      style={{ marginBottom: "24px" }}
                      onChange={(e) => onChange(e)}
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

export default Subscribe;
