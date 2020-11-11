const initialState = {
  orderList: [],
  orderSearchText: '',
  idSelectedOrder: 1,
  popUp: null
}

function rootReducer(state = initialState, action) {
  if (action.type === 'RECEIVE_ORDERS') {
    return {...state, isReceiveOrders: true, orderList: action.orderList};
  } else if (action.type === 'SET_ORDER_SEARCH_TEXT') {
    return {...state, orderSearchText: action.text};
  } else if (action.type === 'CHANGE_SELECTED_ORDER') {
    return (state.idSelectedOrder !== action.id) ? {...state, idSelectedOrder: action.id} : {...state};
  } else if (action.type === 'OPEN_CREATE_PRODUCT_FORM') {
    return {...state, popUp: 'product'};
  } else if (action.type === 'OPEN_CREATE_ORDER_FORM') {
    return {...state, popUp: 'order'};
  } else if (action.type === 'CLOSE_FORM') {
    return {...state, popUp: null};
  }
  return state;
}

export default rootReducer;