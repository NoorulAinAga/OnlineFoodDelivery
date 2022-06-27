import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "It is a wonderful website, and they have come a long way from being a
          restaurant rating company to food delivery. Constantly adding user
          friendly features. The plastic recycling initiative is a step in the
          right direction. Only request is to figure out ways in which we can
          return the used containers, I know there are logistical challenges but
          things like areawise Dropbox could be explored"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Varun Haldher</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "service is quite good but website still falls short. Won't seriously
          consider 5 stars for this website, until the option to perma-block
          restaurants is available to end-users. There are places I don't want
          to order from again, but who can be bothered to remember months down
          the line? Also there needs to be clear marking of which entries are
          part of a chain / franchisee. Self run / owned places always have a
          noticeable improvement in taste. Chains' food feels like it came out
          of a machine..."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Ketki Sharma</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Other things are okay but sometimes people order just simple snacks
          to have it fastly. But it only shows the time to be taken after
          confirmation of the order. And even if it shows like 50 min or one
          hour to just have your ordered sandwich or pastry, you cannot cancel
          it instantly. Which is such a disappointment. It should provide a 1
          minute window to cancel the order after knowing the expected time of
          delivery."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Rishu Raj</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
