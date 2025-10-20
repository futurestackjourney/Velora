import React from 'react';

interface EditorProps {
  animationProps: any;
  selectedComponent: 'button' | 'card';
}

const Editor: React.FC<EditorProps> = ({ animationProps, selectedComponent }) => {
  const code = `
gsap.to("${selectedComponent}", {
  duration: ${animationProps.duration},
  delay: ${animationProps.delay},
  x: ${animationProps.x},
  y: ${animationProps.y},
  rotation: ${animationProps.rotation},
  scale: ${animationProps.scale},
  opacity: ${animationProps.opacity},
  ease: "${animationProps.ease}",
});
`;

  return (
    <div className="bg-dark-bg text-green-400 font-mono text-sm p-4 rounded-md border border-border overflow-x-auto select-none">
      <pre>{code}</pre>
    </div>
  );
};

export default Editor;
