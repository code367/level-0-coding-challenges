function toHoursAndMinutes(number){
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  return `${hours} hour${(hours != 1) ? 's':''}, ${minutes} minute${(minutes != 1) ? 's':''}`;
}
