# Design System — Gelatinas Lolita Landing Page

## Fuente del Diseño
- **Proyecto Stitch:** Tradición Minimalista Huajuapan
- **Project ID:** 9619904084485998419
- **Pantalla:** Lolita - Inicio (Footer Sincronizado Móvil)
- **Screen ID:** 6e209e8656c7492fb5b5e2358b7c890a
- **Dispositivo:** Mobile (780 × 11284)

---

## Tipografía

### Fuentes
| Rol | Familia | Uso |
|-----|---------|-----|
| Display / Headlines | Libre Caslon Text | Títulos principales, h1, h2 |
| Body / Labels | Hanken Grotesk | Texto de cuerpo, etiquetas, botones |

### Escala Tipográfica
| Token | Tamaño | Line Height | Weight | Letter Spacing |
|-------|--------|-------------|--------|----------------|
| display | 48px | 56px | 700 | -0.02em |
| headline-lg | 32px | 40px | 400 | — |
| headline-lg-mobile | 28px | 36px | 400 | — |
| headline-md | 24px | 32px | 400 | — |
| body-lg | 18px | 28px | 400 | — |
| body-md | 16px | 24px | 400 | — |
| label-md | 14px | 20px | 600 | 0.05em |
| label-sm | 12px | 16px | 500 | — |

---

## Paleta de Colores

### Colores Primarios
| Token | Valor | Uso |
|-------|-------|-----|
| primary | `#432406` | Texto principal, botones primarios |
| primary-container | `#5d3a1a` | Contenedores principales |
| on-primary | `#ffffff` | Texto sobre primary |
| on-primary-container | `#d6a47c` | Texto sobre primary-container |
| primary-fixed | `#ffdcc2` | — |
| primary-fixed-dim | `#f0bc92` | — |
| inverse-primary | `#f0bc92` | — |

### Colores Secundarios
| Token | Valor | Uso |
|-------|-------|-----|
| secondary | `#994700` | Acentos, precios, CTAs secundarios |
| secondary-container | `#fe8e40` | Botón "Solicitar Cotización" |
| on-secondary-container | `#692f00` | Texto sobre secondary-container |
| secondary-fixed | `#ffdbc8` | — |
| secondary-fixed-dim | `#ffb68a` | — |

### Colores Terciarios
| Token | Valor | Uso |
|-------|-------|-----|
| tertiary | `#0f3300` | — |
| tertiary-container | `#1a4c00` | — |
| on-tertiary-container | `#64c435` | — |
| tertiary-fixed | `#97fb66` | — |
| tertiary-fixed-dim | `#7cdd4d` | — |

### Superficies
| Token | Valor | Uso |
|-------|-------|-----|
| background | `#fef9f2` | Fondo principal |
| surface | `#fef9f2` | Superficies base |
| surface-container-low | `#f8f3ec` | Secciones alternas (Hero, Footer) |
| surface-container | `#f2ede6` | — |
| surface-container-high | `#ece7e1` | — |
| surface-container-highest | `#e6e2db` | — |
| surface-container-lowest | `#ffffff` | — |
| surface-dim | `#ded9d3` | — |
| surface-bright | `#fef9f2` | — |
| surface-variant | `#e6e2db` | — |
| on-surface | `#1d1c18` | Texto principal |
| on-surface-variant | `#50453c` | Texto secundario |

### Bordes y Outlines
| Token | Valor | Uso |
|-------|-------|-----|
| outline | `#82746b` | Bordes activos |
| outline-variant | `#d4c3b8` | Bordes sutiles, separadores |

### Error
| Token | Valor |
|-------|-------|
| error | `#ba1a1a` |
| error-container | `#ffdad6` |
| on-error | `#ffffff` |
| on-error-container | `#93000a` |

---

## Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| unit | 8px | Unidad base |
| margin-mobile | 16px | Márgenes laterales (mobile) |
| gutter | 24px | Separación entre columnas |
| margin-desktop | 40px | Márgenes laterales (desktop) |
| container-max | 1200px | Ancho máximo del contenedor |

---

## Border Radius

| Token | Valor |
|-------|-------|
| DEFAULT | 0.125rem (2px) |
| lg | 0.25rem (4px) |
| xl | 0.5rem (8px) |
| full | 0.75rem (12px) |

> Nota: Los botones usan `rounded-full` (pill shape).

---

## Componentes

### 1. TopNavBar (Header)
- Fondo: `surface/90` con `backdrop-blur-md`
- Sticky top, z-50
- Borde inferior: `border-outline-variant/30`
- Logo a la izquierda (h-10 mobile, h-12 desktop)
- Botón CTA "Ordena ahora" a la derecha (rounded-full, bg-primary)
- Efecto scroll: agrega sombra y fondo más opaco

