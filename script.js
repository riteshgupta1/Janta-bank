let currentBalancesender=parseInt(document.getElementById("Balance").innerText);


function sendMoney(){
    let moneytobesend=parseInt(document.getElementById("firstinput").value);
    let name=document.getElementById("secondinput").value;
    let mail=name+"BankBalance"
    console.log(mail);
    console.log(name);
    console.log(currentBalancesender)
    console.log(moneytobesend);
    let receivermoney= parseInt(document.getElementById(mail).innerHTML);
    console.log(receivermoney);
    currentBalancesender=currentBalancesender-moneytobesend;
    receivermoney=receivermoney+moneytobesend;
    console.log(currentBalancesender);
    document.getElementById("Balance").innerText=currentBalancesender;
    document.getElementById(mail).innerText=receivermoney;
    alert(`Successful transfer of money ${moneytobesend} to ${name}`)
    
    
    //transaction history

    var createTag=document.createElement("li");
    var textNode=document.createTextNode(`$${moneytobesend} is transfer to the ${name} at ${Date()}`);
    createTag.appendChild(textNode);
    let li=document.getElementById("transactionhistory");
    li.insertBefore(createTag , li.firstchild);
}