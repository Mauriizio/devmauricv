# devmauricv

## Descripción del proyecto

`devmauricv` es el portafolio profesional de Maurizio Caballero, orientado a ingeniería aplicada, automatización, programación, documentación técnica y proyectos multidisciplinarios.

El objetivo del proyecto es presentar experiencia, proyectos técnicos, bitácora académica, stack de desarrollo y canales de contacto en una interfaz web cuidada, responsive y mantenible.

> Este proyecto usa **Next.js Pages Router**. No usa App Router ni directorio `app/`.

## Stack principal

- Next.js con Pages Router.
- React.
- Tailwind CSS.
- Framer Motion para animaciones e interacciones.
- Resend para el envío principal del formulario de contacto.
- Web3Forms como fallback opcional del formulario.
- ESLint para validación estática.

## Arquitectura

La arquitectura actual se basa en Pages Router:

- `pages/index.js`: página principal del portafolio.
- `pages/_app.js`: punto de entrada global de la aplicación y providers.
- `pages/_document.js`: estructura HTML base, idioma y metadatos globales.
- `pages/api/contact.js`: API route del formulario de contacto.
- `components/`: secciones, overlays, fondos visuales, logos y componentes reutilizables.
- `data/projects.js`: fuente de datos para los proyectos del portafolio.
- `context/`: estado global compartido, como el tema claro/oscuro.
- `styles/`: estilos globales, Tailwind y fuentes.
- `public/`: assets estáticos servidos por Next.js.

No se debe crear documentación ni código asumiendo App Router, `app/page.js` o `app/layout.js`, porque no corresponden a la estructura real de este proyecto.

## Scripts disponibles

Este repositorio usa npm como gestor principal porque existe `package-lock.json`.

```bash
npm run dev
```

Levanta el servidor de desarrollo.

```bash
npm run build
```

Genera el build de producción.

```bash
npm run start
```

Ejecuta el servidor de producción después de generar el build.

```bash
npm run lint
```

Ejecuta ESLint sobre las rutas y configuraciones definidas en `package.json`.

## Variables de entorno

El proyecto usa variables de entorno para contacto, SEO e indexación. No deben incluirse secretos reales en documentación, commits ni pull requests.

| Variable | Uso | Notas |
| --- | --- | --- |
| `RESEND_API_KEY` | Envío principal del formulario con Resend. | Obligatoria para usar Resend. Debe configurarse como secreto del entorno. |
| `CONTACT_TO` | Destinatario de los mensajes del formulario. | Usar un correo controlado por el proyecto o el entorno de despliegue. |
| `MAIL_FROM` | Remitente usado por Resend. | En producción debe ser un remitente validado en Resend. |
| `NEXT_PUBLIC_SITE_URL` | URL pública usada para canonical/SEO. | Ejemplo local: `http://localhost:3000`. |
| `ALLOW_INDEXING` | Controla la indexación del sitio. | Usar `true` solo cuando producción esté lista para indexarse. |
| `WEB3FORMS_ACCESS_KEY` | Fallback opcional para Web3Forms. | Preferible para configurar el fallback desde servidor. |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Alternativa soportada por el código. | Usar con cuidado: el prefijo `NEXT_PUBLIC` puede exponer la variable si se usa en cliente. |

## Configuración local

1. Instalar dependencias con npm:

   ```bash
   npm install
   ```

2. Copiar el archivo de ejemplo de entorno:

   ```bash
   cp .env.example .env.local
   ```

3. Completar las variables necesarias en `.env.local` con valores propios del entorno.

4. Ejecutar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir `http://localhost:3000` en el navegador.

## Estructura de carpetas

```txt
pages/              Pages Router, página principal, documento, app wrapper y API routes.
components/         Componentes visuales, overlays, secciones y utilidades de UI.
data/               Datos editables del portafolio, especialmente proyectos.
context/            Contextos globales de React.
styles/             CSS global, Tailwind y configuración de fuentes.
public/             Assets estáticos servidos por Next.js.
```

## Cómo agregar o editar proyectos

Los proyectos se administran desde `data/projects.js`, dentro del array `projectsData`.

Para agregar o editar un proyecto:

1. Abrir `data/projects.js`.
2. Agregar o actualizar un objeto dentro de `projectsData`.
3. Mantener un `id` único y estable.
4. Completar campos como `title`, `category`, `description`, `technologies`, `challenges`, `features`, `githubUrl` y `liveUrl` cuando apliquen.
5. Referenciar imágenes usando rutas existentes bajo `public/`.
6. Si se requieren imágenes, PDFs, videos, fuentes, favicons o assets nuevos, agregarlos manualmente y revisar que las rutas coincidan.
7. Validar con:

   ```bash
   npm run lint
   ```

## Formulario de contacto

El formulario envía solicitudes a `pages/api/contact.js`.

Flujo actual:

1. Intenta enviar el mensaje con Resend si `RESEND_API_KEY` está configurada.
2. Usa `CONTACT_TO` como destinatario.
3. Usa `MAIL_FROM` como remitente.
4. Si Resend no está disponible o falla, puede intentar Web3Forms si existe `WEB3FORMS_ACCESS_KEY` o `NEXT_PUBLIC_WEB3FORMS_KEY`.

En producción, `MAIL_FROM` debe corresponder a un remitente validado en Resend para evitar errores de entrega.

## Indexación y SEO

`NEXT_PUBLIC_SITE_URL` se usa para construir URLs canónicas y metadatos SEO.

`ALLOW_INDEXING` controla si el sitio permite indexación:

- `ALLOW_INDEXING=true`: permite indexación. Usar solo en producción lista para publicarse.
- Cualquier otro valor o variable ausente: mantiene protección contra indexación mediante encabezados `noindex`.

Antes de activar indexación, verificar que el contenido, metadatos, enlaces, formulario y despliegue estén listos.

## Política de assets/binarios

No agregar, editar, reemplazar, borrar ni mover archivos binarios sin una tarea explícita y verificación previa.

Esto incluye, entre otros:

- Imágenes: `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.ico`.
- Logos y assets visuales SVG.
- PDFs.
- Videos.
- Fuentes: `.woff`, `.ttf`, `.otf`.
- Archivos comprimidos como `.zip`.

Si un cambio requiere assets nuevos o reemplazos visuales, preparar esos archivos manualmente y luego actualizar solo las referencias de texto o código necesarias.

## Flujo recomendado de trabajo

1. Mantener cambios pequeños y enfocados.
2. Revisar estado antes de modificar:

   ```bash
   git status --short
   ```

3. Evitar cambios de diseño, dependencias o binarios si la tarea es solo documental o de mantenimiento.
4. Ejecutar validaciones disponibles antes de abrir una PR:

   ```bash
   npm run lint
   ```

5. Revisar los archivos modificados:

   ```bash
   git diff --name-only
   ```

6. Crear PRs pequeñas, descriptivas y fáciles de revisar.

## Notas para mantenimiento

- Mantener el README alineado con la estructura real del proyecto.
- No documentar App Router mientras el proyecto siga usando Pages Router.
- No incluir secretos reales en ejemplos, documentación o commits.
- No modificar `package.json` ni `package-lock.json` salvo que la tarea autorice explícitamente cambios de dependencias o scripts.
- Priorizar placeholders en documentación de entorno.
- Verificar `npm run lint` después de cambios en código, datos o configuración.
- Mantener `data/projects.js` como fuente principal para el contenido de proyectos.
