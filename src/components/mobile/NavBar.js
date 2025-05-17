import React, { useState } from "react";
import { Button, IconButton, Drawer } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/media/metadeed.webp";

function NavBarMobile() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="sticky top-0 z-[999] w-full">
      <div className="bg-white text-black shadow-md px-4 py-2 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 py-2 w-auto">
            <img className="h-10 max-w-14" src={logo} alt="MetaDeed" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center gap-4">
            <a href="#about-us">
              <Button
                variant="text"
                size="sm"
                className="normal-case font-normal text-[16px] hover:bg-transparent"
              >
                About Us
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                variant="text"
                size="sm"
                className="normal-case font-normal text-[16px] hover:bg-transparent"
              >
                How it Works
              </Button>
            </a>
            <a href="#partners">
              <Button
                variant="text"
                size="sm"
                className="normal-case font-normal text-[16px] hover:bg-transparent"
              >
                Partners
              </Button>
            </a>
            <a href="#faqs">
              <Button
                variant="text"
                size="sm"
                className="normal-case font-normal text-[16px] hover:bg-transparent"
              >
                Q&A
              </Button>
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block w-[200px]">
            <a href="#about-us">
              <Button
                size="lg"
                className="normal-case font-normal flex justify-between py-2.5 w-[200px]"
              >
                <span className="flex">Join Waiting List</span>
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <IconButton variant="text" onClick={toggleDrawer}>
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        open={open}
        onClose={toggleDrawer}
        className="p-4 bg-white text-black"
      >
        <div className="flex flex-col gap-4 mt-6">
          <a href="#about-us" onClick={toggleDrawer}>
            <Button fullWidth variant="text" className="normal-case text-left">
              About Us
            </Button>
          </a>
          <a href="#how-it-works" onClick={toggleDrawer}>
            <Button fullWidth variant="text" className="normal-case text-left">
              How it Works
            </Button>
          </a>
          <a href="#partners" onClick={toggleDrawer}>
            <Button fullWidth variant="text" className="normal-case text-left">
              Partners
            </Button>
          </a>
          <a href="#faqs" onClick={toggleDrawer}>
            <Button fullWidth variant="text" className="normal-case text-left">
              Q&A
            </Button>
          </a>
          <a href="#about-us" onClick={toggleDrawer}>
            <Button fullWidth color="blue" className="normal-case">
              Join Waiting List
            </Button>
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default NavBarMobile;
