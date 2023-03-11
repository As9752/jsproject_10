const button=document.querySelector("#btn");
const joke=document.querySelector("#jokeid");
const URL="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
console.log(URL);
let r=()=>{

  fetch(URL).then((e)=>{
   return e.json();
}).then((e)=>{
  joke.style.opacity='1';
  joke.textContent=`${e.joke}`;
});
}
button.addEventListener("click",(e)=>{
  r();
});