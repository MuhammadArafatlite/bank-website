
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawBlanace = document.getElementById('user-withdraw');
    const finaWithdrawstr = withdrawBlanace.value;
    const finaWithdraw = parseFloat(finaWithdrawstr);

    const withdrawValue =document.getElementById('withdrawvalue');
    const withdrawValuestr =withdrawValue.innerText;
    const totalwithdraw =parseFloat(withdrawValuestr);
    const currentWithdraw =finaWithdraw+totalwithdraw;
    withdrawValue.innerText=currentWithdraw;
    // now wen subtract totalblance to new withdraw
    const TotalBalance=document.getElementById('Total-balance');
    const TotalBalancestr=TotalBalance.innerText;
    const TotalBalancefinal=parseFloat(TotalBalancestr);
    const finalbalnced=TotalBalancefinal-finaWithdraw;
    TotalBalance.innerText=finalbalnced;

    //reset input filed 
    withdrawBlanace.value='';



    
    
})