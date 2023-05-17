// Pull in the data from the url
// console.log("logic.js line 2");

const URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
const PIX_PER_MAG = 5;
const MIN_PIXELS = 1;


// Create the map

let myMap = L.map("map", {
    center: {lat: 39.12, lng: -94.59},
    zoom: 3

});

// Create the tile layer which will be the background to the map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Add the data to the map
// markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. 
//Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
let earthquakesLayerGroup = new L.LayerGroup();

function getSize(magnitude) {
    let size = magnitude * PIX_PER_MAG;
    //console.log(size);
    return Math.max(size, MIN_PIXELS);
}


function getColor(depth) {
    //console.log("getColor");
    if(depth > 90) {
        return "#FF0000";
    }
    else if(depth > 70) {
        return "#FF4000";
    }
    else if(depth > 50){
        return "#FF8000";
    }
    else if(depth > 30) {
        return "#FFAE42";
    }
    else if(depth > 10) {
        return "#FFFF00";
    }
    else{
        return "#00FF00";
    }
}

function getStyleInfo(feature) {
    let info = {
        opacity: 1,
        color: "#000000",
        fillOpacity: 1,
        fillColor: getColor(feature.geometry.coordinates[2]),
        radius: getSize(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
    //console.log(info);
    return info;
}

function pointToLayer(feature, latlng) {
    //console.log(latlng);
    return L.circleMarker(latlng);
}



function makePopUp(feature, layer) {
    layer.bindPopup(feature.properties.title);

}


d3.json(URL).then(function (data) {
    L.geoJson(data, 
        {
            pointToLayer: pointToLayer,
            style: getStyleInfo,
            onEachFeature: makePopUp
        }).addTo(earthquakesLayerGroup);
});

earthquakesLayerGroup.addTo(myMap);

// Create a legend for the map

let myColors = ["#FF0000", "#FF4000", "#FF8000", "#FFAE42", "#FFFF00", "#00FF00"];
let legend = L.control({ position: "bottomright" });
legend.onAdd = function () {

    let div = L.DomUtil.create("div", "info legend");
    categories = ["-10-10", "10-30", "30-50", "50-70", "70-90", "90+"];
    for (var i = 0; i < categories.length; i++) {
        div.innerHTML +=
            '<li class="circle" style="background-color:' + myColors[i] + '">' + categories[i] + '</li> ';
    }
    return div;
};
legend.addTo(myMap);