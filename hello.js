<!DOCTYPE html>
<html>
  <head>
    <title>Learn Enough Javascript</title>
    <meta charset="utf-8">
    <script>
      function dayOfTheWeek(date) {
        const daysOfTheWeek =["Sunday", "Monday", "Tuesday", "Wednesday",
                              "Thursday", "Friday", "Saturday"];
        return daysOfTheWeek[date.getDay()];
      }

      let now = new Date();
      alert(`Hello, world! Happy ${dayOfTheWeek(now)}.`);
    </script>
  </head>
  <body>
  </body>
</html>
