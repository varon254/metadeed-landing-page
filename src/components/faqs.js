import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Faqs() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div
      style={{ maxWidth: "780px", margin: "0 auto" }}
      id="faqs"
      className="relative scroll-offset"
    >
      <div className="w-full lg:p-8 px-4 flex items-center justify-center min-h-[80vh]">
        {/* FAQs By Section */}
        <div className="lg:px-6 lg:pr-14 pt-5">
          <h3
            className="text-[48px] font-bold"
            style={{
              fontSize: "48px",
              textAlign: "center",
              marginBottom: "2rem",
              paddingTop: "5rem",
            }}
          >
            Learn RWA with MetaDeed
          </h3>
          <h4
            className="text-[16px] font-normal"
            style={{
              fontSize: "16px",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#888888",
              lineHeight: "1.5rem",
            }}
          >
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
          className={`mb-2 rounded-xl border ${open === 1 ? "bg-black" : ""}`}
          style={{
            marginBottom: "1rem",
            border: "1px solid #874FA8",
            padding: "0.7rem 1.5rem",
          }}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors font-medium ${
              open === 1 ? "text-white hover:!text-gray-300" : ""
            }`}
          >
            <div style={{ fontFamily: open === 1 ? "Space Grotesk" : "Inter" }}>
              Morbi fringilla metus ac lacus dapibus.
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white border-t-2">
            <span>
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
          className={`mb-2 rounded-xl border ${open === 2 ? "bg-black" : ""}`}
          style={{
            marginBottom: "1rem",
            border: "1px solid #874FA8",
            padding: "0.7rem 1.5rem",
          }}
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors font-medium ${
              open === 2 ? "text-white hover:!text-gray-300" : ""
            }`}
          >
            <div style={{ fontFamily: open === 2 ? "Space Grotesk" : "Inter" }}>
              How does MetaDeed ensure my identity and data are secure?
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white border-t-2">
            <span>
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
          className={`mb-2 rounded-xl border ${open === 3 ? "bg-black" : ""}`}
          style={{
            marginBottom: "1rem",
            border: "1px solid #874FA8",
            padding: "0.7rem 1.5rem",
          }}
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors font-medium ${
              open === 3 ? "text-white hover:!text-gray-300" : ""
            }`}
          >
            <div style={{ fontFamily: open === 3 ? "Space Grotesk" : "Inter" }}>
              Aliquam fermentum odio nec gravida varius.
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white border-t-2">
            <span>
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
          className={`mb-2 rounded-xl border ${open === 4 ? "bg-black" : ""}`}
          style={{
            marginBottom: "1rem",
            border: "1px solid #874FA8",
            padding: "0.7rem 1.5rem",
          }}
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors font-medium ${
              open === 4 ? "text-white" : ""
            }`}
          >
            <div style={{ fontFamily: open === 4 ? "Space Grotesk" : "Inter" }}>
              Quisque quis ex eleifend dolor maximus lacinia.
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white border-t-2">
            <span>
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
