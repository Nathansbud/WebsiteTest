var lyricsClicked = 0
var orientationClicked = 0
var songClicked = 0

// // function clickCounter() {
// // 	if(typeof(Storage) !== "undefined") {
// // 		if(sessionStorage.clickcount) {
// // 			document.getElementById('song').iplay
// // 		}
// // 	}
// // }
// if(typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
//             localStorage.clickcount = Number(localStorage.clickcount)+1;
//         } else {
//             localStorage.clickcount = 1;
//         }
//         document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//     } else {
//         document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";

function trueButts() {
	document.getElementById('trick').innerHTML = "Secret Butts"
}

function showText(id) {
	document.getElementById(id).style.display="block"
	window.alert("Get magic'd, son!")
	console.log("Did a magic trick")
}

function setOrientation() {
	if(orientationClicked == 0) {
		document.body.style.textAlign = "center"
		document.getElementById('orientationButton').innerHTML = "Set Orientation (Left)"
		orientationClicked = 1
	} else if(orientationClicked == 1) {
		document.body.style.textAlign = "left"
		document.getElementById('orientationButton').innerHTML = "Set Orientation (Center)"
		orientationClicked = 0
	}
}

function pauseSong() {
	document.getElementById('lyricsButton').style.display="inline"
	if(songClicked == 0) {
		document.getElementById('song').play()
		document.getElementById('pauseButton').innerHTML = "Pause Song"
		songClicked = 1
	} else if(songClicked == 1) {
		document.getElementById('song').pause()
		document.getElementById('pauseButton').innerHTML = "Play Song"
		songClicked = 0
	}
}

function showSongLyrics() {
	if(lyricsClicked == 0)
	{
		document.getElementById('lyrics').style.display="block"
		document.getElementById('lyricsButton').innerHTML="Hide Lyrics"
		lyricsClicked = 1
	} else if(lyricsClicked == 1) {
		document.getElementById('lyrics').style.display="none"
		document.getElementById('lyricsButton').innerHTML="Show Lyrics"
		lyricsClicked = 0
	}  
}
