// import sum from './sum'; //ES2015 syntax
// import './image_viewer'; //ES2015 syntax
//
// const total = sum(2, 5);
//
// console.log(total);


const button = document.createElement('button');
button.innerText = 'Click';
document.body.appendChild(button);
button.addEventListener('click', () => {
	System.import('./image_viewer'); // importing external JS inside the code, not a beginning of file
});