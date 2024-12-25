import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import NavLink from "./NavLink/NavLink";
const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link href='/' className={classes.logo}>
                <Image src={logo} alt='A plate full of food' priority />
                FOODit
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Meals Details</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>FOODit community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
