import { useRef, useEffect } from 'react'


// Small hook to produce AbortController signals per-request and clean up on unmount
export default function useAbortableRequest(){
const controllersRef = useRef([])


useEffect(() => {
return () => {
controllersRef.current.forEach(c => c.abort())
controllersRef.current = []
}
}, [])


const getSignal = () => {
const controller = new AbortController()
controllersRef.current.push(controller)
return controller.signal
}


return { getSignal }
}