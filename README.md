const CustomicTime = require("customic-time");

const ct = new CustomicTime({fillToTwoSymbols: Boolean});

ct.getTime(UNIX-time);
ct.getFullTime(UNIX-time);
ct.getTime(); // current time