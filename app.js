const quote = document.getElementById("advice");
const titleNum = document.getElementById("title-number");
const button = document.getElementById("shuffle-button");

// initialize
let slip_id = Math.floor(Math.random() * (100 - 0)) + 0;
setAdvice(`https://api.adviceslip.com/advice/${slip_id}`, quote, titleNum);

button.addEventListener("click", (e) => {
  let slip_id = Math.floor(Math.random() * (100 - 0)) + 0;
  setAdvice(`https://api.adviceslip.com/advice/${slip_id}`, quote, titleNum);
})





async function setAdvice(url, quote, titleNum) {
  let response = await fetch(url);
  if(response.ok) {
    let json = await response.json();
    let slip = json.slip;
    console.log(slip);
    let id = slip["id"];
    console.log(id);
    let advice = slip.advice;
    
    titleNum.textContent = id;
    quote.textContent = advice;
  }
  else {
    console.log("response fail");
    return null;
  }
}