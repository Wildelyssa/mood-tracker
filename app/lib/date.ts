export const getFormattedToday = (
  locale = "en-GB",
  date = new Date()
): string => {
  const dayOfWeek = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(
    date
  );
  const day = date.getDate();
  const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  const year = date.getFullYear();

  const getOrdinal = (n: number): string => {
    const j = n % 10,
      k = n % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
  };

  return `${dayOfWeek}, ${day}${getOrdinal(day)} ${month} ${year}`;
};
