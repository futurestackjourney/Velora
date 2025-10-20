
interface HeadTextProps {
  headText: string;      // main heading (like “Playground”)
  primaryText?: string;  // optional subtext or highlighted word
  className?: string;    // optional extra Tailwind classes
}

const HeadText: React.FC<HeadTextProps> = ({ headText, primaryText, className }) => {
  return (
    <div className={`mb-10 ${className || ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {headText}{" "}
        {primaryText && (
          <span className="text-cyan">
            {primaryText}
          </span>
        )}
      </h2>
    </div>
  );
};

export default HeadText;
