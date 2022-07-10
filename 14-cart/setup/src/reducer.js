const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    // const newCart = state.cart.filter(
    //   (cartItem) => cartItem.id !== action.payload
    // );
    // return { ...state, cart: newCart };
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  return state;
};

export default reducer;
