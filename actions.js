export const IncAction=()=> async dispatch =>{  //async:so the after sent of this particular action then only reducer value will be move
    dispatch({
        type:"INCREMENT"
    })
}

export const DecAction=()=> async dispatch =>{
    dispatch({
        type:"DECREMENT"
    })
}
