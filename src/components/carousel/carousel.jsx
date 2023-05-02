import React, {useState} from 'react'
import styles from './carousel.module.css'
import logo from '../../images/meetweedLogo/MEETWEED TH-横向LOGO 绿标白字.png'
import {IMAGES} from '../../assets/imagesCarousel'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        <>
            <div className={styles.wrap}>
                {IMAGES.map((image, ind) => {
                    console.log(IMAGES[urlIndex].src)
                    return (
                        <div
                            key={image.id}
                            className={urlIndex === ind ? `${styles.activeImage} ${styles.image} ` : `${styles.image}`}
                        >
                            <LazyLoadImage 
                                src={IMAGES[urlIndex].src} 
                                alt={IMAGES[urlIndex].name} 
                                height='200px'
                                width='500px'
                                effect='blur'
                            />
                        </div>
                    )
                })}
                {IMAGES.map((image, ind) => {
                    return (
                        <div
                            key={image.id}
                            className={urlIndex === ind ? `${styles.image} ${styles.imageTwo} ${styles.activeImage}` : `${styles.image} ${styles.imageTwo}`}
                        >
                            <LazyLoadImage 
                                src={urlIndex === IMAGES.length - 1 ? IMAGES[0].src : IMAGES[urlIndex + 1].src}
                                alt={urlIndex === IMAGES.length - 1 ? IMAGES[0].name : IMAGES[urlIndex + 1].name}
                                height='200px'
                                width='500px'
                                effect='blur'
                            />
                        </div>
                    )
                })}
                <div className={styles.buttonWrap}>
                    <button className={`${styles.button} ${styles.buttonBack}`} onClick={clickPrevious} />
                    <button className={styles.button} onClick={clickNext} />
                </div>
            </div>
        </>

    )
}

export default Carousel