### 2. Hero Section
- Fondo: imagen de Catedral de Huajuapan (opacity-15, grayscale)
- Gradiente overlay: `from-background via-background/90 to-transparent`
- Layout: 2 columnas (texto + imagen producto)
- Badge: "DESDE 1974" en color secondary, tracking-widest
- Título: font-display, text-primary
- CTA: "Ver Menú Completo" (bg-primary, rounded-full, shadow)
- Imagen producto: cremita con efecto drop-shadow-2xl y glow animado

### 3. Nuestros Postres (Product Grid)
- Título sección + descripción + navegación (flechas)
- Grid 3 columnas (desktop), 1 columna (mobile)
- Cada card:
  - Imagen aspect-[4/5], rounded-lg, bg-surface-container-low
  - Nombre + precio con leader dots (línea punteada)
  - Descripción corta
  - Efecto hover: translateY(-8px) scale(1.02)
- Secondary items: layout horizontal con imagen 32x32, info al lado

### 4. Identidad Local (Sobre Nosotros)
- 2 columnas: imagen + texto
- Imagen principal: Catedral, rounded-2xl, shadow-2xl
- Card superpuesta: ubicación con icono Material (location_on)
- Info: horario, tradición, botón "VER EN MAPA"
- Decoración: blobs difusos de color (primary/5, secondary/5)

### 5. Eventos (CTA Section)
- Fondo: bg-primary (oscuro)
- Texto centrado
- Título: text-inverse-primary
- Input email + botón "Solicitar Cotización"
- Input: bg-white/10, border-white/20, rounded-full

### 6. Footer
- Fondo: bg-surface-container-low
- Borde superior: border-outline-variant/10
- 3 zonas: Logo+descripción | Links | Copyright
- Links: hover:text-secondary

---

## Imágenes / Assets

| Asset | URL | Uso |
|-------|-----|-----|
| Logo principal | `https://lh3.googleusercontent.com/aida-public/AB6AXuAd4wJ5L1hH_h3su0C2d_GBjvw5...` | Header nav |
| Logo footer | `https://lh3.googleusercontent.com/aida-public/AB6AXuD2gFYf4hhxyB8d7hbK4P6NhJ3X6...` | Footer |
| Catedral Huajuapan | `https://lh3.googleusercontent.com/aida-public/AB6AXuAk9rYMfGwODhLpHAePelr1BXyS6...` | Hero bg + Identidad |
| Cremita (hero) | `https://lh3.googleusercontent.com/aida-public/AB6AXuC4pJRYkAkRZjnLnlho48ElQMCf...` | Hero product |
| Gelatinas Mosaico | `https://lh3.googleusercontent.com/aida-public/AB6AXuDOOLayDGXsEvmbchaGHTV-hggsn...` | Product card |
| Cremita Histórica | `https://lh3.googleusercontent.com/aida-public/AB6AXuBiLHI_LpPblN1CSH-a905mS9gf...` | Product card |
| Pay de Queso | `https://lh3.googleusercontent.com/aida-public/AB6AXuB163JzzIOc_yfclORMmwbcxsTY...` | Product card |

---

## Efectos y Animaciones

| Efecto | Descripción | CSS |
|--------|-------------|-----|
| hover-lift | Cards de productos | `transform: translateY(-8px) scale(1.02)` con `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| scrolled-nav | Navbar al hacer scroll | Fondo más opaco + box-shadow |
| pulse glow | Glow detrás del producto hero | `animate-pulse` en div con `blur-3xl` |
| smooth scroll | Navegación por anclas | `scroll-behavior: smooth` |

---

## Estructura de Secciones (orden)

1. **Header** — Nav sticky con logo + CTA
2. **Hero** — Presentación con imagen de fondo y producto destacado
3. **Nuestros Postres** — Grid de productos con precios
4. **Identidad Local** — Historia y ubicación
5. **Eventos** — CTA para cotizaciones
6. **Footer** — Links, logo y copyright

---

## Stack Tecnológico (del diseño original)

- **CSS Framework:** Tailwind CSS (CDN con plugins forms, container-queries)
- **Iconos:** Material Symbols Outlined
- **Fonts:** Google Fonts (Libre Caslon Text + Hanken Grotesk)
- **Lenguaje:** HTML semántico con JS vanilla para interacciones


---
---

# Pantalla 2: Visítanos y Contacto

## Fuente del Diseño
- **Proyecto Stitch:** Tradición Minimalista Huajuapan
- **Project ID:** 9619904084485998419
- **Pantalla:** Lolita - Visítanos y Contacto
- **Screen ID:** 445c6088e99546e48cce9bb116bb8cca
- **Dispositivo:** Desktop (2560 × 5332)

---

## Estructura de Secciones (orden)

1. **Header** — Nav sticky (mismo que Inicio, con link "Contacto" activo)
2. **Hero Section** — Título "Visítanos en el Corazón de Huajuapan"
3. **Location Grid** — Mapa de Google + Detalles de Contacto
4. **Nuestro Espacio** — Galería del local + amenidades
5. **CTA Eventos** — Sección de eventos especiales
6. **Footer** — 3 columnas (logo, navegación, frase)

---

## Componentes

### 1. TopAppBar (Header)
- Idéntico al de la página de Inicio
- Diferencia: nav con links visibles (Gelatinas, Flanes, Carlotas, **Contacto**)
- Link activo "Contacto": `text-secondary font-bold border-b-2 border-secondary pb-1`
- Botón CTA: "Ordena ahora" con hover que cambia a `bg-primary-container`

### 2. Hero Section (Visítanos)
- Fondo: `bg-surface-bright`
- Layout: centrado, texto
- Badge: "ENCUÉNTRANOS" — `text-secondary tracking-widest uppercase`
- Título: `font-display text-display md:text-[64px] text-primary`
  - Texto: "Visítanos en el Corazón de Huajuapan"
- Subtítulo: `font-body-lg text-body-lg text-on-surface-variant italic`
  - Texto: "Descubre el sabor de la tradición oaxaqueña en un espacio diseñado para disfrutar cada bocado."
- Decoración: Material icon `temple_hindu` (300px, opacity-5) en esquina inferior derecha

### 3. Location Grid
- Layout: `grid grid-cols-1 lg:grid-cols-12 gap-12`
- **Columna Mapa (lg:col-span-8):**
  - Contenedor: `rounded-xl overflow-hidden soft-card-shadow border border-outline-variant/20 bg-white`
  - iFrame Google Maps embed: `aspect-video md:aspect-[16/9]`
  - URL Maps: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.715342698766!2d-97.77598599999999!3d17.8050705...`
  - Hover: `translateY(-4px)` con cubic-bezier transition
- **Columna Info (lg:col-span-4):**
  - Card de contacto: `p-8 bg-surface-container-low rounded-xl border border-outline-variant/10`
    - Título: "Detalles de Contacto" (headline-md)
    - Items con Material Icons:
      - `location_on` → Dirección: Antonio de León #12, Centro, 69000
      - `call` → Teléfono: +52 953 123 4567
      - `schedule` → Horario: Lunes - Domingo: 9am - 9pm
    - Botón WhatsApp: `border border-secondary text-secondary py-3 rounded-full hover:bg-secondary hover:text-white`
  - Card cultural: `p-6 bg-primary text-white rounded-xl`
    - Título: "Punto de Encuentro"
    - Texto: cita italic sobre tradición
    - Decoración: icon `restaurant` (8xl, white/10, rotate-12)

### 4. Nuestro Espacio (Galería)
- Fondo: `bg-surface-container`
- Layout: `flex flex-col md:flex-row gap-12 items-center`
- **Imagen (w-full md:w-1/2):**
  - Contenedor: `rounded-xl overflow-hidden soft-card-shadow border-4 border-white`
  - Imagen del interior del local
  - Hover: `scale-105` con `transition-transform duration-700`
- **Texto (w-full md:w-1/2):**
  - Título: "Nuestro Espacio" (headline-lg)
  - Separador: `w-20 h-0.5 bg-secondary`
  - Descripción (body-lg + body-md)
  - Amenidades grid (2 cols):
    - ✓ Wifi Gratis
    - ✓ Pet Friendly
    - ✓ Pago con Tarjeta
  - Cada amenidad: `check_circle` (FILL 1, text-secondary) + label-md

### 5. CTA Eventos
- Fondo: `bg-white border-y border-outline-variant/10`
- Layout: centrado, max-w-3xl
- Título: "¿Planeas un evento especial?" (headline-md)
- Descripción sobre pedidos especiales
- Dos botones:
  - "Llamar ahora": `bg-primary text-white rounded-full hover:bg-secondary`
  - "Ver Menú Completo": `border border-outline text-primary rounded-full hover:bg-surface-container-low`

