let res=" ";
let resdata=" ";
const tweetNow=()=>{
    let tweetPost=`https://twitter.com/intent/tweet?text=${resdata.text}`;
    window.open(tweetPost);
}
const quot=document.getElementById('quotes');
const author=document.getElementById("author");
const newQ=document.getElementById("newQ");
const tweetMe=document.getElementById("tweetMe");

const getNewQuotes=()=>{
    let rnum=Math.floor(Math.random()*100);
    resdata=res[rnum];
    quot.innerText=resdata.text;
    resdata.author=="null"? 
    author.innerText="Unknown": 
    author.innerText=resdata.author;
};
const getQuotes=async()=>{
    try{
         let data=await fetch("https://type.fit/api/quotes");
          res= await data.json();
         getNewQuotes();
    }catch(err){
console.log(err);
    }
}
newQ.addEventListener('click',getNewQuotes);
tweetMe.addEventListener('click',tweetNow);
getQuotes();