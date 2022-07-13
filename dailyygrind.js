//alert("Its working!!");

/*
.............one unique image, with appropriate and matching content in the alt tag.  


..............A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
..............A unique color that supports the image and paragraph of content


.............Here are the items we need to change for each coffee:

......image - src of pic
......alt - alt tag of pic
......description - a paragrapgh of content about the coffee
......name - a name of today's coffee
......color - a color representing the coffee

We may also use the following, but not part of the coffee its self

......today - the current day of the week 

*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
   <strong class="feature">${coffee.day} Coffee Special:</strong>${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>${coffee.desc}</p>`;

    return myReturn;
}

let myDate = new Date();
let myDay= myDate.getDay();
let coffee = "";

switch(myDay){


    case 0: 
        today = "Sunday";
    break;

    case 2: 
        today = "Tuesday";
    break;

    case 3: 
        today = "Wednesday";

        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Wednesday",
            desc: `I like me some bubble tea mhmm`
        };

    break;


    case 4: 
        today = "Monday";

        coffee = {
            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Monday",
            desc: `I love Mocha!!`
        };
        break;

    default:
        today = "Something went wrong!";
}



let coffeeData = coffeeTemplate(coffee);
alert(coffeeData);
console.log(coffee);
