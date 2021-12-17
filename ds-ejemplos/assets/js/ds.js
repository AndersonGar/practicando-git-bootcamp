class Pila{
    //Definir construtor , que sra el representante de este objeto
constructor(){
    this.pila = [];
}

//METODOS DEL OBJETO "PILA"
//Agregar un elemento -> nesecito saber que elemento agregar
add(element){
    this.pila.push(element);
    return this.pila;

    }

//Eliminar un elemento
delete(){
  return  this.pila.pop();
}
//Saber el tamaño de la pila(la cantidad de elementos)
getSize(){
    return this.pila.length;
}
//Leer un elemento
getElement(){
    return this.pila[this.pila.length - 1]
}
//Leer todos los elementos
getElement(){
    console.log(this.pila);
}
}

class Cola{
    constructor(){
        this.cola = [];
    }
    
    //METODOS DEL OBJETO "COLA"
    //Agregar un elemento -> nesecito saber que elemento agregar
    add(element){
        this.cola.push(element);
        return this.cola;
    
        }
    
    //Eliminar un elemento
    delete(){
      return  this.cola.shift();
    }
    //Saber el tamaño de la cola(la cantidad de elementos)
    getSize(){
        return this.cola.length;
    }
    //Leer un elemento
    getElement(){
        return this.cola[0]
    }
    //Leer todos los elementos
    getElement(){
        console.log(this.cola);
    }    
}

class Arbol{
    constructor(node){
     this.node = node;
     this.descendents = [];
    }

    addNode(node){
        this.descendents.push(node);
        return this.descendests;
    }

    addElement(element){
        this.node=element;
        return this.node;
    }
}
//<script src="js/ds.js"></script>