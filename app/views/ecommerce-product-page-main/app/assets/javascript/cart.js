let productnb = document.querySelector('.quantity')
let unitPrice = document.querySelector('.price span').textContent
let notifNb = document.querySelector('.cart-number-products')
let notice =  document.querySelector('.notice')
let cartProduct = document.querySelector('.cart-product')
let cartProductTitle = document.querySelector('.cart-product-title')
let cartProductPrice = document.querySelector('.cart-product-prices')
let cartProductImage = document.querySelector('.cart-product-image')

let totalPrice = productnb * unitPrice

/*** On récupère la valeur de l'input ***/
$(document).ready(function() {
    $('.input-update').click(function() {
        var inputValue = $(productnb).val();

        if (inputValue > 0) {
            /* Mise à jour de l'icône de compte + du panier */
            notifNb.textContent = inputValue
            notice.classList.add('no-display')
            cartProduct.classList.remove('no-display')

            let cartBuying = "$" + unitPrice + " x " + inputValue + " "
            let productSum = unitPrice * inputValue

            /* On rentre les infos dans le panier */
            cartProductImage.src = document.querySelector('.view #showed').src
            cartProductTitle.textContent = document.querySelector('h1').textContent
            cartProductPrice.textContent = cartBuying
            cartProductPrice.innerHTML += ' <b>$' + productSum + '</b>'
        
            let deleteBtn = document.querySelector('.cart-product-delete')
            
            /* Actions du bouton supprimer*/
            deleteBtn.addEventListener('click', function(){
                $(productnb).val(0)
                notifNb.textContent = ""
                notice.classList.remove('no-display')
                cartProduct.classList.add('no-display')
            })
        
        } 
        else {
            notifNb.textContent = ""
            notice.classList.remove('no-display')
            cartProduct.classList.add('no-display')
        }
        
        
        

    });
});


