import axios from 'axios'
const api_url = 'https://www.themealdb.com/api/json/v1/1'

export const getDataApi = async (url_end_point, searchValue) => {
    const res = await axios.get(`${api_url}/${url_end_point}?s=${searchValue ? searchValue : ""}`)
    return res
}

export const getDataApiById = async (url_end_point, id) => {
    const res = await axios.get(`${api_url}/${url_end_point}?i=${id}`)
    return res
}

