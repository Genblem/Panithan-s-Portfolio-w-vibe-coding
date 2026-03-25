import { Layers, Code, Video } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBar = ({ categories, activeCategory, setActiveCategory }: FilterBarProps) => (
  <div className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md py-6 z-40 mb-8 border-b border-gray-800">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <h2 className="text-xl text-white font-bold flex items-center gap-2 tracking-tight">
        <Layers className="text-green-500" size={20} />
        Selected Works
      </h2>
      <div className="flex bg-[#111] p-1 rounded-lg border border-gray-800 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-md transition-all duration-300 flex items-center gap-2
              ${activeCategory === cat ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(22,163,74,0.4)]' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
          >
            {cat === 'Dev' && <Code size={14} />}
            {cat === 'Editing' && <Video size={14} />}
            {cat}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export { FilterBar };