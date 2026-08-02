# ProfilePage

A profile landing page currently displaying a maintenance message.

## Overview

This repository contains an Angular app built with Angular. The app renders a maintenance screen using `HomepageComponent` and a shared Lucide icon module.

## Key features

- Angular 22 application
- Single route (`/`) served by `HomepageComponent`
- Shared icon module using `@lucide/angular`
- Maintenance page design with animated icon and status text

## Project structure

- `src/app/app.module.ts` - main application module
- `src/app/app-routing.module.ts` - routing configuration
- `src/app/app.component.html` - root template with `router-outlet`
- `src/app/homepage/homepage.component.*` - maintenance page component
- `src/app/shared-icons.module.ts` - shared icon import/export module

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the app at:

```text
http://localhost:4200/
```

## Build

Build the application for production:

```bash
npm run build
```

The built files are written to the `dist/` folder.

## Tests

Run unit tests with:

```bash
npm test
```

## Notes

- The current app is a minimal profile/maintenance page and does not include additional pages or e2e tests.
- The route configuration currently maps the root path to `HomepageComponent`.
