import MenuIcon from "../../icons/menu.svg";
import { useToggle } from "./ToggleContext";

const MobileMenuButton = () => {
  const { toggleMenu } = useToggle();

  return (
    <MenuIcon
      alt="Open menu"
      width={35}
      onClick={toggleMenu}
      className="cursor-pointer mr-4 ml-4 h-9 fill-yellow-ukraine lg:hidden"
    />
  );
};

export default MobileMenuButton;
