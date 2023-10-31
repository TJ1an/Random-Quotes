const api_url = "https://api.quotable.io/random?maxLength=100"
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const new_quote = document.getElementById("new-quote")

async function getquote(url){
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    quote.innerHTML = data.content
    author.innerHTML = data.author
}

function changeBackgroundColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16); 
  document.body.style.transition = "background-color 2s"; // Adjust the duration as needed
  document.body.style.backgroundColor = "#" + randomColor;
  console.log(randomColor)
}

new_quote.addEventListener('click', button =>{
    getquote(api_url)
    changeBackgroundColor()
})

getquote(api_url)