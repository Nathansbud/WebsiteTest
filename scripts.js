
lyricsClicked = 0
orientationClicked = 0

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
		document.body.style.textAlign = "left"
		document.getElementById('orientationButton').innerHTML = "Set Orientation (Center)"
		orientationClicked = 1
	} else if(orientationClicked == 1) {
		document.body.style.textAlign = "center"
		document.getElementById('orientationButton').innerHTML = "Set Orientation (Left)"
		orientationClicked = 0
	}
}

function setOrientationLeft() {
	document.body.style.textAlign = "left"
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
