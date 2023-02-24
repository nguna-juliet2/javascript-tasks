const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 84,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(character => character.name);
console.log(names);
//2. Get array of all heights
const heights = characters.map(character => character.height);
console.log(heights);
//3. Get array of objects with just name and height properties
const nameheight = characters.map(character => ({name:character.name , height:character.height}));
console.log(nameheight);
//4. Get array of all first names
const fristName = characters.map(character => character.name.split(" ")[0]);
console.log(fristName);

//***REDUCE***
//1. Get total mass of all characters
const totalmass = characters.reduce((sum, currentValue) => sum + currentValue.mass, 0)
console.log(totalmass);
//2. Get total height of all characters
const totalheight = characters.reduce((sum, currentValue) => sum + currentValue.height, 0)
console.log(totalheight);
//3. Get total number of characters by eye color
const totaleyecolor = characters.reduce((sum, currentValue) => {
    const color = currentValue.eye_color;
    if(sum[color]){
        sum[color]++;
    }else{
        sum[color]=1;
    }
    return sum;
}, {})
console.log(totaleyecolor);
//4. Get total number of characters in all the character names
const totalname = characters.reduce((sum, currentValue) => {
    const color = currentValue.name;
    if(sum[color]){
        sum[color]++;
    }else{
        sum[color]=1;
    }
    return sum;
}, {})
console.log(totalname);

//***FILTER***
//1. Get characters with mass greater than 100
const newCharacters= characters.filter(item => item.mass > 100);
console.log(newCharacters);
//2. Get characters with height less than 200
const short = characters.filter(item => item.height < 200);
console.log(short);
//3. Get all male characters
const male =characters.filter(item => item.gender ==='male');
console.log(male);
//4. Get all female characters
const female =characters.filter(item => item.gender ==='female');
console.log(female);

//***SORT***
//1. Sort by mass
const sortmass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortmass);
//2. Sort by height
const sortheight = characters.sort((c, d) => c.height - d.height);
console.log(sortheight);
//3. Sort by name
const sortname = characters.sort((a, b) => a.name - b.name);
console.log(sortname);
//4. Sort by gender
const sortgender = characters.sort((a, b) => a.gender - b.gender);
console.log(sortgender);

//***EVERY***
//1. Does every character have blue eyes?
const everychar = characters.every(character => character.eye_color === 'blue');
console.log(everychar);
//2. Does every character have mass more than 40?
const everymass = characters.every(character => character.mass >40);
console.log(everymass);
//3. Is every character shorter than 200?
const everyheight = characters.every(character => character.height < 200);
console.log(everyheight);
//4. Is every character male?
const everygender = characters.every(character => character.gender === 'male');
console.log(everygender);

//***SOME***
//1. Is there at least one male character?
const somemale = characters.some(character => character.gender === 'male');
console.log(somemale);
//2. Is there at least one character with blue eyes?
const eyes = characters.some(character => character.eye_color === 'blue');
console.log(eyes);
//3. Is there at least one character taller than 210?
const taller = characters.some(character => character.height > 210);
console.log(taller);
//4. Is there at least one character that has mass less than 50?
const mass = characters.some(character => character.mass < 50);
console.log(mass);