import { useState, useEffect } from "react"
import { getAll } from "../service/country"

export const useCountry = (name: string) => {
    const [country, setCountry] = useState<null>(null)

    useEffect( () => {
        if(name.length > 1) {
            getAll()
            .then(countries => countries
            .filter((country: { name: { common: string } }) => country.name.common.toLowerCase()
            .includes(name.toLowerCase())))
            .then(country => {
                if(country.length < 1) {
                    setCountry(null)
                }
                setCountry(country)
            })
        }
    }, [name])
  
    return country
  }