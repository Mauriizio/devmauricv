# Reporte de auditoría — 2-09-2026

## Alcance

Auditoría de solo lectura del estado Git, dominio público, cursor eléctrico, catálogo de proyectos y rendimiento básico del portafolio. Durante la auditoría no se instalaron dependencias, no se cambiaron versiones, no se hicieron commits ni push y no se modificó el código del proyecto.

## A. Estado actual exacto

El repositorio real está en:

```text
C:\Users\cabal\OneDrive\Documentos\Desktop\devmauricv\devmauricv
```

Estado Git:

- Rama actual: `main`.
- Commit actual: `e4dc92fc1c875f7f8a3335ba5b9ab3823c4e680c`.
- Commit corto: `e4dc92f`.
- Tag en `HEAD`: `v0.2.7-fase-4-3a-cursor-electrico`.
- `origin/main` apunta al mismo commit.
- El árbol de trabajo estaba limpio al terminar la auditoría.
- Remoto fetch y push: `https://github.com/Mauriizio/devmauricv`.

Últimos diez commits:

```text
e4dc92f (HEAD -> main, tag: v0.2.7-fase-4-3a-cursor-electrico, origin/main) Agrega cursor eléctrico desktop
ce575e3 (tag: v0.2.6-fase-4-2-identidad-ingenieria) Reposiciona identidad hacia ingeniería
cb12ec8 (tag: v0.2.5-fase-4-0b-limpieza-huellas) Limpia huellas y assets default
1998aaa (tag: v0.2.4-fase-4-1d-marcos-imagenes) Refina marcos de imágenes en detalle
bcab1e0 Compacta filtros mobile de proyectos
e1b5507 (tag: v0.2.3-fase-4-1c2-filtros-mobile) Ajusta filtros de proyectos en mobile
b655868 (tag: v0.2.2-fase-4-1c-filtros-proyectos) Agrega filtros visuales de proyectos
d53de2c (tag: v0.2.1-fase-4-1b-imagenes-detalle) Corrige visualizacion de imagenes en detalle de proyectos
b8ceb03 (tag: v0.2.0-fase-4-1a-safe-area-mobile) Corrige safe area y CTAs finales mobile
cdad415 (tag: v0.1.10-fase-3-5c-ajuste-final-assets) caambio de 1 imagen en aseo web
```

La referencia conocida `v0.2.6` ya no es la última estable. Existe un commit posterior etiquetado como `v0.2.7`.

## B. Dominio y URL pública

La URL efectiva en el entorno local todavía está configurada como:

```env
NEXT_PUBLIC_SITE_URL=https://maurizio.dev
```

No existe `.vercel/project.json` y el repositorio no contiene la dirección `.vercel.app` correspondiente a este portafolio. La auditoría por sí sola no permite identificar con certeza el alias público temporal. No conviene asumir que sea `devmauricv.vercel.app` sin comprobarlo primero en Vercel.

### Referencias encontradas

