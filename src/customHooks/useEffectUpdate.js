import { useState, useEffect } from "react";

export const useEffectUpdate = (cb, dependancies) => {
    const [mount, setMount] = useState(false)

    useEffect(() => {
        if (!mount) {
            setMount(true)
        }else{
            return cb()
        }
    }, dependancies)
}