console.log('FEEL THE MUSIC WITH SPOTIFY');

// initialising the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songName = document.getElementsByClassName("songName");



let songs = [
    { songName: "Let me love you", filePath: "songs/1.mp3",  coverPath: "img/covers/1.jpg" },
    { songName: "Bones", filePath: "songs/2.mp3",   coverPath: "img/covers/2.jpg" },
    { songName: "Cheap Trills", filePath: "songs/3.mp3",    coverPath: "img/covers/3.jpg" },
    { songName: "Coldwater", filePath: "songs/4.mp3", coverPath: "img/covers/4.jpg" },
    { songName: "Naatu Nattu", filepath: "songs/5.mp3", coverPath: "img/covers/5.jpg" },
    { songName: "Daspacito", filePath: "songs/6.mp3", coverPath: "img/covers/6.jpg" },
    { songName: "Lean On", filePath: "songs/7.mp3",coverPath: "img/covers/1.jpg" }
]
// audioElement.play();

// handle play/pause click

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        console.log("MUSIC PLAYING");
        // below will add the gif when music is playing
        gif.style.opacity = 1;
    }
    else {
        
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        console.log("MUSIC STOPPED");

        // below will remove the gif when music is stopped
        gif.style.opacity = 0;

    }
}
)
songItem.forEach((element, i) => {
    // console.log(element,i);
    const songlist= element.getElementsByClassName("songlistplay")[0];
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    songlist.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
    // console.log( element.getElementsByTagName("img"))
    // element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// listen to the events

// NOTE MUSIC IS FORWARDING WITHOUT THIS ALSO.......
// audioElement.addEventListener('timeupdate', ()=>{
//     // console.log("timeupdate");
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime / audioElement.duration)* 100);
//     // console.log(progress);
//     myprogressbar.value=progress;

// })

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=> {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");       

    })
}


Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=> {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        if(songIndex != e.target.id){
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add("fa-pause-circle");
        }
        else{
            audioElement.pause();
            gif.style.opacity = 0;
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterplay.classList.remove("fa-pause-circle");
            masterplay.classList.add('fa-play-circle');
            songIndex=-1;
        }
    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})





