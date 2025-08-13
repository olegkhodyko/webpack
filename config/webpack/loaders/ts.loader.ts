import ReactRefreshTypeScript from 'react-refresh-typescript';
import { WebpackOptions } from '../types/webpack.types';
import { RuleSetRule } from 'webpack';

export function typescriptLoader(mode: WebpackOptions['mode']): RuleSetRule {
  const isDevMode = mode === 'development';

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDevMode && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };
}
