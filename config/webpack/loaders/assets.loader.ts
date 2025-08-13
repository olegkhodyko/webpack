import { RuleSetRule } from "webpack";

export function assetLoader(): RuleSetRule {
  return {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };
}
