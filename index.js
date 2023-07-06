let nowPlaying = document.querySelector('.now-playing');
let trackArt = document.querySelector('.track-art');
let trackName = document.querySelector('.track-name');
let trackArtist = document.querySelector('.track-artist');
let playPauseBtn = document.querySelector('.playpause-track');
let nextBtn = document.querySelector('.net-track');
let prevBtn = document.querySelector('.prev-track');
let seekSlider = document.querySelector('.seek-slider');
let volumeSlider = document.querySelector('.volume-slider');
let currTime = document.querySelector('.current-time');
let totalDuration = document.querySelector('.total-duration')
let wave = document.querySelector('#wave');
let randomIcon = document.querySelector('.fa-random');
let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const musicList = [
    {
        img :'imgs/capaExagerado.jpg',
        name: 'Exagerado',
        artist : 'Cazuza',
        music: 'music/exagerado.mp3'
    },
    {
        img :'imgs/capaPlanos.jpg',
        name: 'Planos',
        artist : 'BK part. Luccas Rodrigues',
        music: 'music/planos.mp3'
    },
    {
        img :'imgs/capaExplodir.jpg',
        name: 'Explodir',
        artist : 'ANAVITÓRIA',
        music: 'music/explodir.mp3'
    },
    {
        img :'imgs/capaVelhainf.jpg',
        name: 'Velha Infância',
        artist : 'Tribalistas',
        music: 'music/velhainf.mp3'
    }
];

loadTrack(trackIndex);

function loadTrack(trackIndex){
    clearInterval(updateTimer);
    reset();

    currTrack.src = musicList[trackIndex].music;
    currTrack.load();

    trackArt.style.backgroundImage = 'url(" + musicList[trackIndex].img + ")';
    trackName.textContent = musicList[trackIndex].name;
    trackArtist.textContent = musicList[trackIndex].artist;
    nowPlaying.textContent = "Tocando música" + (trackIndex + 1) + "de" + musicList.length;

    updateTimer = setInterval(setUpdate, 1000);

    currTrack.addEventListener('ended', nextTrack);
    randomBgColor();
}