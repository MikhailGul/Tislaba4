function getCurrentMonth() {
    return new Date().getMonth() + 1;
  }
  
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  let arr = [2025];
  
  let [year = getCurrentYear(), month = getCurrentMonth(), day = 1] = arr;
  
  console.log(year);
  console.log(month);
  console.log(day);