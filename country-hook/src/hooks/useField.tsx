import { ChangeEvent, useState } from "react"

export const useField = (type: string) => {
    const [value, setValue] = useState('')
  
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
}