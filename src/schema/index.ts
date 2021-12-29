import { WebContents } from "electron";

export interface IInjectStyles {
  contents: WebContents;
  styles: string[];
}
