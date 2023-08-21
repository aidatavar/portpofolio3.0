
function initMap() {
            
            const coordinates = { lat: 41.603222, lng: -73.087746};
           
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: coordinates,
            });
           
            const marker = new google.maps.Marker({
                position: coordinates,
                map: map,
            });
        }
