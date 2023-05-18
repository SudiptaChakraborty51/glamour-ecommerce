import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bestSeller from "../../assets/bestSeller.jpg";
import dotKey from "../../assets/dotKey.webp";
import lakme from "../../assets/lakme.webp";
import mac from "../../assets/mac.jpg";
import mamaearth from "../../assets/mamaearth.jpg";
import plum from "../../assets/plum.jpg";
import veet from "../../assets/veet.webp";
import "./slider.css";

import React from "react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const navigate = useNavigate();
  return (
    <div className="slider">
      <Carousel responsive={responsive}>
        <div className="slider-card" onClick={() => navigate("/products")}>
          <img src={bestSeller} alt="bestSeller" />
          <div class="content">
            <p>Up to 25% off on makeup kit</p>
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="slider-card" onClick={() => navigate("/products")}>
          <img src={dotKey} alt="dotKey" />
          <div class="content">
            <p>Up to 50% off on summer sale</p>
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="slider-card" onClick={() => navigate("/products")}>
          <img src={lakme} alt="lakme" />
          <div class="content">
            <p>Up to 30% off on brand products</p>
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="slider-card" onClick={() => navigate("/products")}>
          <img src={veet} alt="veet" />
          <div class="content">
            <p>Up to 20% off get smooth skin</p>
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="slider-card" onClick={() => navigate("/products")}>
          <img src={mac} alt="mac" />
          <div class="content">
            <p>Bestsellers starting at ₹700</p>
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="slider-card" onClick={() => navigate("/products")}>
          <img src={mamaearth} alt="mamaearth" />
          <div class="content">
            <p>Buy 1 Get 1 Free offer</p>
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="slider-card" onClick={() => navigate("/products")}>
          <img src={plum} alt="plum" />
          <div class="content">
            <p>Up to 25% off on skincare products</p>
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
