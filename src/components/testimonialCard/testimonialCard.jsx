import React from 'react'
import styles from './testimonialCard.module.css'
import star from '../../images/svg/star.svg'


const TestimonialCard = (props) => {

    const ratingArr = [];
    ratingArr.length = parseInt(props.rating);
    ratingArr.fill(star);

    return (
        <div className={props.active ? `${styles.wrap} ${styles.active}` : styles.wrap}>
            <div className={styles.user}>{props.user}</div>
            <div className={styles.rating}>
                {ratingArr.map((value,index) => {
                    return(
                        <img key={index} src={value} />
                    )
                })
                }


            </div>
            <div className={styles.location}>{props.location}</div>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default TestimonialCard