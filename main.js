const sendDate = document.getElementById("send-date");
const calcYear = document.querySelector(".calc-year");
const calcMonth = document.querySelector(".calc-month");
const calcDay = document.querySelector(".calc-day");

let setDay = 0;
const setMonth = 0;
const setYear = 0;

const dateYear = new Date().getFullYear();
const dateMonth = new Date().getMonth() +1;
const dateDay = new Date().getDate();
console.log(`${dateYear}/${dateMonth}/${dateDay}`);

const grabInput = () => {
  // const inputYear = document.getElementById("input-year").value;
  const inputYear = document.getElementById("input-year").value;
  const inputMonth = document.getElementById("input-month").value;
  const inputDay = document.getElementById("input-day").value;

  console.log(`${inputYear}/${inputMonth}/${inputDay}`);

  const currentDate = new Date(dateYear, dateMonth -1, dateDay); 
  const givenDate = new Date(inputYear, inputMonth -1, inputDay);
  
   // Calculate the difference in years
   let yearsDifference = dateYear - inputYear;

   // Calculate the difference in months and adjust years accordingly
  let monthsDifference = dateMonth - inputMonth;
  if (dateDay < inputDay) {
    monthsDifference--;
  }
  // Calculate the difference in days
  let daysDifference = dateDay - inputDay;
  if (daysDifference < 0) {
    // If the current day is less than the given day, adjust months and days
    monthsDifference--;
    const lastMonth = new Date(dateYear, dateMonth, 0).getDate();
    daysDifference = lastMonth + daysDifference;
  }
   // If the current month is less than the given month, adjust years
   if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
  }
  calcYear.innerHTML = yearsDifference;
  calcMonth.innerHTML = monthsDifference;
  calcDay.innerHTML = daysDifference;
}

sendDate.addEventListener('click', grabInput)