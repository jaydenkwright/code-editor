import { useState, useEffect } from 'react'

const PREFIX = 'CODE_EDITOR_'

const useLocalStorage= (key: string, initialValue: any) => {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonVal = localStorage.getItem(prefixedKey)
        if (jsonVal) return JSON.parse(jsonVal)
        
        if (typeof initialValue === 'function'){
            return initialValue()
        }else{
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
    return [value, setValue]
}

export default useLocalStorage
