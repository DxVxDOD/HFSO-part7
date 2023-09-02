import { useState } from "react"

export const useFrom = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {value, onChange, type}
}