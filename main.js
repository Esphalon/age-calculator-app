// Gather input buttons, define fields where calc output will be shown

const sendDate = document.getElementById("send-date");
const calcYear = document.querySelector(".calc-year");
const calcMonth = document.querySelector(".calc-month");
const calcDay = document.querySelector(".calc-day");
// Checkers if calculate can be done
let dayCorrect = false;
let monthCorrect = false;
let yearCorrect = false;

const dateYear = new Date().getFullYear();
const dateMonth = new Date().getMonth() +1;
const dateDay = new Date().getDate();

const monthCalc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const grabInput = () => {
  // const inputYear = document.getElementById("input-year").value;
  daySetter();
  monthSetter();
  yearSetter();
  
  if(dayCorrect && monthCorrect && yearCorrect){
    removeError();
    calculateDifference();
  }

  function daySetter(){
    const monthCalc = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const inputDay = document.getElementById("input-day").value;
    const inputMonth = document.getElementById("input-month").value;
    console.log(monthCalc[inputMonth]);
    
    if(monthCalc[inputMonth] < inputDay || inputDay <= 0 || inputDay > 31){
      const errorDay = document.querySelector(".error-handler-day");
      errorDay.setAttribute("error",'');
      dayCorrect = false;
    }else if(inputDay === ''){
      const errorDay = document.querySelector(".error-handler-day");
      errorDay.setAttribute("empty",'');
      errorDay.removeAttribute("error");
      yearCorrect = false;
    }else{
      const errorDay = document.querySelector(".error-handler-day");
      errorDay.removeAttribute("error");
      errorDay.removeAttribute("empty");
      dayCorrect = true;
    }
  }

  function monthSetter(){
    const inputMonth = document.getElementById("input-month").value;

    if(inputMonth >= 13 || inputMonth < 0){
      const errorMonth = document.querySelector(".error-handler-month");
      errorMonth.setAttribute("error",'');
      monthCorrect = false;
    }else if(inputMonth === ''){
      const errorMonth = document.querySelector(".error-handler-month");
      errorMonth.setAttribute("empty",'');
      errorMonth.removeAttribute("error");
      yearCorrect = false;
    }else{
      const errorMonth = document.querySelector(".error-handler-month");
      errorMonth.removeAttribute("error");
      errorMonth.removeAttribute("empty");
      monthCorrect = true;
    }
  }

  function yearSetter(){
    const inputYear = document.getElementById("input-year").value;

    if(inputYear > dateYear){
      const errorYear = document.querySelector(".error-handler-year");
      errorYear.setAttribute("error",'');
      errorYear.removeAttribute("empty");
      yearCorrect = false;
    }else if(inputYear === ''){
      const errorYear = document.querySelector(".error-handler-year");
      errorYear.setAttribute("empty",'');
      errorYear.removeAttribute("error");
      yearCorrect = false;
    }else{
      const errorYear = document.querySelector(".error-handler-year");
      errorYear.removeAttribute("error");
      errorYear.removeAttribute("empty");
      yearCorrect = true;
    }
  }

 function calculateDifference(){
  const inputYear = document.getElementById("input-year").value;
  const inputMonth = document.getElementById("input-month").value;
  const inputDay = document.getElementById("input-day").value;
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

sendDate.addEventListener('click', grabInput);
