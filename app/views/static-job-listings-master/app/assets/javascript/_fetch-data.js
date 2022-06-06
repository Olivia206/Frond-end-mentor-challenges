/* Requête AJAX pour récupérer les données du Json */

/* On créé une requête-objet xmlhttp */

let http = new XMLHttpRequest(); /* avec une variable http qui contient toutes les méthodes de l'objet */


http.open('get', "data.json", true) /* prepare */


http.send() /* on envoie la requête */

/* On check les propriétés readyState et satus */
http.onload = function () {
    /* Si c'est un succès, on doit placer les données du Json et les convertir en array js */

    let jobs = JSON.parse(this.responseText);

    /* On créé une variable vide pour placer ces données */
    let output = "";
    console.log(output)
    
    /* On créé une boucle pour que chaque job soit itéré */

    for(let item of jobs) {
        
        /* On construit le HTML de output */

        output += `
        <div id="${item.id}" class="job-card`

        if (item.new) {
            output += ` new`
        }
        
        output += `" data-role="${item.role}" data-level="${item.level}" data-languages="${item.languages}" data-tools="${item.tools}">
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
                <button class="filter-btn" id="sortRoleBtn">${item.role}</button>
                <button class="filter-btn" id="sortLvlBtn">${item.level}</button>
                `
                /* On affiche tous les langages de l'array */
                let allLanguages = item.languages
                for (i=0;i<allLanguages.length;i++) {
                    output += `<button class="filter-btn" id="sortLangBtn">${allLanguages[i]}</button>`
                }
                /* Idem pour l'array outils */
                let allTools = item.tools
                for (i=0;i<allTools.length;i++) {
                    output += `<button class="filter-btn" id="sortToolBtn">${allTools[i]}</button>`
                }
                output += ` 
            </div>
        </div>
        `
        
    
        /* On place le HTML au bon endroit */
        document.querySelector('.jobs-listing').innerHTML = output;
    }
    let jobFilterBtn = document.querySelectorAll('.filter-btn')
    let listJobs = document.querySelector('.jobs-listing')
    let clearBtn = document.getElementById('clear')
    let jobsList = document.querySelectorAll('.job-card')
        
    window.addEventListener('click', (event) => {

    /* On vérifie que l'élément cliqué est bien un bouton */

    let targetBtn = event.target
    let targetBtnValue = targetBtn.innerHTML.trim() // on enlève tous les espaces vides
    let filterCont = document.querySelector('.filters')

    // HTML du filtre appliqué
    let jobFilter = `<div class="nav-btn">${targetBtnValue}</div>`
    jobFilter = jobFilter.trim()

    function clearFilters() {
        filterCont.innerHTML = "";
    }
    
    // on vérifie que l'élément cliqué est bien un bouton de filtre
    if (!targetBtn.classList.contains('filter-btn')) {

        if (targetBtn.classList.contains('nav-btn')) {
        // suppression des filtres dans la barre
        targetBtn.remove();
        } else if (targetBtn == clearBtn) {
        // le bouton de clear
        clearFilters();
        }
        return;
    } 
    // on ajoute la class active
    // targetBtn.classList.add('active');

    // on convertit la liste des filtres en array
    let filterList = Array.from(filterCont.children).map(node => node.innerHTML && node.innerHTML).filter(tag => !!tag);
    
    // on vérifie si l'élément est déjà dans la barre des filtres
    if (filterList.includes(targetBtnValue)) {
        filterList = filterList.filter(tag => tag !== jobFilter.includes(targetBtnValue));
        
        // on reconvertit en HTML l'élément de l'array qui nous intéresse
        function ConvertStringToHTML(str) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, 'text/html');
        return doc.body.firstChild;
        };
    
        // on supprime le filtre au clic sur le bouton (ne fonctionne pas ;_;)
        navFilterEl = ConvertStringToHTML(jobFilter);
        console.log('delete : ', navFilterEl)
        navFilterEl.remove();

    } else {
        filterCont.innerHTML += jobFilter
        filterList = [...filterList, targetBtnValue];
    }

    // on essaie de gérer l'affichage ou pas des trucs
    const dataRoles = document.querySelectorAll('[data-role]');
    const dataLvl = document.querySelectorAll('[data-level]');
    const dataLangs = document.querySelectorAll('[data-languages]');
    const dataTools = document.querySelectorAll('[data-tools]');
    
    for(let job of jobs) {
        console.log(job.role)
        if (!filterList.includes(job.role) || !filterList.includes(job.languages) || !filterList.includes(job.tools) || !filterList.includes(job.level)) {
            console.log("faut dégager")
        }
    }
    

    })
        
    
}