import { registerProtocols } from "./customProtocols";

export * from "./main";
export * from "./customProtocols";
export * from "./injector";
export * from "./sassCompiler";
export * from "./fileWatchers"

export const setupUtils = () => {
  registerProtocols();
};
