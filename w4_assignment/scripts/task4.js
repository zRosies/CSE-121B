/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string


// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
const my_info ={
    name: "Gustavo Bispo",
    photo: "images/gentle.jpg",
    favfood: [ "Açaí", "Barbecue", "Pizza", "Milkshake"
    ],
    hobbies: ["Play Guitar", "Study programming", "Watch documentaries"],
    placesLived: [
        {
        place:"Rio de Janeiro, RJ",
        length:"2 Years",
        },
        {
            place: "Macaé, RJ",
            length: "1 Year"
        }
    ],
    
}

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent= my_info.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = my_info.photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = my_info.name
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods


let ul = document.querySelector("#favorite-foods");

    my_info.favfood.map(function(food){
        let li = document.createElement("li")
        li.textContent = food;
        ul.append(li)
    })


// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let ula = document.querySelector('#hobbies');
    my_info.hobbies.map(function(hobby){
        let li2 = document.createElement("li")
        li2.textContent = hobby;
        ula.append(li2)
    })

// Step 8: For each object in the <em>placesLived</em> property:

// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived


let dl = document.querySelector("#places-lived")
my_info.placesLived.map(function(object){
        let dt = document.createElement("dt");
        dt.textContent = object.place;
        dl.append(dt)

        let dd = document.createElement("dd");
        dd.textContent= object.length;
        dl.append(dd)
})
