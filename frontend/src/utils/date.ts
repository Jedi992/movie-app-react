export function getDayMovie(dateMovie) {
  const months = [
    "янв.",
    "фев.",
    "март.",
    "апр.",
    "мая.",
    "июн.",
    "июл.",
    "авг.",
    "сен.",
    "окт.",
    "нояб.",
    "дек.",
  ];
  const d = new Date(dateMovie);
  const n = d.getMonth();
  return d.getDate() + " " + months[n] + " " + d.getFullYear() + " г.";
}
