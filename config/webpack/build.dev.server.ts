import { WebpackOptions, WebpackConfiguration } from './types/webpack.types';

export function devServer({
  mode,
  port = 3000,
}: WebpackOptions): WebpackConfiguration['devServer'] {
  const isProdMode = mode === 'production';

  if (isProdMode) return undefined;

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
