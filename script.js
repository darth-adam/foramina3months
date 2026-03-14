const envelope = document.getElementById("envelope")
const openBtn = document.getElementById("openBtn")
const resetBtn = document.getElementById("resetBtn")
const nextLetter = document.getElementById("nextLetter")
const message = document.getElementById("message")
const music = document.getElementById("music")
const hearts = document.getElementById("hearts")

let index = 0

const letters = [

"Every moment with you is a blessing I don't deserve. Your smile lights up my world like nothing else ever could.",

"We now have been dating for 3 months and everyday you find a way to make me smile.",

"And I hope our relationship lasts forever not just 3 months mwah I love you."

]

openBtn.onclick = () => {

envelope.classList.add("open")

music.play()

spawnHearts()

}

resetBtn.onclick = () => {

envelope.classList.remove("open")

music.pause()
music.currentTime = 0

index = 0
message.textContent = letters[0]

hearts.innerHTML=""

}

nextLetter.onclick = () => {

index++

if(index >= letters.length){
index = 0
}

message.textContent = letters[index]

}

function spawnHearts(){

for(let i=0;i<20;i++){

let heart = document.createElement("div")

heart.classList.add("heart")

heart.style.left = Math.random()*100+"%"

heart.style.animationDelay = Math.random()*2+"s"

hearts.appendChild(heart)

setTimeout(()=>heart.remove(),3000)

}

}