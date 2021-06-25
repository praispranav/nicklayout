import React from "react"
import Typography from "@material-ui/core/Typography"

export default function SideBarLeft(props){
    return(
        <div
        className="col-12 col-md-4 "
        style={{
          background: `url(${props.background})`,
          backgroundSize: "100%",
          height: "100vh",
          padding: "4em",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          position: "relative",
        }}
      >
        <div
          className="h-100 w-100"
          style={{
            overflow: "hidden",
            borderRadius: "20px",
            border: "0px solid black",
          }}
        >
          <div
            className=" w-100 h-100"
            style={{
              background:
                "linear-gradient(180deg, rgba(192, 203, 239, 0.16) 0%, rgba(52, 85, 255, 0.16) 100%)",
              backdropFilter: "blur(32px)",

              borderRadius: "19px",
            }}
          ></div>
        </div>
        <div
          className="text-white"
          style={{
            position: "absolute",
            top: "12%",
            left: "17%",
          }}
        >
          <Typography variant="h6">
            The Best <br />
            Security Tool
          </Typography>
          <br />
          <div
            className="bg-primary"
            style={{ width: "50px", height: "2px", borderRadius: "22px" }}
          ></div>
          <br />
          <Typography variant="h6">
            <small>We are</small>
            <br />
            Invite you to join with us.
          </Typography>
          <br />
          <Typography variant="body2">
            Over 10 million people join our website.
            <br />
            We invite you to join the tribe
          </Typography>
        </div>
        <div
          className="text-white"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "17%",
          }}
        >
          <Typography variant="body1">
            <small>Already have an account ? </small>
            <br />
            Sign in --
          </Typography>
        </div>
      </div>
    )
}