# Agentes IA en 15 Minutos — Landing Page

Landing page de alta conversión para el taller "Agentes IA en 15 Minutos" de MDC Company LLC.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · React 19 · Framer Motion · Vercel · Hotmart

---

## Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/agentes-ia-landing.git
cd agentes-ia-landing

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores reales

# 4. Levantar el servidor de desarrollo
npm run dev
# Abre http://localhost:3000
```

---

## Variables de entorno

Copia `.env.example` a `.env.local` y completa cada variable:

| Variable | Descripción | Dónde obtenerla |
|---|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | ID del Pixel de Meta | Meta Business Suite → Events Manager |
| `NEXT_PUBLIC_HOTMART_BASICO` | URL de checkout Plan Básico | Hotmart → Mis productos → Copiar link |
| `NEXT_PUBLIC_HOTMART_VIP` | URL de checkout Plan VIP | Hotmart → Mis productos → Copiar link |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp sin `+` ni espacios | Ej: `573001234567` |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Mensaje por defecto de WhatsApp | Texto plano (sin codificar) |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio | Ej: `https://agentes-ia.mdccompany.com` |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics (opcional) | Google Analytics → Admin → Data Streams |

---

## Scripts disponibles

```bash
npm run dev        # Servidor de desarrollo en http://localhost:3000
npm run build      # Build de producción
npm run start      # Iniciar servidor de producción local
npm run lint       # Verificar código con ESLint
npm run type-check # Verificar tipos con TypeScript
```

---

## Assets requeridos

Antes de hacer deploy, coloca estas imágenes en la carpeta `/public/`:

```
public/
├── og-image.jpg              # 1200×630px — Open Graph para redes sociales
├── favicon.ico               # 32×32px
├── angel-foto.jpg            # min 300×300px — Foto circular en el footer
├── demo/
│   └── agente-whatsapp-demo.gif   # max 5MB — Demo del agente en vivo
└── testimonials/
    ├── maria-fernanda.jpg    # min 200×200px
    ├── carlos-mendez.jpg     # min 200×200px
    └── andres-veterinario.jpg # min 200×200px
```

---

## Deploy en Vercel

### Paso 1 — Subir a GitHub

```bash
git init  # Si aún no está inicializado
git add .
git commit -m "feat: landing page completa"
git remote add origin https://github.com/TU_USUARIO/agentes-ia-landing.git
git push -u origin main
```

### Paso 2 — Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"**.
3. Importa el repositorio `agentes-ia-landing`.
4. En **"Configure Project"**, deja el Framework Preset en **Next.js**.
5. Abre la sección **"Environment Variables"** y agrega cada una de las variables de la tabla de arriba.
6. Haz clic en **"Deploy"**.

### Paso 3 — Dominio personalizado (opcional)

1. En tu proyecto de Vercel, ve a **Settings → Domains**.
2. Agrega tu dominio: `agentes-ia.mdccompany.com`.
3. Configura el registro DNS que te indica Vercel en tu proveedor de dominio.

### Paso 4 — Configurar Hotmart para redirigir a `/gracias`

En cada producto de Hotmart:
- **Plan Básico:** Página de agradecimiento → `https://tu-dominio.com/gracias?plan=basico`
- **Plan VIP:** Página de agradecimiento → `https://tu-dominio.com/gracias?plan=vip`

Esto dispara el evento `Purchase` de Meta Pixel con el valor correcto de cada plan.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout global + MetaPixel + metadata
│   ├── page.tsx                # Landing principal (14 bloques)
│   ├── gracias/page.tsx        # Post-compra + evento Purchase
│   ├── terminos/page.tsx       # Términos y condiciones
│   └── politica-privacidad/    # Política de privacidad
├── components/
│   ├── sections/               # Los 14 bloques de la landing
│   ├── ui/                     # Componentes reutilizables
│   └── analytics/MetaPixel.tsx
├── lib/
│   ├── constants.ts            # Precios, URLs, config
│   ├── fbpixel.ts              # Eventos de Meta Pixel
│   ├── parse-bold.tsx          # Helper para negritas en copy
│   └── utils.ts                # cn() helper
└── types/index.ts

content/
└── copy.ts                     # ÚNICA fuente de todo el copy
```

---

## Cambios frecuentes

**Cambiar el precio VIP de $27 a $37:**
Editar una sola línea en `src/lib/constants.ts`:
```ts
vip: { amount: 37, currency: "USD" },
```
Y actualizar el texto en `content/copy.ts` → `pricing.plans.vip.price`.

**Cambiar URL de checkout:**
Actualizar en `.env.local` (y en Vercel → Environment Variables):
```bash
NEXT_PUBLIC_HOTMART_VIP=https://pay.hotmart.com/NUEVA_URL
```

---

MDC Company LLC © 2026
