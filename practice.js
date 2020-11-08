
function party(name){
    console.log('hello ' + name + ' !')
}

party('mike')




let partyTwo = function(name) {
    console.log('hello ' + name + ' !') 
}

partyTwo('mike')


const addTwo = (a,b) => 
a + b ;



console.log(addTwo(1+2))


 function computeArea(width,height){
     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units`

 
    

 }
 console.log(computeArea(10,10))


 let planetHasWater = function(planet) {
     if (planet === 'earth' || planet === 'mars') {
         return true
     } else {
         return false
     }
     
 }

 console.log(planetHasWater('earth'))


 function marry(person1, person2){
     return person1 + ' is now married to ' + person2;
    
 }

console.log(marry('mike','rachel'))
