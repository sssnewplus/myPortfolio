// func to get current year
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  
// call the function to update the current year every year
const currentYear = document.getElementById('currentYear')
currentYear.textContent = getCurrentYear();