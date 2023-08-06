const sendDate = document.getElementById("send-date");
const calcYear = document.querySelector(".calc-year");
const calcMonth = document.querySelector(".calc-month");
const calcDay = document.querySelector(".calc-day");

const checkDay =document.getElementById('input-day');
const checkMonth =document.getElementById('input-month');
const checkYear =document.getElementById('input-year');


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

  const monthCalc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  console.log(`${inputYear}/${inputMonth}/${inputDay}`);
  if(inputDay <= 31 && inputDay > 0 && inputMonth <= 12 && inputMonth > 0 && inputYear <= dateYear && monthCalc[inputMonth] > inputDay){
    removeError();
    calculateDifference();
  }else{
    showError();
  }

 function calculateDifference(){

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
  }

  function showError(){
    const errorDay = document.querySelector(".error-handler-day");
    const errorMonth = document.querySelector(".error-handler-month");
    const errorYear = document.querySelector(".error-handler-year");
    errorDay.setAttribute("error",'');
    errorMonth.setAttribute("error",'');
    errorYear.setAttribute("error",'');
  }

  function removeError(){
    const errorDay = document.querySelector(".error-handler-day");
    const errorMonth = document.querySelector(".error-handler-month");
    const errorYear = document.querySelector(".error-handler-year");
    const errorMessage = document.querySelector(".error-handler-message");
    errorDay.removeAttribute("error");
    errorMonth.removeAttribute("error");
    errorYear.removeAttribute("error");
    errorMessage.removeAttribute("error");
  }

  function validDay(){
    if(checkDay.value > 31 || checkDay.value == 0){
      const errorDay = document.querySelector(".error-handler-day");
      errorDay.setAttribute("error",'');
    }else{
      const errorDay = document.querySelector(".error-handler-day");
      errorDay.removeAttribute("error");
    }
  }
  function validMonth(){
    if(checkMonth.value > 12 || checkMonth.value == 0){
      const errorMonth = document.querySelector(".error-handler-month");
      errorMonth.setAttribute("error",'');
    }else{
      const errorMonth = document.querySelector(".error-handler-month");
      errorMonth.removeAttribute("error");
    }
  }
  function validYear(){
    if(checkDay.value > 31){
      const errorDay = document.querySelector(".error-handler-day");
      errorDay.setAttribute("error",'');
    }else{
      const errorDay = document.querySelector(".error-handler-day");
      errorDay.removeAttribute("error");
    }
  }

checkDay.addEventListener('input', validDay);
checkMonth.addEventListener('input', validMonth);
checkYear.addEventListener('input', validYear);
sendDate.addEventListener('click', grabInput);

