import { Input, Link } from "@nextui-org/react";
import React from "react";
import { DatePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { NotificationIcon, SearchIcon } from "../assets/icon";
import { Avatar } from "@nextui-org/react";
import { User } from "@nextui-org/react";

import {
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

export default function Navbar() {
  const [value, setValue] = React.useState(parseDate("2024-06-12"));
  const TodaysDate = React.useState( new Date().getFullYear() )

  return (
    <nav className="flex justify-between border px-4 h-24 items-center">
      <Link to="#">
        <h1 className="font-medium text-black text-xl hover:scale-110 duration-200">Health Overview</h1>
      </Link>
      <div className="flex">
        <div className="px-3 rounded-full flex justify-center items-center ">
          <Input
            isClearable
            radius="lg"
            aria-label="search input"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-black/90",
                "placeholder:text-default-700/50 dark:placeholder:text-black/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Search..."
            startContent={
              <SearchIcon
                width={20}
                height={20}
                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
              />
            }
          />
        </div>
        <div>
          <div className="w-full flex item-center justify-center gap-y-2 pt-2 px-5">
            <DatePicker
              className="max-w-[284px] "
              value={value}
              onChange={setValue}
              aria-label="date"
            />
          </div>
        </div>
        <div className="py-2 pr-5">
          <div className="h-10 w-10 bg-transparent rounded-full  border-2 flex items-center justify-center ">
            <NotificationIcon width="15" height="15" />
          </div>
        </div>
        <div className="bg-whit flex text-center border p-2 rounded-full">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <User
                name="Jane Doe"
                description="Jane@gmail.com"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Jane@gmail.com</p>
              </DropdownItem>
              <DropdownItem key="settings">Profile</DropdownItem>
              <DropdownItem key="team_settings">Billing</DropdownItem>
              <DropdownItem key="analytics">Setting</DropdownItem>
              <DropdownItem key="system">Keyboard shortcut</DropdownItem>
              <DropdownItem key="configurations">Team</DropdownItem>
              <DropdownItem key="help_and_feedback">Invite users</DropdownItem>
              <DropdownItem key="new">New Team</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
