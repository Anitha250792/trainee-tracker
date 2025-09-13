import React, { useState } from "react";
import MiniProjectForm from "./components/MiniProjectForm";
import MiniProjectList from "./components/MiniProjectList";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [activePage, setActivePage] = useState("projects"); // navigation

  const handleSaved = () => {
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen flex bg-pink-50">
      {/* Sidebar */}
      <aside className="w-64 bg-pink-200 text-pink-900 flex flex-col shadow-md">
        <div className="px-6 py-4 border-b border-pink-300">
          <h1 className="text-xl font-bold">Trainee Tracker</h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-3">
          <button
            onClick={() => setActivePage("projects")}
            className={`block w-full text-left px-4 py-2 rounded-lg ${
              activePage === "projects"
                ? "bg-pink-400 text-white font-medium"
                : "hover:bg-pink-300"
            }`}
          >
            📋 Projects
          </button>
          <button
            onClick={() => setActivePage("reports")}
            className={`block w-full text-left px-4 py-2 rounded-lg ${
              activePage === "reports"
                ? "bg-pink-400 text-white font-medium"
                : "hover:bg-pink-300"
            }`}
          >
            📊 Reports
          </button>
          <button
            onClick={() => setActivePage("settings")}
            className={`block w-full text-left px-4 py-2 rounded-lg ${
              activePage === "settings"
                ? "bg-pink-400 text-white font-medium"
                : "hover:bg-pink-300"
            }`}
          >
            ⚙️ Settings
          </button>
        </nav>

        <div className="px-6 py-4 border-t border-pink-300 text-sm">
          © {new Date().getFullYear()} Trainee Tracker
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activePage === "projects" && (
          <div className="space-y-8">
            <div className="form-container">
              <MiniProjectForm onSaved={handleSaved} />
            </div>
            <MiniProjectList key={refreshKey} />
          </div>
        )}

        {activePage === "reports" && (
          <div className="card">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">Reports</h2>
            <p className="text-sm text-slate-700">
              Report features coming soon (e.g., completion stats, trainee progress).
            </p>
          </div>
        )}

        {activePage === "settings" && (
          <div className="card">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">Settings</h2>
            <p className="text-sm text-slate-700">
              Configure app preferences, authentication, and more here.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
