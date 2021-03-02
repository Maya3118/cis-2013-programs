var floatAge, floatDays, intWeeks, floatMonths, intFortnights;

floatAge = parseFloat(prompt("Enter age"));
floatDays = parseFloat(floatAge*365.25);
floatMonths = parseFloat(floatAge*12);
intWeeks = parseInt(floatDays/7);
intFortnights = parseInt(floatDays/14)

alert("You are " + floatAge.toFixed(2) + " years old, or " + floatDays.toFixed(2) + " days, " + floatMonths.toFixed(2) + " months, " + intWeeks + " weeks, and " + intFortnights + " fortnights");
