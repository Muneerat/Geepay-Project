import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { NotificationIcon } from "../assets/icon";

export default function Popovers() {
  return (
    <Popover placement="bottom" showArrow={true} className="p-0">
      <PopoverTrigger>
        <Button className=" min-w-5 h-9 rounded-full bg-white"><NotificationIcon width="15" height="15" /></Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-1">
          <div className="text-small py-2 font-bold border-b">Your Notifications</div>
          <div className="text-tiny py-2">Your notification will appear here.</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
