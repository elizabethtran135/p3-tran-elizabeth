//Global Varibales

//Layer One Colors
const layerOne = document.getElementById('layer1');
const colorBoxes = document.getElementsByClassName('colorblock');

//layer Two Numbers Set One
const layerTwo = document.getElementById('layer2');
const numberOneBoxes = document.getElementsByClassName('numberblock');

//layer Three Numbers Set Two
const layerThree = document.getElementById('layer3');
const numberTwoBoxes = document.getElementsByClassName('numberblock2');

//Layer Four Message Reveal
const layerFour = document.getElementById('layer4');

//Layer One Colors Functionality
//Set all squares to smaller size based on length of color word clicked
function loopThrough() {
  const changePosition = () => {
    for(let y=0; y < colorBoxes.length; y++)
      colorBoxes[y].classList.toggle('smaller');
    }
  for(let i = 0; i < this.textContent.length * 2; i++) {
      setTimeout(changePosition, i * 700);
  };
};

//Remove Color layer to reveal second layer - first number set
function switchLayerOne() {
  const switchOne = () => {
    layer1.classList.add('hide');
    layer2.classList.remove('hide');
  };
  setTimeout(switchOne, this.textContent.length * 2 * 700);
};
//The Event Listener
for (let i=0; i < colorBoxes.length; i++) {
  colorBoxes[i].addEventListener('click', loopThrough);
  colorBoxes[i].addEventListener('click', switchLayerOne);
};


//layer 2 set number one loop
//function turns gray the number of times of the number clicked
function loopThroughSetOne() {

  const changeGray = () =>{
    for(let j=0; j < numberOneBoxes.length; j++) {
      numberOneBoxes[j].classList.toggle('gray');
    }
  }

  for(let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeGray, i * 800);
  };

};
//layer changes two number set one to layer three number set two
function switchLayerTwo() {
  const switchTwo = () => {
    layer2.classList.add('hide');
    layer3.classList.remove('hide');
  };
  setTimeout(switchTwo, Number(this.textContent) * 2 * 1000);
};

//layer 2 event Listener

for (let i = 0; i < numberOneBoxes.length; i++) {
  numberOneBoxes[i].addEventListener('click', loopThroughSetOne);
  numberOneBoxes[i].addEventListener('click', switchLayerTwo);
};

//layer 3 reveal fortune
//remove layer 3 number set two to reveal message

function switchLayerThree() {
  const switchThree = () => {
    layer3.classList.add('hide');
    layer4.classList.remove('hide');
  };
  setTimeout(switchThree, Number(this.textContent) * 2 * 1);
};

// Event Listener (3)

for (let i = 0; i < numberTwoBoxes.length; i++) {
  numberTwoBoxes[i].addEventListener('click', switchLayerThree);
};
//layer 4
//random message created after user selects number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomMessage = ['You are amazing','Keep on shining like the star you are', 'You matter and deserve to take up space','Dream Big Little One','Big things are coming your way','You are the best you!','Never let anyone dull your sparkle','You can do anything you set your mind to AND MORE','You are a bright star in the world','Keep you head held high'];
const revealMessage = () => {
  const randomMessageText = randomMessage[getRandomInt(9)];
  const layer4Paragraph = document.getElementById('layer4text')
  layer4Paragraph.textContent = randomMessageText;
};

revealMessage();
