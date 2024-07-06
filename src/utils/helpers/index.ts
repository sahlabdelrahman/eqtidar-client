import { filesBaseUrl } from "../config";

export function getProperFileUrl({ filePath }: { filePath: string }) {
    return `${filesBaseUrl}/${filePath}`;
}
