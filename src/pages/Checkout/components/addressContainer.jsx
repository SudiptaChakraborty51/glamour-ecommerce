import React, { useContext, useState } from "react";
import "./addressContainer.css";
import { ProductContext } from "../../../contexts/productContext";

const AddressContainer = () => {
  const { productState } = useContext(ProductContext);
  const [selectedAddress, setSelectedAddress] = useState(
    productState?.address[0]
  );
  console.log(selectedAddress);
  return productState?.address?.length === 0 ? (
    <p>No address is added!</p>
  ) : (
    <div className="address-div">
      {productState?.address?.map(
        ({
          id: addressId,
          userName,
          houseNumber,
          city,
          state,
          country,
          pincode,
          mobileNumber,
        }) => {
          return (
            <div className="address-item-div">
              <label>
                <input
                  type="radio"
                  name="address-radio"
                  checked={selectedAddress.id === addressId}
                  onChange={(e) => {
                    setSelectedAddress(
                      productState?.address?.find(({ id }) => id === addressId)
                    );
                  }}
                />
                <strong>{userName}</strong>
                <p>
                  {houseNumber}, {city}, {state}
                </p>
                <p>
                  Pincode: {pincode}, {country}
                </p>
                <p>Phone Number: {mobileNumber}</p>
              </label>
              <hr />
            </div>
          );
        }
      )}
    </div>
  );
};

export default AddressContainer;
