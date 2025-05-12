import React from "react";
import { Button, Navbar } from "@material-tailwind/react";
import logo from "../assets/media/metadeed.webp";
import { DialogWithForm } from "./modal/form";

function NavBar() {
  return (
    <div
      className="!sticky top-0 z-[999] bg-white shadow-none items-center"
      style={{ position: "sticky" }}
    >
      <Navbar
        className="mx-auto flex items-center justify-between px-4 py-4 shadow-none max-w-none bg-white"
        style={{ maxWidth: "85rem", margin: "0 auto" }}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2 w-1/3">
          <img className="h-10 max-w-14" src={logo} alt="MetaDeed" />
        </div>

        {/* Center: Menu */}
        <div className="flex justify-center gap-6 w-1/3">
          <a href="#about-us">
            <Button
              variant="text"
              size="sm"
              ripple={false}
              className="hover:bg-transparent normal-case font-normal text-[16px] active:bg-transparent"
            >
              <span>About Us</span>
            </Button>
          </a>
          <a href="#how-it-works">
            <Button
              variant="text"
              size="sm"
              ripple={false}
              className="hover:bg-transparent normal-case font-normal text-[16px] active:bg-transparent"
            >
              <span>How it Works</span>
            </Button>
          </a>
          <a href="#partners">
            <Button
              variant="text"
              size="sm"
              ripple={false}
              className="hover:bg-transparent normal-case font-normal text-[16px] active:bg-transparent"
            >
              <span>Partners</span>
            </Button>
          </a>
          <a href="#faqs">
            <Button
              variant="text"
              size="sm"
              ripple={false}
              className="hover:bg-transparent normal-case font-normal text-[16px] active:bg-transparent"
            >
              <span>Q&A</span>
            </Button>
          </a>
        </div>

        {/* Right: CTA Button */}
        <div className="flex justify-end w-1/3">
          <DialogWithForm />
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
