let level_name=document.querySelector(".info p span");
let info_second=document.querySelectorAll(".info p span")[1];
let buttoN=document.querySelector(".container button");
let choose_randomWord=document.querySelector(".word_choosen")
let inpuT=document.querySelector("input");
let upcoming_wordes=document.querySelector(".upcomming_words")
let count_sec=document.querySelector(".sec");
let current_score=document.querySelector(".fscore")
let total_score=document.querySelector(".sscore")
let finish=document.querySelector(".finish");
let finishp=document.querySelector(".finish p");
let controls=document.querySelector(".controls")

let words=["hellow","pythone","johncena","javascript","go away","system","cyper security","parse int","soundcloud",
"parak obama","donald trumb","properties bussinesman","machine learning","marvel","iron man","carl","mahmoud helal",
"rassundil","black beauty","empire","america","the burge","customer services","hellow madame","rocket stare","foundation",
"biil gates","soundcloud"]
let levels={
    "easy":10,
    "normal":4,
    "hard":2
}
let default_level="easy";

let choosen_levelSec=levels[default_level]
level_name.innerHTML=default_level;
info_second.innerHTML=choosen_levelSec;
count_sec.innerHTML=choosen_levelSec
total_score.innerHTML=words.length


inpuT.style.display="none"
            upcoming_wordes.style.display="none"
            choose_randomWord.style.display="none"
            controls.style.display="none"
          
buttoN.addEventListener("click",function(){
    

    current_score.innerHTML=0;
    finishp.innerHTML="";
    finish.style.display="none"
    gen_word();
})
function gen_word(){
    if(words.length>0){
      
        let random_word_index=Math.floor(Math.random()*words.length);
        let random_word=words[random_word_index];
        inpuT.style.display="block"
            upcoming_wordes.style.display="flex"
            choose_randomWord.style.display="block"
            controls.style.display="flex"
            inpuT.focus()
            buttoN.style.display="none"
        console.log(random_word)
        choose_randomWord.innerHTML=random_word;
        count_sec.innerHTML=choosen_levelSec
        
        delete_word(random_word,random_word_index)
        upcom_genWord()
        time_count()
    }
 
    

}
function delete_word(random_word,random_word_index){
    upcoming_wordes.innerHTML=""
    for(let i=0;i<words.length;i++){
        if(words[i]===random_word){
            words.splice(random_word_index,1)
            console.log(random_word_index)
        }
       
    }
}
function upcom_genWord(){
    for(let i=0;i<words.length;i++){
        let div=document.createElement("div")
        div.innerHTML=words[i];
        upcoming_wordes.append(div)
    }
}
function time_count(){
    let start=setInterval(function(){

        count_sec.innerHTML--;
        if(count_sec.innerHTML==="0"){
            clearInterval(start)
            check_answer()
            inpuT.value="";
            inpuT.focus()
        

        }
     
}
       
    ,1000)}

    function check_answer(){
        if(inpuT.value.toLocaleLowerCase()===choose_randomWord.innerHTML.toLocaleLowerCase()){
            count_sec.innerHTML=choosen_levelSec
            current_score.innerHTML++
            
            
        
            if(words.length===0){
                finish.style.display="block"
                finishp.innerHTML="congratez"
                finishp.className="good"
                inpuT.style.display="none"
                upcoming_wordes.style.display="none"
                choose_randomWord.style.display="none"
            count_sec.innerHTML=0;
            buttoN.style.display="block"

            }
            gen_word();
        }
        else{
            finish.style.display="block"
            finishp.innerHTML="game over"
            finishp.className="bad"
            inpuT.style.display="none"
            upcoming_wordes.style.display="none"
            choose_randomWord.style.display="none"
            count_sec.innerHTML=0;
            buttoN.style.display="block"
        }
    }
