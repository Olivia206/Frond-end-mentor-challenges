let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function(){
        if (activeImages.lengh = 1) {
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active')
        step ++
        document.getElementById('showed').src = this.src
        document.getElementById('modal-showed').src = this.src
    })
}

let btnLeft = document.getElementById('slide-left')
let btnRight = document.getElementById('slide-right')

let step = 0;
let nbImages = thumbnails.length

function removeShowedImage() {
    for(let i = 0; i < nbImages; i++) {
      thumbnails[i].classList.remove('showedImage') 
    }
}

btnRight.addEventListener('click', function() {
    step ++
    if (step >= nbImages)
    removeShowedImage()
    thumbnails[step].classList.add('showedImage')
    document.getElementById('showed').src = thumbnails[step].src
    document.getElementById('modal-showed').src = thumbnails[step].src
})


btnLeft.addEventListener('click', function() {
    step --
    if (step >= nbImages)
    removeShowedImage()
    thumbnails[step].classList.add('showedImage')
    document.getElementById('showed').src = thumbnails[step].src
    document.getElementById('modal-showed').src = thumbnails[step].src
})
