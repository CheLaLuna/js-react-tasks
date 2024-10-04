import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
import { useState } from 'react';
import { uniqueId } from 'lodash';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={uniqueId('carousel-item')}
                        className={cn('carousel-item', { active: index === currentIndex })}
                    >
                        <img alt="" className="d-block w-100" src={image} />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                onClick={handlePrev}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                onClick={handleNext}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
// END
