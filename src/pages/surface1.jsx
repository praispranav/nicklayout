import React from "react";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import SideBarLeft from "../components/sidebarleft";
import bg1 from "../assets/images/bg1.jpg";
import TextInput from "../components/TextInput"
import IconButton from "../components/IconButton"

export default function Surface2() {
  return (
    <div
      style={{
        height: "100vh",
        width: "99vw",
        overflow: "hidden",
        background:"#F5F7FF"
      }}
    >
      <div className="row p-0 m-0">
        <SideBarLeft background={bg1} />

        <div
          style={{
            height: "100vh",
            padding: "10em",
            paddingLeft: "17em",
            paddingRight: "17em",

          }}
          className="col-12 col-md-8"
        >
          <div style={{}} className="w-100">
            <Typography variant="h4">Sign In</Typography>
            <div
              className="bg-primary m-2"
              style={{ width: "50px", height: "2px", borderRadius: "22px" }}
            ></div>
            <br />
            <TextInput label={"Enter email or phone number"} />
            <div className="mt-4"></div>
            <TextInput label={"Password"} />
          
            <div className="mt-3">
              <Button style={{ float: "right" }} variant="body2">
                Forget Password
              </Button>
            </div>

            <Button
              className="mt-3 bg-primary text-white "
              color="primary"
              style={{
                borderRadius: "10px",
                textAlign: "center",
                width: "100%",
                height: "4em",
              }}
            >
              Sign In
            </Button>

            <div
              className="mt-5 d-flex"
              style={{ alignItems: "center", justifyContent: "space-evenly" }}
            >
              <div
                style={{ background: "lightgrey", width: "33%", height: "2px" }}
              ></div>
              <Typography variant="body2">or continue with</Typography>
              <div
                style={{ background: "lightgrey", width: "33%", height: "2px" }}
              ></div>
            </div>

            <div
              className="mt-4 d-flex px-5"
              style={{ justifyContent: " space-evenly" }}
            >
              <IconButton img={bg1} />
              <IconButton img={bg1} />
              <IconButton img={bg1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
