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
  
    // on supprime le filtre au clic sur le bouton (ne fonctionne pas)
    navFilterEl = ConvertStringToHTML(jobFilter);
    console.log('delete : ', navFilterEl)
    navFilterEl.remove();

  } else {
    filterCont.innerHTML += jobFilter
    filterList = [...filterList, targetBtnValue];
  }

})