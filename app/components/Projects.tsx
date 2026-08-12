'use client';

import { useMemo, useState } from 'react';
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiStar,
} from 'react-icons/fi';
import { projects, projectCategories, type ProjectCategory } from '@/app/data';

const statusStyles: Record<string, string> = {
  completed:
    'bg-green-400/10 border-green-400/30 text-green-300',
  'in-progress':
    'bg-amber-400/10 border-amber-400/30 text-amber-300',
  archived: 'bg-slate-400/10 border-slate-400/30 text-slate-400',
};

const statusLabel: Record<string, string> = {
  completed: '● Completed',
  'in-progress': '● In progress',
  archived: '○ Archived',
};

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="text-center mb-12">
          <span className="badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
            05 — Proyectos
          </span>
          <h2 className="section-title">
            Trabajo <span className="gradient-text">destacado</span>
          </h2>
          <p className="section-subtitle mt-4">
            Proyectos personales, contribuciones open source y casos de
            éxito profesionales. Cada uno con su stack, decisiones y
            resultados.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {projectCategories.map((cat) => {
            const isActive = active === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-slate-950 bg-gradient-to-r from-primary-300 to-primary-400 shadow-[0_0_24px_rgba(34,211,238,0.35)]'
                    : 'text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Featured row */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            Próximamente más proyectos en esta categoría.
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/carlosmadrigal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FiGithub size={16} />
            Ver todos en GitHub
            <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: import('@/app/data').Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative card overflow-hidden flex flex-col ${
        featured ? 'gradient-border' : ''
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-primary-400 to-accent-purple text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <FiStar size={10} />
            Featured
          </span>
        </div>
      )}

      {/* Visual */}
      <div className="relative -mx-6 -mt-6 mb-5 h-40 overflow-hidden bg-gradient-to-br from-primary-500/20 via-accent-purple/20 to-accent-pink/20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-black gradient-text-alt opacity-80">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        {project.status && (
          <span
            className={`badge text-[10px] !py-0.5 !px-2 shrink-0 ${
              statusStyles[project.status]
            }`}
          >
            {statusLabel[project.status]}
          </span>
        )}
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <ul className="space-y-1.5 mb-4 text-xs text-slate-500">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-primary-400 mt-0.5">▸</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-primary-400/10 text-primary-300 border border-primary-400/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/5">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-primary-300 transition-colors"
          >
            <FiGithub size={14} />
            Código
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-primary-300 transition-colors"
          >
            <FiExternalLink size={14} />
            Demo
          </a>
        )}
        <span className="ml-auto text-[10px] text-slate-500 uppercase tracking-wider">
          {project.category}
        </span>
      </div>
    </article>
  );
}