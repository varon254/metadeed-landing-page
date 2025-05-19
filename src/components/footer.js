import React from "react";
import logo from "../assets/media/metadeed.webp";
import { IconButton } from "@material-tailwind/react";
import { LongDialog } from "./modal/longModal";
import { LegalModal } from "./modal/legalModal";
import useIsMobile from "./context/useIsMobile";

function Footer() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="pt-16 pb-28 flex items-center flex-col justify-center">
        <div className="flex items-center w-full justify-center pt-10 pb-8">
          <img className="h-14" src={logo} alt="MetaDeed" />
        </div>

        <div className="flex justify-center gap-1 w-full flex-col items-center">
          <h4 className="text-[16px] font-normal">Copyright © 2025</h4>
          <LegalModal />
          <LongDialog />
        </div>

        <div className="flex justify-center w-full gap-3 mt-10">
          <IconButton className="rounded-md hover:shadow-none shadow-none bg-[#F6E6FF] text-[#AE6BD1]">
            <svg
              fill="#AE6BD1"
              width="16px"
              height="16px"
              viewBox="0 -0.5 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z" />
            </svg>
          </IconButton>
          <IconButton className="rounded-md hover:shadow-none shadow-none bg-[#F6E6FF] text-[#AE6BD1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#AE6BD1"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </IconButton>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white shadow-none items-center pb-16 pt-12">
      <div className="mx-auto flex items-center justify-between px-4 shadow-none bg-white max-w-[85rem] my-0 py-10 ">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 w-1/4">
          <img className="h-10 max-w-40" src={logo} alt="MetaDeed" />
        </div>

        {/* Center: Menu */}
        <div className="flex justify-center gap-3 w-1/2 items-center">
          <h4 className="text-[16px] font-normal px-8">Copyright © 2025</h4>
          <LegalModal />
          <LongDialog />
        </div>

        {/* Right: CTA Button */}
        <div className="flex justify-end w-1/4 gap-3">
          <IconButton className="rounded-md hover:shadow-none shadow-none bg-[#F6E6FF] text-[#AE6BD1]">
            <svg
              fill="#AE6BD1"
              width="16px"
              height="16px"
              viewBox="0 -0.5 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z" />
            </svg>
          </IconButton>
          <IconButton className="rounded-md hover:shadow-none shadow-none bg-[#F6E6FF] text-[#AE6BD1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#AE6BD1"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
