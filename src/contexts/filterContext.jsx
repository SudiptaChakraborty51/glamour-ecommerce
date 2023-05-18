import React, { createContext, useReducer } from "react";
import filterReducer from "../reducer/filterReducer";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
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

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
