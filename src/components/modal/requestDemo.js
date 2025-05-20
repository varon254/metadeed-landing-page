import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  IconButton,
  DialogBody,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useIsMobile from "../context/useIsMobile";

export function RequestDemo() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  if (isMobile) {
    return (
      <div>
        <Button
          size="lg"
          variant="outlined"
          className="normal-case font-medium font-grotesk py-3 lg:w-[270px] w-full rounded-md border-2 h-[60px] text-[18px] lg:my-0 my-2"
          onClick={handleOpen}
        >
          <h3>Request a Demo</h3>
        </Button>
        <Dialog
          size="lg"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <DialogBody className="overflow-scroll">
            <Card className="mx-auto w-full">
              <CardBody className="flex flex-col gap-4">
                <div className="flex justify-end">
                  <IconButton
                    size="sm"
                    variant="text"
                    className="left-0.5 top-3.5"
                    onClick={handleOpen}
                  >
                    <XMarkIcon className="h-6 w-6 stroke-2" />
                  </IconButton>
                </div>

                <div className="flex items-center justify-center pb-4">
                  <Typography className="flex justify-center text-[#151314] font-bold text-[22px] font-grotesk">
                    Request a demo to MetaDeed
                  </Typography>
                </div>
                <div className="w-full">
                  <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                    Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Full name"
                    name="name"
                    className="placeholder:opacity-100 focus:!border-t-gray-900 !font-inter"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div className="w-full">
                  <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                    Email
                  </Typography>
                  <Input
                    type="email"
                    color="gray"
                    size="lg"
                    placeholder="Email address"
                    name="email"
                    className="placeholder:opacity-100 focus:!border-t-gray-900 !font-inter"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                    Company Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Brand/Company/Product Name"
                    name="name"
                    className="placeholder:opacity-100 focus:!border-t-gray-900 !font-inter"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                    Message
                  </Typography>
                  <Textarea
                    rows={7}
                    placeholder="Tell us about your project..."
                    size="lg"
                    className="!font-inter !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-blue-gray-900 group-hover:!border-primary"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </CardBody>
              <CardFooter className="pt-0 flex justify-center">
                <Button
                  variant="filled"
                  onClick={handleOpen}
                  fullWidth
                  className="normal-case bg-[#151314] font-inter font-normal h-[48px] text-[16px] w-[272px]"
                >
                  <span>Send</span>
                </Button>
              </CardFooter>
            </Card>
          </DialogBody>
        </Dialog>
      </div>
    );
  }

  return (
    <>
      <Button
        size="lg"
        variant="outlined"
        className="normal-case font-medium font-grotesk py-3 lg:w-[270px] w-full rounded-md border-2 h-[60px] text-[18px] lg:my-0 my-2"
        onClick={handleOpen}
      >
        <h3>Request a Demo</h3>
      </Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full px-8">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-end">
              <IconButton
                size="sm"
                variant="text"
                className="left-0.5 top-3.5"
                onClick={handleOpen}
              >
                <XMarkIcon className="h-6 w-6 stroke-2" />
              </IconButton>
            </div>

            <div className="flex items-center justify-center pb-4">
              <Typography className="flex justify-center text-[#151314] font-bold text-[36px] font-grotesk">
                Request a demo to MetaDeed
              </Typography>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                  Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Full name"
                  name="name"
                  className="placeholder:opacity-100 focus:!border-t-gray-900 !font-inter"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="w-full">
                <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                  Email
                </Typography>
                <Input
                  type="email"
                  color="gray"
                  size="lg"
                  placeholder="Email address"
                  name="email"
                  className="placeholder:opacity-100 focus:!border-t-gray-900 !font-inter"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                Company Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Brand/Company/Product Name"
                name="name"
                className="placeholder:opacity-100 focus:!border-t-gray-900 !font-inter"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography className="mb-2 text-left font-normal font-inter text-[#151314] text-[14px]">
                Message
              </Typography>
              <Textarea
                rows={7}
                placeholder="Tell us about your project..."
                size="lg"
                className="!font-inter !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-blue-gray-900 group-hover:!border-primary"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <Button
              variant="filled"
              onClick={handleOpen}
              fullWidth
              className="normal-case bg-black font-inter font-normal"
              style={{ height: "48px", fontSize: "16px", width: "272px" }}
            >
              <span>Send</span>
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
