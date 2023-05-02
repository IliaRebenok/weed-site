import React from 'react'
import logo from "../../images/meetweedLogo/MEETWEED TH-横向LOGO 绿标白字.png"
import styles from './header.module.css'
import {useScrollDirection} from '../../hooks/useScrollDirection';

const Header = ({ shop, contacts, about }) => {
    const scrollDirection = useScrollDirection();


    return (
        <div className={`${styles.headerWrap}  ${scrollDirection === "down" ? styles.hide : styles.show} `}>
            <div className={styles.headerLogo}>
                <img src={logo} alt='MeetWeed Pattaya'/>
            </div>
            <nav className={styles.headerNav}>
                <div className={styles.headerNavItem}>
                    <span onClick={() => shop.current.scrollIntoView({ behavior: "smooth", block: "start", })} >Shop</span>
                </div>
                <div className={styles.headerNavItem}>
                    <span onClick={() => contacts.current.scrollIntoView({ behavior: 'smooth' })} >Contacts</span>
                </div>
                <div className={styles.headerNavItem}>
                    <span onClick={() => about.current.scrollIntoView({ behavior: 'smooth' })} >About</span>
                </div>
            </nav>
            <div className={styles.headerCart}>
            </div>
        </div>
    )
}

export default Header