- `pages/index.js` usa `NEXT_PUBLIC_SITE_URL` para canonical, `og:url`, imagen Open Graph, imagen de Twitter y los JSON-LD de `WebSite` y `Person`.
- `pages/_document.js` contiene metadatos globales duplicados y hardcodea `https://maurizio.dev` en `og:url`, `og:image` y `twitter:image`.
- `public/robots.txt` declara `Sitemap: https://maurizio.dev/sitemap.xml`.
- `public/sitemap.xml` declara `<loc>https://maurizio.dev/</loc>`.
- `public/site.webmanifest` usa `maurizio.dev` como nombre corto.
- `pages/api/contact.js` menciona el dominio en un comentario sobre Resend, un ejemplo de remitente y el asunto del correo.
- `components/MenuOverlay.jsx`, `components/ProjectDetail.jsx` y `components/SectionContact.jsx` construyen canonicales desde `NEXT_PUBLIC_SITE_URL`.
- `.env.example` usa correctamente valores locales de ejemplo:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ALLOW_INDEXING=false
```

La variable adecuada sigue siendo `NEXT_PUBLIC_SITE_URL`, con el origen exacto y preferiblemente sin `/` final:

```env
NEXT_PUBLIC_SITE_URL=https://alias-confirmado.vercel.app
```

Debe configurarse en Vercel y realizarse un nuevo despliegue, porque la variable pública se incorpora durante el build.

### Indexación

Existe una contradicción en la configuración actual:

- La portada declara `index,follow`.
- `next.config.mjs` entrega `X-Robots-Tag: noindex` salvo que `ALLOW_INDEXING=true`.
- `ALLOW_INDEXING` no está definido en `.env.local`.

Con el entorno auditado prevalece la cabecera global `noindex`. Las vistas internas con query string también declaran intencionalmente `noindex,nofollow`.

## C. Cursor eléctrico

El cursor eléctrico sí quedó integrado.

Evidencia:

- Existe `components/ElectricCursor.jsx`.
- Está importado en `pages/_app.js`.
- Está montado globalmente mediante `<ElectricCursor />`.
- El commit está integrado en `main`.
- Tiene su propio tag: `v0.2.7-fase-4-3a-cursor-electrico`.

Protecciones existentes:

- Solo se activa en dispositivos con puntero fino y hover.
- No se activa en pantallas táctiles normales.
- Respeta `prefers-reduced-motion`.
- Limita el DPR del canvas a `1.75`.
- Pausa cuando la pestaña queda oculta.
- Cancela `requestAnimationFrame` al desmontarse.
- Elimina los event listeners correctamente.
- El canvas usa `pointer-events: none`.

Riesgos detectados:

- Mantiene un `requestAnimationFrame` continuo mientras está habilitado, incluso sin movimiento o con el puntero fuera.
- Limpia y redibuja un canvas de pantalla completa en cada frame.
- Ejecuta dos consultas `matchMedia` dentro del ciclo de dibujo.
- Oculta globalmente el cursor nativo mediante un selector aplicado a casi todo el DOM.
- La clase que oculta el cursor se activa antes de comprobar que el contexto 2D del canvas esté disponible.
- En un fallo raro de canvas podría quedar oculto el cursor nativo sin mostrarse el reemplazo.
- El canvas se suma a los fondos de partículas existentes.

## D. Proyectos actuales

`data/projects.js` contiene:

- 16 proyectos.
- 13 textos de categoría diferentes.
- 64 rutas únicas de imágenes.
- 26 enlaces externos.
- 3 descargas locales.

### Proyectos tecnológicos o web

Hay doce:

1. IconFull.
2. Space Marine Club de Box.
3. Los Chamitos Locos.
4. Coriolis Accesorios.
5. El Intercontinental.
6. Dulces Secretos.
7. GH Formación.
8. Portafolio Daniyer.
9. Curriculum Paola Morales.
10. Curriculum Gladys Pabon.
11. Aseo Market.
12. Ferox BARF.

### Proyectos académicos

Hay tres:

1. Caso de Física Aplicada: vagón sobre rieles en extracción de litio.
2. Electrotecnia: análisis de mallas y tabla de valores.
3. Plano eléctrico de casa de dos plantas en AutoCAD.

### Proyecto artístico

Hay uno:

1. Hip Hop Don’t Stop.

### Categorías existentes

```text
Herramienta Web + CLI
Sitio Web para Gimnasio/Boxeo
Sitio web de Banda Musical
e-comerce/Tienda online
Servicios/Landing page
e-comerce/App tienda online
Sitio web para academia online
Portafolio personal
Curriculum Web
Música / Producción
Desarrollo Web
Desarrollo Web / Base de Datos
Bitácora Académica
```

Conviene normalizar mayúsculas, separadores y nombres. En particular, `e-comerce` debería corregirse.

### Enlaces externos

- Los diez proyectos antiguos usan `githubUrl` y `liveUrl`.
- IconFull enlaza a GitHub y `icon-full.vercel.app`.
- Space Marine enlaza a GitHub y `spacemarinegym.cl`.
- Los Chamitos Locos enlaza a GitHub y `lcl-sepia-nine.vercel.app`.
- Coriolis enlaza a GitHub y `coriolisaccesorios.store`.
- El Intercontinental enlaza a GitHub y un dominio largo de preview de Vercel.
- Dulces Secretos enlaza a GitHub y `dulcessecretos.online`.
- GH Formación enlaza a GitHub y `ghformacion.com`.
- Daniyer enlaza a GitHub y `daniyer.online`.
- Paola Morales enlaza a GitHub y `paolamorales.online`.
- Gladys Pabon enlaza a GitHub y `dacorpa.online`.
- Hip Hop Don’t Stop tiene dos enlaces de YouTube.
- Aseo Market tiene enlaces de demo y GitHub.
- Ferox BARF tiene enlaces de demo y GitHub.

La auditoría confirmó las URLs declaradas en el código, pero no verificó que todos esos dominios externos sigan activos.

### Descargas y documentos

Las tres descargas declaradas existen:

- PDF de Física Aplicada.
- PDF de Electrotecnia.
- Archivo DWG del plano eléctrico.

### Problemas con imágenes

- IconFull apunta a un archivo inexistente: `/assets/iconforge/og-1200x630.png`.
- El Intercontinental usa por error el Open Graph de Coriolis: `/assets/coriolisacc/og.webp`.
- Hip Hop Don’t Stop usa imágenes de aproximadamente 4,03 MB y 3,59 MB.
- Gladys Pabon usa un icono PNG de 2,44 MB.
- Space Marine usa imágenes de 1,68 MB y 1,56 MB.
- Dulces Secretos tiene una imagen de 1,58 MB.

### Textos que necesitan revisión

Prioridad recomendada:

1. **IconFull**
   - Corregir el Open Graph inexistente.
   - Acortar y estructurar la descripción y los desafíos.

2. **El Intercontinental**
   - Corregir el Open Graph ajeno.
   - Eliminar textos internos como “Si tienes números concretos…”, “pásame los textos…” y “Si quieres que redacte…”.
   - Confirmar con datos reales la afirmación de aumento de solicitudes.

3. **Dulces Secretos**
   - Corregir `slug: "duleces-secretos"`.
   - Corregir `e-comerce`.
   - Revisar acentuación y redacción.

4. **Coriolis**
   - Corregir `e-comerce`.
   - Revisar errores ortográficos y redacción.

5. **Space Marine y GH Formación**
   - Mejorar claridad editorial.
   - Confirmar el estado actual de servicios y funcionalidades.

6. **Proyectos antiguos**
   - Homogeneizar su estructura con Aseo Market, Ferox BARF y los proyectos académicos.

Para actualizar correctamente faltan los siguientes datos:

- URL vigente de cada proyecto.
- Año.
- Rol exacto.
- Alcance.
- Métricas verificables.
- Stack confirmado.
- Autorización para mostrar cliente y material.
- Capturas actuales.

## E. Optimización

El directorio `public` contiene:

```text
137 archivos
89,38 MB totales
```

`public/assets` contiene:

```text
93 archivos
78,43 MB
```

Hay 13 archivos mayores de 1 MB y 8 archivos mayores de 3 MB.

Los cinco mayores son:

```text
11,47 MB  public/assets/avatar-left2.png
11,45 MB  public/assets/avatar-right2.png
 8,05 MB  public/assets/avatar-right.png
 8,04 MB  public/assets/avatar-left.png
 8,04 MB  public/assets/avatar-left - copia.png
