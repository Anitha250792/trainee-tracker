import React from "react";

function MiniProjectItem({ project, onUpdate, onDelete }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-pink-700">{project.title}</h3>
      <p className="text-sm text-slate-600 mb-2">{project.description}</p>

      <div className="text-sm space-y-1">
        <div><span className="font-medium">Assigned:</span> {project.assignedTo}</div>
        <div><span className="font-medium">Priority:</span> {project.priority}</div>
        <div><span className="font-medium">Due:</span> {project.dueDate}</div>
        <div><span className="font-medium">Status:</span> {project.status}</div>
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onUpdate(project.id, { status: "inprogress" })}
          className="btn btn-secondary"
        >
          Mark In Progress
        </button>
        <button
          onClick={() => onUpdate(project.id, { status: "complete" })}
          className="btn btn-primary"
        >
          Mark Complete
        </button>
        <button
          onClick={() => onDelete(project.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MiniProjectItem;
