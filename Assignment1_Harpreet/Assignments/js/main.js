function saveDataToLocalStorage() {


    let color = "";
    color = $("#color").val();
    console.log("color is "+color);
    localStorage.setItem('name', $('#name').val());
    localStorage.setItem('height', $('#height').val());
    localStorage.setItem('width', $('#width').val());
    localStorage.setItem('color', color);

    let e = $("#select");
    let price = e.val();
    localStorage.setItem('price', price);
    setTimeout(function () { window.location.href = 'output.html' },100);
    alert("Customer Data Saved");

}

function loadDataFromLocalStorage(){
    $('#name').text(
        localStorage.getItem('name'));

    let color = localStorage.getItem('color');
    console.log(color)
    $('#color').css('background-color', color);

    let width = parseFloat(localStorage.getItem('width'));

    let height = parseFloat(localStorage.getItem('height'));

    let cans = Math.ceil((width*height)/400);

    $('#numOfCans').text(cans);

    let price = parseFloat(localStorage.getItem('price'));

    console.log(price);
    let total = price * cans;


    $('#price').text(
        total.toFixed(2));

}

