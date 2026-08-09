import { FiAward, FiBriefcase, FiCode, FiServer } from "react-icons/fi";
import { personalInfo, stats } from "@/app/data";

const highlights = [
  {
    icon: FiServer,
    title: "Serverless & AWS",
    description:
      "Diseño e implemento arquitecturas sin servidor con Lambda, S3, DynamoDB y API Gateway. CDK como IaC.",
  },
  {
    icon: FiCode,
    title: "Full Stack moderno",
    description:
      "Node.js + NestJS en backend y Next.js/React en frontend. TypeScript end-to-end y arquitecturas limpias.",
  },
  {
    icon: FiBriefcase,
    title: "CI/CD & DevOps",
    description:
      "Pipelines con GitHub Actions, containerización con Docker, monitoreo con CloudWatch y scripting.",
  },
  {
    icon: FiAward,
    title: "Docente & Mentor",
    description:
      "Profesor backend en EducaciónIT y tutor en CoderHouse. Me gusta devolver a la comunidad.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
            01 — Sobre mí
          </span>
          <h2 className="section-title">
            El <span className="gradient-text">puente</span> entre desarrollo y
            operaciones.
          </h2>
          <p className="section-subtitle mt-4">{personalInfo.bio}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="card text-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text-alt">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Profile + highlights */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch">
          {/* Quote card */}
          <div className="card gradient-border">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl text-primary-400 leading-none font-serif">
                &quot;
              </span>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light italic">
                {personalInfo.profile}
              </p>
              <span className="text-5xl text-primary-400 leading-none font-serif">
                &quot;
              </span>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-purple text-slate-950 font-black">
                CM
              </div>
              <div>
                <div className="font-semibold text-slate-100">
                  Carlos I. Madrigal
                </div>
                <div className="text-xs text-slate-400">
                  Software Developer · DevOps · Jujuy, Argentina
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card group">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-purple/20 border border-primary-400/20 text-primary-300 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
