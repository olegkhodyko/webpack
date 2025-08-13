import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { Configuration, ProgressPlugin } from 'webpack';
import { WebpackOptions } from '../types/webpack.types';

export function developmentPlugins(
  options: WebpackOptions
): Configuration['plugins'] {
  return [new ProgressPlugin(), new ReactRefreshWebpackPlugin()];
}
