import { useEffect } from "react"

const useDebugger = (state:unknown) => {
    useEffect(()=>{
        console.log(state);
    },[state])
}

export default useDebugger;