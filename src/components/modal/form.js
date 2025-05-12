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
} from "@material-tailwind/react";

export function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        size="lg"
        onClick={handleOpen}
        className="normal-case font-normal py-2.5 w-[200px]"
      >
        <span>Join Waiting List</span>
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              <h1>Join Waiting List</h1>
            </Typography>
            <Typography className="-mb-2" variant="h6">
              <span>Your Name</span>
            </Typography>
            <Input label="Full Name" size="lg" className="font-inter" />
            <Typography className="-mb-2" variant="h6">
              <span>Your Email</span>
            </Typography>
            <Input label="Email" size="lg" className="font-inter" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="I agree to Terms & Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="filled"
              onClick={handleOpen}
              fullWidth
              className="normal-case"
            >
              <span>Submit</span>
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
