import React from 'react'
import styles from './hero.module.css'

function Hero() {
    return (
        <div>
            <div className={styles.wrap} >
                <div data-aos="fade">
                    <div className={styles.titleWrap}>
                        <h1 className={styles.title}>{`Don't Panic, \n It's Organic.`}</h1>
                        <div className={styles.descriptionWrap}>
                            <div className={styles.descriptionLine} />
                            <p className={styles.description}> {`High quality medical and recreational cannabis \n with fast and discreet delivery.`}</p>
                        </div>
                        <a 
                        className='greenButton' 
                        href='https://shopee.co.th/meet_leaf'
                        >MAKE ORDER</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero




