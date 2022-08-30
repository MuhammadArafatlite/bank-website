// step:1 - first we nedd to add id btn & set eventhandler btn 
document.getElementById('btn-submit').addEventListener('click',function(){
    //step:2- we need to get data input field
    // set id input filed
    //and pass parameter getElementByID
    //alaways remeber that we can get input data always use value;k
    const emailfield=document.getElementById('user-email');
    const email =emailfield.value;
    //step:3-we nedd to get data input field
    //set id input field
    //and pass parameter getElementByID

    const passwordfiled =document.getElementById('user-password');
    const password =passwordfiled.value;

    //step:4- we nedd check valid user-email and user-password
    if(email ==='yeasinrasel2004@gmail.com'&& password==='moonnimo@'){
        window.location.href='bank.html';
    }
    else{
        alert('proy grahok abar cesta koron ');
    }

})