import {
  HiCalendar,
  HiChartPie,
  HiCreditCard,
  HiDocument,
  HiInformationCircle,
  HiMoon,
  HiPencil,
  HiUser,
  HiUserGroup,
} from "react-icons/hi";
import { BiBuoy, BiGlobe, BiMoon, BiSolidCog } from "react-icons/bi";

import { Sidebar, ListGroup, Tooltip, } from "flowbite-react";

import type {
  FlowbiteSidebarTheme,
  FlowbiteTooltipTheme,
} from "flowbite-react";
import { Link } from "@remix-run/react";

const sideBarTheme: FlowbiteSidebarTheme = {
  root: {
    base: "bg-white dark:bg-gray-800 border-r pt-8",
    inner: "p-4",
  },
  cta: {
    base: "bg-primary-600 text-white",
  },
};

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
            <Sidebar.Item href="#">
              Individual Statement
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Group Statement
            </Sidebar.Item>
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
      <Sidebar.CTA>
        <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 bg-white p-4 lg:flex dark:bg-gray-800">
          <Link
            to="#"
            className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <HiMoon className="h-6 w-6" />
          </Link>
          <Link
            to="#"
            className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <BiSolidCog className="h-6 w-6" />
          </Link>
          <Tooltip
            aria-labelledby="default-popover"
            style="light"
            content={
              <div className="-m-4 flex justify-center">
                <ListGroup className="w-48">
                  <ListGroup.Item>
                    🇫🇷 French
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🇲🇼 Chichewa
                  </ListGroup.Item>
                  <ListGroup.Item disabled>
                    🇺🇸 English
                  </ListGroup.Item>
                </ListGroup>
              </div>
            }
            trigger="click"
            arrow={false}
          >
            <div className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <BiGlobe className="h-6 w-6" />
            </div>
          </Tooltip>
        </div>
      </Sidebar.CTA>
    </Sidebar>
  )
}
