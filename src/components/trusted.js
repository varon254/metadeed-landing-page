import React from "react";
import optimism from "../assets/media/optimism.webp";
import coinbase from "../assets/media/coinbase.webp";
import gitcoin from "../assets/media/gitcoin.webp";
import arbitrum from "../assets/media/arbitrum.webp";
import devfolio from "../assets/media/devfolio.webp";
import ceramic from "../assets/media/ceramic.webp";
import ethglobal from "../assets/media/ethglobal.webp";
import useIsMobile from "./context/useIsMobile";

function Trusted() {
  const isMobile = useIsMobile();

  const data = [
    {
      link: optimism,
      alt: "OPTIMISM",
    },
    {
      link: coinbase,
      alt: "Coinbase",
    },
    {
      link: gitcoin,
      alt: "Gitcoin",
    },
    {
      link: arbitrum,
      alt: "Arbitrum",
    },
    {
      link: devfolio,
      alt: "Devfolio",
    },
    {
      link: ceramic,
      alt: "Ceramic",
    },
    {
      link: ethglobal,
      alt: "ETHGlobal",
    },
  ];

  if (isMobile) {
    return (
      <div id="partners" className="relative scroll-offset mt-2 mb-20">
        {/* Trusted By Section */}
        <div className="w-full pt-5">
          <h3 className="text-[36px] font-bold text-center pt-8 pb-12">
            Trusted By
          </h3>
        </div>
        <div className="overflow-hidden w-full">
          <div className="flex gap-3 animate-scroll-loop w-max">
            {[...data, ...data].map(({ link, alt }, index) => (
              <div
                key={index}
                className="rounded-lg flex items-center justify-center shrink-0 border border-[#874FA8] h-[70px] w-[180px]"
              >
                <img className="h-10 max-w-40" src={link} alt={alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden w-full mt-3">
          <div className="flex gap-3 animate-scroll-right w-max">
            {[...data, ...data].map(({ link, alt }, index) => (
              <div
                key={index}
                className="rounded-lg flex items-center justify-center shrink-0 border border-[#874FA8] h-[70px] w-[180px]"
              >
                <img className="h-10 max-w-40" src={link} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="partners" className="relative scroll-offset">
      <div className="w-full lg:p-8 px-4 flex items-center justify-center">
        {/* Trusted By Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h3 className="text-[48px] font-bold text-center mb-8 pt-12">
            Trusted By
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center">
        {data.map(({ link, alt }) => (
          <div className="rounded-lg flex items-center justify-center border border-[#874FA8] h-[70px] w-[180px]">
            <img className="h-10 max-w-40" src={link} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trusted;
