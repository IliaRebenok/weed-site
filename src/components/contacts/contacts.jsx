import React, {forwardRef, useEffect, useState} from 'react'
import styles from './contacts.module.css'
import Carousel from '../carousel/carousel';
import Modal from '../modal/modal';
import qr from '../../images/qr.jpg'
import 'aos/dist/aos.css';

const Contacts = forwardRef((props, ref) => {

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
        <div data-aos="fade">
            <div ref={ref} className={styles.wrap}>
                <div className={styles.retailer}>
                    <div data-aos="fade-right">
                        <div className={styles.titleWrap}>
                            <h1 className={styles.title}>{`The most reliable cannabis retailer in our city`}</h1>
                            <div className={styles.descriptionWrap}>
                                <div className={styles.descriptionLine} />
                                <p className={styles.description}> {`At Meet Weed, we use forward-thinking, cutting-edge technology and expertise to provide cannabis products and services that are unmatched in the local industry.`}</p>
                            </div>
                            <button className='greenButton' onClick={toggleButton}>CONTACTS</button>
                        </div>
                        {isPressed ? <Modal title='Get in touch' setIsPressed={setIsPressed}>
                            <div>
                                <a href='https://qr1.be/8DU3'>
                                    <img className={styles.qr} src={qr} />
                                </a>
                            </div>
                        </Modal> : null}
                    </div>
                    <div className={styles.carouselWrap}>
                        <div data-aos="fade-left">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Contacts;




