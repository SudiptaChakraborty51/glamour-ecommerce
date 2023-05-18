import React, { createContext, useContext, useReducer } from "react";
import filterReducer from "../reducer/filterReducer";
import { ProductContext } from "./productContext";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { productState } = useContext(ProductContext);

  const initialFilter = {
    search: "",
    priceRange: 10000,
    categoryFilter: [],
    brandFilter: [],
    ratingFilter: "",
    sortByPriceFilter: "",
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );

  console.log(".........................");
  console.log("rating", filterState?.ratingFilter);
  console.log("productState", productState);

  const searchFilteredProducts =
    filterState?.search?.length > 0
      ? productState?.products?.filter(({ name }) =>
          name.toLowerCase().includes(filterState?.search.toLowerCase())
        )
      : productState?.products;

  const priceRangeFilteredProducts = searchFilteredProducts?.filter(
    ({ price }) => Number(price) <= Number(filterState?.priceRange)
  );

  console.log("priceRangeProducts", priceRangeFilteredProducts);

  const categoryFilteredProducts =
    filterState?.categoryFilter?.length > 0
      ? priceRangeFilteredProducts?.filter(({ categoryName }) =>
          filterState?.categoryFilter?.includes(categoryName)
        )
      : priceRangeFilteredProducts;

  console.log("categoryProducts", categoryFilteredProducts);

  const brandFilteredProducts =
    filterState?.brandFilter?.length > 0
      ? categoryFilteredProducts?.filter(({ brand }) =>
          filterState?.brandFilter?.includes(brand)
        )
      : categoryFilteredProducts;

  console.log("brandProducts", brandFilteredProducts);

  const ratingFilteredProducts =
    filterState?.ratingFilter?.length > 0
      ? brandFilteredProducts?.filter(
          ({ ratings: { value } }) =>
            Number(value) >= Number(filterState?.ratingFilter)
        )
      : brandFilteredProducts;

  console.log("ratingProducts", ratingFilteredProducts);

  const sortByPriceFilteredProducts =
    filterState?.sortByPriceFilter?.length > 0
      ? (() => {
          switch (filterState.sortByPriceFilter) {
            case "LTH":
              return [...ratingFilteredProducts]?.sort(
                (product1, product2) => product1.price - product2.price
              );
            case "HTL":
              return [...ratingFilteredProducts]?.sort(
                (product1, product2) => product2.price - product1.price
              );
            case "RESET":
              return ratingFilteredProducts;
            default:
              return ratingFilteredProducts;
          }
        })()
      : ratingFilteredProducts;

  console.log("SortProducts", sortByPriceFilteredProducts);
  console.log(".........................");

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, sortByPriceFilteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
