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
let btnIndexOf = document.getElementById("btn-Indexof");
let btnLastIndexOf = document.getElementById("btn-Lastindexof");
let btnIncludes = document.getElementById("btn-Includes");
let btnFind = document.getElementById("btn-Find");
let btnFindIndex = document.getElementById("btn-FindIndex");
let btnFilter = document.getElementById("btn-Filter");
//Variables para los inputs
var inputString = document.getElementById("ip-search").value;
var inputInt = document.getElementById("ip-index").value;

//Anclar funciones a los botones
btnPush.onclick = fPush;
btnPop.onclick = fPop;
bntUnshift.onclick = fUnshift;
btnShift.onclick = fShift;
btnSlice.onclick = fSlice;
btnConcat.onclick = fConcat;
btnSplice.onclick = fSplice;
//--------
btnIndexOf.onclick = fIndexOf;
btnLastIndexOf.onclick = fLastIndexOf;
btnIncludes.onclick = fIncludes;
btnFind.onclick = fFind;
btnFilter.onclick = fFilter;

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
    b = 0;
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
    c = 2;
    newString = "Juanito";
    names.splice(b,c,newString)
    showData(names,newContent)
}

function fIndexOf(){
    var inputString = document.getElementById("ip-search").value;
    let i = names.indexOf(inputString);
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
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML=lst;
}


