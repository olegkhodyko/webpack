import { ModuleOptions } from 'webpack';
import { WebpackOptions } from './types/webpack.types';

import { babelLoader } from './loaders/babel.loader';
import { stylesLoaders } from './loaders/styles.loader';
import { assetLoader } from './loaders/assets.loader';
import { svgrLoader } from './loaders/svgr.loader';

export function buildLoaders({ mode }: WebpackOptions): ModuleOptions['rules'] {
  return [
    svgrLoader(),
    assetLoader(),
    babelLoader(mode),
    ...stylesLoaders(mode),
  ];
}
