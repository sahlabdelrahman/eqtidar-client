export function convertToArabicDate(englishDate: Date): string {
    // Define English and Arabic numbers mapping
    const numbersMap: { [key: string]: string } = {
        "0": "٠",
        "1": "١",
        "2": "٢",
        "3": "٣",
        "4": "٤",
        "5": "٥",
        "6": "٦",
        "7": "٧",
        "8": "٨",
        "9": "٩",
    };

    // Define English and Arabic month names mapping
    const monthsMap: { [key: string]: string } = {
        January: "يناير",
        February: "فبراير",
        March: "مارس",
        April: "أبريل",
        May: "مايو",
        June: "يونيو",
        July: "يوليو",
        August: "أغسطس",
        September: "سبتمبر",
        October: "أكتوبر",
        November: "نوفمبر",
        December: "ديسمبر",
    };

    // Get English date components
    const day = englishDate.getDate().toString();
    const month = englishDate.toLocaleString("default", { month: "long" });
    const year = englishDate.getFullYear().toString();

    // Convert English numbers to Arabic numbers
    const arabicDay = day.replace(
        /[0-9]/g,
        (match) => numbersMap[match] || match
    );
    const arabicMonth = monthsMap[month] || month;
    const arabicYear = year.replace(
        /[0-9]/g,
        (match) => numbersMap[match] || match
    );

    // Construct Arabic date string
    const arabicDate = `${arabicDay} ${arabicMonth}، ${arabicYear}`;

    return arabicDate;
}
