import React from "react";
import Typography from "@material-ui/core/Typography";
import bg1 from "../assets/images/bg1.jpg";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";

function Boxes(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{ width: "140px", height: "80px", borderRadius: "10px" }}
      className="mt-5 text-primary shadow-lg bg-white"
    >
      <div
        className="h-100"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <b>
          {props.text1}
          <br />
          {props.text2}
        </b>
      </div>
    </motion.div>
  );
}

export default function Surface4() {
    const HeadingText1 = "Heading"
    const TopDescription = "SEC-FS helps companies and investors to track import file such as financial reports. For quaterly and annually, companies should send many reportrs. If the stakeholders wants to search and read these reports."
    const ButtonText = "Get Started";
    const Image = bg1

    const Section2Text = "Something Here";
    const Section3Text = "Some Another Text Here";
    
  return (
    <>
      <div className="bg-dark w-100" style={{ height: "4em" }}></div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 p-5">
            <Typography variant="h2">
           {HeadingText1}
            </Typography>
            <br />
            <Typography
              varint="body1"
              style={{ color: "grey", width: "100%", maxWidth: "500px" }}
            >
              {TopDescription}
            </Typography>
            <br />
            <Button
              className="text-white bg-primary px-5 py-3"
              style={{ borderRadius: "10px" }}
            >
              {ButtonText}
            </Button>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 p-5"
            style={{ textAlign: "center" }}
          >
            <img
              src={Image}
              style={{
                maxHeight: "300px",
                width: "100%",
                maxWidth: "400px",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              alt="none"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container  p-5">
        <div className="row">
          <div className="col-12" style={{ textAlign: "center" }}>
            <Typography variant="h3">{Section2Text}</Typography>
            <div
              className="mx-auto"
              style={{ maxWidth: "800px", width: "100%" }}
            >
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div className="col-2" style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Boxes text1="abcdefghij kal" text2="bcd" />
                  </div>
                </div>
                <div className="col-2 " style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes />
                      <Boxes />
                      <Boxes />
                    </div>
                  </div>
                </div>
                <div className="col-2 " style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes text1="pranav Kumar" />
                      <Boxes />
                      <Boxes />
                      <Boxes />
                    </div>
                  </div>
                </div>
                <div className="col-2" style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes />
                      <Boxes />
                      <Boxes />
                    </div>
                  </div>
                </div>
                <div className="col-2" style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5  p-5">
        <div className="row">
          <div className="col-12" style={{ textAlign: "center" }}>
            <Typography variant="h3">{Section3Text}</Typography>
            <div
              className="mx-auto"
              style={{ maxWidth: "800px", width: "100%" }}
            >
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div className="col-2" style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Boxes text1="abcdefghij kal" text2="bcd" />
                  </div>
                </div>
                <div className="col-2 " style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes />
                      <Boxes />
                      <Boxes />
                    </div>
                  </div>
                </div>
                <div className="col-2 " style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes text1="pranav Kumar" />
                      <Boxes />
                      <Boxes />
                      <Boxes />
                    </div>
                  </div>
                </div>
                <div className="col-2" style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes />
                      <Boxes />
                      <Boxes />
                    </div>
                  </div>
                </div>
                <div className="col-2" style={{ height: "500px" }}>
                  <div
                    className="d-flex h-100"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Boxes />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
