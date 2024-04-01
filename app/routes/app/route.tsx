import { Link, Outlet } from "@remix-run/react";
import type {
  FlowbiteSidebarTheme,
  FlowbiteTooltipTheme,
} from "flowbite-react";
import { Sidebar, Tooltip, ListGroup } from "flowbite-react";
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

// codebase-imports
import { SearchBox } from "~/components/widgets/search-box";
import { HamburgerIcon } from "~/components/svgs/hamburger-icon";
import { FamConLogo } from "~/components/widgets/brand/FamConLogo";
import { SearchIcon } from "~/components/svgs/search-icon";
import { NotificationDropDown } from "~/components/widgets/Notification-dropdown";

const sideBarTheme: FlowbiteSidebarTheme = {
  root: {
    base: "bg-white dark:bg-gray-800 border-r pt-8",
    inner: "p-4",
  },
  cta: {
    base: "bg-primary-600 text-white",
  },
};

export default function App() {
  return (
    <div className="bg-gray-50 antialiased dark:bg-gray-900">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-wrap items-center justify-between">
          {/* first js-btw item */}
          <div className="flex items-center justify-start">
            <button className="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700">
              <HamburgerIcon />
            </button>
            {/* logo */}
            <FamConLogo />

            <SearchBox />
          </div>

          {/* second justify-between item */}
          <div className="flex items-center lg:order-2">
            {/* search icon */}
            <button
              type="button"
              onClick={() => {}}
              className="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
            >
              <span className="sr-only">Toggle search</span>
              <SearchIcon />
            </button>
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              <NotificationDropDown />
            </button>
          </div>
        </div>
      </nav>

      <aside
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-14 transition-transform md:translate-x-0 dark:border-gray-700 dark:bg-gray-800"
        aria-label="Sidenav"
      >
        {/* <Sidebar aria-label="Sidebar" theme={sideBarTheme}>
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
                </Sidebar> */}
      </aside>

      <main className="h-screen p-4 pt-20 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
