
import React from 'react';
import { Badge } from './Badge';
import { Button } from './Button';

interface ProjectCardProps {
  title: string;
  period: string;
  type: 'Academic' | 'Personal';
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  period,
  type,
  description,
  technologies,
  githubUrl,
  demoUrl,
  highlights
}) => {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white leading-tight">
            {title}
          </h3>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            {type}
          </span>
        </div>

        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
          <time>{period}</time>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.slice(0, 5).map((tech, idx) => (
            <Badge key={idx} variant="subtle">
              {tech}
            </Badge>
          ))}
          {technologies.length > 5 && (
            <Badge>+{technologies.length - 5} more</Badge>
          )}
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-6">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mt-0.5 mr-2 text-indigo-500 dark:text-indigo-400">•</span>
              <span className="text-slate-700 dark:text-slate-300 text-sm">
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              as="a"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
          {demoUrl && (
            <Button
              variant="primary"
              size="sm"
              as="a"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};