### 6. Footer
- Fondo: `bg-surface-container border-t border-outline-variant/20`
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-gutter`
- **Columna 1:** Logo + copyright + social links
- **Columna 2:** "Navegación" — links (Ubicación, FAQ, Términos, Privacidad)
- **Columna 3:** "Tradición Viva" — frase italic + watermark icon `architecture`

---

## Imágenes / Assets

| Asset | URL | Uso |
|-------|-----|-----|
| Logo nav | `https://lh3.googleusercontent.com/aida-public/AB6AXuCUP907HJ74izvOsV4WM4CdieBXqpRkUePBRrNV-d-36pkVvQAHjIcPkNHWgZKsr9j_qbA5KuTTaq8G9r6VTjcHmD0qhByvqAQsWW8xt1s5gvcMVNhG2lKJLdp_SDGroZJvF6LG_66HijRwtr82aXKZSh0yI6VYfWda5HQZE2FeyeYi2aSe4GSrQNDCRy9PSNslH3BcKtn3FEfFiapwHxfiCO-AEjIicMWh2Mdj-PZh5b5XrTRq6KJCtaAtXZRWwGDBSKTxVnVGzjE` | Header |
| Interior del local | `https://lh3.googleusercontent.com/aida-public/AB6AXuCOiH1yeEJPGCzaO9sZ8GCk5np0yqK7gkSRQF1AJSe4hWdU1lscUy4LiIYgILSpRIohlRNd_rOQIHzUsADc9ZC-byPLjwdkIPqf3Km6EgcVEWMDGuJtyNzXUa6uIk0wXqkXi7tivxRm3fZEW4BrNBE90HmuGlyPsTSf3bFufsp9YV8lesnVaY9XNVRH7Qeqr-jxEzRooESxv0Y3XI8yw0sHelv0l0fGfrOUSm4ddcVR6RVS_HZgWhscTED9K51yC1TopUbfBbejpEE` | Sección "Nuestro Espacio" |
| Logo footer | `https://lh3.googleusercontent.com/aida-public/AB6AXuBKOm952VYEv4vREFvQZSsEWhxVgI4XRthe9mfVgZqMvsQefNFLL_uHeOhbdparNPXtkgOsWbD0CoSsHIM1PxB8f42-4n8NsJ5OnAsXE8uSGKy9j8FE6MehRM2F1Atj473gM2wBFFMs_v1CYZXsU3fCfBtT7PBnsc5Dhm880JieLpqiVy4XkGlnKr9YFztaGCfsB1TBz8-8rMrUszDt0OhFaGFpObNt6fT9x-rRxy3ov4QRh7x9UFWekGUyo3PNCDsnzGsRmjdTKEw` | Footer |

---

## Efectos y Animaciones

| Efecto | Descripción | CSS |
|--------|-------------|-----|
| soft-card-shadow | Sombra suave para cards | `box-shadow: 0 20px 40px -20px rgba(67, 36, 6, 0.08)` |
| map hover-lift | Mapa sube al hover | `translateY(-4px)` con `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| image zoom | Imagen del local al hover | `scale-105` con `duration-700` |
| smooth scroll | Navegación por anclas | `scroll-behavior: smooth` |

---

## Datos de Contacto (del diseño)

| Campo | Valor |
|-------|-------|
| Dirección | Antonio de León #12, Centro, 69000 Heroica Cdad. de Huajuapan de León, Oax. |
| Teléfono | +52 953 123 4567 |
| Horario | Lunes - Domingo: 9am - 9pm |
| WhatsApp | wa.me/529531234567 |
| Google Maps | Postres Lolita, Huajuapan de León |

---

## Material Icons utilizados

| Icono | Uso |
|-------|-----|
| `location_on` | Dirección |
| `call` | Teléfono |
| `schedule` | Horario |
| `temple_hindu` | Decoración hero (fondo) |
| `restaurant` | Decoración card cultural |
| `check_circle` (FILL 1) | Amenidades del local |
| `architecture` | Watermark footer |

---

## Notas de Implementación

- La pantalla es **desktop-first** (2560px) pero incluye clases responsive (`md:`, `lg:`)
- El mapa usa un iframe de Google Maps embed (requiere API key en producción)
- El botón de WhatsApp enlaza a `wa.me/529531234567`
- Los tokens de diseño (colores, tipografía, espaciado) son idénticos a la Pantalla 1 (Inicio)
- La clase `.soft-card-shadow` es custom y debe definirse en los estilos globales


---
---

# Pantalla 3: Menú Completo

## Fuente del Diseño
- **Proyecto Stitch:** Tradición Minimalista Huajuapan
- **Project ID:** 9619904084485998419
- **Pantalla:** Lolita - Menú Completo
- **Screen ID:** 4d7addcdbfb34499b32e230e61a2ea7a
- **Dispositivo:** Desktop (2560 × 6108)

---

## Estructura de Secciones (orden)

1. **TopNavBar** — Nav sticky con logo + botón "Ordena ahora"
2. **Header Section** — Título "Nuestra Dulce Tradición" centrado
3. **Category Filter Pills** — Filtros por categoría (Gelatinas, Flanes, Carlotas, Cremitas)
4. **Sección Gelatinas** — Grid 3 columnas con productos
5. **Sección Flanes** — Grid 2 columnas con layout horizontal
6. **Sección Carlotas** — Grid 2 columnas con cards verticales
7. **Sección Cremitas** — Layout destacado (featured) + card lateral
8. **Cultural Motif** — Icono decorativo separador
9. **Footer** — Mismo que Pantalla 1

---

## Componentes

### 1. TopNavBar
- Sticky top, z-50, h-20
- Fondo: `bg-surface/90 backdrop-blur-md`
- Borde: `border-b border-outline-variant/10`
- Logo a la izquierda (h-12)
- Botón CTA: "Ordena ahora" — `bg-primary text-on-primary rounded-lg uppercase tracking-widest text-xs`
- Hover botón: `hover:bg-secondary`
- Scroll spy: agrega `shadow-md bg-surface/95` al hacer scroll

### 2. Header Section
- Layout: centrado, `text-center mb-16`
- Título: "Nuestra Dulce Tradición" — `font-display text-display text-primary tracking-tight`
- Subtítulo: italic, `font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto`

### 3. Category Filter Pills
- Layout: `flex flex-wrap justify-center gap-3 mb-20`
- Cada pill: `px-6 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-label-md`
- Hover: `hover:bg-secondary hover:text-white`
- Links ancla: `#gelatinas`, `#flanes`, `#carlotas`, `#cremitas`
- Smooth scroll con offset de 90px para el header sticky

