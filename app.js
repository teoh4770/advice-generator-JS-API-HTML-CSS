const quote = document.getElementById("advice");
const titleNum = document.getElementById("title-number");
const button = document.getElementById("shuffle-button");

let url = "https://philosophy-quotes-api.glitch.me/quotes"

fetch(url)
.then(res => res.json())
.then(data => {
  let dataSize = data.length;
  let dataList = data;

  const num = randomNum(0, dataSize);
  const json = dataList[num];
  // source, quote
  setPersonName(json.source);
  setQuote(json.quote);


  // initialize
  button.addEventListener("click", (e) => {
    const num = randomNum(0, dataSize);
    const json = dataList[num];
    // source, quote
    setPersonName(json.source);
    setQuote(json.quote);
  })

});

function randomNum(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

function setPersonName(personName) {
  titleNum.textContent = personName;
}

function setQuote(quoteStr) {
  quote.textContent = quoteStr;
}


// initialize
// let slip_id = Math.floor(Math.random() * (100 - 0)) + 0;
// setAdvice(`https://api.adviceslip.com/advice/${slip_id}`, quote, titleNum);

// button.addEventListener("click", (e) => {
//   let slip_id = Math.floor(Math.random() * (100 - 0)) + 0;
//   setAdvice(`https://api.adviceslip.com/advice/${slip_id}`, quote, titleNum);
// })

// async function setAdvice(url, quote, titleNum) {
//   let response = await fetch(url);
//   if(response.ok) {
//     let json = await response.json();
//     let slip = json.slip;
//     console.log(slip);
//     let id = slip["id"];
//     console.log(id);
//     let advice = slip.advice;
    
//     titleNum.textContent = id;
//     quote.textContent = advice;
//   }
//   else {
//     console.log("response fail");
//     return null;
//   }
// }