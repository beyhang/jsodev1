let name=prompt("İsminizi Giriniz...");
if( (name != "") && (name != null) ) {
    document.getElementById("myName").innerHTML=name.toUpperCase();   
}

else if(name == "") 

alert("Boş giriş yaptınız!");

else if(name == null) 

alert("Giriş yapmaktan vazgeçtiniz!");

function dateClock(){
    let date=new Date().toLocaleString();
    document.getElementById("myClock").innerHTML=date;
}
setInterval(dateClock,1000);