import axios from 'axios'
import { useEffect, useState } from 'react'

let token = null

export const setToken = newToken => {
  token = `bearer ${newToken}`
}

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])

    useEffect(() => {
        async () => {
            const response = await axios.get(baseUrl)
            setResources(response.data)
        }
    },[baseUrl])

        const create = async newObject => {

        const config = {
            headers: { Authorization: token },
        }
            const response = await axios.post(baseUrl, newObject, config)
            setResources(response.data)
        }

        const update = async (id, newObject) => {
            const response = await axios.put(`${baseUrl}/${id}`, newObject)
            setResources(response.data)
        }


   

    return [ resources, { create, update } ]
}
