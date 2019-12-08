//Global Varibales
//const myBoxes = document.getElementsByClassName('block');

//The Functionality
//function loopThrough() {
//  const changeColor = () => this.classList.toggle('orange');

//*2 on off
//  for(let i = 0; i < this.textContent.length * 2; i++) { //setTimeout(changeColor, i * 1000);

//  };
//};

//The Event Listener
//for (let i=0; i < myBoxes.length; i++) {
//  myBoxes[i].addEventListener('click', loopThrough);
//};
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



const slideOutAd = documentt.getElementById('slideout-ad')

//slideout after 3 seconds
window.addEventListener('click', () => {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
});


//slide ou
