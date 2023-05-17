import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import "./sidebar.css";

const Sidebar = () => {
  const { productState } = useContext(ProductContext);

  const brandArr = productState?.products?.reduce(
    (acc, { brand }) => (!acc.includes(brand) ? [...acc, brand] : acc),
    []
  );

  return (
      <div className="filters">
        <div className="filter-heading">
          <h2>Filters</h2>
          <button>Clear</button>
        </div>

        <h3>Price</h3>
        <div className="price-range-filter">
          <input type="range" className="slider" />
        </div>

        <h3>Category</h3>
        <div className="category-filter">
          {productState?.categories?.map(({ _id, categoryName }) => (
            <label key={_id}>
              <input type="checkbox" key={categoryName} /> {categoryName}
            </label>
          ))}
        </div>

        <h3>Brands</h3>
        <div className="brand-filter">
          {brandArr?.map((brand) => (
            <label key={brand}>
              <input type="checkbox" key={brand}/> {brand}
            </label>
          ))}
        </div>

        <h3>Ratings</h3>
        <div className="rating-filter">
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

        <h3>Sort By Price:</h3>
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
  );
};

export default Sidebar;
