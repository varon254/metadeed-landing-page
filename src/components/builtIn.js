import { Typography } from "@material-tailwind/react";
import React from "react";
import dld from "../assets/media/dld-metadeed.webp";
import digital from "../assets/media/digital-dirham.webp";
import uae from "../assets/media/uae-real-estate.webp";
import intergration from "../assets/media/integration-ndi.webp";
import useIsMobile from "./context/useIsMobile";
import useIsTablet from "./context/useIsTablet";

function BuiltIn() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) {
    return (
      <div id="build-in-uae">
        {/* We build in UAE Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1 className="text-[48px] font-bold mt-16 text-center mb-5">
            We build in UAE
          </h1>
        </div>

        <div className="px-4">
          <div
            className="flex flex-col items-center p-8 h-full w-full rounded-2xl border border-[#874FA8] mb-4"
            style={{
              background:
                "linear-gradient(to top, rgba(123, 15, 153, 0.1), rgba(100, 15, 153, 0.05))",
            }}
          >
            <div className="flex flex-col justify-start gap-2">
              <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                Regulatory Alignment with Dubai Land Department (DLD)
              </Typography>
              <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                Billions can't open bank accounts or freely use their money.
                Ethereum's financial system is always open and unbiased.
              </Typography>
            </div>
            <img src={dld} alt="DLD MetaDeed" className="h-[171px]" />
            <div>
              <Typography className="text-[16px] text-[#151314] leading-normal font-bold text-center font-inter">
                🛡️ Regulatory clarity = faster adoption & legal
                <br />
                enforceability.
              </Typography>
            </div>
          </div>
          <div
            className="p-8 flex flex-col items-center h-full w-full rounded-2xl border border-[#874FA8] mb-4"
            style={{
              background:
                "linear-gradient(to top, rgba(15, 98, 153, 0.1), rgba(153, 15, 114, 0.05))",
            }}
          >
            <div className="flex flex-col justify-start gap-2">
              <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                Ready for Digital Dirham
              </Typography>
              <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                With the UAE’s Digital Dirham expected to launch soon check what
                else to add
              </Typography>
            </div>
            <img src={digital} alt="Digital Dirham" className="h-[200px]" />
            <div>
              <Typography className="text-[16px] text-[#151314] leading-normal font-bold text-center font-inter">
                💸 Transact in digital AED
              </Typography>
            </div>
          </div>
          <div
            className="flex flex-col items-center p-8 h-full w-full rounded-2xl border border-[#874FA8] mb-4"
            style={{
              background:
                "linear-gradient(to top, rgba(50, 15, 153, 0.1), rgba(191, 21, 49, 0.05))",
            }}
          >
            <div className="flex flex-col justify-start gap-2">
              <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                Gateway for Global Capital into UAE Real Estate
              </Typography>
              <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                MetaDeed opens Dubai’s $16B+ property market to international
                investors throug fully compliant, digital-first rails.
              </Typography>
            </div>
            <img src={uae} alt="UAE Real Estate" className="h-[200px]" />
            <div>
              <Typography className="text-[16px] text-[#151314] leading-normal font-inter font-bold text-center">
                💸 Transact in digital AED
              </Typography>
            </div>
          </div>
          <div
            className="flex flex-col items-center p-8 h-full w-full rounded-2xl border border-[#874FA8] mb-20"
            style={{
              background:
                "linear-gradient(to top, rgba(153, 109, 15, 0.1), rgba(217, 42, 185, 0.05))",
            }}
          >
            <div className="flex flex-col justify-start gap-2">
              <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                Integration with UAE National Digital Identity
              </Typography>
              <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                MetaDeed leverages UAE Pass and Etihad Credit Bureau via the
                Ethereum Attestation Service (EAS) to ensure seamless, compliant
                onboarding of users.
              </Typography>
            </div>
            <img
              src={intergration}
              alt="Intergration NDI"
              className="h-[200px]"
            />
            <div>
              <Typography className="text-[16px] text-[#151314] leading-normal font-inter font-bold text-center">
                🔐 Instant KYC, secure credit checks, no data stored on-chain.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div id="build-in-uae">
        {/* We build in UAE Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1 className="text-[72px] font-bold mt-16 text-center mb-5">
            We build in UAE
          </h1>
        </div>

        <div className="px-4">
          <div className="grid grid-cols-2 gap-4 pb-4">
            <div
              className="flex flex-col items-center justify-between p-8 h-full w-full rounded-2xl border border-[#874FA8] mb-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(123, 15, 153, 0.1), rgba(100, 15, 153, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                  Regulatory Alignment with Dubai Land Department (DLD)
                </Typography>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                  Billions can't open bank accounts or freely use their money.
                  Ethereum's financial system is always open and unbiased.
                </Typography>
              </div>
              <img src={dld} alt="DLD MetaDeed" className="h-[171px]" />
              <div>
                <Typography className="text-[16px] text-[#151314] leading-normal font-bold text-center font-inter">
                  🛡️ Regulatory clarity = faster adoption & legal
                  enforceability.
                </Typography>
              </div>
            </div>
            <div
              className="p-8 flex flex-col items-center justify-between h-full w-full rounded-2xl border border-[#874FA8] mb-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(15, 98, 153, 0.1), rgba(153, 15, 114, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                  Ready for Digital Dirham
                </Typography>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                  With the UAE’s Digital Dirham expected to launch soon check
                  what else to add
                </Typography>
              </div>
              <img src={digital} alt="Digital Dirham" className="h-[200px]" />
              <div>
                <Typography className="text-[16px] text-[#151314] leading-normal font-bold text-center font-inter">
                  💸 Transact in digital AED
                </Typography>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-4">
            <div
              className="flex flex-col justify-between items-center p-8 h-full w-full rounded-2xl border border-[#874FA8] mb-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(50, 15, 153, 0.1), rgba(191, 21, 49, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                  Gateway for Global Capital into UAE Real Estate
                </Typography>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                  MetaDeed opens Dubai’s $16B+ property market to international
                  investors throug fully compliant, digital-first rails.
                </Typography>
              </div>
              <img src={uae} alt="UAE Real Estate" className="h-[200px]" />
              <div>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter font-bold text-center">
                  💸 Transact in digital AED
                </Typography>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-between p-8 h-full w-full rounded-2xl border border-[#874FA8] mb-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(153, 109, 15, 0.1), rgba(217, 42, 185, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium text-[22px] text-[#151314] leading-tight font-grotesk">
                  Integration with UAE National Digital Identity
                </Typography>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                  MetaDeed leverages UAE Pass and Etihad Credit Bureau via the
                  Ethereum Attestation Service (EAS) to ensure seamless,
                  compliant onboarding of users.
                </Typography>
              </div>
              <img
                src={intergration}
                alt="Intergration NDI"
                className="h-[200px]"
              />
              <div>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter font-bold text-center">
                  🔐 Instant KYC, secure credit checks, no data stored on-chain.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="build-in-uae" className="max-w-[85rem] my-0 mx-auto">
      <div className="w-full lg:p-8 px-4 flex items-center justify-center">
        {/* We build in UAE Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1 className="text-[96px] font-bold mt-16 text-center">
            We build in UAE
          </h1>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-start mx-auto justify-center py-4 px-4 gap-5">
            <div
              className="flex flex-col items-center p-7 h-[573px] w-[42%] rounded-2xl border border-[#874FA8]"
              style={{
                background:
                  "linear-gradient(to top, rgba(123, 15, 153, 0.1), rgba(100, 15, 153, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium text-[28px] text-[#151314] leading-tight font-grotesk">
                  Regulatory Alignment with <br />
                  Dubai Land Department (DLD)
                </Typography>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                  Billions can't open bank accounts or freely use their money.
                  Ethereum's financial system is always open and unbiased.
                </Typography>
              </div>
              <img src={dld} alt="DLD MetaDeed" className="h-[347px]" />
              <div>
                <Typography className="text-[16px] text-[#151314] leading-normal font-bold text-center font-inter">
                  🛡️ Regulatory clarity = faster adoption & legal
                  <br />
                  enforceability.
                </Typography>
              </div>
            </div>
            <div
              className="p-7 flex flex-col items-center h-[573px] w-[24.5%] rounded-2xl border border-[#874FA8]"
              style={{
                background:
                  "linear-gradient(to top, rgba(15, 98, 153, 0.1), rgba(153, 15, 114, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium text-[28px] text-[#151314] leading-tight font-grotesk">
                  Ready for <br />
                  Digital Dirham
                </Typography>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                  With the UAE’s Digital Dirham expected to launch soon check
                  what else to add
                </Typography>
              </div>
              <img src={digital} alt="Digital Dirham" className="h-[347px]" />
              <div>
                <Typography className="text-[16px] text-[#151314] leading-normal font-bold text-center font-inter">
                  💸 Transact in digital AED
                </Typography>
              </div>
            </div>
            <div
              className="flex flex-col items-center p-7 h-[833px] w-[33.33%] rounded-2xl border border-[#874FA8]"
              style={{
                background:
                  "linear-gradient(to top, rgba(50, 15, 153, 0.1), rgba(191, 21, 49, 0.05))",
              }}
            >
              <div className="flex flex-col justify-start gap-2">
                <Typography className="font-medium text-[28px] text-[#151314] leading-tight font-grotesk">
                  Gateway for Global <br />
                  Capital into UAE Real Estate
                </Typography>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
                  MetaDeed opens Dubai’s $16B+ property market to international
                  investors throug fully compliant, digital-first rails.
                </Typography>
              </div>
              <img
                src={uae}
                alt="UAE Real Estate"
                className="h-[518px] mt-12"
              />
              <div>
                <Typography className="text-[16px] text-[#151314] leading-normal font-inter font-bold text-center">
                  💸 Transact in digital AED
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid -mt-[256px] pr-[3.7rem] pl-4">
        <div
          className="p-7 flex items-center text-left h-[240px] w-[68.42%] rounded-2xl border border-[#874FA8]"
          style={{
            background:
              "linear-gradient(to top, rgba(153, 109, 15, 0.1), rgba(217, 42, 185, 0.05))",
          }}
        >
          <div className="font-bold text-[48px] w-[163px]">
            <img
              src={intergration}
              alt="Intergration NDI"
              className="h-[206px]"
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <Typography className="font-medium font-grotesk text-[28px] text-[#151314] leading-tight">
              Integration with UAE National Digital <br />
              Identity
            </Typography>
            <Typography className="text-[16px] text-[#151314] leading-normal font-inter">
              MetaDeed leverages UAE Pass and Etihad Credit Bureau via the
              <br />
              Ethereum Attestation Service (EAS) to ensure seamless, compliant
              <br /> onboarding of users.
            </Typography>
            <Typography className="text-[16px] text-[#151314] font-inter font-bold">
              🔐 Instant KYC, secure credit checks, no data stored on-chain.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuiltIn;
