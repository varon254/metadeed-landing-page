import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import BuyerTab from "./HowItWorks/Buyer";
import SellerTab from "./HowItWorks/Seller";
import LenderTab from "./HowItWorks/Lender";
import InsurerTab from "./HowItWorks/Insurer";
import GovernementTab from "./HowItWorks/Government";
import useIsMobile from "./context/useIsMobile";
import {
  BuildingLibraryIcon,
  HandRaisedIcon,
  KeyIcon,
  BanknotesIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { RequestDemo } from "./modal/requestDemo";
import useIsTablet from "./context/useIsTablet";

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

function HowItWorks() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const data = [
    {
      label: "Buyer",
      value: "buyer",
      no: 1,
      icon: HandRaisedIcon,
      component: <BuyerTab />,
    },
    {
      label: "Seller",
      value: "seller",
      no: 2,
      icon: KeyIcon,
      component: <SellerTab />,
    },
    {
      label: "Lender",
      value: "lender",
      no: 3,
      icon: BanknotesIcon,
      component: <LenderTab />,
    },
    {
      label: "Insurer",
      value: "insurer",
      no: 4,
      icon: ScaleIcon,
      component: <InsurerTab />,
    },
    {
      label: "Government",
      value: "government",
      no: 5,
      icon: BuildingLibraryIcon,
      component: <GovernementTab />,
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0]?.value || "");
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  if (isMobile) {
    return (
      <div id="how-it-works" className="relative px-4 pt-20">
        <div className="my-4">
          <h1 className="font-bold text-5xl text-center">How it works?</h1>
        </div>
        <div className="mb-4">
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="rounded-xl border border-none py-2"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors font-medium border border-[#874FA8] rounded-xl p-5 ${
                open === 1 ? "text-[#fff] bg-[#70418B]" : "text-[#000] bg-white"
              }`}
            >
              <div className="font-grotesk">Buyer</div>
            </AccordionHeader>
            <AccordionBody className="px-3 my-2">
              <BuyerTab />
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            className="rounded-xl border border-none py-2"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors font-medium border border-[#874FA8] rounded-xl p-5 ${
                open === 2 ? "text-[#fff] bg-[#70418B]" : "text-[#000] bg-white"
              }`}
            >
              <div className="font-grotesk">Seller</div>
            </AccordionHeader>
            <AccordionBody className="px-3 my-2">
              <SellerTab />
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className="rounded-xl border border-none py-2"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors font-medium border border-[#874FA8] rounded-xl p-5 ${
                open === 3 ? "text-[#fff] bg-[#70418B]" : "text-[#000] bg-white"
              }`}
            >
              <div className="font-grotesk">Lender</div>
            </AccordionHeader>
            <AccordionBody className="px-3 my-2">
              <LenderTab />
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            icon={<Icon id={4} open={open} />}
            className="rounded-xl border border-none py-2"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors font-medium border border-[#874FA8] rounded-xl p-5 ${
                open === 4 ? "text-[#fff] bg-[#70418B]" : "text-[#000] bg-white"
              }`}
            >
              <div className="font-grotesk">Insurer</div>
            </AccordionHeader>
            <AccordionBody className="px-3 my-2">
              <InsurerTab />
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            icon={<Icon id={5} open={open} />}
            className="rounded-xl border border-none py-2"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors font-medium border border-[#874FA8] rounded-xl p-5 ${
                open === 5 ? "text-[#fff] bg-[#70418B]" : "text-[#000] bg-white"
              }`}
            >
              <div className="font-grotesk">Government</div>
            </AccordionHeader>
            <AccordionBody className="px-3 my-2">
              <GovernementTab />
            </AccordionBody>
          </Accordion>
        </div>
        <div className="flex justify-center my-8">
          <RequestDemo />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div id="how-it-works" className="relative px-5">
        <div className="w-full lg:p-8 px-4 flex items-center justify-center">
          {/* How it works Section */}
          <div className="w-full lg:px-6 lg:pr-14 pt-5">
            <h1 className="text-[96px] font-bold text-center mt-12">
              How it works?
            </h1>
          </div>
        </div>
        <div className="pb-8 flex justify-center">
          <div className="w-[270px]">
            <RequestDemo />
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
              <div className="w-full px-10">
                <TabsHeader
                  className="w-full border border-[#874FA8] bg-transparent p-3"
                  indicatorProps={{
                    style: {
                      backgroundColor: "#70418B",
                      height: "100%",
                    },
                  }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      style={{
                        color: activeTab === value ? "white" : "black",
                        zIndex: 1, // Makes sure text stays above the red pill
                      }}
                    >
                      <h3>{label}</h3>
                    </Tab>
                  ))}
                </TabsHeader>
              </div>

              <TabsBody>
                {data.map(({ value, component }) => (
                  <TabPanel key={value} value={value}>
                    {component}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="how-it-works" className="relative max-w-[85rem] my-0 mx-auto">
      <div className="w-full lg:p-8 px-4 flex items-center justify-center">
        {/* How it works Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1 className="text-[96px] font-bold text-center mt-12">
            How it works?
          </h1>
        </div>
      </div>
      <div className="pb-8 flex justify-center">
        <RequestDemo />
      </div>
      <div>
        <div className="mb-10">
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <div className="w-full px-40">
              <TabsHeader
                className="w-full border border-[#874FA8] bg-transparent p-3"
                indicatorProps={{
                  style: {
                    backgroundColor: "#70418B",
                    height: "100%",
                  },
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    style={{
                      color: activeTab === value ? "white" : "black",
                      zIndex: 1, // Makes sure text stays above the red pill
                    }}
                  >
                    <h3>{label}</h3>
                  </Tab>
                ))}
              </TabsHeader>
            </div>

            <TabsBody>
              {data.map(({ value, component }) => (
                <TabPanel key={value} value={value}>
                  {component}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
