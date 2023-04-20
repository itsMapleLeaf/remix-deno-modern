# Remix + Deno

> This template is updated from the [default template](https://github.com/remix-run/remix/tree/main/templates/deno) to make use of deno's new features, namely built-in package.json resolution and tasks.
>
> `npm:` specifiers are currently not supported.

Welcome to the Deno template for Remix! 🦕

For more, check out the [Remix docs](https://remix.run/docs).

## Managing dependencies

Read about
[how we recommend to manage dependencies for Remix projects using Deno](https://github.com/remix-run/remix/blob/main/decisions/0001-use-npm-to-manage-npm-dependencies-for-deno-projects.md).

- ✅ You should use `pnpm` to install NPM packages

  ```sh
  pnpm install react
  ```

  ```ts
  import { useState } from "react"
  ```

- ✅ You may use inlined URL imports or [deps.ts](https://deno.land/manual/examples/manage_dependencies#managing-dependencies)
  for Deno modules.

  ```ts
  import { copy } from "https://deno.land/std@0.138.0/streams/conversion.ts"
  ```

- ❌ Do not use [import maps](https://deno.land/manual/linking_to_external_code/import_maps).

- ❌ Do not use the [`npm:` specifier](https://deno.land/manual@v1.32.5/node/npm_specifiers).

## Development

From your terminal:

```sh
deno task dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Production

First, build your app for production:

```sh
deno task build
```

Then run the app in production mode:

```sh
deno task start
```

## Deployment

Building the Deno app (`npm run build`) results in two outputs:

- `build/` (server bundle)
- `public/build/` (browser bundle)

You can deploy these bundles to any host that runs Deno, but here we'll focus on
deploying to [Deno Deploy](https://deno.com/deploy).

### Setting up Deno Deploy

1. [Sign up](https://dash.deno.com/signin) for Deno Deploy.

2. [Create a new Deno Deploy project](https://dash.deno.com/new) for this app.

3. Replace `<your deno deploy project>` in the `deploy` script in `package.json`
   with your Deno Deploy project name:

```json filename=deno.json
{
  "tasks": {
    "deploy": "deployctl deploy --project=<your deno deploy project> --include=.cache,build,public ./build/index.js"
  }
}
```

4. [Create a personal access token](https://dash.deno.com/account) for the Deno
   Deploy API and export it as `DENO_DEPLOY_TOKEN`:

```sh
export DENO_DEPLOY_TOKEN=<your Deno Deploy API token>
```

You may want to add this to your `rc` file (e.g. `.bashrc` or `.zshrc`) to make
it available for new terminal sessions, but make sure you don't commit this
token into `git`. If you want to use this token in GitHub Actions, set it as a
GitHub secret.

5. Install the Deno Deploy CLI,
   [`deployctl`](https://github.com/denoland/deployctl):

```sh
deno install -A --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

6. If you have previously installed the Deno Deploy CLI, you should update it to
   the latest version:

```sh
deployctl upgrade
```

### Deploying to Deno Deploy

After you've set up Deno Deploy, run:

```sh
deno task deploy
```
