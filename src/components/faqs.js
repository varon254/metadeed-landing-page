import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import useIsMobile from "./context/useIsMobile";

function Icon({ id, open }) {
  const isOpen = id === open;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-7 h-7 transition-transform duration-300 ${
        isOpen ? "rotate-45" : "rotate-0"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {/* Horizontal line of plus */}
      <path d="M5 12h14" strokeLinecap="round" />
      {/* Vertical line of plus */}
      <path d="M12 5v14" strokeLinecap="round" />
    </svg>
  );
}

function Faqs() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  if (isMobile) {
    return (
      <div id="faqs" className="relative scroll-smooth px-5 pt-16">
        <div className="w-full px-4 flex items-center justify-center">
          {/* FAQs By Section */}
          <div className="pt-5">
            <h3 className="text-[36px] font-bold text-center">
              Learn RWA with MetaDeed
            </h3>
            <h4 className="text-[14px] font-normal text-center leading-6 mb-4 text-[#888888]">
              At MetaDeed, we believe education is the first step to
              transformation. Whether you're a first-time investor, property
              developer, or Web3 native, understanding Real-World Asset (RWA)
              tokenization is key to leveraging its full potential.
            </h4>
          </div>
        </div>
        <div className="mt-10">
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 1 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 1
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>What is RWA Tokenization?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                It's the process of turning physical assets—like real
                estate—into digital tokens on the blockchain, making them easier
                to trade, own in fractions, and manage with smart contracts.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 2 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 2
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>
                How does MetaDeed ensure my identity and data are secure?
              </div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                We use the Ethereum Attestation Service (EAS) to verify your
                identity without storing your personal data on-chain. Only
                trusted entities like UAE Pass or Etihad Credit Bureau issue
                attestations. Your privacy stays protected—always.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 3 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 3
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>Is MetaDeed compliant with UAE regulations?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Yes. MetaDeedis designed to integrate with the official real
                estate platform of the Dubai Land Department (DLD). We're
                aligned with the UAE's legal framework for property tokenization
                and digital assets.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            icon={<Icon id={4} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 4 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 4
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>What role does EAS play in compliance?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                EAS provides verifiable attestations for KYC, credit
                scores, property ownership, and more. These attestations are
                cryptographic proofs—not documents—making them secure,
                tamper-proof, and court-admissible when needed.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            icon={<Icon id={5} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 5 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 5
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>Who can access my information?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Only the attestation issuers (like UAE Pass) hold your data.
                MetaDeed and other users on the platform only see that your
                identity or credit has been verified—never your personal
                details.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            icon={<Icon id={6} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 6 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 6
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>How do I list my property on MetaDeed?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Start by submitting your property documents through our secure
                platform. We verify your title deed and ownership status in
                alignment with Dubai Land Department (DLD) guidelines. Once
                verified, your property is tokenized as an NFT and becomes
                available for offers.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 7}
            icon={<Icon id={7} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 7 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 7
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>What does “tokenizing” my property mean?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Tokenization is the process of converting your real estate asset
                into a blockchain-based NFT that represents ownership. This NFT
                is legally recognized and can be securely transferred through
                smart contracts.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 8}
            icon={<Icon id={8} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 8 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 8
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>
                Do I still retain full legal ownership until the sale is
                finalized?
              </div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Yes. Tokenization does not transfer ownership—it simply prepares
                your asset for secure digital sale. Ownership only changes once
                the smart contract conditions (e.g., deposit + mortgage funding)
                are fully met.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 9}
            icon={<Icon id={9} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 9 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(9)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 9
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>How long does it take to tokenize a property?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                The process typically takes 7–14 business days, depending on the
                complexity of your documents and the speed of verification from
                local authorities.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 10}
            icon={<Icon id={10} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 10 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(10)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 10
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>
                Can international buyers purchase my tokenized property?
              </div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Yes. As long as the buyer passes UAE-compliant KYC and credit
                checks via Ethereum Attestation Service (EAS), they can
                invest—whether they’re local or global.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 11}
            icon={<Icon id={11} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 11 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(11)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 11
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>How do I receive payment after a successful sale?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Once the deal is finalized and ownership is transferred, you’ll
                receive funds directly to your wallet in Digital
                Dirham—instantly, and without intermediaries.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 12}
            icon={<Icon id={12} open={open} />}
            className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
              open === 12 ? "bg-[#151314]" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(12)}
              className={`border-b-0 transition-colors font-medium text-[18px] ${
                open === 12
                  ? "text-white hover:!text-gray-300 font-grotesk"
                  : "font-inter text-[#061C3D]"
              }`}
            >
              <div>Is the process safe and compliant?</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                Absolutely. MetaDeed integrates with Dubai REST, adheres to
                local regulations, and uses EAS for secure attestations. Your
                data is never stored on-chain, and only verified buyers can
                interact with your listing.
              </span>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    );
  }

  return (
    <div
      id="faqs"
      className="relative scroll-smooth max-w-[780px] mx-auto my-0"
    >
      <div className="w-full lg:p-8 px-4 flex items-center justify-center">
        {/* FAQs By Section */}
        <div className="lg:px-6 lg:pr-14 pt-5">
          <h3 className="text-[48px] font-bold text-center mt-6">
            Learn RWA with MetaDeed
          </h3>
          <h4 className="text-[16px] font-normal text-center leading-6 mb-7 text-[#888888]">
            At MetaDeed, we believe education is the first step to
            transformation. Whether you're a first-time investor, property
            developer, or Web3 native, understanding Real-World Asset (RWA)
            tokenization is key to leveraging its full potential.
          </h4>
        </div>
      </div>
      <div>
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 1 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 1
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>What is RWA Tokenization?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              It's the process of turning physical assets—like real estate—into
              digital tokens on the blockchain, making them easier to trade, own
              in fractions, and manage with smart contracts.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 2 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 2
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>How does MetaDeed ensure my identity and data are secure?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              We use the Ethereum Attestation Service (EAS) to verify your
              identity without storing your personal data on-chain. Only trusted
              entities like UAE Pass or Etihad Credit Bureau issue attestations.
              Your privacy stays protected—always.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 3 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 3
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>Is MetaDeed compliant with UAE regulations?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Yes. MetaDeedis designed to integrate with the official real
              estate platform of the Dubai Land Department (DLD). We're aligned
              with the UAE's legal framework for property tokenization and
              digital assets.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 4 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 4
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>What role does EAS play in compliance?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              EAS provides verifiable attestations for KYC, credit
              scores, property ownership, and more. These attestations are
              cryptographic proofs—not documents—making them secure,
              tamper-proof, and court-admissible when needed.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          icon={<Icon id={5} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 5 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 5
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>Who can access my information?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Only the attestation issuers (like UAE Pass) hold your data.
              MetaDeed and other users on the platform only see that your
              identity or credit has been verified—never your personal details.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 6}
          icon={<Icon id={6} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 6 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 6
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>How do I list my property on MetaDeed?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Start by submitting your property documents through our secure
              platform. We verify your title deed and ownership status in
              alignment with Dubai Land Department (DLD) guidelines. Once
              verified, your property is tokenized as an NFT and becomes
              available for offers.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 7}
          icon={<Icon id={7} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 7 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(7)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 7
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>What does “tokenizing” my property mean?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Tokenization is the process of converting your real estate asset
              into a blockchain-based NFT that represents ownership. This NFT is
              legally recognized and can be securely transferred through smart
              contracts.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 8}
          icon={<Icon id={8} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 8 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(8)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 8
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>
              Do I still retain full legal ownership until the sale is
              finalized?
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Yes. Tokenization does not transfer ownership—it simply prepares
              your asset for secure digital sale. Ownership only changes once
              the smart contract conditions (e.g., deposit + mortgage funding)
              are fully met.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 9}
          icon={<Icon id={9} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 9 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(9)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 9
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>How long does it take to tokenize a property?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              The process typically takes 7–14 business days, depending on the
              complexity of your documents and the speed of verification from
              local authorities.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 10}
          icon={<Icon id={10} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 10 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(10)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 10
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>Can international buyers purchase my tokenized property?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Yes. As long as the buyer passes UAE-compliant KYC and credit
              checks via Ethereum Attestation Service (EAS), they can
              invest—whether they’re local or global.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 11}
          icon={<Icon id={11} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 11 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(11)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 11
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>How do I receive payment after a successful sale?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Once the deal is finalized and ownership is transferred, you’ll
              receive funds directly to your wallet in Digital Dirham—instantly,
              and without intermediaries.
            </span>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 12}
          icon={<Icon id={12} open={open} />}
          className={`mb-4 rounded-xl border py-3 px-6 border-[#874FA8] ${
            open === 12 ? "bg-[#151314]" : ""
          }`}
        >
          <AccordionHeader
            onClick={() => handleOpen(12)}
            className={`border-b-0 transition-colors font-medium text-[18px] ${
              open === 12
                ? "text-white hover:!text-gray-300 font-grotesk"
                : "font-inter text-[#061C3D]"
            }`}
          >
            <div>Is the process safe and compliant?</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              Absolutely. MetaDeed integrates with Dubai REST, adheres to local
              regulations, and uses EAS for secure attestations. Your data is
              never stored on-chain, and only verified buyers can interact with
              your listing.
            </span>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
