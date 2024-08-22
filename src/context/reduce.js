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
      case "ADD_TO_CART":
        return state
      case "INC_CART":
        return state
      case "DEC_CART":
        return state
      default:
        return state
    }
  }