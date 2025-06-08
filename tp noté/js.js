function changerNombre(type, delta) {
  const input = document.getElementById(type);
  let val = parseInt(input.value);

  if (isNaN(val)) val = 0;

  val += delta;

  // Définir les limites
  if (type === "adulte" && val < 1) val = 1;
  if (type === "kart" && val < 1) val = 1;
  if (type === "enfant" && val < 0) val = 0;

  input.value = val;

  // Met à jour les champs d'âge enfants si nécessaire
  if (type === "enfant") {
    majChampsAges(val);
  }
}

function majChampsAges(nombre) {
  const zone = document.getElementById("zone-ages");
  zone.innerHTML = ""; // Vider l'existant

  for (let i = 0; i < nombre; i++) {
    const div = document.createElement("div");
    div.classList.add("mb-2");

    const label = document.createElement("label");
    label.textContent = `Âge de l'enfant ${i + 1}`;
    label.classList.add("form-label");

    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 17;
    input.classList.add("form-control");
    input.name = "ageEnfant";

    div.appendChild(label);
    div.appendChild(input);
    zone.appendChild(div);
  }
}

function confirmer() {
  const adulte = document.getElementById("adulte").value;
  const enfant = document.getElementById("enfant").value;
  const kart = document.getElementById("kart").value;
  const travail = document.getElementById("travail").checked;
  const ages = Array.from(document.getElementsByName("ageEnfant")).map(input => input.value || "-");

  document.getElementById("confAdulte").textContent = adulte;
  document.getElementById("confEnfant").textContent = enfant;
  document.getElementById("confKart").textContent = kart;
  document.getElementById("confTravail").textContent = travail ? "Oui" : "Non";
  document.getElementById("confAges").textContent = ages.join(", ");
}

function resetForm() {
  document.getElementById("adulte").value = 2;
  document.getElementById("enfant").value = 2;
  document.getElementById("kart").value = 1;
  document.getElementById("travail").checked = false;
  majChampsAges(2); // Réinitialise 2 champs par défaut

  document.getElementById("confAdulte").textContent = "-";
  document.getElementById("confEnfant").textContent = "-";
  document.getElementById("confKart").textContent = "-";
  document.getElementById("confTravail").textContent = "-";
  document.getElementById("confAges").textContent = "-";
}

// Initialise les champs d'âge enfants au chargement
window.onload = function () {
  majChampsAges(parseInt(document.getElementById("enfant").value));
};
