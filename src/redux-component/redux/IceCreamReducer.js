export const BUY_ICECREAM = 'BUY_ICECREAM'

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

export const initialIceCreamState = {
    noOfIceCream: 20
}

export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            }
        default:
            return state
    }
}