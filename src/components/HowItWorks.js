import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
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

function HowItWorks() {
  const isMobile = useIsMobile();
  const data = [
    {
      label: "Buyer",
      value: "buyer",
      icon: HandRaisedIcon,
      component: <BuyerTab />,
    },
    {
      label: "Seller",
      value: "seller",
      icon: KeyIcon,
      component: <SellerTab />,
    },
    {
      label: "Lender",
      value: "lender",
      icon: BanknotesIcon,
      component: <LenderTab />,
    },
    {
      label: "Insurer",
      value: "insurer",
      icon: ScaleIcon,
      component: <InsurerTab />,
    },
    {
      label: "Government",
      value: "government",
      icon: BuildingLibraryIcon,
      component: <GovernementTab />,
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0]?.value || "");

  if (isMobile) {
    return (
      <div id="how-it-works" className="relative scroll-offset">
        <div className="my-4">
          <h1
            className="font-bold"
            style={{
              fontSize: "48px",
              textAlign: "center",
              margin: "3rem 0",
            }}
          >
            How it works?
          </h1>
          <Typography
            className="text-[14px] font-inter font-normal my-3 leading-relaxed text-center text-gray-500"
            style={{ padding: "1rem 0" }}
          >
            Click on the icons to view more details
          </Typography>
        </div>
        <div>
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <div className="w-full">
              <TabsHeader
                className="w-full"
                style={{
                  border: "1px solid #874FA8",
                  backgroundColor: "transparent",
                  padding: "0.75rem",
                }}
                indicatorProps={{
                  style: {
                    backgroundColor: "#70418B",
                    height: "100%",
                  },
                }}
              >
                {data.map(({ label, value, icon }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    style={{
                      color: activeTab === value ? "white" : "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 1,
                    }}
                  >
                    {activeTab === value ? (
                      <div
                        className="flex items-center gap-2"
                        style={{ padding: "0 2rem" }}
                      >
                        <span style={{ color: "#fff" }}>
                          {React.createElement(icon, { className: "w-5 h-5" })}
                        </span>
                        <h3>{label}</h3>
                      </div>
                    ) : (
                      <span style={{ color: "#8a8e8e" }}>
                        {React.createElement(icon, { className: "w-6 h-6" })}
                      </span>
                    )}
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
    );
  }

  return (
    <div id="how-it-works" className="relative scroll-offset">
      <div className="w-full lg:p-8 px-4 flex items-center justify-center min-h-[80vh]">
        {/* How it works Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1
            className="text-[96px] font-bold"
            style={{
              fontSize: "96px",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            How it works?
          </h1>
        </div>
      </div>
      <div>
        <div className="mb-10">
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <div className="w-full" style={{ padding: "0 10rem" }}>
              <TabsHeader
                className="w-full"
                style={{
                  border: "1px solid #874FA8",
                  backgroundColor: "transparent",
                  padding: "0.75rem",
                }}
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
