import NavLink from "next/link";
import { useRouter } from "next/router";
import { useToggle } from "./ToggleContext";

const Link = ({ title, url }) => {
  const router = useRouter();
  const isActive = router.pathname === url;
  const { setIsMenuOpen } = useToggle();

  return (
    <NavLink
      href={url}
      onClick={() => setIsMenuOpen(false)}
    >
      <a
        className={`navbar-item ${isActive ? "navbar-item-active" : ""}`}
        style={{ padding: "0.3em 0.5em", fontSize: "1em" }}
      >
        {title}
      </a>
    </NavLink>
  );
};

export default Link;
