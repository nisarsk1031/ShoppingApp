export const productReducer=(state={product:[],cart:[],selectedProducts:[]},action)=>{
    if(action.type==="Add-Product"){
        return {...state,product:[...action.data,...state.product]}
    }
    if(action.type==="Selected-Product"){
        return{...state,selectedProducts:[action.data]}
    }
    if(action.type==="Add-cart"){
        return {...state,cart:[{...action.data,key:state.cart.length },...state.cart]}
    }
    if(action.type==="Remove-Product"){
        const filterd = state.cart.filter((item)=>item !== action.data )
        return{...state,cart:filterd}
    }
    return state
}