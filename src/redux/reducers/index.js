const initialState = {
  orderList: [],
  orderSearchText: ''
}

function rootReducer(state = initialState, action) {
  if (action.type === 'RECEIVE_ORDERS') {
    return {...state, isReceiveOrders: true, orderList: action.orderList};
  } else if (action.type === 'SET_ORDER_SEARCH_TEXT') {
    return {...state, orderSearchText: action.text};
  }
  return state;
}

export default rootReducer;