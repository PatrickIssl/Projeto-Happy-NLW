
//criar mapa
const map = L.map('mapid').setView([-24.9574377,-53.4654961], 15);

//criar e adicionar tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//criar icone
const icon= L.icon({ iconUrl:"/images/map-marker.svg",
iconSize:[58, 68],
iconAnchor:[29, 68]})

//cria e adiciona marcador no mapa
let marker;
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon layers
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng] , {icon})
    .addTo(map)

})

// adicionar o campo de fotos

function addPhotoField(){
   //pegar o container de fotos #images

    const container = document.querySelector('#images')

   //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

   //realizar clone da ultima imagem adicionada

    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //verifica se está vazio, se sim não adicionar ao container de imagens

    const input = newFieldContainer.children[0]

    if(input.value == ""){
        
        return
    }

    //limpar o campo
    input.value = ""
  
    //adicionar o clone ao container de #images

   container.appendChild(newFieldContainer)
    

}

//deleta campo de fotos
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }   

    //deletar o campo
    span.parentNode.remove();

}

//troca do sim e não
function toggleSelect(event){
    //retirar classe .active 
    document.querySelectorAll('.button-select button')
    .forEach(button =>button.classList.remove('active'))
    //coloca .active no botão clicado
    
    const button = event.currentTarget
    button.classList.add('active')
    //verifica se o meu input hidden com o valor selecionado
    const input = document.querySelector('[name = "open_on_weekends"]')
   

    input.value = button.dataset.value
}

function validate(event){
    const latnull = document.querySelector('[name = "lat"]')
    if(latnull.value==""){
        event.preventDefault()
        alert("selecione um local no mapa")
    }
  
    }
