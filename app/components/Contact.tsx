'use client';

import { useState } from 'react';
import {
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiCheck,
  FiSend,
  FiMapPin,
} from 'react-icons/fi';
import { personalInfo } from '@/app/data';

const channels = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiPhone,
    label: 'Teléfono',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phoneRaw}`,
  },
  {
    icon: FiMapPin,
    label: 'Ubicación',
    value: personalInfo.location,
    href: null as string | null,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="text-center mb-12">
          <span className="badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
            05 — Contacto
          </span>
          <h2 className="section-title">
            ¿Construimos algo <span className="gradient-text">increíble</span>?
          </h2>
          <p className="section-subtitle mt-4">
            Estoy abierto a proyectos freelance, colaboraciones y oportunidades
            full-time. Si necesitás un perfil Full Stack + DevOps, charlemos.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
          {/* Left — Channels */}
          <div className="space-y-4">
            {channels.map((c) => {
              const Icon = c.icon;
              const key = c.label;
              return (
                <div key={key} className="card group">
                  <div className="flex items-center gap-4">
                    <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-purple/20 border border-primary-400/20 text-primary-300 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        {c.label}
                      </p>
                      <p className="text-base font-semibold text-slate-100 truncate">
                        {c.value}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copy(key, c.value)}
                        className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 hover:bg-primary-400/10 transition-all"
                        aria-label={`Copiar ${c.label}`}
                      >
                        {copied === key ? (
                          <FiCheck size={16} className="text-green-400" />
                        ) : (
                          <FiCopy size={16} />
                        )}
                      </button>
                      {c.href && (
                        <a
                          href={c.href}
                          className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 hover:bg-primary-400/10 transition-all"
                          aria-label={`Abrir ${c.label}`}
                        >
                          <FiSend size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — CTA big card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 via-accent-purple/20 to-accent-pink/20 blur-3xl rounded-3xl" />
            <div className="relative h-full card gradient-border !p-8 sm:!p-10 flex flex-col justify-between overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary-400/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent-purple/10 blur-2xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-xs text-green-300 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Disponible para nuevos proyectos
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-tight text-balance">
                  Optimizo el ciclo de vida de tu software, de código a
                  producción.
                </h3>
                <p className="text-base text-slate-400 mt-4 leading-relaxed">
                  Diseño APIs robustas con NestJS, construyo interfaces ágiles
                  con Next.js, y despliego todo en arquitecturas serverless
                  confiables y observables.
                </p>
              </div>

              <div className="relative pt-8">
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                    'Propuesta de colaboración',
                  )}`}
                  className="btn-primary w-full !text-base !py-4 group"
                >
                  <FiMail size={18} />
                  Enviar email directo
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Respuesta típica en menos de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}