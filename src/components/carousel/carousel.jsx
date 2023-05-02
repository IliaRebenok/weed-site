import React, { useState } from 'react'
import styles from './carousel.module.css'
import { IMAGES } from '../../assets/imagesCarousel'

function Carousel() {

    const [urlIndex, setUrlIndex] = useState(0)
    const clickPrevious = () => {
        let index = urlIndex;
        index === 0 ? index = IMAGES.length - 1 : index--;
        setUrlIndex(index);
    }
    const clickNext = () => {
        let index = urlIndex;
        index === IMAGES.length - 1 ? index = 0 : index++;
        setUrlIndex(index);
    }

    return (
        <div className={styles.wrap}>
            {IMAGES.map((image, ind) => {
                console.log(IMAGES[urlIndex].src)
                return (
                    <div key={image.id}>
                        <img
                            src={IMAGES[urlIndex].src}
                            alt={IMAGES[urlIndex].name}
                            className={urlIndex === ind ? `${styles.activeImage} ${styles.image} ` : `${styles.image}`}
                        />
                    </div>
                )
            })}
            {IMAGES.map((image, ind) => {
                return (
                    <div
                        key={image.id}

                    >
                        <img
                            src={urlIndex === IMAGES.length - 1 ? IMAGES[0].src : IMAGES[urlIndex + 1].src}
                            alt={urlIndex === IMAGES.length - 1 ? IMAGES[0].name : IMAGES[urlIndex + 1].name}
                            className={urlIndex === ind ? `${styles.image} ${styles.imageTwo} ${styles.activeImage}` : `${styles.image} ${styles.imageTwo}`}
                        />
                    </div>
                )
            })}
            <div className={styles.buttonWrap}>
                <button className={`${styles.button} ${styles.buttonBack}`} onClick={clickPrevious} />
                <button className={styles.button} onClick={clickNext} />
            </div>
        </div>
    )
}

export default Carousel