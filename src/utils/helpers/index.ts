import { filesBaseUrl } from "../config";

export function getProperImageUrl({ filePath }: { filePath: string }) {
    return `${filesBaseUrl}/${filePath}`;
}
