import { config } from './service/config';

export function createUrl(path) {
  return `${config.serverUrl}/${path}`
}
