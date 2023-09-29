import { MEALS_TYPES } from "../types/actionTypes";

const initialState = {
    mealsData: [],
    meal:{},
    loading:false
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type){
        case MEALS_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload,
            } 
        case MEALS_TYPES.GET_MEALS:
            return {
                ...state,
                mealsData: action.payload,
            } 
        case MEALS_TYPES.GET_MEALS_BY_ID:
            return {
                ...state,
                meal: action.payload,
            } 
        default: 
            return state;
    }
}

export default mealsReducer