// step:1 add addEventListener to btn 
document.getElementById('btn-Deposit').addEventListener('click', function () {
    // 2nd time we need to get data form input value using value
    // 3rd set the input value to innertext
    const depostielement = document.getElementById('deposit');
    const depositAmountstring = depostielement.value;
    const depositAmount = parseFloat(depositAmountstring);
    console.log(typeof depositAmount);
    const changedeposit = document.getElementById('change-deposit');
    const depositTotalstring = changedeposit.innerText;
    const depositTotal = parseFloat(depositTotalstring);
    console.log(typeof depositTotal)
    // step:4 add the number and set the deposit 
    const currentTotal = depositAmount + depositTotal;
    changedeposit.innerText = currentTotal;
    // step:5 get balnce currentTotal

    const totalbalanced = document.getElementById('Total-balance');
    const finalbalncedstr = totalbalanced.innerText;
    const finalbalnced = parseFloat(finalbalncedstr);
    const currentbalanceTotal = finalbalnced + depositAmount;
    //set the blance total
    totalbalanced.innerText = currentbalanceTotal;

    // step:6 claculate currentTotal 

    //clear the input field
    depostielement.value = '';


})
//now we withdraw mone our puchka bank


