const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//getvalues
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


//criar mapa
const map = L.map('mapid', options).setView([lat,lng], 15);


//criar e adicionar tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//criar icone
const icon= L.icon({ iconUrl:"/images/map-marker.svg",
iconSize:[58, 68],
iconAnchor:[29, 68],
popupAnchor:[170, 2]})


//criar e adicionar marcador

L.marker([lat,lng],{icon})
.addTo(map)



/*image galery*/

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    console.log(buttons)
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de imagem
    imageContainer.src = image.src

    //atualziar botao active

        button.classList.add('active')

}

