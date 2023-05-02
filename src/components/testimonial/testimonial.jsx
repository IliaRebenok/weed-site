import {React, useState} from 'react'
import styles from './testimonial.module.css'
import TestimonialCard from '../testimonialCard/testimonialCard';
import 'aos/dist/aos.css';
import {REVIEWS} from '../../assets/reviews';

function Testimonial() {

  const [indexState, setIndexState] = useState(0);
  const clickPrevious = () => {
    let index = indexState;
    index !== 0 ? index-- : index = REVIEWS.length - 1;
    setIndexState(index);
  }
  const clickNext = () => {
    let index = indexState;
    index !== REVIEWS.length - 1 ? index++ : index = 0;
    setIndexState(index);
  }

  return (
    <div data-aos="fade-up">
      <div className={styles.wrap}>
        <h1 className={styles.title}>What our clients say</h1>
        <p className={styles.text}>Here's what to expect when you order from us</p>
        <div className={styles.allCardsWrap}>
          <div className={styles.cardsWrap}>
            {REVIEWS.map((review, index) => {
              return (
                <TestimonialCard
                  key={review.id}
                  rating={review.rating}
                  user={review.user}
                  location={`from ${review.location}`}
                  text={review.text}
                  active={(indexState === (REVIEWS.length - 1) - (index % (REVIEWS.length)))}
                />
              )
            })}

          </div>
          <div className={styles.cardsWrap}>
            {REVIEWS.map((review, index) => {
              return (
                <TestimonialCard
                  key={review.id}
                  rating={review.rating}
                  user={review.user}
                  location={`from ${review.location}`}
                  text={review.text}
                  active={(indexState === (REVIEWS.length - 1) - ((index + 1) % (REVIEWS.length)))}
                />
              )
            })}

          </div>
          <div className={`${styles.cardsWrap} ${styles.hide}`}>
            {REVIEWS.map((review, index) => {
              return (
                <TestimonialCard
                  key={review.id}
                  rating={review.rating}
                  user={review.user}
                  location={`from ${review.location}`}
                  text={review.text}
                  active={(indexState === (REVIEWS.length - 1) - ((index + 2) % (REVIEWS.length)))}
                />
              )
            })}

          </div>
          <div className={`${styles.cardsWrap} ${styles.hide}`}>
            {REVIEWS.map((review, index) => {
              return (
                <TestimonialCard
                  key={review.id}
                  rating={review.rating}
                  user={review.user}
                  location={`from ${review.location}`}
                  text={review.text}
                  active={(indexState === (REVIEWS.length - 1) - ((index + 3) % (REVIEWS.length)))}
                />
              )
            })}
          </div>
        </div>
        <div className={styles.buttonsWrap}>
          <button className={`${styles.button} ${styles.buttonBack}`} onClick={clickPrevious} />
          <button className={styles.button} onClick={clickNext} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial