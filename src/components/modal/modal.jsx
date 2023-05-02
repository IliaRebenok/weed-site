import React from 'react'
import styles from './modal.module.css'
import 'aos/dist/aos.css';

const ContactsPopUp = (props) => {
    return (
        <div className={styles.tint}>
            <div data-aos="fade">
                <div className={styles.wrap}>
                    <button className={styles.closeButton} onClick={() => props.setIsPressed(false)} />
                    <h1 className={styles.title}>{props.title}</h1>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ContactsPopUp