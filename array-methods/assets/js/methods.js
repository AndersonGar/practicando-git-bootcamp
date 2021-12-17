<<<<<<< HEAD
//Variable: Array y div
var names =["Julia","Martin","Miguel","Sofia"];
var content = document.getElementById("array-content")
var newContent = document.getElementById("new-arrays-content");
var content2 = document.getElementById("array-index-methods");
var results = document.getElementById("results-content");
//Mostrar datos del array al cargar la pagina
showData(names,content);
showData(names,content2);
//Variable de botones
let btnPush  = document.getElementById("btn-Push");
let btnPop  = document.getElementById("btn-Pop");
let btnUnshift = document.getElementById("btn-Unshift");
let btnShift  = document.getElementById("btn-Shift");
let btnSlice  = document.getElementById("btn-Slice");
let btnConcat  = document.getElementById("btn-Concat");
let btnSplice  = document.getElementById("btn-Splice");
//-------------
=======
//Variables: Array y div
var names = ["Julia","Martin","Miguel","Martin","Sofia","Napoleon"];
var content = document.getElementById("array-content");
var newContent = document.getElementById("new-arrays-content");
var content2 = document.getElementById("array-index-methods");
var results = document.getElementById("results-content");
//Mostrar datos del array al cargar página
showData(names,content);
showData(names,content2);
//Variables de botones
let btnPush = document.getElementById("btn-Push");
let btnPop = document.getElementById("btn-Pop");
let bntUnshift = document.getElementById("btn-Unshift");
let btnShift = document.getElementById("btn-Shift");
let btnSlice = document.getElementById("btn-Slice");
let btnConcat = document.getElementById("btn-Concat");
let btnSplice = document.getElementById("btn-Splice");
//--------------
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
let btnIndexOf = document.getElementById("btn-Indexof");
let btnLastIndexOf = document.getElementById("btn-Lastindexof");
let btnIncludes = document.getElementById("btn-Includes");
let btnFind = document.getElementById("btn-Find");
let btnFindIndex = document.getElementById("btn-FindIndex");
let btnFilter = document.getElementById("btn-Filter");
<<<<<<< HEAD
//variables para los inputs
var inputInt = document.getElementById("ip-index").value;
//Anclar funciones a los botones
btnPush.onclick = fPush;
btnPop.onclick = fPop;
btnUnshift.onclick = fUnshift;
=======
//Variables para los inputs
var inputString = document.getElementById("ip-search").value;
var inputInt = document.getElementById("ip-index").value;

//Anclar funciones a los botones
btnPush.onclick = fPush;
btnPop.onclick = fPop;
bntUnshift.onclick = fUnshift;
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
btnShift.onclick = fShift;
btnSlice.onclick = fSlice;
btnConcat.onclick = fConcat;
btnSplice.onclick = fSplice;
<<<<<<< HEAD
//Funciones 
=======
//--------
btnIndexOf.onclick = fIndexOf;
btnLastIndexOf.onclick = fLastIndexOf;
btnIncludes.onclick = fIncludes;
btnFind.onclick = fFind;
btnFilter.onclick = fFilter;

//Funciones
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
function fPush(e){
    names.push("Margarito");
    showData(names,content);
}

function fPop(e){
    names.pop();
    showData(names,content);
}

function fUnshift(e){
    names.unshift("Margarita");
    showData(names,content);
}

function fShift(e){
    names.shift();
    showData(names,content);
}

function fSlice(e){
<<<<<<< HEAD
     b = 1;
     e = 2;
     newArray = names.slice(b,e);
     showData(newArray,newContent);
=======
    b = 0;
    e = 2;
    newArray = names.slice(b,e);
    showData(newArray,newContent);
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
}

function fConcat(e){
    colorsArray = ["Rojo","Verde","Azul"]
    mergeArray = names.concat(colorsArray);
    showData(mergeArray,newContent);
}

function fSplice(e){
    b = 1;
<<<<<<< HEAD
    c = 3;
=======
    c = 2;
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
    newString = "Juanito";
    names.splice(b,c,newString)
    showData(names,newContent)
}

function fIndexOf(){
    var inputString = document.getElementById("ip-search").value;
    let i = names.indexOf(inputString);
<<<<<<< HEAD
    let mensaje = "el indice de ese item es"+i;
    results.innerHTML = "<span>"+mensaje+"</span>"
}

function showData(array,div){
    let lst=""; 
=======
    let mensaje = "El índice de ese ítem es "+i;
    results.innerHTML = "<span>"+mensaje+"</span>"
}

function fLastIndexOf(){
    var inputString = document.getElementById("ip-search").value;
    let i = names.lastIndexOf(inputString);
    let mensaje = "El último índice de ese ítem es "+i;
    results.innerHTML = "<span>"+mensaje+"</span>"
}

function fIncludes(){
    var inputString = document.getElementById("ip-search").value;
    var inputInt = document.getElementById("ip-index").value;
    let number=0;
    if(inputInt!=""){
        number = parseInt(inputInt);
    }
    //let number = parseInt(inputInt);
    let i = names.includes(inputString,number);
    let mensaje = "Este elemento no se encuentra ";
    if(i){
        mensaje="Este valor si se encuentra";
    }
    results.innerHTML = "<span>"+mensaje+"</span>";
}

function fFind(){
    var inputInt = document.getElementById("ip-index").value;
    let number=0;
    if(inputInt!=""){
        number = parseInt(inputInt);
    }
    let s = names.find(element => element.length > number);
    let mensaje = "Ninguno de los elementos cumple con la condición";
    if(s != null){
        mensaje = "El primer valor encontrado es "+s;
    }
    results.innerHTML = mensaje;
}

function fFilter(){
    var inputInt = document.getElementById("ip-index").value;
    let number=0;
    if(inputInt!=""){
        number = parseInt(inputInt);
    }
    let s = names.filter(element => element.length > number);
    let mensaje = "Ninguno de los elementos cumple con la condición";
    if(s.length > 0){
        showData(s,results);    
    }
    else{
        results.innerHTML = mensaje;
    }
}

function showData(array,div){
    let lst="";
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML=lst;
<<<<<<< HEAD
}
=======
}


>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
