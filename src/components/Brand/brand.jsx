import React, { useContext } from "react";
import "./brand.css";
import mamaearth from "../../assets/mamaearth_brand.png";
import lakme from "../../assets/lakme_brand.avif";
import veet from "../../assets/Veet_brand.png";
import plum from "../../assets/plum_brand.webp";
import dotKey from "../../assets/dot&key_brand.jpg";
import mac from "../../assets/mac_brand.png";
import nivea from "../../assets/NIVEA_brand.png";
import philips from "../../assets/Phillips_brand.svg";
import { FilterContext } from "../../contexts/filterContext";
import { useNavigate } from "react-router-dom";

const Brand = () => {
  const { filterDispatch } = useContext(FilterContext);
  const navigate = useNavigate();

  return (
    <div className="top-brands">
      <img
        src={mamaearth}
        alt="mamaearth"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "mamaearth" });
          navigate("/products");
        }}
      />
      <img
        src={lakme}
        alt="lakme"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "Lakme" });
          navigate("/products");
        }}
      />
      <img
        src={veet}
        alt="veet"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "Veet" });
          navigate("/products");
        }}
      />
      <img
        src={plum}
        alt="plum"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "Plum" });
          navigate("/products");
        }}
      />
      <img
        src={dotKey}
        alt="dotKey"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "Dot & Key" });
          navigate("/products");
        }}
      />
      <img
        src={mac}
        alt="mac"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "MAC" });
          navigate("/products");
        }}
      />
      <img
        src={nivea}
        alt="nivea"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "NIVEA" });
          navigate("/products");
        }}
      />
      <img
        src={philips}
        alt="philips"
        onClick={() => {
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          filterDispatch({ type: "SET_BRAND_FILTER", payload: "Philips" });
          navigate("/products");
        }}
      />
    </div>
  );
};

export default Brand;
