import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideBarLeft from "../components/sidebarleft";
import bg1 from "../assets/images/bg1.jpg";
import TextInput from "../components/TextInput";
import IconButton from "../components/IconButton";
import "../assets/css/custom.css";

export default function Surface2() {
  const SidebarData = {
    heading1: "The Best",
    heading2: "Security Tool",
    headingsmall: "We are",
    heading3: "Invite you to join with us",
    text: "Over 10 million people join our website.",
    text2: " We invite you to join the tribe",
    bottomtext: "Already have an account ?",
    signintext: "Sign in -->",
  };
  return (
    <div className="full-width-full-height">
      <div className="row p-0 m-0">
        <SideBarLeft data={SidebarData} background={bg1} />

        <div className="col-12 col-md-8 full-height-padding-large">
          <div style={{}} className="w-100">
            <Typography variant="h4">Sign In</Typography>
            <div className="bg-primary m-2 line"></div>
            <br />

            <TextInput
              label={"Enter email or phone number"}
              handleChange={(e) => console.log(e)}
              value={""}
            />

            <div className="mt-4"></div>

            <TextInput
              label={"Password"}
              handleChange={(e) => console.log(e)}
              value={""}
            />

            <div className="mt-3">
              <Button style={{ float: "right" }} variant="body2">
                Forget Password
              </Button>
            </div>

            <Button
              className="mt-3 bg-primary text-white button-full-width "
              color="primary"
            >
              Sign In
            </Button>

            <div className="mt-5 d-flex align-items-center justify-content-evenly">
              <div className="grey-line"></div>

              <Typography variant="body2">or continue with</Typography>

              <div className="grey-line"></div>
            </div>

            <div className="mt-4 d-flex px-5 justify-content-evenly">
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
