/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples")
let temples = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article")

        let header3 = document.createElement("h3")
        header3.innerHTML = temple.templeName;

        let templeImage = document.createElement("img")
        templeImage.setAttribute("src", temple.imageUrl)
        templeImage.setAttribute("alt", temple.templeName)

        article.appendChild(header3);
        article.appendChild(templeImage);

        templesElement.appendChild(article)
    });
}
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    temples = await response.json();
    output=(temples);
};
getTemples();
/* reset Function */
function reset() {
    document.getElementById("temples").innerHTML = "";
}
/* sortBy Function */
function sortBy (temples) {
    reset(); 

    let templeFilter = document.getElementById("sortBy").value;

    switch (templeFilter){
        case "utah":
            const utahTemples = temples.filter((temple) => temple.location.toLowerCase().includes('utah'));
             displayTemples(utahTemples);
            break;

        case "notutah":
            const notutahTemples = temples.filter((temple) => !temple.location.toLowerCase().includes("utah"));
            displayTemples(notutahTemples)
            break;

        case "older":
            const olderTemples = temples.filter((temple) => temple.dedicated.toLowerCase() < ("1950"));
            displayTemples(olderTemples)
            break;

        case "all":
            const allTemple = temples.filter((temple) => temple.location.toLowerCase()!=('notutah'));
            displayTemples(allTemple)
            break;
    }
};
getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(temples) });