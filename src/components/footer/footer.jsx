import React from 'react'
import styles from './footer.module.css'
import biglogo from '../../images/meetweedLogo/MEETWEEDLOGO.png'
import iconLocation from '../../images/svg/locationIco.svg'
import iconMail from '../../images/svg/mailIco.svg'
import iconTime from '../../images/svg/timeIco.svg'
import iconTel from '../../images/svg/telIco.svg'
import iconTG from '../../images/svg/tgIco.svg'
import iconLine from '../../images/svg/lineIco.svg'
import iconWechat from '../../images/svg/wechatIco.svg'

const googleLocation = 'https://www.google.com/maps/place/Meet+Weed+(%E0%B8%9E%E0%B8%9A%E0%B8%81%E0%B8%B1%E0%B8%8D)/@12.8772329,100.8836499,17z/data=!4m6!3m5!1s0x310297afc4ce16ad:0x1d4ac2d5337cfc74!8m2!3d12.8773992!4d100.885736!16s%2Fg%2F11tfg47k90'

const Footer = () => {
    return (
        <div className={styles.wrap} data-aos="fade">
            <div className={styles.firstColumn}>
                <img className={styles.logo} src={biglogo} />
            </div>
            <div className={styles.secondColumn}>
                <div className={styles.category}> Address: </div>
                <div className={styles.contactsLineWrap}>
                    <img src={iconLocation} className={styles.icon} />
                    <a href={googleLocation}>131/100 Thanon Chaiyaphruek, Pattaya City, Bang Lamung District, Chon Buri 20150</a>
                </div>
                <div className={styles.contactsLineWrap}>
                    <img src={iconTime} className={styles.icon} />
                    <p>Monday - Sunday, 10 a.m. - 2 a.m.</p>
                </div>
            </div>
            <div className={styles.thirdColumn}>
                <div className={styles.category}> Contacts: </div>
                <div className={styles.contactsLineWrap}>
                    <img src={iconMail} className={styles.icon} />
                    <a href="mailto:meetweedth@gmail.com">meetweedth@gmail.com</a>
                </div>
                <div className={styles.contactsLineWrap}>
                    <img src={iconTel} className={styles.icon} />
                    <a href="tel:+66 918038271">+66 918038271</a>
                </div>
                <div className={styles.contactsLineWrap}>
                    <img src={iconTG} className={styles.icon} />
                    <a href="https://t.me/meetweedth">Telegram: @meetweedth</a>
                </div>
                <div className={styles.contactsLineWrap}>
                    <img src={iconLine} className={styles.icon} />
                    <a href="https://t.me/meetweedth">Line: @meetweed</a>
                </div>
                <div className={styles.contactsLineWrap}>
                    <img src={iconWechat} className={styles.icon} />
                    <span>WeChat ID: meetweed</span>
                </div>
            </div>
        </div>
    )
}

export default Footer