import React from "react";
import "./landingPage.css";
import SimpleImageSlider from "react-simple-image-slider";
import img_01 from "../../assests/images/dashboard/top-categories/img_01.png";
import img_02 from "../../assests/images/dashboard/top-categories/img_02.png";
import img_03 from "../../assests/images/dashboard/top-categories/img_03.png";
import img_04 from "../../assests/images/dashboard/top-categories/img_04.png";
import img_05 from "../../assests/images/dashboard/top-categories/img_05.png";
import product_1 from "../../assests/images/dashboard/trending-products/product_1.png";
import product_2 from "../../assests/images/dashboard/trending-products/product_2.png";
import product_3 from "../../assests/images/dashboard/trending-products/product_3.png";
import product_4 from "../../assests/images/dashboard/trending-products/product_4.png";
import ecllipse_1 from "../../assests/images/dashboard/ecllipse_1.png";
import aboutus from "../../assests/images/dashboard/aboutus.png";
import ecllipse_2 from "../../assests/images/dashboard/ecllipse_1.png";
import playstore from "../../assests/images/googleplaystore.png";
import appstore from "../../assests/images/appstore.png";
import Logo from "../../assests/images/Logo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
const LandingPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1621018987439-ebca083ef360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjBvZmZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxzaG9wcGluZyUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ];

  const topCateGories = [
    {
      name: "Accessories",
      image: img_01,
    },
    {
      name: "Bakery Items",
      image: img_02,
    },
    {
      name: "Clothing",
      image: img_03,
    },
    {
      name: "Cosmetic",
      image: img_04,
    },
    {
      name: "Gift Boxes",
      image: img_05,
    },
  ];
  return (
    <div>
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{ objectFit: "contain" }}
          loop
          autoPlay
        />
      </div>

      <div className="sub-main-category">
        <div className="sub-main-top-category-header">
          <h3>Top Categories</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan ipsum vitae nisi sagittis venenatis.
          </p>
        </div>
        <div className="landing-page-top-categories">
          {topCateGories.map((item, key) => (
            <div className="landing-page-column">
              <img src={item.image} key={key} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="lading-page-btn-container">
          <button>See All</button>
        </div>
        <div className="sub-main-top-category-header">
          <h3>Trending Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan ipsum vitae nisi sagittis venenatis.
          </p>
        </div>
        <div className="landing-page-top-categories">
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_1} />
          </div>
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_2} />
          </div>
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_3} />
          </div>
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_4} />
          </div>
        </div>

        <div className="lading-page-btn-container">
          <button>Explore More</button>
        </div>

        <div className="landing-page-about-us-container">
          <div style={{ width: "30%" }}>
            <h3 className="about-us-txt">About US......</h3>
            <p className="about-us-txt-p-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              accumsan ipsum vitae nisi sagittis venenatis.
            </p>
            <p className="brand-new-p">Brand New App To Blow Your Mind</p>
          </div>

          <img src={aboutus} />

          <div style={{ width: "24%" }}>
            <div className="about-us-services">
              <div className="eclipse-container">
                <img src={ecllipse_1} />
              </div>
              <div className="about-us-service-details">
                <p>Quick Payment</p>
                <span>100% Secure Payment</span>
              </div>
            </div>

            <div className="about-us-services">
              <div className="eclipse-container">
                <img src={ecllipse_2} />
              </div>
              <div className="about-us-service-details">
                <p>Quick Payment</p>
                <span>100% Secure Payment</span>
              </div>
            </div>
            <div className="lading-page-shop-now-btn">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <img src={Logo} className="footer-container-logo" />

        <div className="footer-column">
          <h3>Pages</h3>
          <span>Ladies Wear</span>
          <span>Mens Wear</span>
          <span>Kids Wear</span>
          <span>Accessories</span>
        </div>

        <div className="footer-column">
          <h3>Service</h3>
          <span>Custom clothing</span>
          <span>Bulk</span>
          <span>Special events Wear</span>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <span>
            <BsTelephoneFill size={25} /> +(94) 77 414 5153
          </span>
          <span>
            <HiMail size={25} />
            ucscclothingstore@gmail.com
          </span>
          <span>
            <IoLocationSharp size={25} />
            UCSC, Reid avenue, Colombo 7
          </span>
        </div>

        <div className="download-location-container">
          <p>Download the app by clicking the link below :</p>
          <img src={playstore} />

          <img src={appstore} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
