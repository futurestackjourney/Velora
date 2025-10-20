import React from "react";

const ButtonCard: React.FC = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 text-center">
      <h4 className="text-lg font-semibold mb-2">Card Component</h4>
      <p className="text-secondary text-sm">Try animating this card!</p>
    </div>
  );
};

export default ButtonCard;
