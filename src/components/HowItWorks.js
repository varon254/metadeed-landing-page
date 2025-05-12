import {
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

function HowItWorks() {
  const data = [
    {
      label: "Buyer",
      value: "buyer",
      component: <BuyerTab />,
    },
    {
      label: "Seller",
      value: "seller",
      component: <SellerTab />,
    },
    {
      label: "Lender",
      value: "lender",
      component: <LenderTab />,
    },
    {
      label: "Insurer",
      value: "insurer",
      component: <InsurerTab />,
    },
    {
      label: "Government",
      value: "government",
      component: <GovernementTab />,
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0]?.value || "");
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
