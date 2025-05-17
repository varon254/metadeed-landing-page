import React, { useState } from "react";
import { Button, Navbar, Drawer, IconButton } from "@material-tailwind/react";
import logo from "../assets/media/metadeed.webp";
import { DialogWithForm } from "./modal/form";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../assets/NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <React.Fragment>
      <div
        className="!sticky top-0 z-[999] bg-white shadow-none items-center"
        style={{ position: "sticky" }}
      >
        <Navbar
          className="mx-auto flex items-center justify-between px-4 py-4 shadow-none max-w-none bg-white"
          style={{ maxWidth: "85rem", margin: "0 auto" }}
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-2 w-1/3 show-on-lg">
            <img className="h-10 max-w-14" src={logo} alt="MetaDeed" />
          </div>

          {/* Left: Logo */}
          <div className="flex items-center gap-2 w-1/2 hide-on-lg">
            <img className="h-10 max-w-14" src={logo} alt="MetaDeed" />
          </div>

          {/* Center: Menu */}
          <div className="justify-center gap-6 lg:w-1/3 flex show-on-lg">
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
          <div className="justify-end w-1/3 flex show-on-lg">
            <DialogWithForm />
          </div>

          {/* Mobile Hamburger */}
          <div className="hide-on-lg">
            <IconButton variant="text" onClick={toggleDrawer}>
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>
        </Navbar>

        {/* Mobile Drawer Menu */}
        <Drawer
          open={open}
          placement="top"
          onClose={toggleDrawer}
          overlay={false}
          transition={{ type: "tween", duration: 0.5 }}
          className="p-4 bg-white text-black"
        >
          <div className="mb-6">
            <div className="flex flex-col gap-4 mt-6 w-full">
              <a href="#about-us" onClick={toggleDrawer}>
                <Button
                  fullWidth
                  variant="text"
                  className="normal-case text-left"
                >
                  About Us
                </Button>
              </a>
              <a href="#how-it-works" onClick={toggleDrawer}>
                <Button
                  fullWidth
                  variant="text"
                  className="normal-case text-left"
                >
                  How it Works
                </Button>
              </a>
              <a href="#partners" onClick={toggleDrawer}>
                <Button
                  fullWidth
                  variant="text"
                  className="normal-case text-left"
                >
                  Partners
                </Button>
              </a>
              <a href="#faqs" onClick={toggleDrawer}>
                <Button
                  fullWidth
                  variant="text"
                  className="normal-case text-left"
                >
                  Q&A
                </Button>
              </a>
              <DialogWithForm />
            </div>
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
