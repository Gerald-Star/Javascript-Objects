//TOPIC JAVASCRIPT OBJECTS


// TOPICS OBJECTS IN JAVASCRIPT

//Here's a sample cat object:
//  you access the data in objects through what are called properties.

function catData(name) {

    const catData = {
        "name": "Whiskers",
        "legs": 4,
        "tails": 1,
        "enemies": ["Water", "Dogs"]
      };
      
}

  console.log(catData(name));


  
  //EXAMPLE TWO
  
  function anotherObject() {
    const anotherObject = {
        make: "Ford",
        5: "five",
        "model": "focus"
      };
  }
  
  
    console.log(anotherObject.model);
  
  
    //EXAMPLE

    const myDogData = {
        
      name: "Man",
      legs: 4,
      tails: 2,
      friends: ["Emeka", "Nne"],
        
    }
    
    console.log();
  
  


    //TOPIC ACCESING OBJECTS THROUGH DOT NOTATION (.)
    /*
    const myObj = {
      prop1: "val1",
      prop2: "val2"
    };
    
    const prop1val = myObj.prop1;
    const prop2val = myObj.prop2;
  */
    //prop1val would have a value of the string val1, 
    //and prop2val would have a value of the string val2

    //REAL EXAMPLE QUESTION

    /*Read in the property values of testObj using dot notation.
     Set the variable hatValue equal to the object's property
      hat and set the variable shirtValue equal to the object's
       property shirt.

    */
     
        const testObj = {
            "hat": "ballcap",
            "shirt": "jersey",
            "shoes": "cleats"
          };
    
       
      
      // Only change code below this line
      const hatValue = testObj.hat;      // Change this line
      const shirtValue = testObj.shirt;    // Change this line
        
      console.log(testObj.hat);
      console.log(testObj.shirt);




      // TOPIC: ASSESING OBJECT THROUGH OBJECT NOTATION
        //EXAMPLE 1

      const myObj = { 
        "Space Name": "Kirk", 
        "More Space": "Spock", 
        "NoSpace": "USS Enterprise" 
      }; 
       
       //assessing with [] notation
      
      const SpaceValue = myObj["Space Name"]; 
      const MoreValue = myObj['More Space']; 
      const NoSpaceValue = myObj["NoSpace"]; 
      
      /*
      myObj["Space Name"] //would be the string Kirk, 
      myObj['More Space'] //would be the string Spock, 
      myObj["NoSpace"] //would be the string US

      */
     console.log(myObj["Space Name"]);
     console.log(myObj['More Space']);
     console.log(myObj["NoSpace"]);



      //EXAMPLE 2

      const objNotation = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
      };
      
      
      // Only change ass the proipertiy with []

      //const entreeValue = objNotaion["an entree"];   // Change this line
      const drinkValue = objNotation["the drink"];    // Change this line
      const sideValue = objNotation["the side"];  

      console.log(objNotation["the drink"]);

      console.log(objNotation["my side"]);

      // TOPIC:  Accessing Object Properties with Variables

      /*Another use of bracket notation on objects is to
       access a property which is stored as the value of 
       a variable. This can be very useful for iterating 
       through an object's properties or when accessing a 
       lookup table.*/

    //EXAMPLE 1 :Here is an example of using a variable
    // to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];

console.log(myBreed); // accessing through the variable

console.log(dogs.Fido); //accessing direct without []

/*The string Doberman would be displayed in the console.

Note that we do not use quotes around 
the variable name when using it to access
 the property because we are using the value 
 of the variable, not the name*/

//EXAMPLE 2
//Access the varibale Snoopie with [] to get Beagle


const dogBreed = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };

  
  const dog = "Snoopie";
  const dogName = dogBreed[dog];

  console.log(dogName);


  //EXAMPLE 3
  //set the playerName 
  //to 16 with to get to look up the player name

  const varObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

  const playerName = 16;
  const player = varObj[playerName];

  console.log(player);



  //UPDATING OBJECT NOTATION WITH DOT NOTATION OR BRACKET NOTATION
/*
After you've created a JavaScript object, 
you can update its properties at any time 
just like you would update any other variable.
 You can use either dot or bracket notation to update.

For example, let's look at ourDog: */

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

//update the name to Happy Camper
ourDog.name = "Happy Camper";
console.log(ourDog.name);

ourDog.tails = 2, 1;
console.log(2, 1);



//EXAMPE 2


const theDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line using both dot and []
  theDog.name = "Happy Coder";
  console.log(theDog.name);
  
  theDog["name"] = "Happy Coder";

  console.log(theDog["name"]);



  //TOPIC ADDING NEW PROPEETIES TO AN OBJECT

  
  /*Add New Properties to a JavaScript Object
  You can add new properties to existing JavaScript
   objects the same way you would modify them.*/
  
  //Here's how we would add a bark property to ourDog:
  
  //addourDog.bark = "bow-wow"; - using dot notation (.)
  
  
  //addourDog["bark"] = "bow-wow";  or bracket notation []
  //Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.
  
  //Example:
  
  const addOurDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  addOurDog.bark = "bow-wow";
  console.log(addOurDog.bark);
  

  //EXAMPLE 2
  /* Add a bark property to myDog and set it to a dog sound, 
  such as "woof". You may use either dot or bracket notation.*/
  const addmyDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  addmyDog.bark = "woof";
  console.log( addmyDog.bark);




  //TOPIC DELETE OBJECT PROPERTY

  /*Delete Properties from a JavaScript Object
We can also delete properties from objects like this:*/

