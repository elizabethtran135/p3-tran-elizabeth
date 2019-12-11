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
//function loopThrough() {
//  const changeColor = () => this.classList.toggle('green');
//function loopThrough() {
//  const changeColor = () => this.classList.toggle('yellow');
//function loopThrough() {
//  const changeColor = () => this.classList.toggle('blue');
//const slideOutAd = documentt.getElementById('slideout-ad')
//slide animation remove hide add show
//arrow
//const showSlideOutAd = () => {
//  slideOutAd.classlist.remove('hide');
//  slideOutAd.classlist.add('show');
//}
//vanilla javascript Function
//var showSlideOutAd = function () {
//  slideOutAd.classlist.remove('hide');
//  slideOutAd.classlist.add('show');
//}

//vanilla javascript function declaration
//function showSlideOutAd() {
  //slideOutAd.classlist.remove('hide');
//  slideOutAd.classlist.add('show');
//}



//const tryIt = document.getElementById('test')

//slideout after 3 seconds
//window.addEventListener('click', () => {
  //tryIt.classList.remove('down');
//});

//function clickUpperLeft() {
//  alert("left is click")
//}

//slide ou

//function 1 animation left right up down, css is in different 4 ids
