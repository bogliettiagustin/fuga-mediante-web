# Carpeta de tipografías

Subí acá los archivos de fuente reales del diseño (formato preferido: `.woff2`; también sirven `.otf`/`.ttf`).

Usá este naming, uno por peso/variante:

- `display-regular.woff2` — la fuente condensada bold de los títulos (reemplaza a Anton)
- `sans-regular.woff2` / `sans-bold.woff2` — la fuente de textos como "Videoclip ya disponible" (reemplaza a Inter)

Si es una fuente paga (Adobe Fonts, MyFonts, etc.), asegurate de tener licencia para uso web/self-hosting antes de subirla.

Avisame el nombre exacto de la fuente (lo ves en Figma seleccionando el texto → panel "Text") y cuando subas los archivos actualizo `src/app/layout.tsx` para usarlos con `next/font/local`.
