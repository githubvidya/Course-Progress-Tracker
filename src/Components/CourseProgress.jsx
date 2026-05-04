import React from 'react'
import { useState } from 'react';
import "../Components/Progress.css"

const CourseProgress = () => {
  const initialModules = [
    { id: 1, title: "Introduction to React", completed: true },
    { id: 2, title: "Components and Props", completed: true },
    { id: 3, title: "State and Hooks", completed: false },
    { id: 4, title: "Routing", completed: false },
    { id: 5, title: "API Integration", completed: false },
  ];

  const [modules, setModules] = useState(initialModules);
  const [newModule, setNewModule] = useState("");

  const toggleModule = (id) => {
    setModules(
      modules.map((module) =>
        module.id === id
          ? { ...module, completed: !module.completed }
          : module
      )
    );
  };

  const addModule = () => {
    if (!newModule.trim()) return;

    const module = {
      id: Date.now(),
      title: newModule,
      completed: false,
    };

    setModules([...modules, module]);
    setNewModule("");
  };

  const deleteModule = (id) => {
    setModules(modules.filter((module) => module.id !== id));
  };

  const resetProgress = () => {
    setModules(
      modules.map((module) => ({
        ...module,
        completed: false,
      }))
    );
  };

  const completedCount = modules.filter(
    (module) => module.completed
  ).length;

  const progress = Math.round(
    (completedCount / modules.length) * 100
  );

  return (
    <div className="container">
      <h1>📚 Interactive Course Progress Tracker</h1>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      <p className="summary">
        Completed {completedCount} of {modules.length} modules
      </p>

      <div className="add-module">
        <input
          type="text"
          placeholder="Add new module..."
          value={newModule}
          onChange={(e) => setNewModule(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addModule()}
        />
        <button onClick={addModule}>Add</button>
      </div>

      <div className="actions">
        <button className="reset-btn" onClick={resetProgress}>
          Reset Progress
        </button>
      </div>

      <div className="module-list">
        {modules.map((module) => (
          <div key={module.id} className="module-card">
            <label className="module-label">
              <input
                type="checkbox"
                checked={module.completed}
                onChange={() => toggleModule(module.id)}
              />

              <span
                className={`module-title ${
                  module.completed ? "completed" : ""
                }`}
              >
                {module.title}
              </span>
            </label>

            <button
              className="delete-btn"
              onClick={() => deleteModule(module.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseProgress