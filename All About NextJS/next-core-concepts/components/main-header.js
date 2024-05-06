"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image
          width={100}
          height={0}
          src={logo.src}
          alt="A plate with food on it"
        />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/meals"
              className={path.startsWith("/meals") ? classes.active : undefined}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={path === "/community" ? classes.active : undefined}
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
