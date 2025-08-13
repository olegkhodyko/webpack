import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackOptions } from '../types/webpack.types';
import { RuleSetRule } from 'webpack';

export function stylesLoaders(mode: WebpackOptions['mode']): RuleSetRule[] {
  const isProdMode = mode === 'production';

  const cssLoader = {
    test: /\.css$/i,
    loader: 'css-loader',
    options: { modules: { auto: /\.module\.\w+$/ } },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.scss$/i,
    use: [
      isProdMode ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader',
    ],
  };

  const scssModuleLoader = {
    test: /\.module\.scss$/i,
    use: [
      isProdMode ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      'sass-loader',
    ],
  };

  return [cssLoader, scssModuleLoader, scssLoader];
}
