'use_strict';

let date = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  currentDay: 0,
  currentDayMonth: 0,
  currentMonth: 0,
  currentYear: 0,
  currentHours: 0,
  currentMinutes: 0,
  currentSeconds: 0,
  hoursEnding: ['час', 'часа', 'часов'],
  minutesEnding: ['минута', 'минуты', 'минут'],
  secondsEnding: ['секунда', 'секунды', 'секунд'],
  resetCurrentDate: function(){
    date.currentDay = new Date().getDay(),
    date.currentDayMonth = new Date().getUTCDate(),
    date.currentMonth = new Date().getMonth() + 1,
    date.currentYear = new Date().getFullYear(),
    date.currentHours = new Date().getHours(),
    date.currentMinutes = new Date().getMinutes(),
    date.currentSeconds = new Date().getSeconds();
  },
  getCurrentDateOne: function(){
    return `Сегодня ${date.days[--date.currentDay]}, ${date.currentDayMonth} ${date.months[--date.currentMonth]} ${date.currentYear} года, ${date.currentHours} ${date.getHoursEnding(date.currentHours, date.hoursEnding)} ${date.currentMinutes} ${date.getHoursEnding(date.currentMinutes, date.minutesEnding)} ${date.currentSeconds} ${date.getHoursEnding(date.currentSeconds, date.secondsEnding)}`;
  },
  getHoursEnding: function(x, y){
    if(String(x).slice(-1) == 1){
      return y[0];
    }else if(String(x).slice(-1) == 2 || String(x).slice(-1) == 3 || String(x).slice(-1) == 4){
      return y[1];
    }else{
      return y[2];
    }
  },
  getCurrentDateTwo: function(){
    return `${date.getZero(date.currentDayMonth)}.${date.getZero(++date.currentMonth)}.${date.currentYear} - ${date.getZero(date.currentHours)}:${date.getZero(date.currentMinutes)}:${date.getZero(date.currentSeconds)}`;
  },
  getZero: function(x){
    return String(x).length < 2 ? '0' + x : x; 
  }
};

date.resetCurrentDate();
console.log(date.getCurrentDateOne());
console.log(date.getCurrentDateTwo());

setInterval(function(){
  console.clear();  //В уведомлениях консоли убрать галочку с "Preserve log"!!!!
  date.resetCurrentDate();
  console.log(date.getCurrentDateOne());
  console.log(date.getCurrentDateTwo());
}, 1000);