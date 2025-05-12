import { Typography } from "@material-tailwind/react";
import React from "react";

function Connects() {
  return (
    <div>
      <div className="w-full lg:p-8 px-4 flex items-center justify-center min-h-[80vh]">
        {/* MetaDeed Connects Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1
            className="text-[96px] font-bold"
            style={{
              fontSize: "96px",
              textAlign: "center",
              marginBottom: "-1rem",
            }}
          >
            MetaDeed Connects
          </h1>
          <h3
            className="text-[22px] font-medium"
            style={{
              fontSize: "22px",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#888888",
            }}
          >
            Unlocking real estate assets, capital flows, and stakeholder trust
            through
            <br /> compliant, on-chain infrastructure.
          </h3>
        </div>
      </div>
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
            className="w-full p-10 flex flex-col items-center"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "83px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>Buyers</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <p>
                  Own property with full transparency and on-chain identity.
                </p>
              </span>
            </Typography>
          </div>
          <div
            className="w-full p-10 flex flex-col items-center"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "83px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>Sellers</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <p>
                  Get liquidity and global visibility through Digital Dirham.
                </p>
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="flex items-center gap-3 mx-auto justify-center"
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "1rem",
            paddingLeft: "4rem",
            paddingRight: "4rem",
          }}
        >
          <div
            className="w-full p-10 flex flex-col items-center"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "83px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>Lenders</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <p>Invest in real estate-backed yields with real compliance.</p>
              </span>
            </Typography>
          </div>
          <div
            className="w-full p-10 flex flex-col items-center"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "83px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>Insurers</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <p>Mitigate lender risk with on-chain mortgage insurance.</p>
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <div
          className="flex items-center gap-3 mx-auto justify-center"
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "1rem",
            paddingLeft: "4rem",
            paddingRight: "4rem",
          }}
        >
          <div
            className="w-3/5 p-10 flex flex-col items-center"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "83px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>Governments</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <p>
                  Real-time regulation, global reach, and seamless settlement in
                  Digital Dirham.
                </p>
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connects;
