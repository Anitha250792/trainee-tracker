import axios from "axios";

// 👇 Change this if your backend runs elsewhere
const api = axios.create({
  baseURL: "http://127.0.0.1:8080/api/", 
  headers: {
    "Content-Type": "application/json",
  },
});

// --- Project APIs ---

// Fetch projects with optional filters
export const fetchProjects = async (params = {}, signal) => {
  const res = await api.get("projects/", { params, signal });
  return res.data;
};

// Create a new project
export const createProject = async (project) => {
  const res = await api.post("projects/", project);
  return res.data;
};

// Update a project
export const updateProject = async (id, patch) => {
  const res = await api.put(`projects/${id}/`, patch);
  return res.data;
};

// Delete a project
export const deleteProject = async (id) => {
  const res = await api.delete(`projects/${id}/`);
  return res.data;
};

export default api;
