export function timeFormat(s: number): string {
  var hours = Math.round(s / 3600);
  var minutes = Math.round(s / 60) % 60;
  var seconds = s % 60;
  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds))
  );
}
