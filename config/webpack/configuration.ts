import { devServer } from './build.dev.server';
import { buildLoaders } from './build.loaders';
import { buildPlugins } from './build.plugins';
import { buildResolvers } from './build.resolvers';
import { WebpackOptions, WebpackConfiguration } from './types/webpack.types';

export default function buildConfiguration(
  options: WebpackOptions
): WebpackConfiguration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[chunkhash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    module: { rules: buildLoaders(options) },
    devServer: devServer(options),
    // devtool: 'source-map',
  };
}
