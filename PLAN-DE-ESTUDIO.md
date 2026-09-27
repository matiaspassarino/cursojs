# Plan de Estudio: De Básico a Fullstack Developer Profesional

## Contexto
Matías tiene experiencia básica con HTML/CSS y algo de JavaScript. Usa VS Code con Claude Code instalado. Su objetivo es conseguir empleo como frontend/fullstack developer con el stack: React, Next.js, Vue.js, Vite, Node.js, TypeScript, Tailwind, Supabase. Puede dedicar 3-4 horas/día. Necesita certificaciones (FreeCodeCamp), proyectos para GitHub, dominio de herramientas profesionales (Git, APIs REST, OAuth, seguridad web), saber deployar sitios y servicios, y dominar integraciones con IA (Claude API, MCP, agentes, skills).

### Herramienta transversal: Claude Code en VS Code
Desde el día 1, usar Claude Code como compañero de desarrollo en cada proyecto:
- **Consultas de código:** Preguntar dudas directamente en el editor mientras programás
- **Debugging:** Pegar errores y pedir explicación + solución
- **Code review:** Pedir que revise tu código y sugiera mejoras
- **Generación:** Pedir scaffolding de componentes, funciones, tests
- **Aprendizaje:** Usar Claude Code para explicar conceptos, comparar enfoques, dar ejemplos
- **Cada carpeta de proyecto** debe tener un archivo `CLAUDE.md` con contexto del proyecto para que Claude Code entienda mejor tu código

---

## Repositorio del Curso
Todo este directorio (`D:\Documentos\Cursos`) está versionado con Git y subido a GitHub:
- **Repo:** https://github.com/matiaspassarino/cursojs (público)
- **Rama principal:** `main`
- **Excluido del repo (`.gitignore`):** `node_modules/`, entornos virtuales de Python, builds (`dist/`, `.next/`, etc.), archivos `.env`, y los `.fig` de la carpeta `Figma/` (pesan demasiado — copiarlos aparte por USB/nube si hace falta).

**Para migrar a otro sistema operativo o PC nueva:**
```bash
git clone https://github.com/matiaspassarino/cursojs.git
```
Luego reinstalar dependencias sueltas por carpeta (`npm install`, `pip install -r requirements.txt`, etc.) según el proyecto, ya que `node_modules`/`venv` no se suben al repo.

**Flujo diario recomendado:** al terminar de trabajar, hacer commit y push (`git add -A && git commit -m "..." && git push`) para mantener el progreso respaldado y el contribution graph de GitHub activo (ver métrica semanal más abajo).

---

## Fase 1: Fundamentos Sólidos (Semanas 1-6)

### Semana 1-2: JavaScript Moderno a Fondo
- **Recurso principal:** FreeCodeCamp — "JavaScript Algorithms and Data Structures" (certificación)
- **Temas clave:** Variables, tipos, funciones, arrays, objetos, loops, condicionales
- **JS moderno:** `let/const`, arrow functions, destructuring, spread/rest, template literals, módulos (`import/export`)
- **Práctica:** Resolver 5 ejercicios diarios en FreeCodeCamp
- **Meta:** Obtener la certificación "JavaScript Algorithms and Data Structures"

