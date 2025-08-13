import { RuleSetRule } from 'webpack';

export function svgrLoader(): RuleSetRule {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
}
