'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '@/app/data';

const navLinks = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#education', label: 'Formación' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl container-px flex items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 text-base font-bold tracking-tight"
          aria-label={`Inicio — ${personalInfo.shortName}`}
        >
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary-400 to-accent-purple text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-transform group-hover:scale-110">
            CM
          </span>
          <span className="hidden sm:inline text-slate-100">
            carlos<span className="text-primary-400">.dev</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-primary-400 to-accent-purple" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            Hablemos
          </a>
        </div>

        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 transition-colors"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-background/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col p-6 gap-2">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`transition-all duration-300 ${open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-4 rounded-xl text-lg font-medium text-slate-200 hover:bg-white/5 hover:text-primary-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}