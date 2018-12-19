import { combineReducers } from 'redux';
import cartReducer from './cart';
import productsReducer from './products';

const allReducers = {
	products: productsReducer,
	shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;