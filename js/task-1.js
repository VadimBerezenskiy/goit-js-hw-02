'use strict';
const logItems = function (logItems) {
  for (let i = 0; i < logItems.length; i += 1) {
    console.log(`${i + 1} -`, logItems[i]);
  }
};
const friends = logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
const nambers = logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
