import React, { useContext, useState } from "react";
import { ProductContext } from "../../../contexts/productContext";
import EditAddress from "../../../utils/editAddress";
import AddressForm from "../../../utils/addressForm";
import "../accountDetails.css";
import { toast } from "react-toastify";

const AddressDetails = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const [isAddAddress, setIsAddAddress] = useState(false);
  return (
    <div className="address-details">
      {productState?.address?.length === 0 && <h4>No Address added!</h4>}
      {productState?.address?.map(
        ({
          id,
          userName,
          houseNumber,
          city,
          state,
          country,
          pincode,
          mobileNumber,
          isEdit,
        }) => {
          return (
            <div key={id}>
              <strong>{userName}</strong>
              <p>
                {houseNumber}, {city}, {state}
              </p>
              <p>
                Pincode: {pincode}, {country}
              </p>
              <p>Phone Number: {mobileNumber}</p>
              {isEdit && <EditAddress editAddressId={id} />}
              <button
                className="edit-address-btn"
                onClick={() =>
                  productDispatch({ type: "EDIT_ADDRESS", payload: id })
                }
              >
                Edit
              </button>
              <button
                className="delete-address-btn"
                onClick={() => {
                  productDispatch({
                    type: "DELETE_USER_ADDRESS",
                    payload: id,
                  });
                  toast.success("Deleted Address successfully!");
                }}
              >
                Delete
              </button>
              <hr />
            </div>
          );
        }
      )}
      <button className="add-address-btn" onClick={() => setIsAddAddress(true)}>
        + Add New Address
      </button>
      {isAddAddress && <AddressForm setIsAddAddress={setIsAddAddress} />}
    </div>
  );
};

export default AddressDetails;
