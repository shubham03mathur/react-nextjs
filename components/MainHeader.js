import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css";

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
                        <Link href='/meals'>Meals Details</Link>
                    </li>
                    <li>
                        <Link href='/meals/share'>Share Meal</Link>
                    </li>
                    <li>
                        <Link href='/community'>FOODit community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
