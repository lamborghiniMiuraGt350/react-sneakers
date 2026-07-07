import { Carousel } from "./Carousel"

export function Slider() {
    const slides = [`/img/slider/1.jpg`, `/img/slider/2.jpg`, `/img/slider/3.jpg`, `/img/slider/4.jpg`]
    return (
        <div className="slider-wrapper">
            <Carousel autoSlide>
                {slides.map((s, i) => (
                    <img key={i} src={`${process.env.PUBLIC_URL}/${s}`} alt="" />
                ))}
            </Carousel>
        </div>)
}
