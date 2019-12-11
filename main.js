//Global Varibales

//layer one
const layerOne = document.getElementById('layer1');
const colorBoxes = document.getElementsByClassName('colorblock');

//layer Two
const layerTwo = document.getElementById('layer2');
const numberOneBoxes = document.getElementsByClassName('numberblock');

//layer Three
const layerThree = document.getElementById('layer3');
const numberTwoBoxes = document.getElementsByClassName('numberblock2');

//layer four
const layerFour = document.getElementById('layer4');

//functionality color and shorten loop through
function loopThrough() {
const changePosition = () => this.classList.toggle('smaller');

//*2 on off
for(let i = 0; i < this.textContent.length * 2; i++) { setTimeout(changePosition, i * 700);

  };
};

//layer changes one to two

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

function loopThroughSetOne() {

  const changeGray = () => this.classList.toggle('gray');

  for(let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeGray, i * 800);
  };

};
//layer changes two to three

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

const randomFortune = ['You are amazing','Keep on shining like the star you are', 'You matter and deserve to take up space','Dream Big Little One','Big things are coming your way','You are the best you!','Never let anyone dull your sparkle','You can do anything you set your mind to AND MORE','You are a bright star in the world','Keep you head held high'];

const showFortune = () => {
  randomFortune.sort((a, b) => {return 0.5 - Math.random()});
  const randomFortuneText = document.createTextNode(randomFortune[0]);
  const randomFortuneParagraph = document.createElement('p');    randomFortuneParagraph.appendChild(randomFortuneText);
  layerFour.appendChild(randomFortuneParagraph);
};

showFortune();
