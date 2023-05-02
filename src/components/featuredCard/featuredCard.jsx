import React from 'react'
import styles from './featuredCard.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function FeaturedCard(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
      <LazyLoadImage
        height='160px'
        width='160px'
        effect='blur'
        className={styles.image} src={props.image} alt='weed bud' />
        </div>
      <h3 className={styles.productName}> {props.productName} </h3>
      <p className={styles.description}>{props.description}</p>
      <span className={styles.price}>{props.price} THB</span>
    </div>
  )
}

export default FeaturedCard

