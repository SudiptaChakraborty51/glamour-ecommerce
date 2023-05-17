import React, { useCallback, useContext } from "react";
import { categories } from "../../backend/db/categories";
import { ProductContext } from "../../contexts/productContext";

const Sidebar = () => {
  const { productData } = useContext(ProductContext);

  const brandArr = productData.reduce(
    (acc, { brand }) => (!acc.includes(brand) ? [...acc, brand] : acc),
    []
  );

  return (
    <>
      <div className="filters">
        <div className="filter">
          <h2>Filters</h2>
          <button>Clear</button>
        </div>

        <h4>Price</h4>
        <div className="rating-filter">
          <input type="range" className="slider" />
        </div>

        <h4>Category</h4>
        <div className="category-filter">
          {categories?.map(({ _id, categoryName }) => (
            <label key={_id}>
              <input type="checkbox" key={categoryName} /> {categoryName}
            </label>
          ))}
        </div>

        <h4>Brands</h4>
        <div className="brand-filter">
          {brandArr?.map((brand) => (
            <label key={brand}>
              <input type="checkbox" key={brand}/> {brand}
            </label>
          ))}
        </div>

        <h4>Ratings</h4>
        <div className="price-filter">
          <label>
            <input type="radio" name="rating" /> 4⭐ and above
          </label>
          <label>
            <input type="radio" name="rating" /> 3⭐ and above
          </label>
          <label>
            <input type="radio" name="rating" /> 2⭐ and above
          </label>
          <label>
            <input type="radio" name="rating" /> 1⭐ and above
          </label>
        </div>

        <h4>Sort By Price:</h4>
        <div className="price-filter">
          <label>
            <input type="radio" name="sort" /> High to Low
          </label>
          <label>
            <input type="radio" name="sort" /> Low to High
          </label>
          <label>
            <input type="radio" name="sort" /> Reset
          </label>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
