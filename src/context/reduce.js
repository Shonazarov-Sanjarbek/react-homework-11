export const initialState = {
    son: 0,
    wishlist: [],
    cart: [],
    token: null,
  }
  
export const reducer = (state, action) => {
    switch(action.type){
      case "INC":
        return {...state, son: state.son + action.payload}
      case "ADD_TO_WISHLIST":
        let index = state.wishlist.findIndex(item => item.id === action.payload.id)
        if (index < 0) {
          return {...state, wishlist: [...state.wishlist, action.payload]}        
        }else{
          return {...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id)}
        }

      case "INC_CART":
        let cartIndex = state.cart.findIndex(item => item.id === action.payload.id)
        if (cartIndex < 0) {
          return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
        }else{
          return {...state, cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)}
        }
      case "DEC_CART":
        return {...state, cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + -1} : item)}
      case "REMOVE_CART":
        return state
      default:
        return state
    }
  }