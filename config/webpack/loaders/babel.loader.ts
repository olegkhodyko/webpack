import { RuleSetRule } from 'webpack';
import { WebpackOptions } from '../types/webpack.types';
import { removePropsBabelPlugin } from '../custom/remove.props.babel.plugin';

export function babelLoader(mode: WebpackOptions['mode']): RuleSetRule {
  const isDevMode = mode === 'development';
  const isProdMode = mode === 'production';

  const plugins = [];

  if (isProdMode) {
    const deleteTestIdPlugin = [
      removePropsBabelPlugin,
      {
        props: ['data-testid'],
      },
    ];

    plugins.push(deleteTestIdPlugin);
  }

  return {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: isDevMode ? 'automatic' : 'classic',
            },
          ],
        ],
        plugins,
      },
    },
  };
}
