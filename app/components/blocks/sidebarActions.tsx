import { Link } from "@remix-run/react";
import { IconType } from "react-icons";
import { cn } from "~/utils/cn";

interface SidebarActionsProps {
  href: string;
  icon: IconType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export const SidebarActions = ({
  href,
  icon: Icon,
  className,
  onClick,
}: SidebarActionsProps) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white",
        className,
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};
