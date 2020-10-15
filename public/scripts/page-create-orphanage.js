const map = L.map('mapid').setView([-23.5862494,-46.6744423], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon layer
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})

// select photos
function addPhotoField(){
    //container 
    const container = document.querySelector('#images');

    //duplicate container
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //clone add image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verify empty field
     const input = newFieldContainer.children[0];
     if (input.value == "") {
         return
     }

    //clear fields
    newFieldContainer.children[0].value="";
    
    //add clone to container
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value ="";
        return
    }

    // delete field
    span.parentNode.remove();
}

function toggleSelect(event){
    //remove class .active
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })

    //class .active
    const button = event.currentTarget
    button.classList.add('active')

    //refresh input hidden
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}