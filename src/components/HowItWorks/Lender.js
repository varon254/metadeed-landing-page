import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "../context/useIsMobile";

function LenderTab() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div>
        <div
          className="w-full rounded-xl flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 20px",
            textAlign: "left",
            height: "100%",
            margin: "0.5rem 0",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "40px", color: "#874FA8", width: "50px" }}
          >
            <h1>1</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Onboard as a Verified Lender
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>Sign in with Eth Wallet </li>{" "}
                <li>Register as institutional or decentralized lender</li>
                <li>List mortgage offers on MetaDeed marketplace</li>
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 20px",
            textAlign: "left",
            height: "100%",
            margin: "0.5rem 0",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "40px", color: "#874FA8", width: "60px" }}
          >
            <h1>2</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Fund Mortgage Requests
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>Browse verified buyer profiles and property NFTs </li>{" "}
                <li>Approve and transfer mortgage funds to smart contract</li>
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 20px",
            textAlign: "left",
            height: "100%",
            margin: "0.5rem 0",
          }}
        >
          <div
            className="font-bold"
            style={{
              fontSize: "40px",
              color: "#874FA8",
              width: "50px",
            }}
          >
            <h1>3</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Earn Monthly Yield
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>Receive automated repayments + interest</li>{" "}
                <li>Use funds in Digital Dirham</li>
              </span>
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex items-center gap-3 mx-auto justify-center"
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <div
          className="w-full rounded-xl p-10 flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "48px", color: "#874FA8", width: "60px" }}
          >
            <h1>1</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Onboard as a Verified Lender
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Sign in with Eth Wallet </li>{" "}
                <li>Register as institutional or decentralized lender</li>
                <li>List mortgage offers on MetaDeed marketplace</li>
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl p-10 flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "48px", color: "#874FA8", width: "60px" }}
          >
            <h1>2</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Fund Mortgage Requests
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Browse verified buyer profiles and property NFTs </li>{" "}
                <li>Approve and transfer mortgage funds to smart contract</li>
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-3 mx-auto justify-center"
        style={{
          paddingBottom: "3rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <div
          className="w-full rounded-xl p-10 flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div
            className="font-bold"
            style={{
              fontSize: "48px",
              color: "#874FA8",
              width: "60px",
            }}
          >
            <h1>3</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Earn Monthly Yield
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Receive automated repayments + interest</li>{" "}
                <li>Use funds in Digital Dirham</li>
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full p-10 flex items-center justify-center"
          style={{
            padding: "20px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div>
            <a href="/request-demo">
              <Button
                size="lg"
                variant="outlined"
                className="normal-case font-medium font-grotesk py-3 w-[250px] rounded-md border-2"
                style={{ width: "270px", height: "60px", fontSize: "18px" }}
              >
                <h3>Request a Demo</h3>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LenderTab;
