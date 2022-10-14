const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
console.log("test");
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

var storyText = "It was 94 fahrenheit outside this weekend, so :insertx: decided to go on a walk in the forrest with his pet pig. When they walk past :inserty:, they decieded to go in :insertz: because it was too hot. The thiefs saw it, and deicded to jump in and steal the pig. — But becausse :insertx:'s pet pig weighs 300 pounds, it was too heavy for the thief to steal him and get away."
const insertX = ["Gru", "Peter Pan", "Prince Charming"]
const insertY = ["the beach", "the river", "Rapauzel's tower"]
const insertZ = ["for a swim", "and play mermaids", "and play chicken fight"]


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

var newStory = storyText;
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);
newStory = newStory.replace(":insertx:", xItem);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round('21.43');
    const temperature =  Math.round('34.4');
    newStory = newStory.replace("94 fahrenheit",temperature + " centigrade");
    newStory = newStory.replace("300 pound",weight + " stone");

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


