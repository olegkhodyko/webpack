import { resolve } from 'path';
import { buildConfiguration } from './config';
import { WebpackEnvs } from './config/webpack/types/webpack.types';

export default (env: WebpackEnvs) =>
  buildConfiguration({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: {
      entry: resolve(__dirname, 'src', 'index.tsx'),
      output: resolve(__dirname, 'build'),
      html: resolve(__dirname, 'public', 'index.html'),
      src: resolve(__dirname, 'src'),
      public: resolve(__dirname, 'public'),
      buildDirs: {
        locales: 'locales',
        css: 'css',
      },
    },
    platform: env.platform ?? 'desktop',
    analyzer: env.analyzer,
  });
