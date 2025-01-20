// Fonction toggle pour activer ou desactiver la fenetre modale de la newsletter

const SHOW_NEWSLETTER = document.getElementsByClassName("show__newsletter");
// console.log(SHOW_NEWSLETTER);

for (const show of SHOW_NEWSLETTER) {
    show.addEventListener("click", () =>{
        const newsletter = document.querySelector(".newsletter");
        newsletter.classList.toggle("active");
    })
}