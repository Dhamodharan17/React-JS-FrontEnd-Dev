import * as Action from "../actions/actionConstants"

const initialState = {    transaction: [] }

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.FAILED_TRANSACTION:
         
            return {
                ...state
               
            }
        case Action.GET_TRANSACTION:
            console.log("Reducer 1")
            const updatetransaction = [...state.transaction, ...action.payload]
            console.log(updatetransaction)
            return {
                ...state,
                transaction: updatetransaction
              
            }
        default:
            return state;
    }
}
export default reducer;