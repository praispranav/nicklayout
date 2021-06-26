import Button from "@material-ui/core/Button";
import React from "react";

export default function IconButton(props) {
  return (
    <Button
      className="border bg-white rounded p-3"
      style={{ width: "70px", height: "70px", overflow: "hidden" }}
    >
      <img src={props.img} style={{ width: "100%", height: "100%" }} />
    </Button>
  );
}
