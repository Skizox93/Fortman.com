function navigate(id){
document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* QUIZ */
function answer(correct){
const result=document.getElementById("quizResult");
if(correct){
result.innerText="🔥 Correct ! John Tyler est le premier Fortman.";
result.style.color="lime";
}else{
result.innerText="❌ Faux. Réessaie.";
result.style.color="red";
}
}

/* MINI GAME */
let score=0;

function spawnEnemy(){
let enemy=document.createElement("div");
enemy.className="enemy";
enemy.style.top=Math.random()*260+"px";
enemy.style.left=Math.random()*90+"%";

enemy.onclick=function(){
score++;
document.getElementById("gameScore").innerText="Score : "+score;
enemy.remove();
}

document.getElementById("gameArea").appendChild(enemy);

setTimeout(()=>enemy.remove(),1500);
}

setInterval(spawnEnemy,1000);