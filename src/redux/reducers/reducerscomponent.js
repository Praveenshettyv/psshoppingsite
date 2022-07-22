import {
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_ALL_PRODUCTS,
  UPDATE_CART,
} from "../action/actionType";
const initalstate = {
  products: [],
  cart: [],
};
console.log();
const reducerscomponent = (state = initalstate, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    case SELECTED_PRODUCT:
      return { ...state, products: action.payload };
    case REMOVE_SELECTED_PRODUCT:
      return { ...state, cart: action.payload };
    case UPDATE_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
export default reducerscomponent;
