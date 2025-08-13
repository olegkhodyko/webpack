import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import { WebpackOptions } from '../types/webpack.types';

export function productionPlugins({
  paths,
}: WebpackOptions): Configuration['plugins'] {
  return [
    new MiniCssExtractPlugin({
      filename: `${paths.buildDirs.css}/[name].[contenthash:8].css`,
      chunkFilename: `${paths.buildDirs.css}/[name].[contenthash:8].css`,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, paths.buildDirs.locales),
          to: path.resolve(paths.output, paths.buildDirs.locales),
        },
      ],
    }),
  ];
}
