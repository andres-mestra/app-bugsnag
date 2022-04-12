# Totem App

### Run development mode

```
npm run dev
```

### Run test mode

- Unit test

```
npm run test
```

- E2E

```
npm run build:test
npm run test:e2e
```

### Run make

```
npm run make
```

## Setting environment variables

- Create .env-cmdrc file for electron process variables
  ### Define:
  - NODE_ENV
- Create the files for each execution mode

  - .env.development
  - .env.test
  - .env.production

  ### Define:

  - NODE_ENV
  - PORT=3000 (only in development)
  - SAFE_LINKS ([Content Security Policy](https://developers.google.com/web/fundamentals/security/csp?utm_source=devtools#source_allowlists))
  - VITE_SOME_API_URL
  - VITE_SOME_SUCCESSFUL_CODE (cero in testing)

## Setting npmrc

Create the file .npmrc and replace [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in <token>

```
@ticketplushq:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<token>

```