```

No se encontraron referencias activas a esos cinco archivos. Parecen candidatos a una limpieza posterior, previa comprobación visual. No fueron borrados durante la auditoría.

### Uso de imágenes

- Se usa `next/image` en `SectionTwo` y `ProjectDetail`.
- Las tarjetas de `MenuOverlay` usan `<img>` nativo.
- Aunque tienen lazy loading, pueden descargar imágenes originales de hasta 4 MB al abrir el catálogo.
- `ProjectDetail` dibuja dos instancias de la misma imagen: fondo desenfocado y primer plano.
- El lightbox utiliza `<img>` y abre el archivo original.
- `/assets/avatar.png` pesa 1,52 MB.
- El avatar aparece dos veces con `priority`, una variante móvil y otra desktop.

### Animaciones y canvas

`ParticlesBackground` crea dos canvases:

- 400 estrellas.
- 20 partículas principales en desktop.
- La segunda capa aumenta a 60 partículas en móvil.

`CodeParticlesBackground` agrega otro canvas con diez partículas de código.

Puntos positivos:

- Los fondos se cargan dinámicamente.
- Respetan movimiento reducido.
- Pausan al salir del viewport o perder foco.
- Tienen un límite de 60 FPS.

Otros costes:

- El cursor eléctrico agrega otro canvas de pantalla completa.
- El cursor mantiene un RAF global.
- Framer Motion se usa en el overlay de proyectos.
- Existe un shimmer CSS infinito con `will-change: transform`.

### Cambios recomendados por prioridad

Todos pueden hacerse sin instalar dependencias:

1. Comprimir y redimensionar las imágenes utilizadas.
2. Convertir PNG fotográficos a WebP o AVIF cuando corresponda.
3. Verificar y después retirar los avatares grandes sin uso.
4. Sustituir miniaturas nativas por `next/image`.
5. Definir dimensiones y `sizes` adecuados.
6. Reducir las 400 estrellas del fondo.
7. Evitar aumentar las partículas a 60 en móvil.
8. Detener el RAF del cursor cuando no haya actividad.
9. Evitar dos imágenes `priority` del mismo avatar.
10. Corregir las imágenes Open Graph equivocadas o inexistentes.
11. Definir `turbopack.root` en `next.config.mjs`.

## Validación

### Lint

Comando ejecutado:

```text
npm run lint
```

Resultado:

- Código de salida `0`.
- Sin errores.
- Sin advertencias.

### Build

Comando ejecutado:

```text
npm run build
```

Resultado:

- Código de salida `0`.
- Compilación de producción correcta.
- Build completado en 11,3 segundos.

Rutas generadas:

```text
/
/_app
/404
/api/contact
```

Advertencias del build:

1. Next.js encontró varios archivos `package-lock.json`.
2. Tomó `C:\Users\cabal\package-lock.json` como raíz del workspace.
3. También encontró el `package-lock.json` del proyecto.
4. Browserslist/caniuse-lite tiene 13 meses de antigüedad.

Actualizar Browserslist modificaría dependencias o lockfiles, por lo que quedó fuera de la auditoría.

Git continuó limpio después de las validaciones.

## F. Plan recomendado

Siguiente fase sugerida:

```text
Fase 4.4 — dominio temporal, saneamiento del catálogo y rendimiento
```

Orden recomendado:

1. Obtener desde Vercel el alias público exacto.
2. Configurar `NEXT_PUBLIC_SITE_URL` en Vercel.
3. Decidir si corresponde activar `ALLOW_INDEXING=true`.
4. Unificar los metadatos y retirar las referencias antiguas de `_document.js`.
5. Actualizar `robots.txt` y `sitemap.xml`.
6. Corregir las inconsistencias de `projects.js`.
7. Optimizar primero las imágenes visibles.
8. Reducir las partículas.
9. Hacer que el cursor funcione según actividad.
10. Repetir lint, build y revisión visual en desktop y móvil.

### Archivos que tocaría

- Configuración de entorno en Vercel.
- `pages/index.js`.
- `pages/_document.js`.
- `public/robots.txt`.
- `public/sitemap.xml`.
- Posiblemente `public/site.webmanifest`.
- `pages/api/contact.js`.
- `data/projects.js`.
- `components/ElectricCursor.jsx`.
- `components/ParticlesBackground.jsx`.
- `components/SectionTwo.jsx`.
- `components/MenuOverlay.jsx`.
- `components/ProjectDetail.jsx`.
- `next.config.mjs`.
- Assets concretos después de preparar y verificar sus reemplazos.

### Archivos y tecnologías que no tocaría

- `package.json`.
- `package-lock.json`.
- Dependencias o versiones.
- Arquitectura Pages Router.
- App Router.
- TypeScript.
- Vite.
- React Router.
- Documentos académicos originales.
- Assets binarios sin una tarea explícita y una copia de reemplazo verificada.

## Cierre

Durante la auditoría no se modificó, instaló, borró, confirmó ni publicó nada. La única modificación posterior es este archivo Markdown, creado a petición del propietario para conservar y leer el reporte fuera de la interfaz de Codex CLI.
