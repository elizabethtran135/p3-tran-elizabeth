//Global Varibales
const myBoxes = document.getElementsByClassName('block');

//The Functionality
function loopThrough() {
const changePosition = () => this.classList.toggle('orange');

//*2 on off
for(let i = 0; i < this.textContent.length * 2; i++) { setTimeout(changePosition, i * 1000);

  };
};

//The Event Listener
for (let i=0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
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
