import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    return response.data
}