import React, { useState } from "react";
import { Button, Navbar, Drawer, IconButton } from "@material-tailwind/react";
import logo from "../assets/media/metadeed.webp";
import { DialogWithForm } from "./modal/form";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../assets/NavBar.css";

function NavBar() {
  const [openTop, setOpenTop] = useState(false);

  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  return (
    <React.Fragment>
      <div
        className="!sticky top-0 z-[999] bg-white shadow-none items-center"
        style={{ position: "sticky" }}
      >
        <Navbar className="mx-auto flex items-center justify-between px-4 py-4 shadow-none bg-white max-w-[85rem] my-0">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 w-1/4 show-on-lg">
            <img className="h-10 max-w-40" src={logo} alt="MetaDeed" />
          </div>

          {/* Left: Logo */}
          <div className="flex items-center gap-2 w-1/2 hide-on-lg">
            <img className="h-10 max-w-40" src={logo} alt="MetaDeed" />
          </div>

          {/* Center: Menu */}
          <div className="justify-center gap-6 lg:w-2/4 flex show-on-lg">
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
            <a href="#use-cases">
              <Button
                variant="text"
                size="sm"
                ripple={false}
                className="hover:bg-transparent normal-case font-normal text-[16px] active:bg-transparent"
              >
                <span>Use Cases</span>
              </Button>
            </a>
            <a href="#build-in-uae">
              <Button
                variant="text"
                size="sm"
                ripple={false}
                className="hover:bg-transparent normal-case font-normal text-[16px] active:bg-transparent"
              >
                <span>Build in UAE</span>
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
          <div className="justify-end w-1/4 flex show-on-lg">
            <DialogWithForm />
          </div>

          {/* Mobile Hamburger */}
          <div className="hide-on-lg">
            {openTop ? (
              <IconButton
                variant="text"
                onClick={closeDrawerTop}
                className="lg:hidden"
              >
                <XMarkIcon className="h-6 w-6" />
              </IconButton>
            ) : (
              <IconButton
                variant="text"
                onClick={openDrawerTop}
                className="lg:hidden"
              >
                <Bars3Icon className="h-6 w-6" />
              </IconButton>
            )}
          </div>
        </Navbar>
      </div>
      {/* Mobile Drawer Menu */}
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        overlay={false}
        transition={{ type: "tween", duration: 0.5 }}
        className="p-4 bg-white text-[#151314] !max-h-[570px] -top-52 z-[998] shadow-sm"
      >
        <div className="bg-white pb-4">
          <div className="flex flex-col gap-1 mt-[17rem] w-full">
            <a href="#about-us" onClick={closeDrawerTop}>
              <Button
                fullWidth
                variant="text"
                className="normal-case text-left"
              >
                About Us
              </Button>
            </a>
            <a href="#how-it-works" onClick={closeDrawerTop}>
              <Button
                fullWidth
                variant="text"
                className="normal-case text-left"
              >
                How it Works
              </Button>
            </a>
            <a href="#use-cases" onClick={closeDrawerTop}>
              <Button
                fullWidth
                variant="text"
                className="normal-case text-left"
              >
                Use Cases
              </Button>
            </a>
            <a href="#build-in-uae" onClick={closeDrawerTop}>
              <Button
                fullWidth
                variant="text"
                className="normal-case text-left"
              >
                Build in UAE
              </Button>
            </a>
            <a href="#faqs" onClick={closeDrawerTop}>
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
    </React.Fragment>
  );
}

export default NavBar;
