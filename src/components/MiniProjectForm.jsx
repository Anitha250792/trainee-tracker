import React, { useState } from "react";
import { createProject, updateProject } from "../api/axios";

function MiniProjectForm({ initial, onSaved }) {
  const [form, setForm] = useState(
    initial || {
      title: "",
      description: "",
      assignedTo: "",
      priority: "medium",
      dueDate: "",
      status: "todo",
    }
  );
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSaving(true);

    try {
      if (initial) {
        const updated = await updateProject(initial.id, form);
        onSaved && onSaved(updated);
        alert("Updated");
      } else {
        const created = await createProject(form);
        onSaved && onSaved(created);
        setForm({
          title: "",
          description: "",
          assignedTo: "",
          priority: "medium",
          dueDate: "",
          status: "todo",
        });
        alert("Created");
      }
    } catch (err) {
      console.error(err);
      alert("Save failed: " + (err?.message || "Unknown"));
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="text-lg font-semibold text-pink-700 mb-3">
        {initial ? "Update Project" : "Create New Project"}
      </h2>

      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="input"
          placeholder="Enter project title"
        />
        {errors.title && (
          <div className="text-xs text-red-500 mt-1">{errors.title}</div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Assigned To</label>
        <input
          value={form.assignedTo}
          onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
          className="input"
          placeholder="Enter trainee name"
        />
        {errors.assignedTo && (
          <div className="text-xs text-red-500 mt-1">{errors.assignedTo}</div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            className="input"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <input
            type="date"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            className="input"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="textarea"
          rows={4}
          placeholder="Enter details about the project"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button
          type="submit"
          disabled={saving}
          className="btn btn-primary"
        >
          {saving ? "Saving..." : initial ? "Update Project" : "Create Project"}
        </button>
      </div>
    </form>
  );
}

export default MiniProjectForm;
