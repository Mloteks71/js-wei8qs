// Import stylesheets
import "./style.css";

class Product {
  constructor(lp,name, amount, price) {
    this.name=name;
    this.amount=amount;
    this.price=price;
    this.sum=price*amount;
    this.lp=lp;
  }
}

document.forms.myform.onsubmit = function (event) {
 if (localStorage.lista)
 {
list = JSON.parse(localStorage.lista)}
else list=[];
// tutaj walidacja na podstawie targeta
var newpro=new Product(list.length+1,event.target.name.value,event.target.amount.value,event.target.price.value);
list.push(newpro);
localStorage.lista = JSON.stringify(list)
  let nowy = wzor.cloneNode(true);

    nowy.querySelector(".lp").innerHTML = newpro.lp;
    nowy.querySelector(".name").innerHTML = newpro.name;
    nowy.querySelector(".amount").innerHTML = newpro.amount;
    nowy.querySelector(".price").innerHTML = newpro.price;
    nowy.querySelector(".sum").innerHTML = newpro.sum;
     var but=document.createElement("button");
    but.id=newpro.lp;
    but.onclick=function Edit2(this){
 var el=document.getElementById("name")
      list[this.id-1].name=el.value;
      el=document.getElementById("amount")
        list[this.id-1].amount=el.value;
        el=document.getElementById("price")
          list[this.id-1].price=el.value;
          list[this.id-1].sum=list[this.id-1].price*list[this.id-1].amount;
    console.log(list);
    sumsum();
    localStorage.lista = JSON.stringify(list)
    show();  //tu liste zapisujesz
};
but.innerText="Edit";


    nowy.querySelector(".action").appendChild(but);
var butdel=document.createElement("button");
    butdel.id=newpro.lp;
    butdel.innerText="Delete";
    butdel.onclick=function Delete2(this){
 list.splice(this.id-1, 1);
 //document.getElementById("tableId").deleteRow(parseInt(this.id)+1);
  console.log(list);
  listlp();
  console.log(list);
  localStorage.lista = JSON.stringify(list)
  window.location.reload(true);
  //show();       //tu liste zapisujesz
};


nowy.querySelector(".action").appendChild(butdel);


    nowy.hidden = false;
    kontener.appendChild(nowy);
    sumsum()
      event.preventDefault();
}


function listlp(){
  if (localStorage.lista)
list = JSON.parse(localStorage.lista)
else list=[];
  for(let i = 0; i < list.length; ++i){
    list[i].lp=i+1;
  }
}


function show(){
 
var list;
if (localStorage.lista)
list = JSON.parse(localStorage.lista)
else list=[];
//local storage pobierasz id o listy dodajesz
listlp()
for(let i = 0; i < list.length; ++i) {
    let nowy = wzor.cloneNode(true);

    nowy.querySelector(".lp").innerHTML = list[i].lp;
    nowy.querySelector(".name").innerHTML = list[i].name;
    nowy.querySelector(".amount").innerHTML = list[i].amount;
    nowy.querySelector(".price").innerHTML = list[i].price;
    nowy.querySelector(".sum").innerHTML = list[i].sum;

    var but=document.createElement("button");
    but.id=list[i].lp;
    but.onclick=function Edit(this){
        var el=document.getElementById("name")
      list[this.id-1].name=el.value;
      el=document.getElementById("amount")
        list[this.id-1].amount=el.value;
        el=document.getElementById("price")
          list[this.id-1].price=el.value;
          list[this.id-1].sum=list[this.id-1].price*list[this.id-1].amount;
    console.log(list);
    sumsum();
    localStorage.lista = JSON.stringify(list)
    show();  //tu liste zapisujesz
};
but.innerText="Edit";



    nowy.querySelector(".action").appendChild(but);
var butdel=document.createElement("button");
    butdel.id=+list[i].lp;
    butdel.onclick=function Delete(this){
 list.splice(this.id-1, 1);
 //document.getElementById("tableId").deleteRow(parseInt(this.id)+1);
  console.log(list);
  listlp();
  console.log(list);
  localStorage.lista = JSON.stringify(list)
  window.location.reload(true);
  //show();           //tu liste zapisujesz
};
butdel.innerText="Delete2";


nowy.querySelector(".action").appendChild(butdel);


    nowy.hidden = false;
    kontener.appendChild(nowy);
}
sumsum()
}


function sumsum(){
  var pom=0;
  if (localStorage.lista)
list = JSON.parse(localStorage.lista)
else list=[];
  for(let i = 0; i < list.length; ++i) {
   pom+=list[i].sum;

    
}
var doc=document.getElementById("sumsum");
try{
doc.innerText=pom;
}
catch(e){};
}



// to do wywalenia jak local storage dodasz
var list;
//var pro1=new Product(list.length+1,"apple",5,12);
//list.push(pro1);
//var pro2=new Product(list.length+1,"greap",3,1);
//list.push(pro2);
//var pro3=new Product(list.length+1,"bannana",8,18);
//list.push(pro3);

//tego nie wywalaj
const kontener = document.getElementById("kontener")
const wzor = kontener.querySelector("tr")

show();