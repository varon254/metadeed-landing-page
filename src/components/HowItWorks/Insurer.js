import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "../context/useIsMobile";

function InsurerTab() {
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
            style={{ fontSize: "40px", color: "#874FA8", width: "60px" }}
          >
            <h1>1</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Onboard as a Verified Insurer
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>Get attestation as verified Insurer </li>{" "}
                <li>
                  Define and list coverage types (e.g. default, title, portfolio
                  protection)
                </li>
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
                Review & Underwrite
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>
                  Assess verified property NFTs and buyer credit attestations{" "}
                </li>{" "}
                <li>
                  Offer risk-adjusted policies for lenders and loan packages
                </li>
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
              width: "60px",
            }}
          >
            <h1>3</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Issue On-Chain Insurance
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>Secure mortgage deals and fund escrowed smart contracts</li>{" "}
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
            style={{ fontSize: "40px", color: "#874FA8", width: "50px" }}
          >
            <h1>4</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Monitor & Manage
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>Track mortgage performance and defaults </li>{" "}
                <li>
                  Respond to claims and adjust risk exposure via dashboard
                </li>
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
                Onboard as a Verified Insurer
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Get attestation as verified Insurer </li>{" "}
                <li>
                  Define and list coverage types (e.g. default, title, portfolio
                  protection)
                </li>
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
                Review & Underwrite
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>
                  Assess verified property NFTs and buyer credit attestations{" "}
                </li>{" "}
                <li>
                  Offer risk-adjusted policies for lenders and loan packages
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
            <h1>3</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Issue On-Chain Insurance
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Secure mortgage deals and fund escrowed smart contracts</li>{" "}
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
                Monitor & Manage
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>Track mortgage performance and defaults </li>{" "}
                <li>
                  Respond to claims and adjust risk exposure via dashboard
                </li>
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsurerTab;
