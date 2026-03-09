// ============================================
// Geführte Aufgabe: Witz-Generator (Sektion 6)
// ============================================

// --- Globale Variable: Das Witze-Array ---
const jokes = [
  "Warum können Geister nicht lügen? Man kann durch sie hindurchsehen.",
  "Ich wollte einen Witz über Pizza machen... aber der ist zu cheesy.",
  "Warum trinken Programmierer Tee? Weil Java schon vergeben ist.",
  "Was macht ein Pirat am Computer? Er drückt die Enter-Taste.",
  "Treffen sich zwei Wände. Sagt die eine: Wir sehen uns an der Ecke!",
  "Warum hat der Mathematiker Angst vor negativen Zahlen? Er kann einfach nicht ohne sie leben."
];

// --- Funktion 1: Zufälligen Index berechnen ---
function getRandomIndex(count) {
  let index = Math.floor(Math.random() * count);
  return index;
}

// --- Funktion 2: Witz aus Array holen (ruft getRandomIndex auf!) ---
function getJoke(jokeList) {
  let index = getRandomIndex(jokeList.length);
  let selectedJoke = jokeList[index];
  return selectedJoke;
}

// --- Funktion 3: Witz bewerten ---
function rateJoke(jokeText) {
  let jokeLength = jokeText.length;

  if (jokeLength < 40) {
    return "Kurz und knackig!";
  } else if (jokeLength < 75) {
    return "Perfekte Länge!";
  } else {
    return "Puh, das war ein langer Witz!";
  }
}

// --- Funktion 4: Alles zusammenführen ---
function showJoke(jokeList) {
  let joke = getJoke(jokeList);
  let rating = rateJoke(joke);

  return { joke: joke, rating: rating };
}

// --- Funktion 5: Witz-Vergleich ---
function compareJokes(jokeList) {
  let joke1 = getJoke(jokeList);
  let joke2 = getJoke(jokeList);

  let rating1 = rateJoke(joke1);
  let rating2 = rateJoke(joke2);

  let winner;
  if (joke1.length < joke2.length) {
    winner = 1;
  } else {
    winner = 2;
  }

  return {
    joke1: joke1,
    rating1: rating1,
    joke2: joke2,
    rating2: rating2,
    winner: winner
  };
}

// --- Visualisierung aktualisieren ---
function showJokeVisual(joke, rating) {
  let visual = document.getElementById("joke-visual");
  let textDisplay = document.getElementById("joke-text-display");
  let ratingBadge = document.getElementById("joke-rating");
  let lengthBadge = document.getElementById("joke-length");

  visual.classList.remove("hidden");
  textDisplay.textContent = joke;
  ratingBadge.textContent = rating;
  lengthBadge.textContent = joke.length + " Zeichen";

  // Farbe je nach Bewertung
  ratingBadge.className = "badge";
  if (rating.includes("Kurz")) {
    ratingBadge.classList.add("badge-blue");
  } else if (rating.includes("Perfekt")) {
    ratingBadge.classList.add("badge-green");
  } else {
    ratingBadge.classList.add("badge-orange");
  }
}

// --- Button: Zufälligen Witz zeigen ---
document.getElementById("run-joke").addEventListener("click", function () {
  let output = document.getElementById("joke-output");
  output.textContent = "";

  let result = showJoke(jokes);

  output.textContent += "=== Witz des Tages ===\n";
  output.textContent += result.joke + "\n\n";
  output.textContent += "Bewertung: " + result.rating + "\n";
  output.textContent += "Zeichenanzahl: " + result.joke.length + "\n";

  showJokeVisual(result.joke, result.rating);
});

// --- Button: Witz-Duell ---
document.getElementById("run-compare").addEventListener("click", function () {
  let output = document.getElementById("joke-output");
  output.textContent = "";

  let result = compareJokes(jokes);

  output.textContent += "=== Witz-Duell ===\n\n";
  output.textContent += "Witz 1: " + result.joke1 + "\n";
  output.textContent += "  → " + result.rating1 + " (" + result.joke1.length + " Zeichen)\n\n";
  output.textContent += "Witz 2: " + result.joke2 + "\n";
  output.textContent += "  → " + result.rating2 + " (" + result.joke2.length + " Zeichen)\n\n";

  if (result.winner === 1) {
    output.textContent += "Gewinner: Witz 1 (kürzer!)\n";
    showJokeVisual(result.joke1, result.rating1);
  } else {
    output.textContent += "Gewinner: Witz 2 (kürzer!)\n";
    showJokeVisual(result.joke2, result.rating2);
  }
});
