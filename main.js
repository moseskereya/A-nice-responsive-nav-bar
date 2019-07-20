const naVBar = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');
//toggle nav

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
    })
}
naVBar();


  

































// filter methods

// const companies = [
//     {name: 'company one', category : 'finance', start: ' 1981', end: '2003'},
//     {name: 'company two', category : 'Retail', start: ' 2007', end: '2012'},
//     {name: 'company two', category : 'Retail', start: ' 2007', end: '2012'},
//     {name: 'company two', category : 'Retail', start: ' 2007', end: '2012'},
//     {name: 'company two', category : 'Retail', start: ' 2007', end: '2012'},
//     {name: 'company three', category : 'clothers', start: ' 1985', end: '200'},
//     {name: 'company four', category : 'shipping', start: ' 1987', end: '2019'},
//     {name: 'company five', category : 'finance', start: ' 1982', end: '2013'},
// ]

// filter method today and now lets just focus in an array loopsasdfg

// const RetailCompanies = companies.filter(function(moses){
//     if(moses.end <= 1987){
//         return true;
//     }
// })
// console.log(RetailCompanies);


// screen events

// function window1(){
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;
//     alert("Width: " + w + ", " + "Height: " + h);
// }
