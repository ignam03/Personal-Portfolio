"use client";

import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import CVDownload from "./CVDownload";
import { personalInfo } from "@/app/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 grid-bg mask-fade-b opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="mx-auto max-w-7xl container-px w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 opacity-0 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-medium text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            <div className="space-y-4 opacity-0 animate-fade-in-up delay-100">
              <p className="text-sm font-mono text-primary-400">
                &gt; Hola, mi nombre es
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                <span className="block text-white">{personalInfo.name}.</span>
                <span className="block gradient-text mt-2">
                  {personalInfo.role}.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl text-balance leading-relaxed">
                {personalInfo.tagline}. Apasionado por el{' '}
                <span className="text-primary-300 font-semibold">
                  serverless
                </span>
                , la{' '}
                <span className="text-primary-300 font-semibold">
                  automatización
                </span>
                {' '}y los{' '}
                <span className="text-primary-300 font-semibold">
                  pipelines CI/CD
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 opacity-0 animate-fade-in-up delay-300">
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="text-primary-400" />{" "}
                {personalInfo.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span className="inline-flex items-center gap-2">
                <FiMail className="text-primary-400" /> {personalInfo.email}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up delay-500">
              <a href="#contact" className="btn-primary group">
                Trabajemos juntos
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <CVDownload variant="secondary" />
              <a href="#experience" className="btn-secondary">
                Ver experiencia
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 opacity-0 animate-fade-in-up delay-700">
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Conectemos
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <div className="flex gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 hover:bg-primary-400/10 transition-all hover:-translate-y-0.5"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 hover:bg-primary-400/10 transition-all hover:-translate-y-0.5"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 hover:bg-primary-400/10 transition-all hover:-translate-y-0.5"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Code card */}
          <div className="relative opacity-0 animate-fade-in-up delay-500">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 via-accent-purple/20 to-accent-pink/20 blur-3xl rounded-3xl" />
            <div className="relative glass-strong rounded-3xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  ~/carlos-madrigal.json
                </span>
                <span className="text-xs text-slate-500">JSON</span>
              </div>
              {/* Code */}
              <pre className="p-6 text-sm font-mono leading-7 text-slate-300 overflow-x-auto">
                <code>
                  <span className="text-accent-pink">{"{"}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-primary-300">name</span>:{' '}
                  <span className="text-green-400">"Carlos I. Madrigal"</span>,
                  {'\n'}
                  {'  '}
                  <span className="text-primary-300">role</span>:{' '}
                  <span className="text-green-400">"Full Stack & DevOps"</span>,
                  {'\n'}
                  {'  '}
                  <span className="text-primary-300">stack</span>:{' '}
                  <span className="text-accent-pink">[</span>
                  {'\n'}
                  {'    '}
                  <span className="text-green-400">"Node.js"</span>,{' '}
                  <span className="text-green-400">"NestJS"</span>,{'\n'}
                  {'    '}
                  <span className="text-green-400">"React"</span>,{' '}
                  <span className="text-green-400">"Next.js"</span>,{'\n'}
                  {'    '}
                  <span className="text-green-400">"AWS Lambda"</span>,{'\n'}
                  {'    '}
                  <span className="text-green-400">"Docker"</span>,{'\n'}
                  {'    '}
                  <span className="text-green-400">"CI/CD"</span>
                  {'\n'}
                  {'  '}
                  <span className="text-accent-pink">]</span>,{'\n'}
                  {'  '}
                  <span className="text-primary-300">passion</span>:{' '}
                  <span className="text-green-400">"serverless"</span>,{'\n'}
                  {'  '}
                  <span className="text-primary-300">available</span>:{' '}
                  <span className="text-accent-pink">true</span>
                  {'\n'}
                  <span className="text-accent-pink">{"}"}</span>
                </code>
              </pre>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl glass-strong text-xs font-mono animate-float">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-300">deploying...</span>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl glass-strong text-xs font-mono animate-float delay-1000">
              <span>⚡</span>
              <span className="text-slate-300">Lambda ready</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 hover:text-primary-300 transition-colors animate-fade-in delay-1000"
        >
          <span>scroll</span>
          <FiArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
