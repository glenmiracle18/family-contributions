import { Dropdown } from "flowbite-react";
import { NotificationIcon } from "../svgs/NotificationIcon";

export const NotificationDropDown = () => {
  return (
    <div className="flex md:order-2">
      <Dropdown arrowIcon={false} inline label={<NotificationIcon />}>
        <Dropdown.Header>
          <span className="block text-sm">Glen Miracle</span>
          <span className="block truncate text-sm font-medium">
            name@gmail.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
