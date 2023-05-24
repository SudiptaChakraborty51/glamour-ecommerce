import React, { useContext, useState } from "react";
import "./addressForm.css";
import { ProductContext } from "../contexts/productContext";
import { v4 as uuid } from "uuid";

const AddressForm = ({ setIsAddAddress }) => {
  const { productDispatch } = useContext(ProductContext);
  const [addressForm, setAddressForm] = useState({
    id: uuid(),
    userName: "",
    houseNumber: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobileNumber: "",
  });

  const addAddressHandler = (e) => {
    e.preventDefault();
    productDispatch({
      type: "SET_USER_ADDRESS",
      payload: addressForm,
    });
    setIsAddAddress(false);
  };

  return (
    <div className="address-form">
      <div className="address-form-content">
        <h3>Add New Address</h3>
        <form onSubmit={addAddressHandler}>
          <input
            placeholder="Enter Name"
            type="text"
            required
            name="userName"
            value={addressForm.userName}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter House No., Road, Colony"
            type="text"
            required
            name="houseNumber"
            value={addressForm.houseNumber}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter City"
            type="text"
            required
            name="city"
            value={addressForm.city}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter State"
            type="text"
            required
            name="state"
            value={addressForm.state}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Country"
            type="text"
            required
            name="country"
            value={addressForm.country}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Pincode"
            type="number"
            required
            name="pincode"
            value={addressForm.pincode}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Mobile Number"
            type="number"
            required
            name="mobileNumber"
            value={addressForm.mobileNumber}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <div className="address-form-btns">
            <button type="submit" className="add-btn">
              Add
            </button>
            <button
              onClick={() => setIsAddAddress(false)}
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

export default AddressForm;
