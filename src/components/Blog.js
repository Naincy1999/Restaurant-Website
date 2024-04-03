import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  tasty and refreshing spices
                </a>
                <span>by admin / 21st may, 2021</span>
                <p>
                The tart was a vibrant medley of summer berries. Plump blueberries, tart raspberries, and sweet, glossy blackberries adorned the top, nestled in a glossy, citrus-infused glaze. Beneath them was a layer of silky vanilla custard, all cradled in a buttery shortcrust pastry that crumbled delightfully with each bite." (summer berry tart)
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
