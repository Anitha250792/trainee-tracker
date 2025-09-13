// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080/api/", // ✅ correct backend
  headers: { "Content-Type": "application/json" },
});

export const fetchProjects = (params) =>
  api.get("projects/", { params }).then((r) => r.data);

export const createProject = (payload) =>
  api.post("projects/", payload).then((r) => r.data);

export const updateProject = (id, payload) =>
  api.put(`projects/${id}/`, payload).then((r) => r.data);

export const deleteProject = (id) =>
  api.delete(`projects/${id}/`).then((r) => r.data);

export default api;
