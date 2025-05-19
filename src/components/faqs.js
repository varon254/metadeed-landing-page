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
      <div id="faqs" className="relative scroll-smooth px-5">
        <div className="w-full lg:p-8 px-4 flex items-center justify-center">
          {/* FAQs By Section */}
          <div className="lg:px-6 lg:pr-14 pt-5">
            <h3 className="text-[36px] font-bold text-center mt-2">
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
              <div>Morbi fringilla metus ac lacus dapibus.</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
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
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
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
              <div>Aliquam fermentum odio nec gravida varius.</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
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
              <div>Quisque quis ex eleifend dolor maximus lacinia.</div>
            </AccordionHeader>
            <AccordionBody className="pt-4 text-base font-normal text-white border-t">
              <span className="pt-2">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
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
            <div>Morbi fringilla metus ac lacus dapibus.</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
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
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
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
            <div>Aliquam fermentum odio nec gravida varius.</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
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
            <div>Quisque quis ex eleifend dolor maximus lacinia.</div>
          </AccordionHeader>
          <AccordionBody className="pt-4 text-base font-normal text-white border-t">
            <span className="pt-2">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </span>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
