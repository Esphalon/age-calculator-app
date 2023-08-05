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
  if(inputDay <= 31 && inputDay > 0 && inputMonth <= 12 && inputMonth > 0 && inputYear <= dateYear){
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
    const errorMessage = document.querySelector(".error-handler-message");
    errorDay.setAttribute("error",'');
    errorMonth.setAttribute("error",'');
    errorYear.setAttribute("error",'');
    errorMessage.setAttribute("error", '');
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

sendDate.addEventListener('click', grabInput)