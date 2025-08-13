import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';
import { WebpackOptions } from '../types/webpack.types';

export function mainPlugins({
  mode,
  platform,
  paths,
}: WebpackOptions): Configuration['plugins'] {
  const isDevMode = mode === 'development';

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'logo.svg'),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __IS_DEV_MODE__: isDevMode,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ];
}
