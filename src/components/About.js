import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Aromatic, Delicious, Flavorful, mouth-watering, Nutritious, Satisfying, Savory, Tasty, Yummy. Appetizing, Delectable, Saccharine.
            </p>
            <p>
            The bread was a golden dome of warmth, the crust crackling and bronzed. As it was broken open, it released a cloud of steam and a yeasty aroma that was comfortingly familiar. The interior was soft, fluffy, and piping hot, each bite a tiny piece of heaven that melted in the mouth." (freshly baked bread).
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
