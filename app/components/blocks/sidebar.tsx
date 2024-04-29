import {
  HiCalendar,
  HiChartPie,
  HiCreditCard,
  HiDocument,
  HiInformationCircle,
  HiPencil,
  HiUser,
  HiUserGroup,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";

import { Sidebar } from "flowbite-react";

import type {
  FlowbiteSidebarTheme,
  FlowbiteTooltipTheme,
} from "flowbite-react";

import SidebarCta from "./SidebarCta";
import { SidebarTheme } from "~/theme/overides/SidebarTheme";

const sideBarTheme: FlowbiteSidebarTheme = SidebarTheme;

export const SidebarComponent = () => {
  return (
    <Sidebar aria-label="Sidebar" theme={sideBarTheme}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/app" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCreditCard}>
            Transact
          </Sidebar.Item>
          <Sidebar.Item href="/app/users" icon={HiUser}>
            Contributors
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUserGroup}>
            User Management
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiPencil} label="Configure">
            <Sidebar.Item href="#">Months</Sidebar.Item>
            <Sidebar.Item href="#">Categories</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={HiDocument} label="Reports">
            <Sidebar.Item href="#">Individual Statement</Sidebar.Item>
            <Sidebar.Item href="#">Group Statement</Sidebar.Item>
            <Sidebar.Item href="#">Receipts</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiCalendar}>
            Reminder Logs
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInformationCircle}>
            About
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <SidebarCta />
    </Sidebar>
  );
};
