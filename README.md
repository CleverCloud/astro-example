# Minimal Astro Example for Clever Cloud
[![Clever Cloud - PaaS](https://img.shields.io/badge/Clever%20Cloud-PaaS-orange)](https://clever-cloud.com)

This repository contains a minimal Astro application that can be deployed on [Clever Cloud](https://www.clever-cloud.com/). It demonstrates how to deploy a static Astro site with an interactive Preact island using Clever Cloud's [static runtime](https://www.clever.cloud/developers/doc/applications/static/).

![Screenshot of the Astro application deployed on Clever Cloud](assets/screenshot.png)

## Project Structure

- `src/pages/index.astro` - Main page (static HTML)
- `src/components/Counter.tsx` - Interactive Preact island (client-side JS)
- `src/layouts/Layout.astro` - Shared HTML layout
- `astro.config.mjs` - Astro configuration with Preact integration
- `package.json` - Node.js project configuration

## Features

- Static site generation with Astro
- Interactive Preact island using Astro's `client:visible` directive
- Clever Cloud brand colors and Montserrat typography
- Zero JavaScript on static parts of the page
- Ready for deployment on Clever Cloud's static runtime

## Requirements

- Node.js 22 or later

## Local Development

To run this application locally:

```bash
npm install
npm run dev
```

The dev server will start on http://localhost:4321

To build and preview the production output:

```bash
npm run build
npm run preview
```

## Deploying to Clever Cloud

Astro builds to static HTML, so this example uses Clever Cloud's **static runtime**.

### Using the Clever Cloud CLI

1. Install the Clever Cloud CLI:
   ```bash
   npm install -g clever-tools
   ```

2. Login to your Clever Cloud account:
   ```bash
   clever login
   ```

3. Create a new static application:
   ```bash
   clever create --type static-apache <app-name>
   ```

4. Set the output directory:
   ```bash
   clever env set CC_WEBROOT "/dist"
   ```

   Clever Cloud auto-detects the Astro configuration and runs the build automatically.

5. Deploy your application:
   ```bash
   clever deploy
   ```

### Using the Clever Cloud Console

You can also deploy directly from the [Clever Cloud Console](https://console.clever-cloud.com/):

1. Create a new application in the console
2. Select **Static** as the runtime
3. Set `CC_WEBROOT` to `/dist` in the environment variables
4. Clever Cloud auto-detects Astro and builds automatically
5. Follow the deployment instructions provided in the console

## Environment Variables

- `CC_WEBROOT` - Directory served by the static runtime (`/dist`)

## License

[MIT](LICENSE)

## About Clever Cloud

[Clever Cloud](https://www.clever-cloud.com/) is a European cloud provider that automates the deployment and running of applications, allowing developers to focus on code rather than infrastructure.
