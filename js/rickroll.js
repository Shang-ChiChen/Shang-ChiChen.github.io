document.querySelector(".roll").style.display = "none";
document.getElementById("button").addEventListener("click", function() {
    // Hide the heading and the button
    document.querySelector(".rick").style.display = "none";
    document.querySelector(".roll").style.display = "block";
  
    // Play song
    var song = document.getElementById("song");
    var video = document.getElementById("video");
    song.play();
    video.play();
  })