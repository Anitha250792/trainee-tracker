import React, { useState } from 'react'
import MiniProjectList from '../components/MiniProjectList'
import MiniProjectForm from '../components/MiniProjectForm'
import { useAuth } from '../context/AuthContext'


export default function TrainerDashboard(){
const { role } = useAuth()
const [refreshKey, setRefreshKey] = useState(0)


return (
<section className="space-y-6">
<div className="flex items-center justify-between">
<h1 className="text-2xl font-bold">Trainer Dashboard</h1>
<div className="text-sm text-slate-500">Role: <span className="font-medium">{role}</span></div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<MiniProjectForm onSaved={() => setRefreshKey(k => k + 1)} />
</div>


<div className="lg:col-span-2">
{/* Use key to force reload after create */}
<MiniProjectList key={refreshKey} role="trainer" />
</div>
</div>
</section>
)
}