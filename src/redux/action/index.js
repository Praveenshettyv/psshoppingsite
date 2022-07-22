import {
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_ALL_PRODUCTS,
  UPDATE_CART,
} from "./actionType";
export const setallproducts = (data) => {
  return {
    type: SET_ALL_PRODUCTS,
    payload: data,
  };
};
export const selectedprodut = (data) => {
  return {
    type: SELECTED_PRODUCT,
    payload: data,
  };
};
export const removeslectedproduct = (data) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: data,
  };
};
export const updatethecart = (data) => {
  console.log(data, "this is me");
  return {
    type: UPDATE_CART,
    payload: data,
  };
};
