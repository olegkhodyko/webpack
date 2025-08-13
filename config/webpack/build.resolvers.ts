import { Configuration } from 'webpack';
import { WebpackOptions } from './types/webpack.types';

export function buildResolvers(
  options: WebpackOptions
): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
}
