import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "../Home.css";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";

const Home = () => {
  const [sliderRef] = useKeenSlider();

  return (
    <div>
      <div ref={sliderRef} className="keen-slider rounded-lg">
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img1} alt="Slide 1" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#923d85]">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#923d85]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in [location], our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img2} alt="Slide 2" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#923d85] ">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#923d85]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in [location], our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img3} alt="Slide 3" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#923d85]">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#923d85]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in [location], our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
