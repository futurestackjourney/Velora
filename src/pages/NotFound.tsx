
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24">
      <h1 className="text-8xl font-bold mb-4 text-cyan">404 </h1>
      <h3 className="text-4xl font-bold mb-4 text-cyan">NOT FOUND</h3>
      <p className="text-lg mb-6 text-white">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="bg-blue hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
