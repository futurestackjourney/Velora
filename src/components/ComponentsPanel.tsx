import React from "react";

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const ComponentsPanel: React.FC<Props> = ({ selectedId, onSelect }) => {
  return (
    <section className="p-4 bg-card flex-1 overflow-auto">
      <h4 className="text-sm font-semibold mb-3">Components (click to select)</h4>

      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={() => onSelect("btn-1")}
          className={`p-3 rounded border border-border text-left ${selectedId === "btn-1" ? "bg-bg/30" : ""}`}
        >
          Button — id: <span className="text-secondary">btn-1</span>
        </button>

        <button
          onClick={() => onSelect("card-1")}
          className={`p-3 rounded border border-border text-left ${selectedId === "card-1" ? "bg-bg/30" : ""}`}
        >
          Card — id: <span className="text-secondary">card-1</span>
        </button>

        <button
          onClick={() => onSelect("box-1")}
          className={`p-3 rounded border border-border text-left ${selectedId === "box-1" ? "bg-bg/30" : ""}`}
        >
          Box — id: <span className="text-secondary">box-1</span>
        </button>
      </div>
    </section>
  );
};

export default ComponentsPanel;