### 4. Sección Gelatinas (Grid 3 columnas)
- Título con línea horizontal: `flex items-center gap-6`
  - h2: `font-headline-lg text-headline-lg text-primary whitespace-nowrap`
  - Línea: `h-[1px] bg-outline-variant/30 w-full`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-gutter`
- Product Card:
  - Imagen: `aspect-square`, `overflow-hidden bg-white shadow-sm`
  - Hover imagen: `scale(1.05)` con `transition-transform duration-700`
  - Nombre + precio con dotted leader
  - Descripción: italic, `text-on-surface-variant`

**Productos:**
| Producto | Precio | Descripción |
|----------|--------|-------------|
| Gelatina Mosaico | $35.00 | Un festín de colores y sabores frutales en una base cremosa de leche condensada. |
| Gelatina de Jerez | $28.00 | El sabor clásico de la tradición, con notas sutiles de vino generoso y textura firme. |
| Gelatina de Agua | $25.00 | Refrescante y ligera, elaborada con jugo natural de limones de la región. |

### 5. Sección Flanes (Grid 2 columnas — layout horizontal)
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-gutter`
- Product Card horizontal: `flex flex-col md:flex-row gap-6 p-4 bg-white/50 border border-outline-variant/5`
  - Imagen: `w-full md:w-48 aspect-square flex-shrink-0`
  - Info: nombre + precio (inline), descripción italic, botón "Ver Detalles"
  - Botón: `text-secondary font-label-md uppercase tracking-widest text-xs` + icon `chevron_right`
  - Hover botón: `hover:translate-x-2`

**Productos:**
| Producto | Precio | Descripción |
|----------|--------|-------------|
| Flan Napolitano | $45.00 | La perfección del caramelo quemado fundiéndose con una crema densa de vainilla real. |
| Flan de Queso | $50.00 | Elaborado con queso crema premium, logrando una textura aterciopelada y un balance dulce-salado único. |

### 6. Sección Carlotas (Grid 2 columnas — cards verticales)
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-gutter`
- Product Card vertical:
  - Imagen: `h-64`, `overflow-hidden bg-white shadow-sm`
  - Nombre + precio con dotted leader
  - Descripción italic

**Productos:**
| Producto | Precio | Descripción |
|----------|--------|-------------|
| Carlota de Limón | $40.00 | Capas de galleta María abrazadas por una crema cítrica que se deshace en el paladar. |
| Carlota de Café | $42.00 | Infusionada con granos seleccionados de Oaxaca para un sabor intenso y reconfortante. |

### 7. Sección Cremitas (Layout destacado)
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-gutter`
- **Featured Card (md:col-span-2):** `flex flex-col md:flex-row bg-white shadow-sm overflow-hidden`
  - Imagen: `md:w-1/2 aspect-[4/3]`
  - Info panel: `p-10 bg-primary text-on-primary`
    - Badge: "Especialidad de la Casa" — `font-label-sm text-secondary-fixed uppercase tracking-[0.2em]`
    - Título: "La Cremita Histórica" — `font-headline-lg text-headline-lg`
    - Descripción: italic, `text-primary-fixed-dim`
    - Precio: $20.00/pieza — `font-display text-headline-md`
    - Botón: "Añadir al Pedido" — `bg-secondary text-white hover:bg-secondary-container`
- **Card lateral (Pedido Especial):** `p-8 border border-secondary/20 bg-secondary/5`
  - Icono: `restaurant` (4xl, text-secondary)
  - Título: "Pedido Especial?"
  - Descripción + link "Contáctanos ahora"

### 8. Cultural Motif (Separador decorativo)
- Icon: `castle` (120px, opacity-10)
- Solo visual, no interactivo

### 9. Footer
- Idéntico al de Pantalla 1 (Inicio)

---

## Imágenes / Assets

