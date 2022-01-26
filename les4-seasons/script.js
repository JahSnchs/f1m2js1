console.log("Script loaded!");

const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen = [
    {
        "titel" : "Seizoenen",
        "image" : "img/AllSeasons.jpeg",
        "bg" : "black"
    },
    {
        "titel" : "Lente",
        "image" : "img/Spring.jpeg",
        "bg" : "pink"
    },
    {
        "titel" : "Zomer",
        "image" : "img/Summer.jpeg",
        "bg" : "yellow"
    },
    {
        "titel" : "Herfst",
        "image" : "img/Autumn.jpeg",
        "bg" : "orange"
    },
    {
        "titel" : "Winter",
        "image" : "img/Winter.jpeg",
        "bg" : "lightblue"
    }
];

// let seizoen = {
//     "titel" : "lente",
//     "image" : "img/spring.jpg"
// };

function show(index) {

    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].bg;

}