import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function NavBar(){
const { role, setRole, login, logout } = useAuth()
const navigate = useNavigate()


const handleFakeLogin = (asRole) => {
// In real app you'd authenticate to backend and get a JWT; this is a demo token
login({ token: 'demo.jwt.token', role: asRole })
navigate(asRole === 'trainer' ? '/trainer' : '/trainee')
}


return (
<header className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<Link to="/" className="text-xl font-semibold tracking-tight text-slate-800">Trainee Mini Project Tracker</Link>
<nav className="hidden md:flex gap-2 text-sm text-slate-600">
<Link to="/trainee" className="hover:underline">Trainee</Link>
<Link to="/trainer" className="hover:underline">Trainer</Link>
</nav>
</div>


<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
<span className="text-xs text-slate-400">Role</span>
<select
value={role}
onChange={e => setRole(e.target.value)}
className="rounded-md border px-2 py-1 text-sm bg-white"
>
<option value="trainee">Trainee</option>
<option value="trainer">Trainer</option>
</select>
</div>


<button
onClick={() => handleFakeLogin(role)}
className="rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-1 shadow-md text-sm"
>
Login as {role}
</button>


<button
onClick={() => { logout(); navigate('/') }}
className="rounded-md border px-3 py-1 text-sm"
>Logout</button>
</div>
</div>
</header>
)
}