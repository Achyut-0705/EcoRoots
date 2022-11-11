import styles from "../styles/components/NavBar.module.scss";
import NavItem from "./NavItem";
// import Logo from "../images/Logo.svg";
// import CTA from "./CTA";
import { useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.container}>
      <ul>
        <NavItem title="Home" link="/" isActive={pathname === "/"} />
        <NavItem
          title="About"
          link="/about"
          isActive={pathname.search("/about") !== -1}
        />
      </ul>
    </nav>
  );
}

export default NavBar;
