const productReducer = (state, action) => {
  switch(action.type) {
    case 'INITIALIZE_PRODUCTS':
        return {...state, products: action.payload};
    case 'INITIALIZE_CATEGORIES':
        return {...state, categories: action.payload};
    case "SET_CART":
        return {...state, cart: action.payload};
    case "SET_WISHLIST":
        return {...state, wishlist: action.payload};
    default:
        return state;
  }
}

export default productReducer
