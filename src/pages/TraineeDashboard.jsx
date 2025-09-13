import React from 'react'
import MiniProjectList from '../components/MiniProjectList'
import { useAuth } from '../context/AuthContext'


export default function TraineeDashboard(){
const { role } = useAuth()


return (
<section className="space-y-6">
<div className="flex items-center justify-between">
<h1 className="text-2xl font-bold">Trainee Dashboard</h1>
<div className="text-sm text-slate-500">Role: <span className="font-medium">{role}</span></div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<MiniProjectList role="trainee" />
</div>


<aside className="space-y-4">
<div className="p-4 rounded-2xl shadow bg-white border">
<h3 className="font-semibold">Quick Filters</h3>
<p className="text-sm text-slate-500">Use the filters above to narrow projects by status or priority.</p>
</div>


<div className="p-4 rounded-2xl shadow bg-white border">
<h3 className="font-semibold">Tips</h3>
<ul className="text-sm text-slate-600 list-disc list-inside">
<li>Mark a project complete once finished.</li>
<li>Discuss edits with your Trainer when changing scope.</li>
</ul>
</div>
</aside>
</div>
</section>
)
}