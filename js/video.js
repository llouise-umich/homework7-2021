var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
	console.log("Good job opening the window")
	console.log(video)
	video.play()

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = (video.playbackRate * 0.95)
	console.log(video.playbackRate);
 });

 document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = (video.playbackRate / 0.95)
 });

 document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.duration > video.currentTime){
		video.currentTime = 15
		video.play()
	}
 })

 document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false) { 
		video.muted = true;
 	}

 	else {
	 video.muted = false;
 	}

 });

 document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value)
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"

 });


 document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
 });

 document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
 });