import { Typography } from "@material-tailwind/react";
import React from "react";
import dld from "../assets/media/dld-metadeed.webp";
import digital from "../assets/media/digital-dirham.webp";
import uae from "../assets/media/uae-real-estate.webp";
import intergration from "../assets/media/integration-ndi.webp";

function BuiltIn() {
  return (
    <div>
      <div className="w-full lg:p-8 px-4 flex items-center justify-center min-h-[80vh]">
        {/* We build in UAE Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1
            className="text-[96px] font-bold"
            style={{
              fontSize: "96px",
              textAlign: "center",
              marginBottom: "-1rem",
              marginTop: "5rem",
            }}
          >
            We build in UAE
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div
            className="flex items-start mx-auto justify-center"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              gap: "20px",
            }}
          >
            <div
              className="p-10 flex flex-col items-center"
              style={{
                padding: "28px",
                height: "573px",
                width: "42%",
                borderRadius: "16px",
                border: "1px solid #874FA8",
                background:
                  "linear-gradient(to top, rgba(123, 15, 153, 0.1), rgba(100, 15, 153, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium">
                  <h3
                    style={{
                      fontSize: "28px",
                      color: "#000",
                      lineHeight: "1.2",
                    }}
                  >
                    Regulatory Alignment with <br />
                    Dubai Land Department (DLD)
                  </h3>
                </Typography>
                <Typography>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5",
                    }}
                  >
                    <p>
                      Billions can't open bank accounts or freely use their
                      money. Ethereum's financial system is always open and
                      unbiased.
                    </p>
                  </span>
                </Typography>
              </div>
              <img src={dld} alt="DLD MetaDeed" style={{ height: "347px" }} />
              <div>
                <Typography>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    <p>
                      🛡️ Regulatory clarity = faster adoption & legal
                      <br />
                      enforceability.
                    </p>
                  </span>
                </Typography>
              </div>
            </div>
            <div
              className="p-10 flex flex-col items-center"
              style={{
                padding: "28px",
                height: "573px",
                width: "24.5%",
                borderRadius: "16px",
                border: "1px solid #874FA8",
                background:
                  "linear-gradient(to top, rgba(15, 98, 153, 0.1), rgba(153, 15, 114, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium">
                  <h3
                    style={{
                      fontSize: "28px",
                      color: "#000",
                      lineHeight: "1.2",
                    }}
                  >
                    Ready for <br />
                    Digital Dirham
                  </h3>
                </Typography>
                <Typography>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5",
                    }}
                  >
                    <p>
                      With the UAE’s Digital Dirham expected to launch soon
                      check what else to add
                    </p>
                  </span>
                </Typography>
              </div>
              <img
                src={digital}
                alt="Digital Dirham"
                style={{ height: "347px" }}
              />
              <div>
                <Typography>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    <p>💸 Transact in digital AED</p>
                  </span>
                </Typography>
              </div>
            </div>
            <div
              className="p-10 flex flex-col items-center"
              style={{
                padding: "28px",
                height: "833px",
                width: "33.33%",
                borderRadius: "16px",
                border: "1px solid #874FA8",
                background:
                  "linear-gradient(to top, rgba(50, 15, 153, 0.1), rgba(191, 21, 49, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium">
                  <h3
                    style={{
                      fontSize: "28px",
                      color: "#000",
                      lineHeight: "1.2",
                    }}
                  >
                    Gateway for Global <br />
                    Capital into UAE Real Estate
                  </h3>
                </Typography>
                <Typography>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5",
                    }}
                  >
                    <p>
                      MetaDeed opens Dubai’s $16B+ property market
                      to international investors throug fully compliant,
                      digital-first rails.
                    </p>
                  </span>
                </Typography>
              </div>
              <img
                src={uae}
                alt="UAE Real Estate"
                style={{ height: "518px", marginTop: "3rem" }}
              />
              <div>
                <Typography>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    <p>💸 Transact in digital AED</p>
                  </span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid"
        style={{
          marginTop: "-256px",
          paddingRight: "3.7rem",
          paddingLeft: "1rem",
        }}
      >
        <div
          className="p-10 flex items-center"
          style={{
            padding: "28px",
            textAlign: "left",
            height: "240px",
            width: "68.42%",
            borderRadius: "16px",
            border: "1px solid #874FA8",
            background:
              "linear-gradient(to top, rgba(153, 109, 15, 0.1), rgba(217, 42, 185, 0.05))",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "48px", color: "#874FA8", width: "163px" }}
          >
            <img
              src={intergration}
              alt="Intergration NDI"
              style={{ height: "206px" }}
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <Typography className="font-medium">
              <h3
                style={{ fontSize: "28px", color: "#000", lineHeight: "1.2" }}
              >
                Integration with UAE National Digital <br />
                Identity
              </h3>
            </Typography>
            <Typography>
              <span
                style={{ fontSize: "16px", color: "#000", lineHeight: "1.5" }}
              >
                <p>
                  MetaDeed leverages UAE Pass and Etihad Credit Bureau via the
                  <br />
                  Ethereum Attestation Service (EAS) to ensure seamless,
                  compliant
                  <br /> onboarding of users.
                </p>
              </span>
            </Typography>
            <Typography>
              <span
                style={{
                  fontSize: "16px",
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                <p>
                  🔐 Instant KYC, secure credit checks, no data stored on-chain.
                </p>
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuiltIn;
