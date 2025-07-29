import Link from "next/link"
import HeaderIcon from "@/assets/logo.png"
import classes from "./Header.module.css"
import Image from "next/image"
import HeaderLink from "../main-page/HeaderLink"

const Header = () => {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href={"/"}>
                <Image src={HeaderIcon} alt="header icon" priority /> {/*this is next js image tag that has some extra features like lazy loading etc */}
                NextLevel food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <HeaderLink href={"/meals"}  > All meals</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink href={"/community"}  > community</HeaderLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
