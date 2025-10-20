import React from 'react';

interface SidebarProps {
  selectedComponent: 'button' | 'card';
  setSelectedComponent: React.Dispatch<React.SetStateAction<'button' | 'card'>>;
  animationProps: any;
  setAnimationProps: React.Dispatch<React.SetStateAction<any>>;
  onReset: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedComponent,
  setSelectedComponent,
  animationProps,
  setAnimationProps,
  onReset,
}) => {
  const handleChange = (field: string, value: number | string) => {
    setAnimationProps({ ...animationProps, [field]: value });
  };

  return (
    <div className="p-5 flex flex-col space-y-5 h-full overflow-y-auto bg-dark-card">
      <h2 className="text-lg font-semibold">🎛️ Animation Controls</h2>

      {/* Component Selector */}
      <div>
        <label className="block mb-1 text-sm">Component</label>
        <select
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value as 'button' | 'card')}
          className="w-full p-2 rounded-md bg-dark-bg border border-border text-primary focus:outline-none"
        >
          <option value="button">Button</option>
          <option value="card">Card</option>
        </select>
      </div>

      {/* Number Inputs */}
      {[
        { label: 'Duration (s)', key: 'duration', step: 0.1 },
        { label: 'Delay (s)', key: 'delay', step: 0.1 },
        { label: 'Translate X (px)', key: 'x', step: 10 },
        { label: 'Translate Y (px)', key: 'y', step: 10 },
        { label: 'Rotation (deg)', key: 'rotation', step: 5 },
        { label: 'Scale', key: 'scale', step: 0.1 },
        { label: 'Opacity', key: 'opacity', step: 0.1 },
      ].map((item) => (
        <div key={item.key}>
          <label className="block mb-1 text-sm">{item.label}</label>
          <input
            type="number"
            step={item.step}
            value={animationProps[item.key]}
            onChange={(e) => handleChange(item.key, parseFloat(e.target.value))}
            className="w-full p-2 rounded-md bg-dark-bg border border-border text-primary focus:outline-none"
          />
        </div>
      ))}

      {/* Ease Selector */}
      <div>
        <label className="block mb-1 text-sm">Ease</label>
        <select
          value={animationProps.ease}
          onChange={(e) => handleChange('ease', e.target.value)}
          className="w-full p-2 rounded-md bg-dark-bg border border-border text-primary focus:outline-none"
        >
          <option value="power1.out">power1.out</option>
          <option value="power2.inOut">power2.inOut</option>
          <option value="back.out(1.7)">back.out(1.7)</option>
          <option value="elastic.out(1, 0.3)">elastic.out(1, 0.3)</option>
        </select>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Reset Animation
      </button>
    </div>
  );
};

export default Sidebar;
