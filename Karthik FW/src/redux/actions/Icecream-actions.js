import * as IceCreamTypes from '../constants/Icecream-actiontypes';



export const addIceCreamActionCreator = ()=>{
    return async dispatch =>{
        await console.log("waiting")
        dispatch(addIceCreams())
    }
}

export const removeIceCreamActionCreator = ()=>{
    return async dispatch =>{
        await console.log("waiting")
        dispatch(removeIceCreams())
    }
}



// returns a action and payload
export const addIceCreams = payload =>({
    type : IceCreamTypes.ADD_ICECREAM,
    payload,
});


export const removeIceCreams = payload =>({
    type : IceCreamTypes.REMOVE_ICECREAM,
    payload,
});
