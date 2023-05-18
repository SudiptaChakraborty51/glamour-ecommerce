const productReducer = (state, action) => {
  switch(action.type) {
    case 'INITIALIZE_PRODUCTS':
        return {...state, products: action.payload};
    case 'INITIALIZE_CATEGORIES':
        return {...state, categories: action.payload};
    default:
        return state;
  }
}

export default productReducer
