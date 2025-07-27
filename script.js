const URL="quotes.json";
let para=document.getElementById("pu");
async function getData(){
    let response= await fetch(URL);
    let data= await response.json();
    let randomQuote = data[Math.floor(Math.random() * data.length)];
para.innerHTML = `${randomQuote.content}`;

}
