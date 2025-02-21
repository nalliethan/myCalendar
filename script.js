let calendar = document.querySelector('.calendar')
let monthYearHeader = document.querySelector('.month-year-header');
let todayDateLbl = document.querySelector(".today-date-date");
let todayDayLbl = document.querySelector(".today-date-day");
let todayMonthLbl =  document.querySelector(".today-month-month");
let todayYearLbl =  document.querySelector(".today-month-year");


const toggleBtn = document.querySelector(".toggle-btn");
const modeIcon = document.querySelector(".icon i");
const bodyMain = document.getElementsByTagName("BODY")[0];

const month_names = 
['January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December']

const month_names_short = 
['Jan', 
  'Feb', 
  'Mar', 
  'Apr', 
  'May', 
  'Jun', 
  'July', 
  'Aug', 
  'Sep', 
  'Oct', 
  'Nov', 
  'Dec']

const day_names = 
['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];



  generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.days');

    let days_of_month = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let currDate = new Date();
    let todayDate = currDate.getDate();
    let todayDay = currDate.getDay();
    let todayMonth = currDate.getMonth();
    let todayYear = currDate.getFullYear();

    //month year header
    monthYearHeader.innerHTML = `${month_names[month]} ${year}`;

    //days
    let firstDay = new Date(year,month,1);
    calendar_days.innerHTML = '';

    for(let i = 0; i <= days_of_month[month] + firstDay.getDay() - 1; i ++)
    {
      let day = document.createElement('div');
      let date = i - firstDay.getDay() + 1;

      if(i >= firstDay.getDay())
      {
        day.classList.add('days-hover');
        day.innerHTML = date;
      }

      if(date == todayDate && month == todayMonth && year == todayYear)
      {
        day.classList.add("curr-date");
        
      }
      
      todayDateLbl.innerHTML = todayDate;
      todayDayLbl.innerHTML = `${day_names[todayDay]}`;
      todayMonthLbl.innerHTML = `${month_names_short[todayMonth]}`;
      todayYearLbl.innerHTML = `${todayYear}`

      calendar_days.appendChild(day);
    }
  }


//Default page
//Call generateCalendar function.
let currDate = new Date()
let curr_month = {value:currDate.getMonth()};
let curr_year = {value:currDate.getFullYear()};

generateCalendar(curr_month.value,curr_year.value);




//Previous button 
document.querySelector("#prev-year").onclick = () => {
  --curr_month.value;
  console.log(curr_month.value);

  if(curr_month.value < 0)
  {
    currDate = new Date(curr_year.value,curr_month.value);
    curr_month.value = currDate.getMonth();
    curr_year.value = currDate.getFullYear();
  }

  generateCalendar(curr_month.value,curr_year.value);
}




//Next button
document.querySelector("#next-year").onclick = () => {
  curr_month.value++;
  console.log(curr_month.value);

  if(curr_month.value > 11 )
    {
      currDate = new Date(curr_year.value,curr_month.value);
      curr_month.value = currDate.getMonth();
      curr_year.value = currDate.getFullYear();
    }

  generateCalendar(curr_month.value,curr_year.value);

}




//TOGGLE BUTTON
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle("active");

  if(toggleBtn.classList.contains("active"))
  {
    modeIcon.classList.replace("bx-sun","bx-moon");
    bodyMain.classList.replace("light","dark");
    
  }
  else
  {
    modeIcon.classList.replace("bx-moon","bx-sun");
    bodyMain.classList.replace("dark","light");
  }
})