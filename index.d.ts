declare module 'require-root-trt'{
  interface RequireTRT {
    (filepath: string): NodeRequire;
  }
  var requireTRT: RequireTRT;
  export = requireTRT
}