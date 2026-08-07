import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '@/app/data';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 mt-10">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid sm:grid-cols-[1.5fr_1fr] gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary-400 to-accent-purple text-slate-950 font-black text-sm">
                CM
              </span>
              <span className="text-base font-bold text-slate-100">
                Carlos I. Madrigal
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Software Developer & DevOps Engineer basado en Jujuy, Argentina.
              Construyendo productos confiables y escalables.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-4">
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 transition-all"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 transition-all"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 hover:border-primary-400/40 transition-all"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {year} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Hecho con <FiHeart className="text-accent-pink" size={12} /> usando
            <span className="text-primary-300 font-medium">Next.js</span>,
            <span className="text-primary-300 font-medium">TypeScript</span> y
            <span className="text-primary-300 font-medium">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}