//delete ourDog.bark;
//Example:

const ourDeleteDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

//delete ourDeleteDog.bark  // deletes an object
console.log(ourDeleteDog.bark);

ourDeleteDog.food = "bones";  // adds new object
console.log(ourDeleteDog.food);

ourDeleteDog.name = "Happy Camper"; // adds object to name
console.log(ourDeleteDog.name);

//After the last line shown above, ourDog looks like:
/*
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
*/
//Delete the tails property from myDog. You may use either dot or bracket notation.

//EXAMPLE 2

const deletemyDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  //delete deletemyDog.tails
console.log(deletemyDog.tails);


  //TOPIC USING OBJECTS FOR LOOKUPS


//Convert this switch statement to an object called lookup
//Use it to look up val and assign the associated 
//string to the result variable.

  function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    // Only change code above this line
    return result;
  }
  
  //phoneticLookup("charlie");

  console.log(phoneticLookup("charlie"));


  //Convert to Object LookUp
  function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    
  
     let lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
  
  result = lookup[val];
    // Only change code above this line
    return result;
  }
  
console.log(phoneticLookup("charlie"));  




//TOPIC Testing Objects for Properties

/*it is useful to check if the property of a given 
object exists or not. We can use the 
.hasOwnProperty(propname) method of objects to
 determine if that object has the given property name.

  .hasOwnProperty() returns true or false if the 
  property is found or not.

Example
*/
const myPropObj = {
  top: "hat",
  bottom: "pants",
  house: "duplex",
  dog: "Chiuha"
};

myPropObj.hasOwnProperty("top");
myPropObj.hasOwnProperty("middle");

console.log(myPropObj.hasOwnProperty("top"));
console.log(myPropObj.hasOwnProperty("middle"));

/*The first hasOwnProperty returns true, 
while the second returns false.*/


//EXAMPLE

/*
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
 should return the string pony.
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"},
 "pet") should return the string kitten.
*/


// EXAMPLE CHECK WITH MDN
/*
const objCheck = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
   
  
    objCheck.checkProp("gift");
    objCheck.checkProp("pet");

    console.log( obj.checkProp("gift"));
    console.log(obj.checkProp("pet"));*/





    //TOPIC: Manipulating Complex Objects


 /* To store data in a flexible Data Structure. 
 A JavaScript object is one way to handle flexible data.
 
 JavaScript Object allows for arbitrary combinations of strings,
  numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:*/

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

//console.log(ourMusic["artist"]);

/*
The object has various pieces of metadata about an album. 
It also has a nested formats array. If you want to add more
 album records, you can do this by adding records to the top
  level array. Objects hold data in a property, which has a 
  key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

Note: You will need to place a comma after every object in 
the array, unless it is the last object in the array.

*/


//EXAMPLE

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true,
      
    },
    {
      "artist": "Dolly Parton",
      "title": "Coats of many Color",
      "release_year": 1992,
      "formats": [
        "HD",
        "9T",
        "LP"
      ]
    }
  ];




  //TOPIC Accessing Nested Objects

/* The sub-properties of objects can be accessed by
 chaining together the dot or bracket notation.

Here is a nested object:*/

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);



/*would be the string secrets, 
and ourStorage.desk.drawer would be the string stapler.

Access the myStorage object and assign 
the contents of the glove box property 
to the gloveBoxContents variable. 
Use dot notation for all properties where possible, 
otherwise use bracket notation.*/

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  /*We can use dot notation to access the glove box as follows:

const gloveBoxContents = myStorage.car.inside[complete here]*/

  const gloveBoxContents = myStorage.car.inside["glove box"]; 

console.log(myStorage.car.inside["glove box"]);




  //TOPIC: ACCESSING NESTED ARRAYS

 
/*As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:*/

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[2] 

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);
console.log(ourPets[0].names[2]);


//EXAMPLE 2
    
    const accessPets = [
      {
        animalType: "cat",
        names: [
          "Meowzer",
          "Fluffy",
          "Kit-Cat"
        ]
      },
      {
        animalType: "dog",
        names: [
          "Spot",
          "Bowser",
          "Frankie"
        ]
      }
    ];
    
    accessPets[0].names[1];
    accessPets[1].names[0];
    accessPets[0].names[1] 

//would be the string Fluffy, 
//and ourPets[1].names[0] would be the string Spot.
//would give Kit-Cat




//EXAMPLE 2
//Using dot and bracket notation, 
//set the variable secondTree to the second item
// in the trees list from the myPlants object.

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  //console.log(myPlants[1].list[1]); OR 
  console.log( secondTree);



  //EXAMPLE 3 MORE ACCESSING NESTED ARRAYS


  //Accessing elements within an array using bracket notation []

const fruitBasket = ["apple", "banana", "orange", "melon"];
const favoriteFruit = fruitBasket[2];

console.log(favoriteFruit); // 'orange'

//In this example, our favourite fruit is ‘orange’ which is at index 2 in the fruitBasket array. Using braket notation, we assign index 2 of the fruitBasket array to favoriteFruit. This makes favoriteFruit equal to ‘orange’.

//Hint 2
//Accessing objects within arrays using braket [] and dot . notation

const garage = [
  {
    type: "car",
    color: "red",
    make: "Ford"
  },
  {
    type: "motorbike",
    color: "black",
    make: "Yamaha"
  },
  {
    type: "bus",
    color: "yellow",
    make: "Blue Bird"
  }
];

const busColor = garage[2].color; // 'yellow'
console.log(busColor);

