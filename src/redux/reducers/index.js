const initialState = {
  orderList: []
}

function rootReducer(state = initialState, action) {
  if (action.type === 'GET_ORDERS') {
    console.log('F'); 
    return {orderList: []}
  } else if (action.type === 'RECEIVE_ORDERS') {
    return {...state, isReceiveOrders: true, orderList: action.orderList};
  } 
  return state;
}

export default rootReducer;