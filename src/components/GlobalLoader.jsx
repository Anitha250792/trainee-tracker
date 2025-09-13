import React, { useState, useEffect } from 'react'


export default function GlobalLoader(){
const [loading, setLoading] = useState(false)


useEffect(() => {
const onStart = () => setLoading(true)
const onEnd = () => setLoading(false)


window.addEventListener('axios-start', onStart)
window.addEventListener('axios-end', onEnd)


return () => {
window.removeEventListener('axios-start', onStart)
window.removeEventListener('axios-end', onEnd)
}
}, [])


if (!loading) return null


return (
<div className="fixed inset-x-0 top-0 z-50">
<div className="h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 animate-pulse shadow-md" />
</div>
)
}