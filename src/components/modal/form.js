import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <div className="lg:px-0 px-4">
        <Button
          size="lg"
          onClick={handleOpen}
          className="normal-case font-normal py-2.5 lg:w-[200px] w-full"
        >
          <span>Join Waiting List</span>
        </Button>
      </div>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-end">
              <IconButton
                size="sm"
                variant="text"
                className="left-0.5 top-1"
                onClick={handleOpen}
              >
                <XMarkIcon className="h-6 w-6 stroke-2" />
              </IconButton>
            </div>
            <Typography className="flex justify-center text-[#151314] font-bold text-[22px] font-grotesk">
              Join Waiting List
            </Typography>
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
            <div className="-ml-2.5 mt-3">
              <Checkbox label="I agree to Terms & Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="filled"
              onClick={handleOpen}
              fullWidth
              className="normal-case bg-[#151314] font-inter font-normal h-[48px] text-[16px] w-full"
            >
              <span>Submit</span>
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
