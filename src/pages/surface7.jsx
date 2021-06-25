import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import bg1 from "../assets/images/bg1.jpg";
import TextInput from "../components/TextInput";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel"

function List(props) {
  return (
    <li
      className={
        props.active ? "p-2 active-bg rounded shadow-sm" : "p-2 rounded"
      }
      style={{ width: "300px" }}
    >
      <Typography style={{ marginLeft: "2em" }}>{props.text}</Typography>
    </li>
  );
}

export default function Surface7() {
  const Image = bg1;
  const Name = "Pranav Kumar";
  const personalinfo = "Personal Info";
  const subtitle = "Some text Here";
  return (
    <div>
      <div className="bg-dark w-100" style={{ height: "4em" }}></div>

      <div className="container m-5 p-5 pt-0">
        <div style={{ maxWidth: "1100px" }} className="mx-auto">
          <div
            className="d-flex"
            style={{ height: "50px", alignItems: "center" }}
          >
            <div className="">
              <img
                src={Image}
                alt="none"
                className="mx-auto rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                }}
              />
            </div>
            <div className="m-3">
              <Typography variant="h5">
                {Name} /{" "}
                <a className="link" style={{ textDecoration: "none" }}>
                  {personalinfo}
                </a>
              </Typography>
              <Typography variant="body1">{subtitle}</Typography>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div className="">
              <Typography variant="h6">Edit Profile</Typography>
              <ul style={{ listStyle: "none" }} className="p-0 m-0 pt-2">
                <List active={true} text="Personal Information" />
                <List text="some info" active={false} />
                <List text="some info" active={false} />
                <List text="some info" active={false} />
              </ul>
            </div>
            <div
              className=""
              style={{ textAlign: "left", width: "80%", maxWidth: "700px" }}
            >
              <div className="d-flex" style={{ alignItems: "center" }}>
                <div className="">
                  <img
                    src={Image}
                    alt="none"
                    style={{ width: "80px", height: "80px" }}
                    className="rounded-circle"
                  />
                </div>
                <div className="m-2">
                  <Button
                    variant="contained"
                    style={{ background: "#2945FF" }}
                    className="px-4 py-2 text-white"
                  >
                    <Typography variant="body1">Upload new photo</Typography>
                  </Button>
                </div>
                <div className="m-2">
                  <Button variant="contained">Delete</Button>
                </div>
              </div>
              <div className="my-2 mt-3">
                {/* <label htmlFor="" className="my-2">
                  <Typography variant="body1">
                    <b>Name</b>
                  </Typography>
                </label> */}
                    <InputLabel id="demo-simple-select-outlined-label"><b>Name</b></InputLabel>
                    <div className="mt-2">
                <TextInput label={"Name"} />

                    </div>
              </div>

              <div className="my-2 mt-3">
                {/* <label htmlFor="" className="my-2">
                  <Typography variant="body1">
                    <b>Email</b>
                  </Typography>
                </label> */}
                    <InputLabel id="demo-simple-select-outlined-label"><b>Email</b></InputLabel>
                    <div className="mt-2">
                <TextInput label={"Email"} />

                    </div>
              </div>

              <div className="d-flex" style={{ width: "100%" }}>
                <div className="my-2 w-100">
                  {/* <label htmlFor="" className="my-2 mr-1">
                    <Typography variant="body1">
                      <b>Register Time</b>
                    </Typography>
                  </label> */}
                                  <InputLabel id="demo-simple-select-outlined-label"><b>Register Time</b></InputLabel>
                  <TextField
                    id="time"
                    variant="outlined"
                    className="w-100 mt-2"
                    style={{
                      background: "rgb(228, 228, 252)",
                      borderRadius: "10px",
                      width: "100%",
                      border: "0px solid black !important",
                    }}
                    type="date"
                  />
                </div>
                <div className="my-2 w-100" style={{ marginLeft: "1em" }}>
                  {/* <label htmlFor="" className="my-2">
                    <Typography variant="body1">
                      <b>Last Login Time</b>
                    </Typography>
                  </label> */}
                                  <InputLabel id="demo-simple-select-outlined-label"><b>Last Login</b></InputLabel>
                  <TextField
                    id="time"
                    variant="outlined"
                    className="w-100 mt-2"
                    style={{
                      background: "rgb(228, 228, 252)",
                      borderRadius: "10px",
                      width: "100%",
                      border: "0px solid black !important",
                    }}
                    type="time"
                  />
                </div>
              </div>
              <div className="my-2 ">
                {/* <label htmlFor="" className="my-2">
                  <Typography variant="body1">
                    <b>Time Zone</b>
                  </Typography>
                </label> */}
                {/* <TextInput label={"Email"} /> */}
                <InputLabel id="demo-simple-select-outlined-label"><b>Time Zone</b></InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Age"
                  variant="outlined"
                  className="w-100 mt-2"
                  value="None"
                  style={{
                    background: "rgb(228, 228, 252)",
                    borderRadius: "10px",
                    width: "100%",
                    border: "0px solid black !important",
                  }}
                >
                  <MenuItem value="None">
                    
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <Button
                className="p-2 px-5 shadow mt-4  text-white"
                style={{ background: "#2945FF" }}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
