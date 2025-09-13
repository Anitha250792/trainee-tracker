import React, { useEffect, useState } from "react";
import { fetchProjects, deleteProject, updateProject } from "../api/axios";
import MiniProjectItem from "./MiniProjectItem";

function MiniProjectList() {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({ status: "", priority: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const params = {};
      if (filters.status) params.status = filters.status;
      if (filters.priority) params.priority = filters.priority;
      const data = await fetchProjects(params);
      setProjects(data);
    } catch (err) {
      setError(err?.message || "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [filters]);

  const handleDelete = async (id) => {
    if (!confirm("Delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects((p) => p.filter((x) => x.id !== id));
      alert("Deleted");
    } catch (err) {
      alert("Delete failed: " + (err?.message || "Unknown"));
    }
  };

  const handleUpdate = async (id, patch) => {
    try {
      const updated = await updateProject(id, patch);
      setProjects((p) => p.map((x) => (x.id === id ? updated : x)));
      alert("Updated");
    } catch (err) {
      alert("Update failed: " + (err?.message || "Unknown"));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border">
        <select
          className="input"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">All status</option>
          <option value="todo">Todo</option>
          <option value="inprogress">In Progress</option>
          <option value="complete">Complete</option>
        </select>

        <select
          className="input"
          value={filters.priority}
          onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
        >
          <option value="">All priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button onClick={load} className="btn btn-secondary ml-auto">
          Refresh
        </button>
      </div>

      {loading && <div className="text-sm text-slate-500">Loading...</div>}
      {error && <div className="text-sm text-red-500">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <MiniProjectItem
            key={p.id}
            project={p}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {projects.length === 0 && !loading && (
        <div className="mt-6 text-sm text-slate-500">No projects found.</div>
      )}
    </div>
  );
}

export default MiniProjectList;
