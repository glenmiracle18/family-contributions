import { Dropdown } from "flowbite-react";
import { NotificationIcon } from "../svgs/NotificationIcon";

interface NotificationDropdownProps {
  name: string;
  email: string;
}
export const NotificationDropDown = ({
  name,
  email,
}: NotificationDropdownProps) => {
  return (
    <div className="flex md:order-2">
      <Dropdown arrowIcon={false} inline label={<NotificationIcon />}>
        <Dropdown.Header>
          {/* TODO: parsing the name and the email as props */}
          <span className="block text-sm">{name}</span>
          <span className="block truncate text-sm font-medium">{email}</span>
        </Dropdown.Header>
        {/* TODO: add hrefs, and props to other functional components */}
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
