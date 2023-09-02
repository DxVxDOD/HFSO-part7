import { useState } from "react"
import apiService from "../service/apiService"

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])
  
    const create = (resource) => {
      setResources(apiService.create(baseUrl, resource))
    }
  
    const service = {
      create
    }
  
    return [
      resources, service
    ]
  }