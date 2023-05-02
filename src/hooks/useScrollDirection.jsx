import React, {useEffect, useState} from 'react';

const SCROLL_THRESHOLD = 10;

export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            let newScrollDirection = null;

            if (scrollY > lastScrollY + SCROLL_THRESHOLD) {
                newScrollDirection = 'down';
            } else if (scrollY < lastScrollY - SCROLL_THRESHOLD) {
                newScrollDirection = 'up';
            }

            if (newScrollDirection !== null) {
                setScrollDirection(newScrollDirection);
            }

            lastScrollY = scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollDirection;
};
