import { Sidebar, ListGroup, Tooltip, DarkThemeToggle } from "flowbite-react";
import { BiGlobe, BiSolidCog } from "react-icons/bi";
import { SidebarActions } from "./sidebarActions";

const SidebarCta = () => {
  // const { toggleMode } = useThemeMode(); // hook that can be used to change the page theme
  return (
    <Sidebar.CTA className="dark:bg-gray-800 bg-gray-50">
      <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 bg-white p-4 lg:flex dark:bg-gray-800">
        <DarkThemeToggle />

        <SidebarActions href="#" icon={BiSolidCog} />
        <Tooltip
          aria-labelledby="default-popover"
          style="light"
          content={
            <div className="-m-4 flex justify-center">
              <ListGroup className="w-48">
                <ListGroup.Item>🇫🇷 French</ListGroup.Item>
                <ListGroup.Item>🇲🇼 Chichewa</ListGroup.Item>
                <ListGroup.Item disabled>🇺🇸 English</ListGroup.Item>
              </ListGroup>
            </div>
          }
          trigger="click"
          arrow={false}
        >
          <SidebarActions
            icon={BiGlobe}
            href="#"
            className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          />
        </Tooltip>
      </div>
    </Sidebar.CTA>
  );
};

export default SidebarCta;
