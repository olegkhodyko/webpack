import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';

export type WebpackConfiguration = DevServerConfiguration & Configuration;
export interface WebpackEnvs extends Partial<Omit<WebpackOptions, 'paths'>> {}
export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';
type BuildDir = Record<keyof BuildDirs, string>;

interface BuildDirs {
  css: string;
  locales: string;
}

export interface WebpackPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
  buildDirs: BuildDir;
}

export interface WebpackOptions {
  port: number;
  paths: WebpackPaths;
  mode: BuildMode;
  platform: BuildPlatform;
  analyzer?: boolean;
}
