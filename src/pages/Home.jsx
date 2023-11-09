import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "../Home.css";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.jpg";
import img5 from "../assets/slider5.jpg";
import { useLoaderData } from "react-router-dom";
import QuicAccess from "../components/QuicAccess";
import Review from "../components/Review";
import { useState } from "react";

const Home = () => {
  const [sliderRef] = useKeenSlider();
  const datas = useLoaderData();

  const [showAllReviews, setShowAllReviews] = useState(false);

  const limitedReviews = showAllReviews ? datas : datas.slice(0, 2);

  return (
    <div>
      <div ref={sliderRef} className="keen-slider rounded-lg">
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img4} alt="Slide 1" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#f9f6f9]">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#f9f6f9]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in Coxs Bazar, our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img5} alt="Slide 2" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#f9f6f9] ">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#f9f6f9]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in Coxs Bazar, our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img3} alt="Slide 3" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#f9f6f9]">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#f9f6f9]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in Coxs Bazar, our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img2} alt="Slide 4" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#f9f6f9]">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#f9f6f9]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in Coxs Bazar, our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <img className="h-60 w-full" src={img1} alt="Slide 5" />
          <div className="slide-content">
            <h2 className="text-2xl font-semibold text-[#f9f6f9]">
              Discover Tranquility in the Heart of Luxury at Celestial Oasis
              Ltd.
            </h2>
            <p className="text-sm font-semibold text-[#f9f6f9]">
              Celestial Oasis Ltd.: Where luxury harmonizes with tranquility.
              Nestled in Coxs Bazar, our celestial retreat offers meticulously
              curated rooms, impeccable amenities, and personalized service.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-center text-[#4B0082] my-5">
        Click On the Rooms pictures to quick access{" "}
      </h2>
      <div className="flex justify-center mx-auto ">
        <div className="grid grid-cols-4 gap-5">
          {datas.map((data) => (
            <QuicAccess key={data._id} data={data}></QuicAccess>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-center text-[#4B0082] my-5">
          Users Testimonial
        </h2>
        <div className="grid grid-cols-2">
          {limitedReviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>

        {datas.length > 6 && (
          <button
            className="bg-gradient-to-l from-[#9370DB] to-[#ffc0cb]  text-white flex mx-auto px-4 py-2 rounded-md mt-5"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? "Show less reviews" : "Show more reviews"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
