import { join } from 'path'
import { defineConfig } from 'vite'
import {
  BugsnagBuildReporterPlugin,
  BugsnagSourceMapUploaderPlugin,
} from 'vite-plugin-bugsnag'
import react from '@vitejs/plugin-react'

const bugsnagOptions = {
  apiKey: 'a102b5858192ed8b294e39162c2eb634',
  appVersion: '1.0.0',
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  const srcRoot = join(__dirname, 'view')
  const NODE_ENV = `${process.env.NODE_ENV}`
  const isDEV = NODE_ENV === 'development'

  return {
    root: srcRoot,
    base: isDEV ? '/' : `./`,
    mode: NODE_ENV,
    build: {
      outDir: '../.webpack/renderer',
      emptyOutDir: true,
      sourcemap: true,
    },
    plugins: [
      react(),
      !isDEV &&
        BugsnagBuildReporterPlugin({
          ...bugsnagOptions,
          //releaseStage: process.env.RAILS_ENV,
        }),
      !isDEV &&
        BugsnagSourceMapUploaderPlugin({ ...bugsnagOptions, overwrite: true }),
    ],
  }
})
