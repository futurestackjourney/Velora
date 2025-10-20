import React, { useState, useEffect } from "react";
import PlaygroundEditor from "../components/Playground/PlaygroundEditor";
import PlaygroundPreview from "../components/Playground/PlaygroundPreview";
import PlaygroundSidebar from "../components/Playground/PlaygroundSidebar";


const Playground: React.FC = () => {
  const [mode, setMode] = useState<"gsap" | "framer">("gsap");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [runTrigger, setRunTrigger] = useState(0);

 const defaultControls = {
  opacity: 1,
  scale: 1,
  duration: 1.5,
  delay: 0,
  x: 100,
  y: 0,
  rotate: 0,
  skewX: 0,
  skewY: 0,
  borderRadius: 16,
  backgroundColor: "#ec4899", // pink-500 default
  ease: "power1.inOut",
};


  const [controls, setControls] = useState(defaultControls);
  const [code, setCode] = useState("");

useEffect(() => {
  if (mode === "gsap") {
    setCode(`
gsap.to("#demo-element", {
  opacity: ${controls.opacity},
  scale: ${controls.scale},
  duration: ${controls.duration},
  delay: ${controls.delay},
  x: ${controls.x},
  y: ${controls.y},
  rotate: ${controls.rotate},
  skewX: ${controls.skewX},
  skewY: ${controls.skewY},
  borderRadius: ${controls.borderRadius},
  backgroundColor: "${controls.backgroundColor}",
  ease: "${controls.ease}",
  yoyo: true,
  repeat: -1
});
    `);
  } else {
    setCode(`
<motion.div
  id="demo-element"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{
    opacity: ${controls.opacity},
    scale: ${controls.scale},
    x: ${controls.x},
    y: ${controls.y},
    rotate: ${controls.rotate},
    skewX: ${controls.skewX},
    skewY: ${controls.skewY},
    borderRadius: ${controls.borderRadius},
    backgroundColor: "${controls.backgroundColor}",
  }}
  transition={{
    duration: ${controls.duration},
    delay: ${controls.delay},
    repeat: Infinity,
    repeatType: "reverse",
    ease: "${controls.ease}",
  }}
  className="w-32 h-32 mx-auto"
/>
    `);
  }
}, [controls, mode, runTrigger]);


  //  Reset all controls
  const handleReset = () => setControls(defaultControls);

  //  Randomize animation values
 const handleRandomize = () =>
  setControls({
    opacity: Number((Math.random() * (1 - 0.3) + 0.3).toFixed(2)),
    scale: Number((Math.random() * (2 - 0.5) + 0.5).toFixed(2)),
    duration: Number((Math.random() * (3 - 0.5) + 0.5).toFixed(2)),
    delay: Number((Math.random() * 1.5).toFixed(2)),
    x: Math.floor(Math.random() * 200 - 100),
    y: Math.floor(Math.random() * 200 - 100),
    rotate: Math.floor(Math.random() * 360 - 180),
    skewX: Number((Math.random() * 40 - 20).toFixed(2)),
    skewY: Number((Math.random() * 40 - 20).toFixed(2)),
    borderRadius: Math.floor(Math.random() * 50),
    backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
    ease: "power1.inOut",
  });


  //  Force rerun (re-render trigger)
  const handleRun = () => setRunTrigger((t) => t + 1);

  return (
    <div className="flex flex-col lg:flex-row h-full py-16 sm:py-24 overflow-hidden section-padding">
      {/* Sidebar toggle (mobile) */}
      <div className="p-3 border-b border-dark-border flex items-center justify-between lg:hidden">
        <h1 className="font-bold text-lg bg-gradient-to-r from-white to-amber-200 text-transparent bg-clip-text">
          Playground
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-sm px-3 py-1 rounded-lg bg-dark-border hover:bg-dark-text-secondary transition"
        >
          {sidebarOpen ? "Close" : "Controls"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full z-40 bg-dark-surface border-r border-dark-border transform bg-dark-bg  ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out w-68`}
      >
        <PlaygroundSidebar
          mode={mode}
          setMode={setMode}
          controls={controls}
          setControls={setControls}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 h-1/2 border-b border-dark-border min-h-[300px]">
          <PlaygroundEditor code={code} setCode={setCode} />
        </div>
        <div className="flex-1 h-1/2 p-6 min-h-[300px]">
          <PlaygroundPreview code={code} mode={mode} />
        </div>
      </div>

      {/* Overlay for sidebar on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Floating Control Bar */}
      <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 md:flex lg:flex-col gap-3 z-50 hidden">
        <button
          onClick={handleRun}
          className="px-4 py-2 rounded-xl bg-blue hover:bg-blue-500 text-white shadow-lg transition text-sm"
        >
           Run
        </button>
        <button
          onClick={handleRandomize}
          className="px-4 py-2 rounded-xl bg-pink hover:bg-pink-400 text-white shadow-lg transition text-sm"
        >
           Random
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-800 text-white shadow-lg transition text-sm"
        >
           Reset
        </button>
      </div>

      {/* Mobile control bar (bottom full-width) */}
      <div className="fixed bottom-0 left-0 w-full bg-dark-surface border-t border-dark-border flex justify-around items-center p-3 md:hidden z-30">
        <button
          onClick={handleRun}
          className="px-4 py-2 rounded-lg bg-blue text-white text-sm"
        >
           Run
        </button>
        <button
          onClick={handleRandomize}
          className="px-4 py-2 rounded-lg bg-pink text-white text-sm"
        >
           Random
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-zinc-700 text-white text-sm"
        >
           Reset
        </button>
      </div>
    </div>
  );
};

export default Playground;
