// codebase-imports
import { SearchBox } from "~/components/widgets/SearchBox";
import { HamburgerIcon } from "~/components/svgs/HamburgerIcon";
import { FamConLogo } from "~/components/widgets/brand/FamConLogo";
import { SearchIcon } from "~/components/svgs/SearchIcon";
import { NotificationDropDown } from "~/components/widgets/NotificationDropdown";
import { SidebarComponent } from "~/components/blocks/sidebar";
import { Outlet } from "@remix-run/react";

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
              <NotificationDropDown
                name="Glen Miracle"
                email="test@gmail.com"
              />
            </button>
          </div>
        </div>
      </nav>

      <aside
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-14 transition-transform md:translate-x-0 dark:border-gray-700 dark:bg-gray-800"
        aria-label="Sidenav"
      >
        <SidebarComponent />
      </aside>

      <main className="p-4 pt-20 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
