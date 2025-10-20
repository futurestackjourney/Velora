

import type{ BlogItem } from "../types/types";
import NewItemIndicator from "./NewItemIndicator";

const BlogCard: React.FC<{ item: BlogItem }> = ({ item }) => {
  return (
    <div className="relative bg-brand-card px-4 py-6 rounded-lg border border-brand-border group transition-all duration-300 hover:border-pink hover:-translate-y-1 ">
      {item.isNew && <NewItemIndicator />}
      <div className="flex items-center gap-4">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-32 h-20 object-cover rounded-md"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
          <p className="text-sm text-brand-text-secondary">{item.date}</p>
        </div>
        <div className="self-end">
          <span className="bg-brand-accent/20 text-brand-accent text-xs font-semibold px-3 py-1 rounded-full">
            Tutorial
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
