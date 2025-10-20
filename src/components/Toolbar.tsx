import React from "react";

const Toolbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
      <h1 className="text-lg font-semibold">Velora Playground</h1>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 transition">
          Run
        </button>
        <button className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-card">
          Reset
        </button>
      </div>
    </header>
  );
};

export default Toolbar;
