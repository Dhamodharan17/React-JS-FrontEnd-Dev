import * as Action from "./actionConstants";
import {getTransactionApi }from '../../service/ApiLTrans'

const getTransaction = (body) => {
    console.log("line number 4 inside getTransaction() Action creater")
    console.log(body)
    return {
        type: Action.GET_TRANSACTION,
        payload: body
    }
}
const failedTrans = (body) => {
    return {
        type: Action.FAILED_TRANSACTION,
     
    }
}

 export const getTransList = () => {
    console.log("line number 18 inside gettransList() thunk ")
    return (dispatch) => {
      
        return getTransactionApi().then(
            response => dispatch(getTransaction(response.data)),
            err => dispatch(failedTrans(err))
        )
    };
}
export const getExistTransList = () => {
    console.log("line number 18 inside gettransList() thunk ")
    return (dispatch) => {
      
        return getTransactionApi().then(
            response => dispatch(failedTrans(response.data)),
            err => dispatch(failedTrans(err))
        )
    };
}

