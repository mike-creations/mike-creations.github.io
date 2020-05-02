//var dateFromInput = document.getElementsByTagName("input")[0];
//console.log (dateFromInput);
//var date2 = new Date("03, 01, 2020");
//var timeDiff = Math.abs (dateFromInput.getTime() - date2.getTime());
//var diffDays = Math.ceil (timeDiff / (1000 * 3600 * 24)); 
//alert (diffDays);

function calculateDate() {
let dateFromInput = document.getElementsByTagName('input')[0].value;
dateFromInput = new Date(dateFromInput);
let date2 = new Date('02, 14, 2019');
let timeDiff = Math.abs(dateFromInput.getTime() - date2.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
document.getElementById('answer').innerText = diffDays;
}


