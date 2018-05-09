function dayOfTheWeek(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday", "Sunday"];
  return(daysOfTheWeek)[date.getDay()];
}


function greeting(date) {
  return dayOfTheWeek(date);
}
