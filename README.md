# Portfolio — Carlos I. Madrigal

Portfolio personal profesional con foco en **Software Development + DevOps**.
Construido con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**.

> Diseño moderno, oscuro y responsive. Optimizado para SEO y rendimiento.

## Stack

- **Framework:** Next.js 14 (App Router, SSG/ISR)
- **Lenguaje:** TypeScript (strict)
- **Estilos:** Tailwind CSS (sin librerías de UI externas)
- **Iconos:** react-icons (Feather)
- **Fuente:** Inter + JetBrains Mono (Google Fonts via `next/font`)
- **Deploy:** Vercel (recomendado) o S3 + CloudFront

## Estructura

```
app/
├── components/
│   ├── Navbar.tsx        # Navegación fija con menú móvil
│   ├── Hero.tsx          # Landing principal con código animado
│   ├── About.tsx         # Perfil + stats + highlights
│   ├── Skills.tsx        # Skills con tabs y barras de progreso
│   ├── Experience.tsx    # Timeline de experiencia
│   ├── Projects.tsx      # Proyectos personales con filtros
│   ├── Education.tsx     # Formación + idiomas
│   ├── Contact.tsx       # Canales + CTA final + descarga CV
│   ├── CVDownload.tsx    # Botón reutilizable de descarga de CV
│   └── Footer.tsx        # Footer minimal
├── data.ts               # Toda la información personal/edit-able
├── globals.css           # Estilos globales + animaciones
├── layout.tsx            # SEO, fuentes, JSON-LD, metadata
└── page.tsx              # Composición de la home
public/
├── favicon.svg           # Icono del sitio
└── cv/                   # Coloque aquí su CV en PDF
```

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar en desarrollo
npm run dev
# -> http://localhost:3000

# 3. Build de producción
npm run build

# 4. Levantar build
npm run start
```

## Personalización

Toda la información personal vive en **`app/data.ts`**. Editá:

- `personalInfo` — nombre, rol, contacto, redes
- `skills` — tecnologías por categoría
- `experiences` — historial laboral
- `projects` — proyectos personales y featured (con filtro por categoría)
- `education` — formación
- `stats` — números del Hero

Y en **`app/layout.tsx`** actualizá los metadatos SEO y la URL canónica.

> **Importante:** reemplazá las URLs de GitHub y LinkedIn en
> `app/data.ts` con tus perfiles reales (`social.github` y `social.linkedin`).

### CV descargable

Para activar el botón **"Descargar CV"**:

1. Exporte su CV a PDF
2. Coloque el archivo en `public/cv/carlos-madrigal-cv.pdf`
3. El botón ya estará disponible en el Hero y en la sección de Contacto

Si no coloca el archivo, los botones seguirán apareciendo pero el navegador
mostrará un 404 al hacer clic — útil mientras lo prepara.

## Deploy

### Opción 1 — Vercel (recomendado, gratis)

1. Subí el repo a GitHub.
2. Entrá a [vercel.com](https://vercel.com) y conectá el repo.
3. Vercel detecta Next.js automáticamente. Deploy.
4. Conectá tu dominio personalizado en `Settings → Domains`.

### Opción 2 — AWS S3 + CloudFront (serverless)

1. `npm run build` genera estáticos en `.next/` + assets en `.next/static/`.
2. Para export estático, agregá a `next.config.js`:

   ```js
   module.exports = { output: 'export', images: { unoptimized: true } };
   ```

3. Subí la carpeta `out/` a un bucket S3 configurado como hosting estático.
4. CloudFront con origen en el bucket, certificado ACM y dominio propio.

> Si querés mantener SSR/ISR, deployá como contenedor en ECS/Fargate o
> Lambda@Edge.

## CI/CD con GitHub Actions

Workflow incluido en `.github/workflows/ci.yml`. Hace `lint` + `typecheck` +
`build` en cada push/PR. Sumá un step de deploy a Vercel o AWS si querés
despliegues automáticos (ver documentación oficial de cada plataforma).

## Scripts

| Script           | Descripción                          |
|------------------|--------------------------------------|
| `npm run dev`    | Servidor de desarrollo (HMR)         |
| `npm run build`  | Build de producción                  |
| `npm run start`  | Servidor de producción               |
| `npm run lint`   | ESLint con `next/core-web-vitals`    |
| `npm run typecheck` | TypeScript estricto sin emisión   |

## Performance

- Static Site Generation (SSG) por defecto → CDN edge.
- Imágenes optimizadas con `next/image`.
- Fonts con `display: swap` y preload automático.
- Sin JS innecesario (solo el de componentes interactivos).
- Lighthouse objetivo: **95+ en todas las métricas**.

---

Hecho con Next.js, TypeScript y Tailwind. Diseñado para mostrar un perfil
real de **Full Stack + DevOps** enfocado en serverless, AWS y pipelines CI/CD.