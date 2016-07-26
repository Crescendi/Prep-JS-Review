/*Hey Prepstars!  By now, you should have a good understanding of the basics of Javascript.
The following exericese will be a good review of the materials we covered in class:

Don't forget to commit and push your work after each completed exercise.

Go get em!*/

/*1.  Variables with a String as their value.
Declare variables named yourName, neighborName, teacherName.  Console log each variable.*/

console.log("Exc #1");
var myFirstName = "Marta";
var myLastName = "Katona";
var neighborName = "Janos and Nelli";
var teacherName = "Victor H Lee";

console.log("My name is",myFirstName,myLastName);
console.log("My neighborns are",neighborName);
console.log("Our DevLeague Prepcourse leader is", teacherName);


/*2. Variable with a Number as their value.
Declare variables named numberOfFloorsBurjKhalifa, TokyoOlympicsYear.  Console log each variable.*/

console.log("Exc #2");
var numberOfFloorsBurjKhalifa = 154+9+46+2;
var TokyoOlympicsYear = 1964;

console.log("The Bhurj Khalifa has a total of", numberOfFloorsBurjKhalifa,"floors.");
console.log("The Olimpyc Games was held in Tokyo in",TokyoOlympicsYear,".");


/*3. Variables with Boolean values
Declare variables named lovesPrepClass, eatsDonuts, drinksGin.  Console log each variable.*/

console.log("Exc #3");
var lovesPrepClass = true;
var eatsDonuts = false;
var drinksGin = false;

console.log("Do I love Prep Class? ",lovesPrepClass,"Indeed.");
console.log("Do I eat donuts? ",eatsDonuts);
console.log("I drink Gin.",drinksGin);


/*4. Variable with Null values
Declare variables named completedCodingChallenge, traveledToSpace.  Console log each variable*/

console.log("Exc #4");
var completedCodingChallenge = null;
var traveledToSpace = null;

console.log("I haven't completed Coding Challenge:",completedCodingChallenge,",nor travled to Space:",traveledToSpace);

/*5.  Variables with Array for its value.
Declare a variable named japanPrefectures and assign the value of the names of 5 prefectures in Japan.
Console log the variable 
Console log the value at index 1.
Console log the value at index 3.*/

console.log("Exc #5");
var japanPrefectures = ["Hokkaido","Iwate-ken","Fukushima-ken","Nagano-ken","Niigata-ken"];

console.log("5 Prefectures of Japan");
console.log(japanPrefectures);
console.log("at index 1:",japanPrefectures[0]);
console.log("at index 3:",japanPrefectures[2]);


/*6.  Variable with Array for its value.
Declare a variable named planets and assign the value of each planet in our solar system, 
in the order of distance from the sun.  
Console log the variable
Console log "Earth" using the index position
Console log "Uranus" using the index position*/

console.log("Exc #6");
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Planet Nine"];

console.log("Planets of the Solar System:");
for (var i = 0; i < planets.length; i++) {
  console.log("Planet",i,"is",planets[i]);
}
console.log(planets[2]);
console.log(planets[6]);


/*7. Variables with Array for its value.
Declare a variable named india and assign the value of 3 popular tourist attractions.  
Console log the variable.*/
console.log("Exc #7");

var india = ["Taj Mahal","Ajanta Caves","Harmandir Sahib"];

console.log("Popular tourist attractions od India:");
for (var i = 0; i < india.length; i++) {
    console.log(i,india[i]);
}

/*8.  Declare a literal object named "hotel" with properties and values set to:

    name    => "Hilton"
    rooms   => 200
    pool    => true
    checkIn => null

 console log the object*/
console.log("Exc #8");

var hotel = {
  name:"Hilton",
  rooms: 200,
  pool: true,
  checkin: null
};

console.log("hotel object:",hotel);


/*9.  Declare a literal object named "car" with properties and values set to:

    make  => "BMW"
    model => "X5"
    year  => 2015
    doors => 4

 console log the object*/

