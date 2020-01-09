"use strict";

class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.clock = document.querySelector(selector);
      this.days = this.clock.querySelector('span[data-value="days"]');
      this.hours = this.clock.querySelector('span[data-value="hours"]');
      this.minutes = this.clock.querySelector('span[data-value="mins"]');
      this.seconds = this.clock.querySelector('span[data-value="secs"]');
      this.time = null;
  
      this.interval();
    }
  
    interval() {
      const count = setInterval(() => {
        this.time = this.targetDate - new Date().getTime();
        this.display(count);
      }, 1000);
  
      this.display(count);
    }
  
    display(count) {
      if (!this.time) return;
      if (this.time <= 0) {
        clearInterval(count);
      }
  
      this.days.innerHTML = Math.floor(this.time / (1000 * 60 * 60 * 24));
      this.hours.innerHTML = Math.floor(
        (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes.innerHTML = Math.floor(
        (this.time % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.seconds.innerHTML = Math.floor((this.time % (1000 * 60)) / 1000);
    }
  }


new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 01, 2020'),
  });
