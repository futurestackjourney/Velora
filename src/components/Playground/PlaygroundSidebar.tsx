import React from "react";

interface ControlProps {
  label: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
}

const SliderControl: React.FC<ControlProps> = ({
  label,
  min,
  max,
  step = 0.1,
  value,
  onChange,
}) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1 text-sm font-medium text-dark-text-primary">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full accent-pink cursor-pointer"
    />
  </div>
);

interface PlaygroundSidebarProps {
  mode: "gsap" | "framer";
  setMode: (v: "gsap" | "framer") => void;
  controls: {
    opacity: number;
    scale: number;
    duration: number;
    delay: number;
    x: number;
    y: number;
    rotation: number;
    repeat: number;
    yoyo: boolean;
    ease: string;
  };
  setControls: (v: any) => void;
}

const PlaygroundSidebar: React.FC<PlaygroundSidebarProps> = ({
  mode,
  setMode,
  controls,
  setControls,
}) => {
  const update = (key: keyof typeof controls, v: any) =>
    setControls({ ...controls, [key]: v });

  return (
    <div className="w-68 border-r border-dark-border p-4 space-y-3 fixed h-screen overflow-y-auto scrollbar mt-14 md:mt-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan">
          Animation Controls
        </h2>
        <button
          onClick={() => setMode(mode === "gsap" ? "framer" : "gsap")}
          className="text-xs px-3 py-1 rounded-lg bg-dark-border hover:bg-dark-text-secondary transition"
        >
          {mode === "gsap" ? "GSAP" : "Framer"}
        </button>
      </div>

      {/* Core Controls */}
      <SliderControl label="Opacity" min={0} max={1} step={0.05} value={controls.opacity} onChange={(v) => update("opacity", v)} />
      <SliderControl label="Scale" min={0.5} max={2} step={0.05} value={controls.scale} onChange={(v) => update("scale", v)} />
      <SliderControl label="Duration" min={0.5} max={5} step={0.1} value={controls.duration} onChange={(v) => update("duration", v)} />
      <SliderControl label="Delay" min={0} max={3} step={0.1} value={controls.delay} onChange={(v) => update("delay", v)} />
      <SliderControl label="Translate X" min={-200} max={200} step={10} value={controls.x} onChange={(v) => update("x", v)} />
      <SliderControl label="Translate Y" min={-200} max={200} step={10} value={controls.y} onChange={(v) => update("y", v)} />

      {/* Extra Controls */}
      <SliderControl label="Rotation" min={-360} max={360} step={5} value={controls.rotation} onChange={(v) => update("rotation", v)} />
      <SliderControl label="Repeat" min={0} max={10} step={1} value={controls.repeat} onChange={(v) => update("repeat", v)} />

      {/* Toggle & Select */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-dark-text-primary">Yoyo</span>
        <input
          type="checkbox"
          checked={controls.yoyo}
          onChange={(e) => update("yoyo", e.target.checked)}
          className="accent-pink-500"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium mb-1 text-dark-text-primary">Easing</label>
        <select
          value={controls.ease}
          onChange={(e) => update("ease", e.target.value)}
          className="w-full bg-dark-border p-2 rounded text-sm"
        >
          <option value="power1.inOut">power1.inOut</option>
          <option value="power2.inOut">power2.inOut</option>
          <option value="back.inOut">back.inOut</option>
          <option value="elastic.out(1,0.3)">elastic.out(1,0.3)</option>
          <option value="bounce.out">bounce.out</option>
        </select>
      </div>
    </div>
  );
};

export default PlaygroundSidebar;
