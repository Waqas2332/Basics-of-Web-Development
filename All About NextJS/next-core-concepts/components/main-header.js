import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logo.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
