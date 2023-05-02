import React, {useEffect, useState} from 'react'
import styles from './getInTouch.module.css'
import Modal from '../modal/modal'
import iconMail from '../../images/svg/mailIco.svg'
import 'aos/dist/aos.css';

function GetInTouch() {

    const [isPressed, setIsPressed] = useState(false);
    const [yPosition, setYPosition] = useState(0);
    const toggleButton = () => {
        setIsPressed(true);
        setYPosition(window.pageYOffset);
    }
    useEffect(() => {
        const updateState = () => {
            if (Math.abs(window.pageYOffset - yPosition) > 500) {
                setIsPressed(false);
            }
        }
        window.addEventListener("scroll", updateState); // add event listener
        return () => { window.removeEventListener("scroll", updateState) }
    }, [yPosition]);



    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <div data-aos="fade-right">
                    <h1 className={styles.title}>Get in touch with Meet Weed</h1>
                </div>
                <div data-aos="fade-left">
                    <div className={styles.descriptionWrap}>
                        <p className={styles.description}> {`If you are hemp farmer, wholesale buyer/seller or other interested party, please don't hesitate to contact us`}</p>
                        <button className='greenButton' onClick={toggleButton}>BECOME A PARTNER</button>
                    </div>
                    {isPressed ?
                        <Modal title='Reach us' setIsPressed={setIsPressed}>
                            <div className={styles.modalInfo}>
                                <img src={iconMail} className={styles.icon} />
                                <a className={styles.link} href="mailto:meetweedth@gmail.com" >meetweedth@gmail.com</a>
                            </div>
                        </Modal>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default GetInTouch