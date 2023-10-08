/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Carter Sperry",
    favoriteFoods: [
        'Ramen',
        'chocolate',
        'pizza',
        'fish'
    ],
    photo: "images/me.jpg",
    hobbies: [
        'running',
        'video games',
    ],
    placesLived: [],

} 




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: 'Boise',
        length: '18 years'
    },
    {
        place: 'Rexburg',
        length: '3 years'
    },
    {
        place: 'Washington DC',
        length: '2 years'
    }
    
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

const placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});
