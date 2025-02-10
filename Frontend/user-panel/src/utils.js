import { config } from "./Service/config";
export function createUrl(path) {
  return `${config.serverUrl}/${path}`;
}
