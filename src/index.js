import timer from './1'
// const refs = { 
//     days: document.querySelector('[data-value=days]'),
//     hours: document.querySelector('[data-value=hours'),
//     mins: document.querySelector('[data-value=mins]'),
//     secs: document.querySelector('[data-value=secs]')
// }

// function countTime (finishDate){
//     const intervalId = setInterval(() => {
//     const currentTime = Date.now();
//     const delta = finishDate - currentTime;
//     timeConverter(delta)
//     } ,1000)
// }

// function timeConverter(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     return {days, hours, mins, secs}
// }

// function updateTimer(obj) {
//     refs.days.textContent = days
//     refs.hours.textContent = hours
//     refs.mins.textContent = mins    
//     refs.secs.textContent = secs
// }

// function pad(value) {
//     return String(value).padStart(2, '0')
// }
// countTime(new Date(2022, 0, 1))