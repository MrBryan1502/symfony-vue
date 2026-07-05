# Symfony + Vue 3 Template

Plantilla moderna para aplicaciones web con **Symfony 7** en el backend y **Vue 3** + **TypeScript** en el frontend, integrados mediante Vite.

## Stack

| Capa     | Tecnología                                                   |
| -------- | ------------------------------------------------------------ |
| Backend  | [Symfony 7.4](https://symfony.com) + PHP 8.2+ / Doctrine ORM / PostgreSQL |
| Frontend | [Vue 3](https://vuejs.org) + TypeScript + Pinia + Vue Router |
| Build    | [Vite](https://vitejs.dev) + `vite-plugin-symfony` + `@vitejs/plugin-vue` |
| Estilo   | CSS moderno con design system oscuro y gradientes            |

## Instalación

Puedes crear un nuevo proyecto de dos formas:

### Via Composer (recomendado)

```bash
composer create-project mrbryan1502/symfony-vue mi-app
```

Esto instala automáticamente las dependencias de PHP **y** las de frontend (pnpm).

### Via npx / pnpm dlx

```bash
# Con npm
npx create-symfony-vue mi-app

# Con pnpm
pnpm dlx create-symfony-vue mi-app
```

Esto crea el proyecto e instala tanto las dependencias PHP (composer) como las de frontend (npm/pnpm/yarn automáticamente detectado).

### Manualmente (clonando el repo)

```bash
git clone https://github.com/mrbryan1502/symfony-vue.git mi-app
cd mi-app

# Las dependencias se instalan automáticamente con cualquiera de estos:
composer install    # instala PHP + dispara pnpm install
pnpm install        # instala frontend + dispara composer install
```

## Requisitos

- PHP >= 8.2
- [Composer](https://getcomposer.org)
- [pnpm](https://pnpm.io) >= 11.9 (o npm/yarn/bun)
- [Symfony CLI](https://symfony.com/download) (recomendado para desarrollo)

## Ejecución en desarrollo

```bash
cd mi-app
pnpm dev
```

Esto lanza simultáneamente:

- `symfony serve` — servidor PHP de desarrollo
- `vite` — servidor de assets con HMR

Abrir `https://localhost:8000` en el navegador.

### Variables de entorno

```bash
cp .env .env.local
# Editar DATABASE_URL y APP_SECRET en .env.local
```

### Comandos útiles

| Comando              | Descripción                         |
| -------------------- | ----------------------------------- |
| `pnpm dev`           | Desarrollo con hot reload           |
| `pnpm build`         | Build de producción para frontend   |
| `pnpm format`        | Formatear código con Prettier       |
| `pnpm lint`          | Verificar formato                  |
| `composer run-script`| Scripts definidos en `composer.json`|

## Estructura del proyecto

```
symfony-vue/
├── assets/                  # Frontend (Vue 3 + TypeScript)
│   ├── main.ts              # Punto de entrada
│   ├── app.css              # Estilos globales
│   ├── router/              # Configuración de Vue Router
│   ├── src/
│   │   └── App.vue          # Componente raíz (welcome page)
│   ├── controllers/         # Stimulus controllers (opcional)
│   ├── styles/              # Estilos adicionales
│   └── vendor/              # Assets de vendor
├── config/                  # Configuración de Symfony (YAML)
├── migrations/              # Migraciones de Doctrine
├── packages/
│   └── create-symfony-vue/  # Paquete npm del CLI scaffold
├── public/                  # Document root
│   └── build/               # Build de Vite (generado)
├── scripts/                 # Utilidades internas
│   └── sync-template.mjs    # Sincroniza template con el CLI
├── src/                     # Código PHP (App\ namespace)
│   ├── Controller/
│   ├── Entity/
│   ├── Repository/
│   └── ...
├── templates/               # Twig templates
│   ├── base.html.twig
│   └── app.html.twig        # Template que monta Vue
├── tests/                   # Tests PHPUnit
├── translations/            # Traducciones
├── vite.config.js           # Configuración de Vite
├── tsconfig.json            # Configuración de TypeScript
└── composer.json
```

## Integración Symfony + Vite

La comunicación entre Symfony y Vite se maneja mediante:

- [`vite-plugin-symfony`](https://github.com/lhapaipai/vite-plugin-symfony) — plugin de Vite
- [`pentatrion/vite-bundle`](https://github.com/PentaTraITeam/vite-bundle) — bundle de Symfony

Los entry points se definen en `assets/main.ts` y se referencian en Twig mediante:

```twig
{{ vite_entry_link_tags('app') }}
{{ vite_entry_script_tags('app') }}
```

Para más información, consulta la [documentación de Symfony con Vite](https://pentatrion.github.io/vite-bundle/).

## Producción

```bash
pnpm build
composer dump-env prod
```

El servidor Symfony sirve los assets compilados desde `public/build/`.

## Desarrollo del CLI

```bash
# Sincronizar los cambios del template al paquete npm
node scripts/sync-template.mjs

# Probar el CLI localmente
node packages/create-symfony-vue/bin/index.js mi-app-test
```

## Publicación

```bash
# Publicar en Packagist (composer)
# 1. Push a GitHub
# 2. Crear release en GitHub
# 3. Packagist detecta automáticamente

# Publicar en npm
cd packages/create-symfony-vue
npm publish
```

## Licencia

MIT
