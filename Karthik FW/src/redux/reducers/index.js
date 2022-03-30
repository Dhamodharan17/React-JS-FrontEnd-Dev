import { combineReducers } from "redux";
import reducer  from "./Icecream-reducer";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  icecreamreducer:reducer,
  allProducts: productsReducer,
  product: selectedProductsReducer,
 
});
export default reducers;
