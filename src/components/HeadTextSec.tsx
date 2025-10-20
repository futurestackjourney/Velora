
interface HeadTextProps {
  headTextSec: string;      // main heading (like “Playground”)
  primaryText?: string;  // optional subtext or highlighted word
  className?: string;    // optional extra Tailwind classes
}

const HeadTextSec: React.FC<HeadTextProps> = ({ headTextSec, primaryText, className }) => {
  return (
    <div className={`mb-10 ${className || ""}`}>
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200 font-family">
        {headTextSec}{" "}
        {primaryText && (
          <span className="text-cyan">
            {primaryText}
          </span>
        )}
      </h2>
    </div>
  );
};

export default HeadTextSec;
