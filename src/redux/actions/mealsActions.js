import { MEALS_TYPES } from "../types/actionTypes";
import { getDataApi, getDataApiById } from "../../utils/api_helper/fetchApi";
import { modificationData } from "../../utils/customData";

export const getMeals =  (searchValue) => async (dispatch) => {
    try {
        dispatch({ type: MEALS_TYPES.LOADING, payload: true })
        const res = await getDataApi('search.php', searchValue)
        const modifyData = res.data.meals === null ? [] : res.data.meals.slice(0, 10).map(item => ({
            id: item.idMeal,
            name: item.strMeal,
            image: item.strMealThumb,
            sourceLink:item.strSource,
            youtubeLink:item.strYoutube
        }))
        dispatch({ type: MEALS_TYPES.GET_MEALS, payload: modifyData})
        dispatch({ type: MEALS_TYPES.LOADING, payload: false })
    } catch (error) {
        throw new Error(error)
    }
}

export const getMealById =  (id) => async (dispatch) => {
    try {
        dispatch({ type: MEALS_TYPES.LOADING, payload: true })
        const res = await getDataApiById('lookup.php', id)
        let meal = res.data.meals[0]
        const modifyData = await modificationData(meal)
        dispatch({ type: MEALS_TYPES.GET_MEALS_BY_ID, payload: modifyData })
        dispatch({ type: MEALS_TYPES.LOADING, payload: false })
    } catch (error) {
        throw new Error(error)
    }
}