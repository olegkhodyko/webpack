declare const __PLATFORM__: 'mobile' | 'desktop';
declare const __IS_DEV_MODE__: true | false;

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
