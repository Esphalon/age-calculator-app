const sendDate = document.getElementById("send-date");
const calcYear = document.querySelector(".calc-year");
const calcMonth = document.querySelector(".calc-month");
const calcDay = document.querySelector(".calc-day");

const dateTime = new Date();
const currentYear = dateTime.getFullYear();
const currentMonth = dateTime.getMonth() + 1;
const currentDay = dateTime.getDate();
console.log(currentYear);
console.log(currentMonth);
console.log(currentDay);

const calculateAge = () => {
  // const inputYear = document.getElementById("input-year").value;
  const inputYear = document.getElementById("input-year").value;
  const inputDay = document.getElementById("input-day").value;
  const inputMonth = document.getElementById("input-month").value;
  calcYear.innerHTML = currentYear - inputYear;
  calcMonth.innerHTML = currentMonth - inputMonth;
  calcDay.innerHTML = currentDay - inputDay;
}


sendDate.addEventListener('click', calculateAge)