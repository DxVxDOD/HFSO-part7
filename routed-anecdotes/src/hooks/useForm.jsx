import { useState } from "react"

export const useFrom = (type) => {
    const [value, setvalue] = useState('')

    const onChange = (e) => {
        setvalue(e.target.value)
    }

    const reset = () => setvalue('')

    return {value, onChange, type, reset}
}