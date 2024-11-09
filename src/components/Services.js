import React from "react";
import "./Services.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Services = () => {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <pre />
      <div className="service-item">
        <h3>Residential Solar Installation</h3>
        <p>
          We provide high-quality solar panel installation for homes, reducing
          your energy bills and carbon footprint.
        </p>
        <img src={image1} alt="Solar Installation" />
      </div>
      <div className="service-item">
        <h3>Commercial Solar Solutions</h3>
        <p>
          Power your business with sustainable solar energy. We offer custom
          installations for commercial buildings.
        </p>
        <img src={image2} alt="Commercial Solar" />
      </div>
      <div className="service-item">
        <h3>Solar Panel Maintenance</h3>
        <p>
          Ensure the longevity and efficiency of your solar panels with our
          expert maintenance services.
        </p>
        <img src={image3} alt="Solar Maintenance" />
      </div>
    </section>
  );
};

export default Services;
