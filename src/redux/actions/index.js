// function requestOrders() {
//   return { type: 'REQUEST_ORDERS'};
// }

export const setOrderSearchText = text => ({type: 'SET_ORDER_SEARCH_TEXT', text});

function receiveOrders(orderList) {
  return { type: 'RECEIVE_ORDERS', orderList };
}

export function fetchOrders(searchText) {
  return function(dispatch) {
    let url = `${window.location.origin}/api/Orders`;

    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:8080/api/Orders';
    }

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        const criteria = ["id", "ZIP", "address", "country", "createdAt", "email", "firstName",
          "lastName", "phone", "region", "shippedAt", "status"];

        const matchesOrders = data.filter((order) => {
          const regex = new RegExp(`^${searchText}`, "gi");
          let isMatched = false;
    
          for (let i = 0; i < criteria.length; i++) {
            if ( `${order[criteria[i]]}`.match(regex)) {
              isMatched = true;
            }
          }
          return isMatched;
        });
        dispatch(receiveOrders(matchesOrders));
      });
  }
}