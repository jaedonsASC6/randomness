//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
function randomNumber(){
    let r = (Math.random() * (21 - 0)) + 0;
    console.log(r)
}
function randomLetter(){
    let l = Math.round((Math.random() * alphabet.length))
    console.log(alphabet[l])
}
function randomFood(){
    let f =  Math.round((Math.random() * foods.length))
    console.log(foods[f])
}
function randomStudent(){
    let s =  Math.round((Math.random() * students.length))
    console.log(students[s])
}
function randomGroup(){
    let g1 =  Math.round((Math.random() * students.length)) 
    let g2 =  Math.round((Math.random() * students.length))
    let g3 =  Math.round((Math.random() * students.length))
    console.log(students[g1],students[g2],students[g3])
}
randomGroup()
