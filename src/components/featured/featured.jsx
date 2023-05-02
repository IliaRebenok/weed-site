import React, {forwardRef} from 'react'
import FeaturedCard from '../featuredCard/featuredCard';
import styles from './featured.module.css'
import weedPicOne from '../../images/card-pic-1.png'
import weedPicTwo from '../../images/card-pic-2.png'
import weedPicThree from '../../images/card-pic-3.png'
import weedPicFour from '../../images/card-pic-4.png'
import 'aos/dist/aos.css';

const Featured = forwardRef((props, ref) => {
    return (
        <div data-aos="fade-up">
            <div className={styles.wrap}>
                <h1 ref={ref} className={styles.title}>Featured products</h1>
                <p className={styles.text}>Choose your favorite strains. Prices will be calculated when you proceed to checkout.</p>
                <div className={styles.featuredWrap}>
                    <FeaturedCard productName='Granddaddy Purple' image={weedPicOne} description='Its potent effects deliver a fusion of cerebral euphoria and physical relaxation.' price='200' />
                    <FeaturedCard productName='Girlscout Cookies' image={weedPicTwo} description='Best known for producing euphoric effects, followed up by waves of relaxation.' price='180' />
                    <FeaturedCard productName='Sour Diesel' image={weedPicThree} description='Effects are dreamy, cerebral, fast-acting and energizing.' price='220' />
                    <FeaturedCard productName='Blue Dream' image={weedPicFour} description='A balanced, along with cerebral stimulating relaxation effect.' price='160' />
                </div>
            </div>
        </div>
    )
});

export default Featured;




