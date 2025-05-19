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
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function RequestDemo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        size="lg"
        variant="outlined"
        className="normal-case font-medium font-grotesk py-3 lg:w-[270px] w-full rounded-md border-2 h-[60px] text-[18px]"
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
        <Card
          className="mx-auto w-full max-w-[24rem]"
          style={{ padding: "0 2rem" }}
        >
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

            <div
              className="flex items-center justify-center"
              style={{ paddingBottom: "1rem" }}
            >
              <Typography
                variant="h4"
                color="blue-gray"
                className="flex justify-center text-black font-bold"
              >
                <h1 style={{ fontSize: "36px" }}>Request a demo to MetaDeed</h1>
              </Typography>
            </div>

            <div
              className="flex justify-center gap-3 w-full"
              style={{ padding: "0.5rem 0" }}
            >
              <div className="flex flex-col w-full">
                <Input label="Full Name" size="lg" className="font-inter" />
              </div>
              <div className="flex flex-col w-full">
                <Input
                  label="Email"
                  size="lg"
                  className="font-inter"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
              </div>
            </div>
            <div
              className="flex flex-col w-full"
              style={{ padding: "0.5rem 0" }}
            >
              <Input
                label="Brand/Company/Product Name"
                size="lg"
                className="font-inter"
              />
            </div>
            <div
              className="flex flex-col w-full"
              style={{ padding: "0.5rem 0" }}
            >
              <Textarea
                type="text"
                label="Tell us about your project..."
                size="lg"
                className="font-inter"
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
