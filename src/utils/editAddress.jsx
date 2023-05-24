import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/productContext";
import "./editAddress.css";

const EditAddress = ({ editAddressId }) => {
  const { productState, productDispatch } = useContext(ProductContext);
  const [editAddress, setEditAddress] = useState({
    id: editAddressId,
    userName: productState?.address?.find(({ id }) => id === editAddressId)
      ?.userName,
    houseNumber: productState?.address?.find(({ id }) => id === editAddressId)
      ?.houseNumber,
    city: productState?.address?.find(({ id }) => id === editAddressId)?.city,
    state: productState?.address?.find(({ id }) => id === editAddressId)?.state,
    country: productState?.address?.find(({ id }) => id === editAddressId)
      ?.country,
    pincode: productState?.address?.find(({ id }) => id === editAddressId)
      ?.pincode,
    mobileNumber: productState?.address?.find(({ id }) => id === editAddressId)
      ?.mobileNumber,
  });
  return (
    <div className="edit-address-form">
      <div className="address-form-content">
        <h3>Edit Address</h3>
        <form>
          <input
            placeholder="Enter Name"
            type="text"
            required
            name="userName"
            value={editAddress.userName}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter House No., Road, Colony"
            type="text"
            required
            name="houseNumber"
            value={editAddress.houseNumber}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter City"
            type="text"
            required
            name="city"
            value={editAddress.city}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter State"
            type="text"
            required
            name="state"
            value={editAddress.state}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Country"
            type="text"
            required
            name="country"
            value={editAddress.country}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Pincode"
            type="number"
            required
            name="pincode"
            value={editAddress.pincode}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Mobile Number"
            type="number"
            required
            name="mobileNumber"
            value={editAddress.mobileNumber}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <div className="address-form-btns">
            <button
              type="submit"
              className="add-btn"
              onClick={() => {
                productDispatch({
                  type: "SAVE_EDITED_ADDRESS",
                  payload: [editAddress, editAddressId],
                });
              }}
            >
              Edit
            </button>
            <button
              type="submit"
              onClick={() => {
                productDispatch({
                  type: "CANCEL_EDITED_ADDRESS",
                  payload: editAddressId,
                });
              }}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAddress;
