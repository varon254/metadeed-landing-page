import { Button } from "@material-tailwind/react";
import React from "react";

function CallToAction() {
  return (
    <div style={{ marginTop: "10rem", marginBottom: "3rem" }}>
      <div className="w-full flex gap-4 mt-4 justify-center">
        <a href="/join-waiting-list">
          <Button
            size="lg"
            variant="outlined"
            className="normal-case font-medium font-grotesk py-3 w-[250px] rounded-md border-2"
            style={{ width: "270px", height: "60px", fontSize: "18px" }}
          >
            <h3>Join Waiting List</h3>
          </Button>
        </a>
        <a href="/partner-with-us">
          <Button
            size="lg"
            className="normal-case font-medium w-[250px] rounded-md py-3.5"
            style={{
              width: "270px",
              backgroundColor: "#000",
              height: "60px",
              fontSize: "18px",
            }}
          >
            <h3>Partner with us</h3>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
