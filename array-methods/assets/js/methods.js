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
let btnIndexOf = document.getElementById("btn-Indexof");
let btnLastIndexOf = document.getElementById("btn-Lastindexof");
let btnIncludes = document.getElementById("btn-Includes");
let btnFind = document.getElementById("btn-Find");
let btnFindIndex = document.getElementById("btn-FindIndex");
let btnFilter = document.getElementById("btn-Filter");
//variables para los inputs
var inputInt = document.getElementById("ip-index").value;
//Anclar funciones a los botones
btnPush.onclick = fPush;
btnPop.onclick = fPop;
btnUnshift.onclick = fUnshift;
btnShift.onclick = fShift;
btnSlice.onclick = fSlice;
btnConcat.onclick = fConcat;
btnSplice.onclick = fSplice;
//Funciones 
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
     b = 1;
     e = 2;
     newArray = names.slice(b,e);
     showData(newArray,newContent);
}

function fConcat(e){
    colorsArray = ["Rojo","Verde","Azul"]
    mergeArray = names.concat(colorsArray);
    showData(mergeArray,newContent);
}

function fSplice(e){
    b = 1;
    c = 3;
    newString = "Juanito";
    names.splice(b,c,newString)
    showData(names,newContent)
}

function fIndexOf(){
    var inputString = document.getElementById("ip-search").value;
    let i = names.indexOf(inputString);
    let mensaje = "el indice de ese item es"+i;
    results.innerHTML = "<span>"+mensaje+"</span>"
}

function showData(array,div){
    let lst=""; 
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML=lst;
}