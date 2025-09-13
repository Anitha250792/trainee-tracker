import React, { createContext, useContext, useState, useEffect } from 'react'


const AuthContext = createContext(null)


export function AuthProvider({ children }){
const [token, setToken] = useState(localStorage.getItem('token') || null)
const [role, setRole] = useState(localStorage.getItem('role') || 'trainee')


useEffect(() => {
if (token) localStorage.setItem('token', token)
else localStorage.removeItem('token')
}, [token])


useEffect(() => {
if (role) localStorage.setItem('role', role)
}, [role])


const login = ({ token, role = 'trainee' }) => {
setToken(token)
setRole(role)
}
const logout = () => {
setToken(null); setRole('trainee')
}


return (
<AuthContext.Provider value={{ token, role, login, logout, setRole }}>
{children}
</AuthContext.Provider>
)
}


export const useAuth = () => useContext(AuthContext)