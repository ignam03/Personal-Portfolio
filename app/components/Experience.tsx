"use client";

import { useState } from "react";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { experiences } from "@/app/data";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="text-center mb-16">
          <span className="badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
            03 — Experiencia
          </span>
          <h2 className="section-title">
            Mi <span className="gradient-text">trayectoria</span> profesional
          </h2>
          <p className="section-subtitle mt-4">
            5+ años construyendo productos en producción, desde APIs con NestJS
            hasta plataformas serverless en AWS.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400/0 via-primary-400/50 to-primary-400/0 -translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const isOpen = expanded === i;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={`${exp.company}-${i}`}
                  className={`relative flex flex-col sm:flex-row gap-6 ${
                    isLeft
                      ? "sm:items-start"
                      : "sm:items-start sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="relative">
                      {exp.current && (
                        <span className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75" />
                      )}
                      <span
                        className={`relative grid place-items-center h-8 w-8 rounded-full border-2 ${
                          exp.current
                            ? "bg-primary-400 border-primary-300 text-slate-950"
                            : "bg-background border-primary-400/40 text-primary-300"
                        } shadow-[0_0_15px_rgba(34,211,238,0.4)]`}
                      >
                        <FiBriefcase size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pl-14 sm:pl-0">
                    <div
                      className={`w-full sm:w-[calc(50%-2rem)] ${
                        isLeft ? "" : "sm:ml-auto"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : i)}
                        className="w-full text-left card group cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
                                {exp.role}
                              </h3>
                              {exp.current && (
                                <span className="badge text-[10px] !py-0.5 !px-2 !bg-primary-400/15 !border-primary-400/30 !text-primary-300">
                                  ● Actual
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-mono text-primary-300">
                              @ {exp.company}
                            </p>
                          </div>
                          <span className="hidden sm:block text-slate-500 group-hover:text-primary-300 transition-all shrink-0 mt-1">
                            <span
                              className={`inline-block transition-transform ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            >
                              ▶
                            </span>
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
                          <span className="font-mono">{exp.period}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-600" />
                          <span>{exp.type}</span>
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>

                        <div
                          className={`grid transition-all duration-500 ease-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 mt-4"
                              : "grid-rows-[0fr] opacity-0 mt-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="pt-4 border-t border-white/5 space-y-4">
                              <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">
                                  Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {exp.stack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary-400/10 text-primary-300 border border-primary-400/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">
                                  Logros clave
                                </p>
                                <ul className="space-y-2">
                                  {exp.achievements.map((ach, j) => (
                                    <li
                                      key={j}
                                      className="flex items-start gap-2 text-sm text-slate-300"
                                    >
                                      <FiCheckCircle
                                        size={14}
                                        className="text-primary-400 mt-1 shrink-0"
                                      />
                                      <span>{ach}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
