// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hey", time: 39 },
  { text: "Where are you", time: 42 },
  { text: "Yeah, I'm here", time: 44 },
  { text: "Alright! I'll come and find you", time: 55 },
  { text: "Darling, don't move too much", time: 77 },
  { text: "Cause you might break the things that you have touched", time: 82 },
  { text: "But let me tell you, don't go too far", time: 85 },
  { text: "And just enjoy this artistic room of ours", time: 89 },
  { text: "This empty canvas, that they misunderstood", time: 93 },
  { text: "I wanna paint you in it, but I'm not good", time: 97 },
  { text: "Cause I wanna look at you when we are apart", time: 101 },
  { text: "Cause you're not just a human being, you are art", time: 106 },
  { text: "So darling, darling don't be scared", time: 110 },
  { text: "Cause even if I look everywhere", time: 114 },
  { text: "Your colors caught my eye", time: 118 },
  { text: "And you're my favorite sight to see", time: 120 },
  { text: "It's from the way that you move", time: 125 },
  { text: "And everything that you do", time: 128 },
  { text: "And after that it's when I realize", time: 130 },
  { text: "That I love you", time: 133 },
  { text: "You told me to look everywhere else", time: 149 },
  { text: "But I said no, cause when I look at you", time: 153 },
  { text: "My heart always melts", time: 155 },
  { text: "So I stayed even though you're a mess", time: 158 },
  { text: "Cause you're like drugs and with you", time: 161 },
  { text: "Yeah, I'm obsessed", time: 163 },
  { text: "So, darling, darling, don't be scared", time: 166 },
  { text: "Cause even if I look everywhere", time: 169 },
  { text: "Your colors caught my eye", time: 173 },
  { text: "And you're my favorite sight to see", time: 175 },
  { text: "It's from the way that you move", time: 180 },
  { text: "And everything that you do", time: 183 },
  { text: "And after that it's when I realize", time: 185 },
  { text: "That I love you", time: 188 },
  { text: "Darling, darling, don't be scared", time: 205 },
  { text: "Cause even if I look everywhere", time: 209 },
  { text: "Your colors caught my eye", time: 213 },
  { text: "And you're my favorite sight to see", time: 215 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);