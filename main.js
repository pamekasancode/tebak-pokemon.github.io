const dataSoal = [
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/25.png",
		"acc": "pikachu"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/4.png",
		"acc": "charmander"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/18.png",
		"acc": "pidgeot"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/6.png",
		"acc": "charizard"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/5.png",
		"acc": "charmeleon"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/19.png",
		"acc": "ratatta"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/7.png",
		"acc": "squirtle"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/26.png",
		"acc": "raichu"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/37.png",
		"acc": "vulpix"
	},
	{
		"gambar": "https://pokeres.bastionbot.org/images/pokemon/8.png",
		"acc": "wartortle"
	},

]

var gambar = document.getElementById("gambar");
var jawab = document.getElementById("jawab");
const submit = document.getElementById("submit");

let current = 0;
let score = 0;
let level = 2;
loadGame()

function loadGame() {
	var soal = dataSoal[current];
	console.log(soal)
	gambar.src = soal.gambar;
}

submit.addEventListener("click", ()=> {
	new Audio("ugh.mp3").play()
	if(jawab.value.toLowerCase() == dataSoal[current].acc) {
		console.log("benar");
		score++;
	}

	current++;

	if(level > dataSoal.length) {
		document.getElementById("level").innerText = "Level: complete";
	} else {
		document.getElementById("level").innerText = "Level: "+level++;
	}

	if(current < dataSoal.length) {
		jawab.value = "";
		loadGame();
	} else {
		var sfx = new Audio("wow.mp3");
		sfx.currentTime = 0;
		sfx.play()
		const papanScore = document.querySelector(".score");
		var totalScore = `<div class="container">
			<img src="https://png.pngtree.com/png-vector/20190819/ourmid/pngtree-gold-trophy-icon-trophy-icon-winner-icon-png-image_1694365.jpg">
			<h3 align="center">Congratulations</h3>
			<p>Score anda adalah: <b>${score * 10}</b>. Terimakasih Telah Bermain</p>
			<button class="btn btn-success" onclick="reload()">Selesai <i class="fa fa-check"></i></button>
			<button class="btn btn-primary" onclick="window.location.href='https://wa.me/?text=https://pamekasancode.github.io/tebak-pokemon.github.io'">Share <i class="fa fa-share"></i></button>
		</div>`	
		papanScore.style.display = "block";
		papanScore.innerHTML = totalScore;
	}
	
})


function reload() {
	location.reload()
}

function ostPlay() {
	var music = new Audio("ost.mp3");
	music.loop = true;
	music.volume = 0.5;
	music.play()
}


const mulai = document.getElementById("play");
mulai.addEventListener("click", mulaiGame) 
function mulaiGame() {
	$(".preloader").fadeOut()
	ostPlay();
}