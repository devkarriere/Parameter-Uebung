// ===========================
// Tab Navigation
// ===========================
const tabs = document.querySelectorAll(".tab");
const sheets = document.querySelectorAll(".cheatsheet");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    // Alle Tabs deaktivieren
    tabs.forEach(function (t) {
      t.classList.remove("active");
    });

    // Alle Sheets verstecken
    sheets.forEach(function (s) {
      s.classList.remove("active");
    });

    // Aktiven Tab markieren
    tab.classList.add("active");

    // Passendes Sheet anzeigen
    const targetId = tab.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});

// ===========================
// PDF / Drucken
// ===========================

// Aktuelle Seite drucken
document.getElementById("print-current").addEventListener("click", function () {
  // Nur das aktive Cheatsheet für den Druck markieren
  sheets.forEach(function (s) {
    s.classList.remove("print-active");
  });

  const activeSheet = document.querySelector(".cheatsheet.active");
  if (activeSheet) {
    activeSheet.classList.add("print-active");
  }

  window.print();

  // Nach dem Druck aufräumen
  setTimeout(function () {
    sheets.forEach(function (s) {
      s.classList.remove("print-active");
    });
  }, 500);
});

// Alle Cheatsheets drucken
document.getElementById("print-all").addEventListener("click", function () {
  // Alle Sheets für den Druck markieren
  sheets.forEach(function (s) {
    s.classList.add("print-active");
  });

  window.print();

  // Nach dem Druck aufräumen
  setTimeout(function () {
    sheets.forEach(function (s) {
      s.classList.remove("print-active");
    });
  }, 500);
});