console.log("Exc #9");
var car = {
  make: "BMW",
  model: "X5",
  year: 2015,
  doors: 4
};

console.log("A car object:",car);

/*10.  Declare a literal object named bigBox and set its value to be an empty object.

Add a property named size and set it to a random number value between 0 and 50 (hint, use Math.something...)
Add a prperty named color and set it to any color.
Add a property named contents and set it to be an empty array

console log the object*/
console.log("Exc #10");
var bigBox = {};
var randomx = Math.floor(Math.random()*10+1);
bigBox.size = randomx;
bigBox.color = "yellow";
bigBox.contents = [];

console.log("bigBox object:",bigBox);


/*11.  Declare a literal object named "colorMeBadd" with properties and values set to:

   iro        => [literal object]

                  akai      => 'red'
                  aoi       => 'blue'
                  midori    => 'green'
                  shiroi    => 'white'
                  pinku     => 'pink'
                  murasaki  => 'purple'

   isJapanese => true              

console log the object */ 
console.log("Exc #11");
var colorMeBadd = {
  iro: {},
  akai: 'red',
  aoi: 'blue',
  midori: 'green',
  shiroi: 'white',
  pinku: 'pink',
  murasaki: 'purple',
  isJapanese: true
};

console.log("colorMeBadd object",colorMeBadd);



/*For exercises #12 - 14, declare two variables, one named "dog" and the other named "cat".  Assign a number value for each variable.*/

/*12.  Declare a function named add.
This function will take two parameters and returns the result of adding two numbers together.
Store this value in a variable named sum and console log this variable.*/

/*13.  Declare a function named subtract. 
This function will take two parameters and returns the result of subtracting two numbers together. 
Store this value in a variable named difference and console log this variable.*/

/*14. Declare a function named multiply.
This function will take two parameter and return the result of multipling two numbers together.
Store this value in a variable named product and console log this variable.*/

/*15.  Declare a function named dunkinDonuts.
This function will access the value stored in the sum variable and uses this number to return the string "I eats X old fashioned donuts every morning to stay classy." X is the value stored in the sum variable.  Console log the result.  */ 

/*16.  Declare a function named stayinClassy.
This function will access the values store in the difference and product variables and uses these numbers to return the string "Yea, I drank X gallons of box wine and ate Y bags of Cheetos and still feel vibrant yo!"  X is the value stored at difference variable and Y is the value stored at product variable. Console.log the result.*/

/*17.  Declare a function named watMyName, which takes two parameters firstName and lastName.
This function will return a string "My name is...firstName lastName."
Invoke this function by passing in the string values of "Slim", "Shady". and console log the result.
*/

/*18. Using the japanPrefectures array you created in exercise 5, create a for loop that iterates through this array and console logs the following message:

"The location at i is:  ."  and append the value of i and the value stored within the Array at that index to this string.

i.e. "The locaton at 0 is Tokyo."*/

/*19. Declare a variable named "oddNumbers".
Use a for loop to add only odd numbers to an Array.  Add 30 odd numbers to the oddNumbers variable starting with the value of 1.*/

/*20.  Declare a function named "oldEnough".
This function takes in a number parameter age and returns a Boolean value true or false if the age is lower than the minimum legal drinking age in Antigua.

Invoke this function by passing in a number value.  Google search Antigua's minimum drinking age to confirm the number value.  Store the return value to a variable named drinkinAlready and console log this variable*/

/*21. Declare a function named fightDaPower.
This function checks the value stored at the drinkinAlready variable in the previous exercise and if the value is true, return the string "I'm jumping on the next flight to Antigua." Otherwise return the string "I can't wait to be in the 5th grade!"  Console log the result.*/ 

/*22. Declare a function named contentFiller which takes in a single parameter which will be an object.  Write a for loop that will put 5 random numbers between the values of 0 to 20 in the contents array in the bigBox object you created in exercise 10.  Console log the result.*/

/*23.  Declare a function named firstReverse which takes a single parameter str.  This function will take a string parameter being passed in and return the string in reverse order.*/


