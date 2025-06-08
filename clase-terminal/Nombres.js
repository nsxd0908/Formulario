const nombres1 = ["Zor", "Val", "Thar", "Gor", "Lun", "Mor", "Xan", "Dra", "Fen", "Bal"];
const nombres2 = ["dor", "gorn", "thar", "zeth", "mir", "lax", "on", "grim", "mar", "rax"];

function generarNombre() {
  const parte1 = nombres1[Math.floor(Math.random() * nombres1.length)];
  const parte2 = nombres2[Math.floor(Math.random() * nombres2.length)];
  const nombreFinal = parte1 + parte2;

  document.getElementById("resultado").textContent = `⚡ ${nombreFinal} ⚡`;
}
