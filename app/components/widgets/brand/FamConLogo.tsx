import logo from "~/assets/images/logo.png";

export const FamConLogo = () => {
  return (
    <a
      href="https://flowbite.com"
      className="mr-4 flex items-center justify-between"
    >
      <img src={logo} className="mr-3 h-12" alt="Flowbite Logo" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        FamCon
      </span>
    </a>
  );
};
