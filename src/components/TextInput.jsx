import TextField from "@material-ui/core/TextField"
import React from "react"

export default function InputField(props){
    return(
        <TextField
        label={props.label}
        className="shadow-sm"
        style={{
          border: "none",
          background: "rgb(228, 228, 252)",
          borderRadius: "10px",
          width: "100%",
          border: "0px solid black !important",
        }}
        variant="outlined"
      />
    )
} 