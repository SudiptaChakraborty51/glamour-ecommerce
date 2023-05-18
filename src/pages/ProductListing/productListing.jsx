import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import ProductCard from "../../components/ProductCard/productCard";
import "./productListing.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { FilterContext } from "../../contexts/filterContext";

const ProductListing = () => {
  const { productState } = useContext(ProductContext);
  const { filterState } = useContext(FilterContext);
  console.log(".........................");
  console.log("productState", productState);

  const categoryFilteredProducts =
    filterState?.categoryFilter?.length > 0
      ? productState?.products?.filter(({ categoryName }) =>
          filterState?.categoryFilter?.includes(categoryName)
        )
      : productState?.products;

  console.log("categoryProducts", categoryFilteredProducts);

  const brandFilteredProducts =
    filterState?.brandFilter?.length > 0
      ? categoryFilteredProducts?.filter(({ brand }) =>
          filterState?.brandFilter?.includes(brand)
        )
      : categoryFilteredProducts;

  console.log("brandProducts",brandFilteredProducts);

  const ratingFilteredProducts =
    filterState?.ratingFilter?.length > 0
      ? brandFilteredProducts?.filter(
          ({ ratings: {value} }) =>
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
    <div className="products">
      <div className="sidebar-filter">
        <Sidebar />
      </div>
      <div className="productListing">
        <h2>Showing All Products<small>({sortByPriceFilteredProducts?.length})</small></h2>
        <ul>
          {sortByPriceFilteredProducts?.map((product) => (
            <ProductCard productsData={product} key={product._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductListing;
