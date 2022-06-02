/* Requête AJAX pour récupérer les données du Json */

/* On créé une requête-objet xmlhttp */

let http = new XMLHttpRequest(); /* avec une variable http qui contient toutes les méthodes de l'objet */


http.open('get', "../../../data.json", true) /* prepare */


http.send() /* on envoie la requête */


/* On check les propriétés readyState et satus */
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        /* Si c'est un succès, on doit placer les données du Json et les convertir en array js */

        let jobs = JSON.parse(this.responseText);

        /* On créé une variable vide pour placer ces données */
        let output = "";
        console.log(output)
        
        /* On créé une boucle pour que chaque job soit itéré */

        for(let item of jobs) {
            
            /* On construit le HTML de output */

            output += `
            <div class="job-card`

            if (item.new) {
                output += ` new`
            }
            
            output += `" id="${item.id}" data-role="${item.role}" data-level="${item.level}" data-languages="${item.languages}" data-tools="${item.tools}">
                <img src="${item.logo}" alt />
                <div class="job-description">
                    <div class="job-status">
                        <b>${item.company}</b>
                        <div class="job-relevant">`
            /* On met en place l'affichage des booléens */
            if (item.new) {
                let itemNew = "New !";
                output += `<span class="job-new">${itemNew}</span>`
            }
            if (item.featured) {
                let itemFeatured = "Featured";
                output += `<span>${itemFeatured}</span>`
            }
            output += `
                        </div>
                    </div>
                    <a href="#">${item.position}</a>
                    <div class="job-application">
                        <span>${item.postedAt}</span>
                        <span>${item.contract}</span>
                        <span>${item.location}</span>
                    </div>
                </div> 
                <div class="job-tags">
                    <span>${item.role}</span>
                    <span>${item.level}</span>
                    <span>${item.languages}</span> 
                    <span>${item.tools}</span>
                </div>
            </div>
        `;
        }
        /* On place le HTML au bon endroit */
        document.querySelector('.jobs-listing').innerHTML = output;
    }
}