| Asset | URL | Uso |
|-------|-----|-----|
| Logo nav | `https://lh3.googleusercontent.com/aida-public/AB6AXuABi7iCtpvpukuJR_qG1-03z4uGju2rehGCoLUs819oLOBuyQ9Gj-fpjfDdK6e2Ow6Yju9nb1eBa4cEO0ZVeUnkLYP0JXpSqft3XPWR-A0dz-xBzryJ-sLS2-RyMf1wRRakOjtE5uJb7932NVbkhYseiG8sLoyN0OBr0mEdzNy5O9eCIwwypITMNB2FGtqIkDXB7VFhB437KW3UJMWUd6NBVpruV-wt6cBfR79tmoXz1I94WcdB2b7TBnC04YlEoMhHyH-m8LnpldQ` | Header |
| Gelatina Mosaico | `https://lh3.googleusercontent.com/aida-public/AB6AXuCxQ3emH3r0McEcHzTVqf02lc18SqHluyJ3Y39AluE9VuZCFIQN-gWi4INCq-DLbQHv1m6qs_OQdzCqtTTINmiWwOhH5Bsn6uA0sBg2Uzy-9xZYxwd9VLNpDxwy_LfneW-LKxT24J5HYUgdRR0WtKfSv7gP4i8pBTul2c6bme6pYZTT8cZUzEGn73Y9_PU4zGJ5d6MQR64mRGeEbNkfen7p48Fqk-VHAsD0kAMHOS4PwoIu90dwWQ1kIrmeuxA3atYwo-J7ghKD-Z4` | Producto |
| Gelatina de Jerez | `https://lh3.googleusercontent.com/aida-public/AB6AXuDlZWE89ZT19DY7lygB7rip7Htjz0dgKm5TfbibEYLd6T8XtkXZgGbh8BlXFik4twgFO0CbclnyEuNctZAtZ_4SshlVLX9ppD0n1-AhKIZzyO-6jXNl61fGzGBpnkykL3aGSp9GAyLl5jCQ0bynxiEo6Qh2-SQO2O-iAcqHAxjFYjzFaqRAa1ukdR4g_fZ3YmarKg4Uul2Yz6ZVA81bL7K6NAaR634wsAv4afVPPcjuVUK8Zj-wVXDKPEtvy0_SP4z-l2GTe6UMqvk` | Producto |
| Gelatina de Agua (Limón) | `https://lh3.googleusercontent.com/aida-public/AB6AXuBfTYtrQiGi9CqOQoWDUgssEqBCf-nSM_Wnb_c76D5gI3Eis1clieUjOfmUdqb8sCdSSr9OiA_9RK7y7zaORnuibaY2S8GouyMHNLmGtLQ9HOHTgwr8qKdF5G3DVbGrW1hy5K2gzfvCQW9pVN_9R7aNdw9015qO3dh8IphGapWBnzBLHQoYT-XuzcrgAKc6mhNtuScdWFtYZ472DnioQCBZdNF81ueeXzA9XgfQqXL49g_8ZNz7vTcvAgtgLCRxXU_jcgA8J-OCgXg` | Producto |
| Flan Napolitano | `https://lh3.googleusercontent.com/aida-public/AB6AXuD-YlAcB8SqID2j5esfX-6N67wahkj6Y4WT_p1Wez6Napt0Ghxh7IKNAgRAhcUBquztx5w4UFFusg8zbSyheZwE7dO5OMW1Xnf5y94dOIvILCiBvamXtsSH2LQuRYoyOxEroZXVb26jcOXoay-azANnApZxayhWMd0hFRbiVh3jLWU2CpnO0ua330kSv2CsqzT4-441p0ClJm7y8xAEEyO3IuLFqLtymGpw5ViVXtcUYnc6qfIz_FfBfLejtu159TsZBJXVo2X7wvs` | Producto |
| Flan de Queso | `https://lh3.googleusercontent.com/aida-public/AB6AXuC232JKTMF5TZ1IWaw-qIOgN4Tt2yIEXYlm4KlPF016l5naqZGcPQklrn4rRFEMzFggVcehIkmRLMiGE8ToU27M15_el12SQ6q8riiJsnU-HTbaL9H60_P3zGOYaXqx7Z78CNaa1HFin_ss5W8eQ3-VZXNizycyVfRpPGsuHujGghE1U8k5m5ntb2C02hzqrk2uV82nFF82V5GhqQ9vTYLOxvGA7X9d4lCGwoBPEt7mv70Pi9lQYIKiO1ZCnqGU8qLva51Px0G5f8w` | Producto |
| Carlota de Limón | `https://lh3.googleusercontent.com/aida-public/AB6AXuBObdULhjjkrmuNszqEwq4Ovv0a1NgzqgM6XnjPqAAumbjBWIEvB6IYehnGZZdmMbpeL3yhM6Vd0e8I5VUEZ-kbSKsTkNDHhYzdVfqtIGgHavLgq-W_8wqDOjlSHqjqklskZMT265wk3AYgEALiAOO5rPgfghyOpNNC1A_OKVcshkcURWZDAQo9vqed1cC_gs0E-rnMBo10HU3zdQjvxcgNuBIBYUOcrw7zPVU9FNFstrHiuSnD_xm3LRgP9WVtVYk3hWlN8IIX2eU` | Producto |
| Carlota de Café | `https://lh3.googleusercontent.com/aida-public/AB6AXuDOFqs5cmNs2ciTyZizulQFqd1sR2cSz1mdQV9UbwLZ3za-TyTYdjjKUQV-biM_mYMDcxWl6dt0qv2swvmD2tkUbKvL7TlGgpV6nTUdOlkqYiA_4-JD7wLmmN-D_js8JNV1MjXtSfGWIRvGe3FySZCsWajTgBckPaFxUbr_lFV_aNqUUm4d9lm3T1DkVKxOnB89Y9T0WN2GrZMtEywIcKWyaV-ydDQdkn-JKA2Wj88vbfeEESJPLSXCBMmNh3Jby0Jg3qL-caWTZkE` | Producto |
| Cremita Histórica | `https://lh3.googleusercontent.com/aida-public/AB6AXuCbJpaCLGfEHLeZ7Gd6ceS7U2I8g9W1AW1I0xjChEVNgm7OsmISn-S-YPObLH4F75zqrxGnVTVcpM9dj24d1rhIfJFByg_dDK_vZ1A2RjzrYfwdC6HTfwemxD6BeYm7K0cKV7pCyUiMF1yA3HJTAb-enz_f6oLCDfZXomCtbgUDWYWGpCddIk8y_0djdtxXqyS25ZgdlUjWPM2GUieTo0ELaI1KCzclJjdbAe5AkrUICThRL6Pm-Ge0QNnsIvO0Hs2BhAWx9nBRhv0` | Producto destacado |
| Logo footer | `https://lh3.googleusercontent.com/aida-public/AB6AXuD2gFYf4hhxyB8d7hbK4P6NhJ3X6rxycEKMxwBlVKag5Vbbj3wEsSckRpQ_Qr-Q9l74RFMyyxYnSqOc_Hw-YdurgdEAtEdyDK7sfcPZKa3VwQ-OjGWg2SDuOJkdJ29x86qff7SYJ8ei-tO0q5sIwLYyg8LtfyDlS2j6KLQwzU8U2582luPMkBGNXM91D_A3OIkBqfak1IaWSOQjAbeXvtjvL8ZZcKadC9Dhzmf7roEMbB-0vU7WcrLVIKZ_sanfHco6vN048wXX_xw` | Footer |

