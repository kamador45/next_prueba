import styles from "./navbar.module.css";
import {ActiveLink} from "./ActiveLink";

export const Navbar = () => {
    const menu = [
        {
            id:1,
            text: 'Home',
            href: '/'
        },
        {
            id:2,
            text: 'About',
            href: '/about'
        },
        {
            id:3,
            text: 'Contact',
            href: '/contact'
        },
        {
            id:4,
            text: 'Pricing',
            href: '/pricing'
        },
    ];

    return(
        <nav className={styles['navbar-container']}>
            {
                menu.map(x => (
                    <ActiveLink key={x.id} title={x.text} link={x.href} />
                ))
            }
        </nav>
    )
}