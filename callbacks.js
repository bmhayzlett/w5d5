function Clock () {
  this.currentDate = new Date();
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  // this.printTime();
  setInterval(this._tick.bind(this),1000);
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  this.currentHour = this.currentDate.getHours();
  this.currentMinute = this.currentDate.getMinutes();
  this.currentSecond = this.currentDate.getSeconds();
  console.log(this.currentHour + ":" + this.currentMinute + ":" + this.currentSecond);
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  var nextSecond = this.currentDate.getTime() + 1000;
  this.currentDate = new Date(nextSecond);
  this.printTime();
};

var clock = new Clock();
