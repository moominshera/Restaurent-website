$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    pagination:false,
navigation:true, 
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true, 
    dots:true, 
    responsive:{
        600:{
            items:4
        } , 
        0:{
            items:1
        }
    }

})

$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    autoWidth:true,

    responsive:{
        600:{
            items:4
        }
    }


})



// Leaflet 

    var leafletIcon= L.icon({
        iconUrl: './images/1608111772264-removebg-preview.png' , 
        iconSize:[95,95], 
        iconAnchor:[22,94],
        popupAnchor:[12,-90]
    })
var leafletIcon2= L.icon({
    iconUrl: './images/jama.png' , 
    iconSize:[95,95], 
    iconAnchor:[22,94],
    popupAnchor:[12,-90]
})

var leafletIcon3= L.icon({
    iconUrl: './images/hazratbal .png' , 
    iconSize:[95,95], 
    iconAnchor:[22,94],
    popupAnchor:[12,-90]
})
var leafletIcon4= L.icon({
    iconUrl: './images/Dal-Lake.jpg' , 
    iconSize:[95,95], 
    iconAnchor:[22,94],
    popupAnchor:[12,-90]
})

var map = L.map('map').setView([34.10178790396642, 74.80912388793863], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([34.10178790396642, 74.80912388793863] , {icon:leafletIcon}).addTo(map)
    .bindPopup('<h5>AIIOTS GEEK WORLD PVT LTD</h5> <p>We at AIIOTS GEEK WORLD help you create your need specific tailored solutions. We believe in being a part of your organization to help you provide a customized work around to your requirements  ascertaining every aspect of it is well worked. We are a part of you  and not a business selling you our own services and products.</p>  <img src="./images/IMAGE_1669208578.jpg"" alt="" width="300px">')
    // .openPopup();

    L.marker([34.098757595245985, 74.80930421842434] , {icon:leafletIcon2}).addTo(map)
    .bindPopup('<h5>Jamia Masjid Srinagar</h5> <p>Jamia Masjid is a mosque in Srinagar, Jammu and Kashmir, India. Situated at Nowhatta in the middle of the Old City, the Mosque was commissioned by Sultan Sikandar in 1394 CE and completed in 1402 CE, at the behest of Mir Mohammad Hamadani, son of Mir Sayyid Ali Hamadani, and is regarded as one of the most important mosques in Kashmir.</p>  <img src="./images/jama.png" alt="" width="300px">')
    // .openPopup();

    L.marker([34.1312688210054, 74.84215489895378] , {icon:leafletIcon3}).addTo(map)
    .bindPopup('<h5>Hazratbal Masjid Srinagar</h5> <p>The Hazratbal Shrine, popularly called Dargah Sharif, is a Muslim shrine located in Hazratbal locality of Srinagar in Jammu and Kashmir, India. It contains a relic, Moi-e-Muqqadas, which is widely believed to be the hair of the Islamic prophet Muhammad.</p>  <img src="./images/hazratbal .png" alt="" width="300px">')

    L.marker([34.11397555821766, 74.86766165475807] , {icon:leafletIcon4}).addTo(map)
    .bindPopup('<h5>Dal lake Srinagar</h5> <p>Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals..</p>  <img src="./images/Dal-Lake.jpg" alt="" width="300px">')


// Navbar icon on click 
 let changeIcon = function(icon){
    icon.classList.toggle('close')
 }
