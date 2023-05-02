import React, {forwardRef} from 'react'
import 'aos/dist/aos.css'
import iconCheck from '../../images/svg/card-ico-1.svg'
import iconTruck from '../../images/svg/card-ico-2.svg'
import iconPackage from '../../images/svg/card-ico-3.svg'
import styles from './about.module.css'

const About = forwardRef((props, ref) => {
    return (
        <div data-aos="fade-up">
            <div ref={ref} className={styles.whyBlock}>
                <h1 className={`${styles.title} ${styles.descriptionNoPadding}`}>Why Meet Weed</h1>
                <div className={styles.descriptionWrap}>
                    <p className={`${styles.description} ${styles.descriptionNoPadding}`}>Here's why people choose to order from us</p>
                </div>
                <div className={styles.cardsWrap}>
                    <div className={styles.card}>
                        <img src={iconCheck} />
                        <span className={styles.cardTitile}>Clean, legal weed</span>
                        <p className={styles.cardDescription}>Shop high-quality products from our reliable sources</p>
                    </div>
                    <div className={styles.card}>
                        <img src={iconTruck} />
                        <span className={styles.cardTitile}>Fast delivery</span>
                        <p className={styles.cardDescription}>Expedited delivery to keep your cannabis fresh at all time</p>
                    </div>
                    <div className={styles.card}>
                        <img src={iconPackage} />
                        <span className={styles.cardTitile}>Discreete packaging</span>
                        <p className={styles.cardDescription}>Make our cannabis consumption easy and safe</p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About