---

## Efectos y Animaciones

| Efecto | Descripción | CSS |
|--------|-------------|-----|
| product-card hover | Zoom en imagen del producto | `.product-card:hover .product-img { transform: scale(1.05) }` |
| dotted-leader | Línea punteada entre nombre y precio | `border-bottom: 1px dotted #82746b; flex-grow: 1` |
| scroll-mt-header | Offset para scroll a secciones | `scroll-margin-top: 100px` |
| nav scroll spy | Sombra en nav al hacer scroll | `shadow-md bg-surface/95` al `scrollY > 20` |
| Ver Detalles hover | Botón se desplaza a la derecha | `hover:translate-x-2` |
| filter pill hover | Pill cambia a fondo sólido | `hover:bg-secondary hover:text-white` |

---

## Catálogo Completo de Productos

| Categoría | Producto | Precio |
|-----------|----------|--------|
| Gelatinas | Gelatina Mosaico | $35.00 |
| Gelatinas | Gelatina de Jerez | $28.00 |
| Gelatinas | Gelatina de Agua | $25.00 |
| Flanes | Flan Napolitano | $45.00 |
| Flanes | Flan de Queso | $50.00 |
| Carlotas | Carlota de Limón | $40.00 |
| Carlotas | Carlota de Café | $42.00 |
| Cremitas | La Cremita Histórica | $20.00/pieza |

---

## Material Icons utilizados

| Icono | Uso |
|-------|-----|
| `chevron_right` | Botón "Ver Detalles" en Flanes |
| `restaurant` | Card "Pedido Especial" en Cremitas |
| `castle` | Motif decorativo separador |

---

## Estilos Custom (CSS)

```css
.product-card:hover .product-img {
    transform: scale(1.05);
}

.dotted-leader {
    border-bottom: 1px dotted #82746b;
    flex-grow: 1;
    margin: 0 8px;
    margin-bottom: 5px;
}

.scroll-mt-header {
    scroll-margin-top: 100px;
}
```

---

## Notas de Implementación

- Pantalla **desktop-first** (2560px) con clases responsive (`md:`)
- Navegación por categorías usa smooth scroll con offset de 90px (para no quedar bajo el nav sticky)
- Los tokens de diseño son idénticos a las Pantallas 1 y 2
- La sección de Cremitas tiene un layout featured (2/3 + 1/3) con fondo `bg-primary`
- El botón "Ordena ahora" en esta pantalla usa `rounded-lg` (a diferencia del `rounded-full` de las otras pantallas)
- Los Flanes usan un layout horizontal (imagen + info lado a lado)
- Cada sección tiene un ID ancla para la navegación por pills
- La clase `.product-card` activa el hover en las imágenes hijas con clase `.product-img`


---
---

# Pantalla 3 (Actualización): Menú Completo — Nueva Sección "Pay de Queso"

## Fuente del Diseño
- **Proyecto Stitch:** Tradición Minimalista Huajuapan
- **Project ID:** 9619904084485998419
- **Pantalla:** Lolita - Menú Completo (Incluye Pay)
- **Screen ID:** 60a57d8b54744f5ab9c38432900a16f3
- **Dispositivo:** Desktop (2560 × 7178)

