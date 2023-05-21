import axios from "axios";

export const handleCartQuantityChange = async (dataDispatch, itemId, type) => {
    try {
        const encodedToken = localStorage.getItem('token');
        const {status, data} = await axios.post(`api/user/cart/${itemId}`, {action: {type}}, {
            headers: {
                authorization : encodedToken,
            }
        });
        if(status === 200) {
            dataDispatch({type: "SET_CART", payload: data?.cart})
        }
    }catch(error) {
        console.log(error);
    }
}
