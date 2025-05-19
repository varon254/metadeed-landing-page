import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";

export function PartnershipPopover() {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button
          size="lg"
          className="normal-case font-medium w-[250px] rounded-md py-3.5"
          style={{
            width: "270px",
            backgroundColor: "#000",
            height: "60px",
            fontSize: "18px",
          }}
        >
          <h3>Partner with us</h3>
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-96">
        <Typography
          variant="h6"
          color="blue-gray"
          style={{ marginBottom: "1.5rem" }}
        >
          <h4>Partner with us</h4>
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-normal"
        >
          <span>Email</span>
        </Typography>
        <div className="flex gap-2">
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button
            variant="filled"
            className="flex-shrink-0 bg-black normal-case"
          >
            Send
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
