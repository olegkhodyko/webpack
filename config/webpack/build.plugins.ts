import { Configuration } from 'webpack';
import { WebpackOptions } from './types/webpack.types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { mainPlugins } from './plugins/main.plugins';
import { productionPlugins } from './plugins/production.plugins';
import { developmentPlugins } from './plugins/development.plugins';

export function buildPlugins(
  options: WebpackOptions
): Configuration['plugins'] {
  const isProd = options.mode === 'production';
  const isDev = options.mode === 'development';

  return [
    ...mainPlugins(options),
    ...(isProd ? productionPlugins(options) : []),
    ...(isDev ? developmentPlugins(options) : []),
    ...(options.analyzer ? [new BundleAnalyzerPlugin()] : []),
  ];
}
