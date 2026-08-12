import { FiBookOpen, FiGlobe } from 'react-icons/fi';
import { education } from '@/app/data';

const typeBadge: Record<string, string> = {
  Grado: 'bg-primary-400/15 border-primary-400/30 text-primary-300',
  Bootcamp: 'bg-accent-purple/15 border-accent-purple/30 text-accent-purple',
  Certificación: 'bg-accent-pink/15 border-accent-pink/30 text-accent-pink',
};

const languages = [
  { name: 'Español', level: 'Nativo', percent: 100 },
  { name: 'Inglés', level: 'B2 — Upper Intermediate', percent: 75 },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="text-center mb-16">
          <span className="badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
            06 — Formación
          </span>
          <h2 className="section-title">
            Educación & <span className="gradient-text">aprendizaje continuo</span>
          </h2>
          <p className="section-subtitle mt-4">
            Una formación constante que respalda mi perfil Full Stack + DevOps.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* Education list */}
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.institution} className="card group">
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-purple/20 border border-primary-400/20 text-primary-300 group-hover:scale-110 transition-transform">
                    <FiBookOpen size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
                        {edu.title}
                      </h3>
                      <span
                        className={`badge text-[10px] !py-0.5 !px-2 ${
                          typeBadge[edu.type] || ''
                        }`}
                      >
                        {edu.type}
                      </span>
                    </div>
                    <p className="text-sm text-primary-300 font-mono">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                    <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages + learning philosophy */}
          <div className="space-y-4">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-purple/20 border border-primary-400/20 text-primary-300">
                  <FiGlobe size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Idiomas</h3>
                  <p className="text-xs text-slate-500">Comunicación profesional</p>
                </div>
              </div>
              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-200">
                        {lang.name}
                      </span>
                      <span className="text-xs font-mono text-primary-300">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary-400 to-accent-purple"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card gradient-border">
              <div className="text-center space-y-3">
                <div className="text-3xl">☁️</div>
                <h3 className="text-base font-bold text-slate-100">
                  Aprendizaje continuo
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Siempre explorando nuevas herramientas: CDK avanzado,
                  Kubernetes, observabilidad y patrones de arquitectura
                  cloud-native.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-300 hover:text-primary-200 transition-colors mt-2"
                >
                  Charlamos sobre un proyecto →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}