// Calculate milliseconds in a year
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// // Divide Time with a year
// const d = new Date();
// let years = Math.round(d.getTime() / year);

// document.getElementById("demo").innerHTML = years;

//current time
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("demo").innerHTML = time;