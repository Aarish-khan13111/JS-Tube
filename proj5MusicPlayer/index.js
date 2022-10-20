const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    name: "music01",
    title: "SOMETHING IN THE WAY",
    artist: "Nirvana",
  },
  {
    name: "music02",
    title: "Lovely",
    artist: "Billie Eilish, Khalid",
  },
  {
    name: "music03",
    title: "Heat Waves",
    artist: "Glass Animals",
  },
];

let isPlaying = false;

// for play funcition
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

//for pause funciton
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  //   if (isPlaying) {
  //     pauseMusic();
  //   } else {
  //     playMusic();
  //   }
  isPlaying ? pauseMusic() : playMusic();
});

//changing the music data

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "Musics/" + songs.name + ".mp3";
  img.src = "Images/" + songs.name + ".jpg";
};

songIndex = 0;
// loadSongs();

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length; // for continue playing songs forward
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length; //for continue playing song backward
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