### Semana 3-4: JavaScript Avanzado
- **Temas:** Promesas, async/await, fetch API, closures, prototipos, clases, manejo de errores (try/catch)
- **Recurso:** javascript.info (disponible en español parcialmente, excelente en inglés)
- **Práctica:** Crear mini-proyectos en `D:\Documentos\Cursos\js-ejercicios\`:
  - App de clima usando fetch + API pública
  - To-do list con localStorage
  - Quiz interactivo con timer

### Semana 5-6: Git + GitHub + Línea de Comandos
- **Recurso:** FreeCodeCamp — curso de Git en YouTube (español)
- **Temas:** init, add, commit, push, pull, branches, merge, pull requests, .gitignore
- **Práctica:**
  - Crear cuenta de GitHub con perfil profesional (foto, bio, README de perfil)
  - Subir los mini-proyectos de JS a repositorios individuales
  - Practicar flujo de branches: crear feature branch → hacer cambios → merge
- **Meta:** Tener 3+ repositorios públicos en GitHub

---

## Fase 2: Frontend Profesional (Semanas 7-14)

### Semana 7-8: HTML/CSS Avanzado + Responsive Design
- **Certificación:** FreeCodeCamp — "Responsive Web Design"
- **Temas:** Flexbox, CSS Grid, media queries, accesibilidad (a11y), semántica HTML5
- **Proyecto:** Portfolio personal responsivo (HTML + CSS puro)
  - Secciones: Hero, About, Projects, Contact
  - Subir a GitHub Pages
- **Meta:** Obtener certificación + portfolio online

### Semana 9-10: Tailwind CSS
- **Recurso:** Documentación oficial de Tailwind (excelente, con ejemplos)
- **Temas:** Utility-first, responsive con Tailwind, componentes, dark mode, customización
- **Práctica:** Reconstruir el portfolio usando Tailwind
- **Proyecto:** Landing page de producto ficticio con Tailwind
  - Responsiva, con animaciones básicas, dark mode

### Semana 11-12: TypeScript Fundamentos
- **Recurso:** Documentación oficial de TypeScript + FreeCodeCamp curso en YouTube
- **Temas:** Tipos básicos, interfaces, types, generics, enums, type narrowing, utility types
- **Práctica:** Reescribir los ejercicios de JS en TypeScript
- **Meta:** Sentirse cómodo leyendo y escribiendo TypeScript

### Semana 13: Vite como Herramienta de Build
- **Recurso:** Documentación oficial de Vite (vitejs.dev)
- **Temas:** Qué es un bundler, por qué Vite es rápido (ESM nativo), crear proyectos con `npm create vite@latest`, plugins, variables de entorno, build para producción
- **Práctica:** Migrar los proyectos anteriores de Tailwind/TypeScript a Vite
- **Nota:** A partir de aquí, todos los proyectos React/Vue se crearán con Vite (excepto los de Next.js)

### Semana 14-15: APIs REST + Fundamentos de Seguridad Web
- **Temas REST:** Métodos HTTP (GET, POST, PUT, DELETE), status codes, headers, CORS, autenticación con tokens
- **Temas OAuth:** Flujo de OAuth 2.0, tokens de acceso/refresh, JWT
- **Seguridad web:** XSS, CSRF, Content Security Policy, HTTPS, sanitización de inputs, almacenamiento seguro de tokens
- **Práctica:** Consumir APIs públicas (JSONPlaceholder, PokéAPI, etc.) con fetch y TypeScript
- **Recurso:** MDN Web Docs (disponible en español)

---

## Fase 3: React + Ecosistema (Semanas 16-26)

### Semana 16-18: React Fundamentos
- **Recurso:** Documentación oficial de React (react.dev) — excelente tutorial interactivo
- **Temas:** JSX, componentes, props, estado (useState), efectos (useEffect), eventos, renderizado condicional, listas
- **Práctica diaria:** Un componente nuevo cada día
- **Proyecto:** App de tareas (Todo App) con React + TypeScript
  - CRUD completo, filtros, localStorage

### Semana 19-20: React Avanzado
- **Temas:** useContext, useReducer, useMemo, useCallback, custom hooks, React Router, formularios controlados
- **Recurso:** react.dev + documentación de React Router
- **Proyecto:** Dashboard de películas/series con TMDB API
  - Búsqueda, favoritos, routing entre páginas, responsive con Tailwind

### Semana 21-23: Next.js
- **Recurso:** Documentación oficial de Next.js + curso interactivo nextjs.org/learn
- **Temas:** App Router, Server Components, Server Actions, SSR vs SSG vs ISR, rutas dinámicas, middleware, metadata/SEO
- **Proyecto:** Blog personal con Next.js + Tailwind + TypeScript
  - Markdown para posts, SEO, sitemap, deploy en Vercel

### Semana 24-25: Supabase + Autenticación
- **Recurso:** Documentación oficial de Supabase
- **Temas:** Base de datos PostgreSQL, autenticación (email, OAuth con Google/GitHub), storage, Row Level Security, real-time
- **Proyecto:** App de notas/bookmarks con autenticación
  - Login con email + OAuth de Google
  - CRUD de notas guardadas en Supabase
  - Deploy en Vercel

### Semana 26: Hosting y Deploy
- **Temas y plataformas:**
  - **GitHub Pages:** Deploy de sitios estáticos (portfolio, landing pages)
  - **Vercel:** Deploy de apps Next.js (conectar repo de GitHub → deploy automático en cada push)
  - **Netlify:** Alternativa a Vercel, deploy de apps React/Vue estáticas y con serverless functions
  - **Railway / Render:** Deploy de servicios backend Node.js (APIs, servidores Express)
  - **Dominios personales:** Comprar dominio barato, configurar DNS, conectar a Vercel/Netlify
- **Conceptos clave:** CI/CD básico, variables de entorno en producción, HTTPS, preview deployments
- **Práctica:** Deployar al menos 3 proyectos anteriores en plataformas distintas
- **Meta:** Que cada proyecto tenga un link en vivo funcionando

---

## Fase 4: Node.js Backend + Vue.js + GraphQL (Semanas 27-34)

### Semana 27-28: Node.js + Express
- **Recurso:** FreeCodeCamp — "Back End Development and APIs" (certificación)
- **Temas:** Node.js fundamentos, npm, módulos, Express.js, middleware, rutas, controladores
- **Práctica:**
  - Crear una API REST completa con Express + TypeScript
  - Endpoints CRUD para un recurso (ej: productos, usuarios)
  - Conectar a Supabase/PostgreSQL como base de datos
  - Autenticación con JWT
- **Deploy:** Subir la API a Railway o Render
- **Meta:** Obtener certificación "Back End Development and APIs"

### Semana 29-30: Vue.js Fundamentos
- **Recurso:** Documentación oficial de Vue (vuejs.org) — excelente tutorial interactivo
- **Temas:** Composition API (setup, ref, reactive, computed, watch), componentes, props, emits, slots, Vue Router, Pinia (state management)
- **Herramienta:** Crear proyectos con Vite (`npm create vite@latest -- --template vue-ts`)
- **Proyecto:** App de gestión de tareas/proyectos con Vue 3 + TypeScript + Tailwind
  - CRUD, filtros, routing, estado global con Pinia
- **Comparar:** Similitudes y diferencias con React (esto es muy valorado en entrevistas)

### Semana 31-32: GraphQL (fundamentos)
- **Recurso:** Apollo Client docs + howtographql.com
- **Temas:** Queries, mutations, subscriptions, Apollo Client con React
- **Práctica:** Consumir una API GraphQL pública (SpaceX API, GitHub GraphQL API)

### Semana 33-36: Proyectos Finales de Portfolio (2 proyectos grandes)

**Proyecto 1: E-commerce / Marketplace (Semana 33-34)**
- Stack: Next.js + TypeScript + Tailwind + Supabase
- Features: Catálogo de productos, carrito, autenticación, checkout, panel de admin
- Arquitectura frontend escalable: componentes reutilizables, estructura de carpetas profesional

**Proyecto 2: App Fullstack SaaS (Semana 35-36)**
- Stack: Next.js + Node.js API (Express) + TypeScript + Tailwind + Supabase + GraphQL (o REST)
- Features: Dashboard con gráficos, autenticación OAuth, CRUD, roles de usuario, filtros avanzados
- Backend propio con Express deployado en Railway, frontend en Vercel
- Enfoque en: arquitectura escalable, rendimiento, testing básico

---

## Fase 5: Integraciones con IA — Claude API, MCP, Agentes y Skills (Semanas 37-42)

### Semana 37-38: Claude API + Anthropic SDK
- **Recurso:** Documentación oficial de Anthropic (docs.anthropic.com)
- **Temas:**
  - Crear cuenta de API en Anthropic, obtener API key
  - Anthropic SDK para JavaScript/TypeScript (`@anthropic-ai/sdk`)
  - Enviar mensajes, streaming de respuestas, system prompts
  - Tool use (function calling): definir herramientas que Claude puede invocar
  - Manejo de contexto y tokens, mejores prácticas de prompting
- **Proyecto:** Chatbot inteligente integrado en una app Next.js
  - UI tipo chat con streaming de respuestas
  - Conectado a la API de Claude
  - Con herramientas personalizadas (ej: buscar en base de datos, consultar clima)
  - Deploy en Vercel con API key en variables de entorno

### Semana 39-40: MCP (Model Context Protocol)
- **Recurso:** Documentación MCP (modelcontextprotocol.io) + ejemplos en GitHub
- **Concepto:** MCP es un protocolo abierto que permite a los LLMs conectarse a fuentes de datos y herramientas externas de forma estandarizada
- **Temas:**
  - Arquitectura MCP: hosts, clients, servers
  - Crear un MCP server en Node.js/TypeScript que exponga herramientas y recursos
  - Conectar MCP servers a Claude Code y Claude Desktop
  - MCP servers existentes: filesystem, GitHub, bases de datos, APIs
- **Práctica:**
  - Instalar y configurar MCP servers existentes en Claude Code (VS Code)
  - Crear un MCP server propio que se conecte a Supabase (leer/escribir datos)
  - Crear un MCP server que exponga una API interna como herramientas para Claude
- **Proyecto:** MCP server personalizado + integración en un proyecto existente

### Semana 41-42: Agentes de IA y Skills de Claude Code
- **Recurso:** Documentación de Claude Agent SDK + Claude Code docs
- **Temas Agentes:**
  - Qué es un agente de IA: loop de razonamiento + uso de herramientas
  - Claude Agent SDK: crear agentes que ejecutan tareas multi-paso
  - Patrones de agentes: planificación, ejecución, verificación
  - Orquestación de múltiples agentes
- **Temas Skills de Claude Code:**
  - Qué son las skills de Claude Code (prompts reutilizables con lógica)
  - Crear skills personalizadas para automatizar tareas repetitivas
  - Configurar hooks en Claude Code (acciones automáticas ante eventos)
  - Usar `CLAUDE.md` para dar contexto a Claude Code en cada proyecto
- **Proyecto:** Agente de IA que automatice una tarea del workflow de desarrollo
  - Ejemplo: agente que revise PRs, genere tests, o actualice documentación
  - Usar Claude Agent SDK + MCP servers como herramientas del agente
- **Proyecto bonus:** Crear 2-3 skills personalizadas para tu workflow diario

---

## Fase 6: Preparación para el Empleo (Semanas 43-46)

### Semana 43-44: Pulir Portfolio y GitHub
- Completar README profesionales en cada proyecto (descripción, screenshots, tech stack, cómo correr localmente)
- Portfolio web actualizado con todos los proyectos
- Perfil de GitHub limpio y activo (contribuciones, pinned repos)
- Conseguir las certificaciones FreeCodeCamp pendientes

### Semana 45-46: Preparación para Entrevistas
- Practicar preguntas técnicas de JS/React/TypeScript en sitios como GreatFrontEnd o frontendmasters
- Preparar explicación de cada proyecto (qué problema resuelve, decisiones técnicas, qué aprendiste)
- Practicar live coding: construir un componente React en 30 minutos
- Actualizar LinkedIn con certificaciones, proyectos y keywords del stack

---

## Certificaciones FreeCodeCamp a Obtener
1. **Responsive Web Design** (Fase 2)
2. **JavaScript Algorithms and Data Structures** (Fase 1)
3. **Front End Development Libraries** (React — Fase 3)
4. **Back End Development and APIs** (Node.js/Express — Fase 4)

## Proyectos Finales para GitHub (mínimo 12)
| # | Proyecto | Stack | Fase |
|---|----------|-------|------|
| 1 | Portfolio personal | HTML/CSS → Tailwind + Vite | 2 |
| 2 | Todo App | React + TypeScript + Vite | 3 |
| 3 | Dashboard películas | React + TypeScript + Tailwind + API | 3 |
| 4 | Blog personal | Next.js + Tailwind + TypeScript | 3 |
| 5 | App con Supabase | Next.js + Supabase + OAuth | 3 |
| 6 | API REST | Node.js + Express + TypeScript + Supabase | 4 |
| 7 | App Vue.js | Vue 3 + TypeScript + Tailwind + Pinia | 4 |
| 8 | E-commerce | Next.js + Supabase + Tailwind | 4 |
| 9 | Dashboard SaaS Fullstack | Next.js + Express API + Supabase | 4 |
| 10 | Chatbot con Claude API | Next.js + Anthropic SDK + Streaming | 5 |
| 11 | MCP Server personalizado | Node.js + TypeScript + MCP SDK | 5 |
| 12 | Agente de IA | Claude Agent SDK + MCP + Tools | 5 |

## Estructura de Carpetas Sugerida
```
D:\Documentos\Cursos\
├── 01-js-fundamentos\
├── 02-js-avanzado\
├── 03-git-practica\
├── 04-html-css-responsive\
├── 05-tailwind\
├── 06-typescript\
├── 07-vite\
├── 08-react-fundamentos\
├── 09-react-avanzado\
├── 10-nextjs\
├── 11-supabase\
├── 12-hosting-deploy\
├── 13-nodejs-express\
├── 14-vuejs\
├── 15-graphql\
├── 16-claude-api\
├── 17-mcp\
├── 18-agentes-skills\
├── proyectos\
│   ├── portfolio\
│   ├── todo-app\
│   ├── movie-dashboard\
│   ├── blog-nextjs\
│   ├── notas-supabase\
│   ├── api-rest-express\
│   ├── vue-task-manager\
│   ├── ecommerce\
│   ├── dashboard-saas\
│   ├── chatbot-claude\
│   ├── mcp-server\
│   └── ai-agent\
└── notas\
```

## Verificación / Cómo Medir Progreso
- **Semanal:** Subir al menos 1 commit a GitHub (mantener el "contribution graph" verde)
- **Por fase:** Completar la certificación FreeCodeCamp correspondiente
- **Proyectos:** Cada proyecto debe estar deployado (GitHub Pages o Vercel) y tener README completo
- **Final:** Poder explicar en una entrevista cada tecnología del stack y mostrar proyectos funcionando en vivo

## Recursos Principales
| Recurso | Idioma | Uso |
|---------|--------|-----|
| FreeCodeCamp.org | ES/EN | Certificaciones + ejercicios |
| javascript.info | EN (parcial ES) | Referencia JS profunda |
| react.dev | EN | Documentación oficial React |
| vuejs.org | EN | Documentación oficial Vue |
| nextjs.org/learn | EN | Curso interactivo Next.js |
| vitejs.dev | EN | Documentación oficial Vite |
| nodejs.org/en/learn | EN | Documentación oficial Node.js |
| expressjs.com | EN | Documentación oficial Express |
| Tailwind docs | EN | Referencia Tailwind |
| Supabase docs | EN | Referencia Supabase |
| MDN Web Docs | ES/EN | Referencia HTML/CSS/JS/APIs |
| YouTube (Midudev, FaztCode) | ES | Videos explicativos en español |
| docs.anthropic.com | EN | Claude API + SDKs |
| modelcontextprotocol.io | EN | Documentación MCP |
| Claude Code docs | EN | Skills, hooks, CLAUDE.md |

## Plataformas de Hosting (gratuitas para empezar)
| Plataforma | Uso | Tier gratuito |
|------------|-----|---------------|
| GitHub Pages | Sitios estáticos | Sí, ilimitado |
| Vercel | Apps Next.js/React/Vue | Sí, generoso |
| Netlify | Apps estáticas + serverless | Sí, generoso |
| Railway | APIs Node.js/Express | Sí, con límites |
| Render | APIs Node.js/Express | Sí, con límites |
