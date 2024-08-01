// components/ScrollToTop.js
"use client";
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You can use any arrow icon

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg"
            >
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollToTop;
