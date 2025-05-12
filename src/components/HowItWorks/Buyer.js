import { Button, Typography } from "@material-tailwind/react";
import React from "react";

function BuyerTab() {
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
                Create Profile
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Get attestation from UAE Pass with EAS </li>{" "}
                <li>Sign in with Eth Wallet</li>
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
                Browse & Make Offer
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Discover verified property </li>{" "}
                <li>Submit your offer with a smart contract deposit</li>
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-3 mx-auto justify-center"
        style={{
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
                Get Financed (If Needed)
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>
                  Get credit attestation from Etihad Credit Bureau account
                </li>{" "}
                <li>Choose from registered DeFi or institutional lenders</li>
                <li>Lender transfers funds into the escrow smart contract</li>
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
            <h1>4</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Pay Mortgage Monthly
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Smart contract handles automated monthly payments </li>{" "}
                <li>
                  Track balance, interest, and schedule from your dashboard
                </li>
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
            <h1>5</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>Own It</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>
                  Upon full repayment, NFT of title deed is released to your
                  wallet
                </li>{" "}
                <li>You're now the on-chain verified property owner</li>
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

export default BuyerTab;