---

## Cambios respecto a la Pantalla 3 original

### 1. Nuevo Category Filter Pill
Se agrega un quinto pill de categoría:
```html
<a href="#pay-de-queso">Pay de Queso</a>
```
- Mismos estilos que los demás pills: `px-6 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-label-md hover:bg-secondary hover:text-white transition-all duration-300`

### 2. Nueva Sección "Pay de Queso"

La sección se ubica **después de Cremitas** y **antes del Cultural Motif** (ícono `castle`).

**ID ancla:** `#pay-de-queso`

**Layout:** Idéntico al de Cremitas — Featured card (md:col-span-2) + card lateral

#### Featured Card (Pay de Queso Artesanal)
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-gutter`
- Card principal: `md:col-span-2 product-card group cursor-pointer flex flex-col md:flex-row bg-white shadow-sm overflow-hidden`
  - **Imagen:** `md:w-1/2 overflow-hidden aspect-[4/3]`
  - **Panel info:** `p-10 flex flex-col justify-center bg-primary text-on-primary`
    - Badge: "Receta Secreta" — `font-label-sm text-secondary-fixed mb-2 uppercase tracking-[0.2em]`
    - Título: "Pay de Queso Artesanal" — `font-headline-lg text-headline-lg mb-4`
    - Descripción: "Nuestro pay horneado lentamente con una base crujiente de galleta y un relleno de queso crema premium, siguiendo la receta secreta de la casa desde 1974." — `font-body-lg text-body-lg text-primary-fixed-dim italic mb-6`
    - Precio: `$55.00` / rebanada — `font-display text-headline-md`
    - Botón: "Añadir al Pedido" — `bg-secondary text-white px-6 py-2 font-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all`

#### Card Lateral (¿Deseas un Pay Entero?)
- Contenedor: `p-8 border border-secondary/20 bg-secondary/5 h-full flex flex-col justify-center text-center`
- Icono: `bakery_dining` (4xl, text-secondary)
- Título: "¿Deseas un Pay Entero?" — `font-headline-md text-primary mb-2`
- Descripción: "También preparamos pays completos para tus reuniones especiales bajo pedido." — `font-body-md text-on-surface-variant mb-6`
- Link: "Consultar precios" — `font-label-md text-secondary underline decoration-secondary/30 underline-offset-4 hover:decoration-secondary`

---

## Nuevo Producto

| Categoría | Producto | Precio | Unidad |
|-----------|----------|--------|--------|
| Pay de Queso | Pay de Queso Artesanal | $55.00 | rebanada |

---

## Nuevo Asset / Imagen

| Asset | URL | Uso |
|-------|-----|-----|
| Pay de Queso Artesanal | `https://lh3.googleusercontent.com/aida-public/AB6AXuCpQaPaYzm3ePUmm0_zjgS1TCXfzadsZeZKynaPBIg3rGco8OM0ddGdK89dTDbg9PlrChIstv6WdP9NX9k_4jLKDR5QetuOjenFtfrHr6SzpyZ--A6WwRct8Czv73eXuH5QloSvTfM3ecfOiMhNC9PdWWAed-zohS9eipOZFhbo0Ozg1PtEMY8YbegoP5ITI_gCeeD4_2cyNVfmgRa7ZmcmMWqEkcd3xQ7iMA3TEfaAS_lFC95DAALgzDmeBgJncsorIDZxd4OsldI` | Producto destacado |

---

## Nuevo Material Icon

| Icono | Uso |
|-------|-----|
| `bakery_dining` | Card lateral "¿Deseas un Pay Entero?" |

---

## Catálogo Actualizado (Total)

| Categoría | Producto | Precio |
|-----------|----------|--------|
| Gelatinas | Gelatina Mosaico | $35.00 |
| Gelatinas | Gelatina de Jerez | $28.00 |
| Gelatinas | Gelatina de Agua | $25.00 |
| Flanes | Flan Napolitano | $45.00 |
| Flanes | Flan de Queso | $50.00 |
| Carlotas | Carlota de Limón | $40.00 |
| Carlotas | Carlota de Café | $42.00 |
| Cremitas | La Cremita Histórica | $20.00/pieza |
| **Pay de Queso** | **Pay de Queso Artesanal** | **$55.00/rebanada** |

---

## Notas de Implementación

- La nueva sección usa exactamente el mismo layout featured que Cremitas (2/3 panel oscuro + 1/3 card lateral)
- El badge cambia de "Especialidad de la Casa" a "Receta Secreta"
- El icono lateral cambia de `restaurant` a `bakery_dining`
- El link lateral cambia de "Contáctanos ahora" a "Consultar precios"
- La unidad de venta es "rebanada" en vez de "pieza"
- Se debe agregar el pill `#pay-de-queso` al filtro de categorías existente
