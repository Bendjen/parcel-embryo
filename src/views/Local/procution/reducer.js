const CHOOSE_TYPE = 'CHOOSE_TYPE';
const chooseType = (type)=>{
    return{
        type : CHOOSE_TYPE,
        payload : type
    }
}

const initState = {
    productionType : 1
}

const reducer = (state=initState,action) => {
    switch (action.type){
        case CHOOSE_TYPE:
            return{
                ...state,
                productionType : action.payload
            }
        default:
            return state
    }
    
}



export default reducer
export { chooseType }