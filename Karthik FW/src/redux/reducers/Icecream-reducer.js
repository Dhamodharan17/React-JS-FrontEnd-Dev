import * as IceCreamTypes from "../constants/Icecream-actiontypes";
const initila_data = {
  counter: 0,
};

function reducer(state = initila_data, action) {
  switch (action.type) {
    case IceCreamTypes.ADD_ICECREAM:
        return {
            ...state,
            counter:state.counter+1
        };
    case IceCreamTypes.REMOVE_ICECREAM:
    
      return {
          ...state,
          counter:state.counter-1
      };

    default:
      return state;
  }
}

export default reducer;
