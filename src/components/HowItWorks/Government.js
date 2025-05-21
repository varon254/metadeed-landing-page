import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "../context/useIsMobile";
import useIsTablet from "../context/useIsTablet";

function GovernementTab() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) {
    return (
      <div>
        <div
          className="w-full rounded-xl flex items-center p-5 text-left h-full my-2"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[40px] text-[#874FA8] w-[60px]">
            1
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Support Attestation Infrastructure
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>
                Enable verified identity, credit, ownership, <br />
                and insurance attestations via UAE Pass, <br />
                Etihad Credit Bureau, and DLD systems
                <br />
                —ensuring legal trust and system integrity.{" "}
              </li>{" "}
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center p-5 text-left h-full my-2"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[40px] text-[#874FA8] w-[60px]">
            2
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Drive Digital Dirham Adoption
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>
                Position the Digital AED as the official settlement currency
                <br />
                for on-chain real estate transactions—programmable, <br />
                compliant, and fast.{" "}
              </li>{" "}
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center p-5 text-left h-full my-2"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[40px] text-[#874FA8] w-[60px]">
            3
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Ensure Regulatory Oversight
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>
                Use MetaDeed’s dashboards to monitor
                <br /> transactions, ownership changes, <br />
                mortgages, and attestations— without <br />
                storing private data on-chain.
              </li>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center p-5 text-left h-full my-2"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[40px] text-[#874FA8] w-[60px]">
            4
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Legal Assurance & Dispute Resolution
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>
                Integrate verified attestations into
                <br /> existing legal frameworks to streamline <br />
                dispute resolution and maintain jurisdictional <br />
                clarity in on-chain transactions.{" "}
              </li>{" "}
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div>
        <div className="flex items-center gap-3 mx-auto justify-center py-4">
          <div
            className="w-full rounded-xl p-10 flex items-center px-10 py-5 text-left h-[180px]"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              1
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Support Attestation Infrastructure
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>
                  Enable verified identity, credit, ownership, <br />
                  and insurance attestations via UAE Pass, <br />
                  Etihad Credit Bureau, and DLD systems
                  <br />
                  —ensuring legal trust and system integrity.{" "}
                </li>{" "}
              </Typography>
            </div>
          </div>
          <div
            className="w-full rounded-xl p-10 flex items-center px-10 py-5 text-left h-[180px]"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              2
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Drive Digital Dirham Adoption
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>
                  Position the Digital AED as the official settlement currency
                  <br />
                  for on-chain real estate transactions—programmable, <br />
                  compliant, and fast.{" "}
                </li>{" "}
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-center pb-12">
          <div
            className="w-full rounded-xl p-10 flex items-center px-10 py-5 text-left h-[180px]"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              3
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Ensure Regulatory Oversight
              </Typography>
              <Typography className="font-inter text-[12px] text-[#151314]">
                <li>
                  Use MetaDeed’s dashboards to monitor
                  <br /> transactions, ownership changes, <br />
                  mortgages, and attestations— without <br />
                  storing private data on-chain.
                </li>
              </Typography>
            </div>
          </div>
          <div
            className="w-full rounded-xl p-10 flex items-center px-10 py-5 text-left h-[180px]"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              4
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Legal Assurance & Dispute Resolution
              </Typography>
              <Typography className="font-inter text-[12px] text-[#151314]">
                <li>
                  Integrate verified attestations into
                  <br /> existing legal frameworks to streamline <br />
                  dispute resolution and maintain jurisdictional <br />
                  clarity in on-chain transactions.{" "}
                </li>{" "}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mx-auto justify-center py-4 px-16">
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            1
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Support Attestation Infrastructure
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>
                Enable verified identity, credit, ownership, and
                <br /> insurance attestations via UAE Pass, Etihad Credit
                Bureau, <br />
                and DLD systems—ensuring legal trust and system integrity.{" "}
              </li>{" "}
            </Typography>
          </div>
        </div>
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            2
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Drive Digital Dirham Adoption
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>
                Position the Digital AED as the official settlement currency
                <br />
                for on-chain real estate transactions—programmable, <br />
                compliant, and fast.{" "}
              </li>{" "}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mx-auto justify-center pb-12 px-16">
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            3
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Ensure Regulatory Oversight
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>
                Use MetaDeed’s dashboards to monitor transactions, <br />
                ownership changes, mortgages, and attestations—
                <br />
                without storing private data on-chain.
              </li>
            </Typography>
          </div>
        </div>
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            4
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Legal Assurance & Dispute Resolution
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>
                Integrate verified attestations into existing legal <br />
                frameworks to streamline dispute resolution and maintain
                <br />
                jurisdictional clarity in on-chain transactions.{" "}
              </li>{" "}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernementTab;
