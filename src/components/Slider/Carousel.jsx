import { ChevronLeft, ChevronRight } from 'lucide-react'
import './carousel.scss'
import React, { useState } from 'react'
export function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    React.useEffect(() => {
        if (!autoSlide) {
            return
        }
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])
    return (
        <div className="carousel-wrappper">
            <div className="carousel" style={{ 'transform': `translateX(-${curr * 100}%)` }}>{slides}</div>
            <div className="carousel-buttons">
                <button onClick={prev}><ChevronLeft size={40} color="gray" strokeWidth={2} /></button>
                <button onClick={next}><ChevronRight size={40} color="gray" strokeWidth={2} /></button>
            </div>
        </div>
    )
}
