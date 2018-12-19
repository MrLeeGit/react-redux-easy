import { ADD_TO_CART, UPDATE_CART, DELETE_RFOM_CART } from '../actions/index';



const initialState = {
    cart: [{
      procuct: 'bread 700g',
      quantity: 2,
      unitCost: 90
    }, {
      procuct: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }]
  }
  
export default function(state = initialState, action){
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case UPDATE_CART:
      return {
        ...state,
        cart:state.cart.map((item) => {
          return item.procuct === action.payload.product ? action.payload : item;
        })
      }
    case DELETE_RFOM_CART:
      return {
        ...state,
        cart:state.cart.filter((item) => {
          return item.procuct !== action.payload.product
        })
      }
    default :
      return state
  }
}