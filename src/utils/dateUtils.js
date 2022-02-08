const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default function isoToStringDate(isoDate) {
  const d = new Date(isoDate);
  const dayOfMonth = d.getDate();
  const monthName = monthsArray[d.getMonth()];
  const year = d.getFullYear();
  return `${dayOfMonth} ${monthName} ${year}`;
}
