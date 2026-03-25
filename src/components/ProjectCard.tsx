import { ExternalLink } from 'lucide-react';
import type { Project } from '../types/index';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="group relative bg-[#111] border border-gray-800 hover:border-green-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:-translate-y-1 flex flex-col h-full">
    <div className="bg-[#1a1a1a] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
      </div>
      <span className="text-[10px] uppercase tracking-wider text-gray-600 font-bold font-mono">{project.category}</span>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{project.title}</h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6 font-mono">
        {project.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 text-[11px] bg-gray-900 border border-gray-700 text-gray-300 rounded font-medium tracking-wide">#{tag}</span>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-800 flex justify-end">
        <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-400 transition-colors font-mono">
          VIEW PROJECT <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </div>
);

export { ProjectCard };