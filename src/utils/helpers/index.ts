const baseUrl = process.env.REACT_APP_FILES_BASE_URL || "http://localhost:8000";

export function getProperImageUrl({ filePath }: { filePath: string }) {
    return `${baseUrl}/${filePath}`;
}
