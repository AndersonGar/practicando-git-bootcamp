class Pila{
<<<<<<< HEAD
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
=======
    //Definir constructor, que será el representante de este objeto
    constructor(){
        this.pila = [];
    }
    //METODOS DEL OBJETO "PILA"
    //Agregar un elemento -> necesito saber que elemento agregar
    add(element){
        this.pila.push(element);
        return this.pila;
    }
    //Eliminar un elemento
    delete(){
        return this.pila.pop();
    }
    //Saber el tamaño de la pila (la cantidad de elementos)
    getSize(){
        return this.pila.length;
    }
    //Leer un elemento (el último en haberse agregado)
    getElement(){
        return this.pila[this.pila.length - 1];
    }
    //Leer todos los elementos
    getElements(){
        console.log(this.pila);
    }
}


class Cola{
    //Definir constructor, que será el representante de este objeto
    constructor(){
        this.cola = [];
    }
    //METODOS DEL OBJETO "PILA"
    //Agregar un elemento -> necesito saber que elemento agregar
    add(element){
        this.cola.push(element);
        return this.cola;
    }
    //Eliminar un elemento
    delete(){
        return this.cola.shift();
    }
    //Saber el tamaño de la pila (la cantidad de elementos)
    getSize(){
        return this.cola.length;
    }
    //Leer un elemento (el último en haberse agregado)
    getElement(){
        return this.cola[0];
    }
    //Leer todos los elementos
    getElements(){
        console.log(this.cola);
    }
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
}

class Arbol{
    constructor(node){
<<<<<<< HEAD
     this.node = node;
     this.descendents = [];
=======
        this.node = node;
        this.descendents = [];
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
    }

    addNode(node){
        this.descendents.push(node);
<<<<<<< HEAD
        return this.descendests;
=======
        return this.descendents;
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
    }

    addElement(element){
        this.node=element;
        return this.node;
    }
}
<<<<<<< HEAD
//<script src="js/ds.js"></script>
=======


>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
