// Fonction toggle pour activer ou désactiver la fenêtre modale de la newsletter
// function toggle() {
//   let newsletter = document.querySelector(".newsletter");
//   newsletter.classList.toggle("active");
// }

// document.getElementsByClassName("show__newsletter").onclick = function () {
//   toggle()
// }

// function toggle() {
//   const newsletter = document.querySelector(".newsletter");
//   newsletter.classList.toggle("active");
// }

const showNewsletter = document.getElementsByClassName("show__newsletter");

for (const show of showNewsletter) {
  show.addEventListener("click", () => {
    const newsletter = document.querySelector(".newsletter");
    newsletter.classList.toggle("active");
  });
}

// Fonction compte-à-rebours pour le lancement de notre site

/* 

# Initialisation de la date de lancement du site web le 01 mars 2020 à minuit (decompteDateFinale) 
  grâce à la méthode "new Date()".
# Puis transformation mathématique en millisecondes grâce à la méthode "getTime()".
# Utilisation de la commande "console.log()" pour afficher le résultat sur la console de notre navigateur.

const decompteDateFinale = new Date("march 1, 2022 00:00:00").getTime();
console.log(decompteDateFinale);

*/

const decompteDateFinale = new Date("January 1, 2026 00:00:00").getTime();

function decompte() {
  /* 

# Initialisation de la date d'aujourd'hui (now) grâce à la méthode "new Date()".
# Puis transformation mathématique en millisecondes grâce à la méthode "getTime()".
# Utilisation de la commande "console.log()" pour afficher le résultat sur la console de notre navigateur.

let now = new Date().getTime();
console.log(now);

 */
  let now = new Date().getTime();
  /* 

# Initialisation du compte-à-rebours (gap) grâce à la soustraction de deux variables existantes (decompteDateFinale - now).
# Utilisation de la commande "console.log()" pour afficher le résultat sur la console de notre navigateur.

let gap = decompteDateFinale - now;
console.log(gap);

 */
  let gap = decompteDateFinale - now;
  /* 

# Nous devons vérifier si la date de mise en ligne du site est atteinte. Si, c'est le cas nous devons arrêter le décompte
  et afficher un message pour avertir de sa disponibilité.
# Nous allons utiliser une condition "if (){}""

  if (gap < 0) {
    clearInterval(timer);
    document.getElementById("final").innerHTML =
      "Le site est en ligne cliquer <a href='#'>ici</a> pour y accéder !";
    return;
  }

 */
  if (gap <= 0) {
    clearInterval(timer);
    document.getElementById("final").innerHTML =
      "Le site est en ligne cliquer <a href='#'>ici</a> pour y accéder !";
    return;
  }
  /* 

# Initialisation des variables (seconde, minute, heure, jour) en millisecondes pour faciliter le calcul du temps restant
# Utilisation de la commande "console.log()" pour afficher le résultat sur la console de notre navigateur.

let second = 1000;
console.log(seconde);
let minute = seconde * 60;
console.log(minute);
let heure = minute * 60;
console.log(heure);
let jour = heure * 24;
console.log(jour);
 */
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  /* 

# Initialisation des variables (j, h, m, s) afin de calculer précisément 
  le nombre de jour, heure, minute et seconde qui restent avant le lancement site.
    1.Nous devons effectuer une division entre la variable "gap" et "jour" pour obtenir le nombre de jour 
    grâce à la méthode "Math.floor".
    2.Pour calculer le nombre d'heure, minute et seconde, nous devons effectuer une division type "modulo (%)"
    pour récupérer le reste.
# Utilisation de la commande "console.log()" pour afficher le résultat sur la console de notre navigateur.

let j = Math.floor(gap / jour);
console.log(j);
let h = Math.floor((gap % jour) / heure);
console.log(h);
let m = Math.floor((gap % heure) / minute);
console.log(m);
let s = Math.floor((gap % minute) / seconde);
console.log(s);
 */
  let j = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);
  /* 

# Utilisation de la méthode "document.getElementById()" pour récupérer ou cibler  sur le HTML une "div" contenant
une "id" (<div id="jour"></div>).
# Utilisation de la méthode "textContent" pour "injecter" en version texte le contenu de la variable calculée. 

document.getElementById("jour").textContent = j;
document.getElementById("heure").textContent = h;
document.getElementById("minute").textContent = m;
document.getElementById("seconde").textContent = s;

*/
  document.getElementById("day").textContent = j;
  document.getElementById("hour").textContent = h;
  document.getElementById("minute").textContent = m;
  document.getElementById("second").textContent = s;
}

/* 

# Utilisation de la méthode "setInterval()" pour rafraîchir automatiquement 
  toutes les secondes notre fonction "decompte()" afin de connaître le temps exact restant avant le lancement du site. 

*/
timer = setInterval(decompte, 1000);

// Changement de l'année dynamique
const currentYearElmt = document.getElementById("current_year");
currentYearElmt.textContent = new Date().getFullYear();
