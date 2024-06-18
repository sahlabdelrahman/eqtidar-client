export function getInitials({ fullName }: { fullName: string }): string {
    const words: string[] = fullName.split(" ");
    if (words.length >= 2) {
        const firstInitial: string = words[0].charAt(0);
        const secondInitial: string = words[1].charAt(0);
        return firstInitial + secondInitial;
    } else if (words.length === 1) {
        // If there's only one word, return its first character twice
        return words[0].charAt(0);
    } else {
        return ""; // Handle the case where the input string is empty or only contains spaces
    }
}
