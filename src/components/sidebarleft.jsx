import React from "react";
import Typography from "@material-ui/core/Typography";

export default function SideBarLeft(props) {
  const data = props.data;
  const heading1 = data.heading1;
  const heading2 = data.heading2;
  const headingsmall = data.headingsmall;
  const heading3 = data.heading3;
  const text = data.text;
  const text2 = data.text2;
  const bottomtext = data.bottomtext;
  const signintext = data.signintext;
  return (
    <div
      className="col-12 col-md-4 position-relative p-5"
      style={{
        background: `url(${props.background})`,
        backgroundSize: "100%",
        height: "100vh",
        borderTopRightRadius: "40px",
        borderBottomRightRadius: "40px",
      }}
    >
      <div className="h-100 w-100 sidebar-content">
        <div className=" w-100 h-100 backdrop-blur"></div>
      </div>
      <div
        className="text-white position-absolute"
        style={{
          top: "12%",
          left: "17%",
        }}
      >
        <Typography variant="h6">
          {heading1} <br />
          {heading2}
        </Typography>
        <br />

        <div className="bg-primary line"></div>
        <br />

        <Typography variant="h6">
          <small>{headingsmall}</small>
          <br />
          {heading3}
        </Typography>

        <br />
        <Typography variant="body2">
          {text}
          <br />
          {text2}
        </Typography>
      </div>
      <div
        className="text-white position-absolute"
        style={{
          bottom: "12%",
          left: "17%",
        }}
      >
        <Typography variant="body1">
          <small>{bottomtext} </small>
          <br />
          {signintext}
        </Typography>
      </div>
    </div>
  );
}
