import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import useIsMobile from "./context/useIsMobile";
import useIsTablet from "./context/useIsTablet";

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
  const isTablet = useIsTablet();
  const [open, setOpen] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const topRef = useRef(null);
  const [wasToggled, setWasToggled] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const data = [
    {
      id: 1,
      question: "What is RWA Tokenization?",
      answer:
        "It's the process of turning physical assets—like real estate—into digital tokens on the blockchain, making them easier to trade, own in fractions, and manage with smart contracts.",
    },
    {
      id: 2,
      question: "How does MetaDeed ensure my identity and data are secure?",
      answer:
        "We use the Ethereum Attestation Service (EAS) to verify your identity without storing your personal data on-chain. Only trusted entities like UAE Pass or Etihad Credit Bureau issue attestations. Your privacy stays protected—always.",
    },
    {
      id: 3,
      question: "Is MetaDeed compliant with UAE regulations?",
      answer:
        "Yes. MetaDeedis designed to integrate with the official real estate platform of the Dubai Land Department (DLD). We're aligned with the UAE's legal framework for property tokenization and digital assets.",
    },
    {
      id: 4,
      question: "What role does EAS play in compliance?",
      answer:
        "EAS provides verifiable attestations for KYC, credit scores, property ownership, and more. These attestations are cryptographic proofs—not documents—making them secure, tamper-proof, and court-admissible when needed.",
    },
    {
      id: 5,
      question: "Who can access my information?",
      answer:
        "Only the attestation issuers (like UAE Pass) hold your data. MetaDeed and other users on the platform only see that your identity or credit has been verified—never your personal details.",
    },
    {
      id: 6,
      question: "How do I list my property on MetaDeed?",
      answer:
        "Start by submitting your property documents through our secure platform. We verify your title deed and ownership status in alignment with Dubai Land Department (DLD) guidelines. Once verified, your property is tokenized as an NFT and becomes available for offers.",
    },
    {
      id: 7,
      question: "What does “tokenizing” my property mean?",
      answer:
        "Tokenization is the process of converting your real estate asset into a blockchain-based NFT that represents ownership. This NFT is legally recognized and can be securely transferred through smart contracts.",
    },
    {
      id: 8,
      question:
        "Do I still retain full legal ownership until the sale is finalized?",
      answer:
        "Yes. Tokenization does not transfer ownership—it simply prepares your asset for secure digital sale. Ownership only changes once the smart contract conditions (e.g., deposit + mortgage funding) are fully met.",
    },
    {
      id: 9,
      question: "How long does it take to tokenize a property?",
      answer:
        "The process typically takes 7–14 business days, depending on the complexity of your documents and the speed of verification from local authorities.",
    },
    {
      id: 10,
      question: "Can international buyers purchase my tokenized property?",
      answer:
        "Yes. As long as the buyer passes UAE-compliant KYC and credit checks via Ethereum Attestation Service (EAS), they can invest—whether they’re local or global.",
    },
    {
      id: 11,
      question: "How do I receive payment after a successful sale?",
      answer:
        "Once the deal is finalized and ownership is transferred, you’ll receive funds directly to your wallet in Digital Dirham—instantly, and without intermediaries.",
    },
    {
      id: 12,
      question: "Is the process safe and compliant?",
      answer:
        "Absolutely. MetaDeed integrates with Dubai REST, adheres to local regulations, and uses EAS for secure attestations. Your data is never stored on-chain, and only verified buyers can interact with your listing.",
    },
  ];

  const visibleData = showAll ? data : data.slice(0, 4);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
    setWasToggled(true); // indicate this was user-triggered
  };

  useEffect(() => {
    if (wasToggled && !showAll && topRef.current) {
      const top =
        topRef.current.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top, behavior: "smooth" });
      setWasToggled(false); // reset to avoid future auto-scroll
    }
  }, [showAll, wasToggled]);

  if (isMobile) {
    return (
      <div id="faqs" className="relative px-5 pt-16">
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
        <div ref={topRef} className="space-y-4 mt-10">
          {visibleData.map(({ id, question, answer }) => (
            <Accordion
              key={id}
              open={open === id}
              icon={<Icon id={id} open={open} />}
              className={`rounded-xl border py-3 px-6 border-[#874FA8] transition-all duration-300 ease-in-out ${
                open === id ? "bg-[#151314]" : ""
              }`}
            >
              <AccordionHeader
                onClick={() => handleOpen(id)}
                className={`border-b-0 transition-colors font-medium text-[18px] ${
                  open === id
                    ? "text-white hover:!text-gray-300 font-grotesk"
                    : "font-inter text-[#061C3D]"
                }`}
              >
                {question}
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base font-normal text-white border-t transition-all duration-300 ease-in-out">
                <span className="pt-2">{answer}</span>
              </AccordionBody>
            </Accordion>
          ))}

          {data.length > 4 && (
            <div className="text-center">
              <Button
                size="lg"
                variant="outlined"
                className="normal-case font-medium font-grotesk py-3 lg:w-[270px] w-full rounded-md border-2 h-[60px] text-[18px] my-4 transition-colors duration-200"
                onClick={handleToggle}
              >
                <h3>{showAll ? "See less" : "See all"}</h3>
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div id="faqs" className="relative px-5">
        <div className="max-w-[780px] mx-auto my-0">
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
          <div ref={topRef} className="space-y-4">
            {visibleData.map(({ id, question, answer }) => (
              <Accordion
                key={id}
                open={open === id}
                icon={<Icon id={id} open={open} />}
                className={`rounded-xl border py-3 px-6 border-[#874FA8] transition-all duration-300 ease-in-out ${
                  open === id ? "bg-[#151314]" : ""
                }`}
              >
                <AccordionHeader
                  onClick={() => handleOpen(id)}
                  className={`border-b-0 transition-colors font-medium text-[18px] ${
                    open === id
                      ? "text-white hover:!text-gray-300 font-grotesk"
                      : "font-inter text-[#061C3D]"
                  }`}
                >
                  {question}
                </AccordionHeader>
                <AccordionBody className="pt-4 text-base font-normal text-white border-t transition-all duration-300 ease-in-out">
                  <span className="pt-2">{answer}</span>
                </AccordionBody>
              </Accordion>
            ))}

            {data.length > 4 && (
              <div className="text-center">
                <Button
                  size="lg"
                  variant="outlined"
                  className="normal-case font-medium font-grotesk py-3 lg:w-[270px] md:w-[270px] w-full rounded-md border-2 h-[60px] text-[18px] my-4 transition-colors duration-200"
                  onClick={handleToggle}
                >
                  <h3>{showAll ? "See less" : "See all"}</h3>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="faqs" className="max-w-[85rem] my-0 mx-auto relative">
      <div className="max-w-[780px] mx-auto my-0">
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
        <div ref={topRef} className="space-y-4">
          {visibleData.map(({ id, question, answer }) => (
            <Accordion
              key={id}
              open={open === id}
              icon={<Icon id={id} open={open} />}
              className={`rounded-xl border py-3 px-6 border-[#874FA8] transition-all duration-300 ease-in-out ${
                open === id ? "bg-[#151314]" : ""
              }`}
            >
              <AccordionHeader
                onClick={() => handleOpen(id)}
                className={`border-b-0 transition-colors font-medium text-[18px] ${
                  open === id
                    ? "text-white hover:!text-gray-300 font-grotesk"
                    : "font-inter text-[#061C3D]"
                }`}
              >
                {question}
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base font-normal text-white border-t transition-all duration-300 ease-in-out">
                <span className="pt-2">{answer}</span>
              </AccordionBody>
            </Accordion>
          ))}

          {data.length > 4 && (
            <div className="text-center">
              <Button
                size="lg"
                variant="outlined"
                className="normal-case font-medium font-grotesk py-3 lg:w-[270px] w-full rounded-md border-2 h-[60px] text-[18px] my-4 transition-colors duration-200"
                onClick={handleToggle}
              >
                <h3>{showAll ? "See less" : "See all"}</h3>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
