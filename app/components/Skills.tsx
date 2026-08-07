'use client';

import { useState } from 'react';
import {
  FiCode,
  FiCloud,
  FiDatabase,
  FiTool,
  FiTerminal,
} from 'react-icons/fi';
import { skills } from '@/app/data';

type TabKey = 'core' | 'frontend' | 'devops' | 'database' | 'tools';

const tabs: { key: TabKey; label: string; icon: any }[] = [
  { key: 'core', label: 'Stack principal', icon: FiCode },
  { key: 'frontend', label: 'Frontend', icon: FiTerminal },
  { key: 'devops', label: 'DevOps & AWS', icon: FiCloud },
  { key: 'database', label: 'Bases de datos', icon: FiDatabase },
  { key: 'tools', label: 'Tools & Workflow', icon: FiTool },
];

const levelColor = (level: number) => {
  if (level >= 90) return 'from-primary-400 to-primary-300';
  if (level >= 80) return 'from-primary-400 to-accent-purple';
  if (level >= 70) return 'from-accent-purple to-accent-pink';
  return 'from-accent-pink to-accent-orange';
};

export default function Skills() {
  const [active, setActive] = useState<TabKey>('core');

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="text-center mb-12">
          <span className="badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
            02 — Habilidades
          </span>
          <h2 className="section-title">
            Stack <span className="gradient-text">tecnológico</span>
          </h2>
          <p className="section-subtitle mt-4">
            Tecnologías que uso día a día para construir productos confiables,
            escalables y observables.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-slate-950 bg-gradient-to-r from-primary-300 to-primary-400 shadow-[0_0_24px_rgba(34,211,238,0.35)]'
                    : 'text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="glass-strong rounded-3xl p-6 sm:p-10">
          {active === 'core' && (
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.core.map((skill, i) => (
                <div
                  key={skill.name}
                  className="group"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-base font-semibold text-slate-100">
                        {skill.name}
                      </span>
                      <span className="badge text-[10px] !py-0.5 !px-2">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-sm font-mono font-bold text-primary-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${levelColor(
                        skill.level,
                      )} transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === 'frontend' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.frontend.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-primary-400/40 hover:bg-primary-400/5 transition-all"
                >
                  <span className="h-2 w-2 rounded-full bg-primary-400" />
                  <span className="text-sm font-medium text-slate-200">{tech}</span>
                </div>
              ))}
            </div>
          )}

          {active === 'devops' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.devops.map((item, i) => {
                const isAvanzado = item.level === 'Avanzado';
                return (
                  <div
                    key={item.name}
                    className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary-400/30 hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-base font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
                        {item.name}
                      </h4>
                      <span
                        className={`badge text-[10px] ${
                          isAvanzado
                            ? '!bg-primary-400/15 !border-primary-400/30 !text-primary-300'
                            : '!bg-accent-purple/15 !border-accent-purple/30 !text-accent-purple'
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {active === 'database' && (
            <div className="grid sm:grid-cols-3 gap-4">
              {skills.database.map((db) => (
                <div
                  key={db.name}
                  className="card text-center group"
                >
                  <div className="grid place-items-center mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-400/20 to-accent-purple/20 border border-primary-400/20 mb-4 text-2xl group-hover:scale-110 transition-transform">
                    🗄️
                  </div>
                  <div className="text-base font-bold text-slate-100">{db.name}</div>
                  <div className="text-xs text-slate-500 mt-1">Base de datos</div>
                </div>
              ))}
            </div>
          )}

          {active === 'tools' && (
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-slate-200 hover:border-primary-400/40 hover:text-primary-300 hover:bg-primary-400/5 transition-all hover:-translate-y-0.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}