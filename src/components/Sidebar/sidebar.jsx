import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import "./sidebar.css";
import { FilterContext } from "../../contexts/filterContext";

const Sidebar = () => {
  const { productState } = useContext(ProductContext);
  const { filterState, filterDispatch } = useContext(FilterContext);

  const brandArr = productState?.products?.reduce(
    (acc, { brand }) => (!acc.includes(brand) ? [...acc, brand] : acc),
    []
  );

  const ratingArr = [4, 3, 2, 1];

  const sortByPriceArr = [
    { label: "High To Low", value: "HTL" },
    { label: "Low To High", value: "LTH" },
    { label: "Reset", value: "RESET" },
  ];

  return (
    <div className="filters">
      <div className="filter-heading">
        <h2>Filters</h2>
        <button
          onClick={() =>
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" })
          }
        >
          Clear
        </button>
      </div>

      <h3>Price</h3>
      <div className="price-range-filter">
        <div className="price-range">
          <p>100</p>
          <p>1500</p>
          <p>3000</p>
        </div>
        <input
          type="range"
          className="price-slider"
          min={100}
          max={3000}
          value={filterState?.priceRange}
          onChange={(e) =>
            filterDispatch({ type: "SET_PRICE_RANGE", payload: e.target.value })
          }
        />
      </div>

      <h3>Category</h3>
      <div className="category-filter">
        {productState?.categories?.map(({ _id, categoryName }) => (
          <label key={_id}>
            <input
              type="checkbox"
              key={categoryName}
              checked={filterState?.categoryFilter?.includes(categoryName)}
              onChange={() =>
                filterDispatch({
                  type: "SET_CATEGORY_FILTER",
                  payload: categoryName,
                })
              }
            />
            {categoryName}
          </label>
        ))}
      </div>

      <h3>Brands</h3>
      <div className="brand-filter">
        {brandArr?.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              key={brand}
              checked={filterState?.brandFilter?.includes(brand)}
              onChange={(e) =>
                filterDispatch({ type: "SET_BRAND_FILTER", payload: brand })
              }
            />
            {brand}
          </label>
        ))}
      </div>

      <h3>Ratings</h3>
      <div className="rating-filter">
        {ratingArr?.map((rating) => {
          return (
            <label key={rating}>
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={Number(filterState?.ratingFilter) === Number(rating)}
                onChange={(e) =>
                  filterDispatch({
                    type: "SET_RATING_FILTER",
                    payload: e.target.value,
                  })
                }
              />
              {rating}⭐ and above
            </label>
          );
        })}
      </div>

      <h3>Sort By Price:</h3>
      <div className="price-filter">
        {sortByPriceArr?.map(({ label, value }) => (
          <label key={value}>
            <input
              type="radio"
              name="sort"
              value={value}
              checked={filterState?.sortByPriceFilter === value}
              onChange={(e) =>
                filterDispatch({
                  type: "SET_SORTBYPRICE_FILTER",
                  payload: e.target.value,
                })
              }
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
