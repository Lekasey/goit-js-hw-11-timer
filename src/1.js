const refs = { 
    days: document.querySelector('[data-value=days]'),
    hours: document.querySelector('[data-value=hours'),
    mins: document.querySelector('[data-value=mins]'),
    secs: document.querySelector('[data-value=secs]')
}

class CountdownTimer {
    constructor({ selector, finishDate }) {
      this.finishDate = finishDate;
      this.isActive = false;
      this.selector = selector;
    }
    
    start() {
      this.isActive = true;
      setInterval(() => {
        if (this.isActive) {
          const currentTime = Date.now();
          const delta = this.finishDate - currentTime;
  
          if (delta <= 0) {
            this.stop();
            return;
          }
          const time = this.timeConverter(delta); 
          this.updateTimer(time);
        } 
      }, 1000);
    }

    
    timeConverter(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }
    
    updateTimer({ days, hours, mins, secs }) {
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.mins.textContent = mins;
      refs.secs.textContent = secs;
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
    
    stop() {
      this.isActive = false;
      const time = this.timeConverter(0);
      this.updateTimer(time);
    }
  }
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
    finishDate: new Date('Jan 01 2022'),
  });
  timer.start();