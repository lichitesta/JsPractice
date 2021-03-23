// console.log("Escritura comun en consola");
// console.error("error de prueba");
// console.warn("advertencia");
 
/*
// Tipos de variables en Js : var, let ,const
// Var es global y no se utiliza mucho lo mas normal es usar let o const 
// la diferencia es que la const es una constante lo que quiere decir que no se puede reasignar

//tipos de datos : String , numbers , boolean , null , undefined, Symbol
 const nombre = 'Lisandro';
 const edad = 23;
 const crack = true;
 const facha = 0.2;
 const usd = null;
 const y = undefined;
 let z;

//para saber el tipo se utiliza typeof seguido del nombre de la variable , Ej:

console.log(typeof y);

//concatenacion manera antigua
console.log('Mi nombre es '+ nombre +' y mi edad es '+ edad);

//concatenacion con Template String
const saludo = `Mi nombre es ${nombre} y mi edad es ${edad}`;
console.log(saludo);

//propiedades y metodos de los stings

console.log(nombre.length)//saber al cantidad de caracteres de un string
console.log(nombre.toUpperCase());//transforma todo el texto a mayusculas
console.log(nombre.toLowerCase()); // lo transforma en minusculas
console.log(nombre.substring(0,4)); //crea una string nueva desde el indice indicado hasta el segundo indice indicado
console.log(nombre.split(''));//Separa el string en un arreglo segun el criterio que se indique enter parentesis el metodo
 */
/*
// Arreglos

// const numeros = new Array(1,2,3,4,5);
// console.log(numeros);

const frutas = ['manzanas' , 'peras', 'bananas' , 'kiwis', 'pomelos', 10 , true];
console.log(frutas);//lista completa
console.log(frutas[1]);//conseguir un elemento en especifico
frutas[7] = 'limones';
console.log(frutas);//lista completa con el nuevo elemento añadido

//Cuando no se sabe la cantidad de elementos se puede utilizar el metodo push para poder agregarlo al final del arreglo

frutas.push('mangos');
console.log(frutas);//lista completa con el nuevo elemento añadido

//O el metodo unshift para agregarlo al principio

frutas.unshift("durazno");
console.log(frutas);//lista completa con el nuevo elemento añadido

//para sacar el ultimo elemento de la lista se puede utlizar el metodo pop

frutas.pop();
console.log(frutas);//lista completa sin el ultimo elemento "mangos"

//para saber si es un array se utiliza el metodo isArray 

console.log(Array.isArray(frutas));

//para saber el indice de cierto valor se puede utilizar el metodo indexof

console.log(frutas.indexOf('peras'));
*/
/*
//Objetos 

const persona = {
nombre: 'fulano',
apellido: 'letal',
edad : 23,
hobbies: ['musica' , 'peliculas','deporte'],
direccion: {
   calle : 'fragueiro' ,
   altura : 210,
   ciudad : 'almafuerte',
   provincia : 'cordoba',
}
}

console.log(persona); //accede a una descripcion de la persona en general
console.log(persona.nombre); //accede a un atributo de la persona
console.log(persona.nombre, persona.apellido); //se puede acceder a varios atributos en simultaneo
console.log(persona.hobbies[1]); //acceder a un elemento del array que contiene persona
console.log(persona.direccion.calle)//para acceder a un atributo del objeto que se encuentra dentro de nuestro objeto

//para sacar atributos del objeto de persona y transformarlos en variables:

const {nombre, apellido , direccion:{ calle }} = persona; //direccion: {calle} define al atributo calle del objeto direccion que se encuentra dentro de personas como una variable 
console.log(calle);

//podemos agregar propiedades
persona.email = 'fulanoletal45@hotmail.com';
console.log(persona);
*/

//Arreglo de objetos

const todos = [
    {
  id : 1,
  texto : 'sacar la basura',
  completado : true
    },
    {
  id : 2,
  texto : 'Reuncion con marcos',
  completado : true
    },
    {
  id : 3,
  texto : 'turno del dentista',
  completado : false
     }
];

//console.log(todos[1].texto); //imprimir un atributo de un objeto que se encuntra en el array

//convertir a JSON para poder mandarlo a una api por ejemplo

// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

/*
// Ciclos 
//For  (definicion , condicion , incremento)
for(let x = 1 ; x <= 10 ; x++){
 console.log(`Numero de vueltas del for : ${x}`);
}
//while 
let x = 0; //definicion
while(x<10){ //condicion
    console.log(`Numero de vueltas del while: ${x}`);//sentencia
     x++;//incremento 
}
*/

/*
//como recorrer arreglos 
//se puede utilizar un bucle for 

for(let x = 1 ; x < todos.length ; x++){
    console.log(`Numero de vueltas del for : ${x}`);
   }

for(let todo of todos){ //este ciclo va a dar una vuelta por cada elemento del arreglo
console.log(todo);
}

// forEach - el metodo forEach toma como parametro una funcion que se va a ejecutrar por cada elemento del array

todos.forEach(function(todo){ //a la funcion le pasamos la variable que queremos usar para representar cada elemento en este caso cada tarea
console.log(todo.texto);
});

//map 

const todoText = todos.map(function(todo){ //Similar a forEach pero devuelve una array
         return todo.texto;
    });

console.log(todoText); //se creo una nueva arrey con los textos de las tareas pendientes

//filter - filtro

const todosCompletados = todos.filter(function(todo){ //Similar a forEach pero devuelve una array con los elementos que cumplan con cierta condicion por eso se llama filtro
    return todo.completado == true;

});
console.log(todosCompletados);

// filtro conjunto con el metodo map  aca se empieza a ver el potencial

const nombresCompletados = todos.filter(function(todo){ 
    return todo.completado == true;
}).map(function(todo){
return todo.texto;
});
console.log(nombresCompletados);

*/

/*
//Condicionales

const x = 2;
const z = 11;

//si en la condicional utilizamos doble parentesis '==' compara el valor pero no el tipo para que compare si son del mismo valor y tipo se utiliza el triple parentesis '===='

if(x === 10 ){ //por eso aca no entra al condicional si no son del mismo tipo a pesar de tener le mismo valor
 console.log('x es igual a 10 en valor y tipo') ;
}
else if( x > 10){
console.log('x es mayor que 10');
}else{ 
    console.log("x no es igual a 10 en valor y tipo");
}

// Or || / and &&

if(x < 5 || z > 10 ){ //alguna de la condiciones tiene que ser verdadera para que entre en la condicional
    console.log('x es menor a 5 o z es mayor a 10') ;
   }

if(x < 5 && z > 10 ){ //ambas condiciones tiene que ser verdadera par que entre en la condicional
    console.log('x es menor a 5 y z es mayor a 10') ;
   }

//Crear una variable segun una condicion
const t = 2;
const color = t < 3 ? 'Rojo' : 'Azul'; //antes del ? se colaca la condicion y luego del ? se coloca el valor para el resultado verdadero y luego despues de : se coloca el valor apra el resultado falso
console.log(color);

//Switch case

switch(color){ //segun la variable que se coloque como parametro en la funcion switch sera el resutlado
 case'Rojo': //en caso que el valor del a variable color sea 'rojo' lo que se ejecute sera lo siguiente :
 console.log('El color es Rojo '); //inidicamos la sentencia
 break;//Break hace que se termine la condicional switch luego de ejecutar todas las instrucciones del caso que se dio segun cada caso

 case'Azul':
 console.log('El color es azul');
 break;

 default:
     console.log('El color no es ni azul ni rojo');
     break;
}
*/
 
/*
//Funciones 

//la mas simple de todas :
function sumaSimple(num1 , num2) { // creamos una funcion con el nombre de sumaSimple que recibe dos parametros cuando es invocada
console.log(num1 + num2); //Se suman los dos parametros pasados cuando se llamo la funcion y se muestran en consola
}
sumaSimple(1,2); // invocacion de la funcion con los parametros que se le pasaron

//se pueden asignar  parametros con valores por defecto por si no se especifican
function suma(num1 = 1 , num2 =4) {
    console.log(num1 + num2);
    }
    suma();
    suma(3,2);

//generalmente no utilizamos las funciones para que hagan una impresion en consola sino que la utilizamos para que devuelva algun resultado con un return

function resta(num1 = 5,num2= 2){
return num1 - num2
}
console.log(resta(10,5 ));

//funciones de flechas o arrow functions  
//fueron introducidas en 2015 y para poder utilizarla en lugar de utilizar la palabra reservada function
// se la denomina como una variable  luego se coloca un = de asignacion seguido de los parametos y luego uan flecha => 
const  restaFlecha = (num1 = 5,num2= 2) => console.log( num1 - num2);
  //cuando es uan sola sentencia como en el ejemplo anterior se puede obviar la utilizacion de corchetes {}  
restaFlecha(20,5);

//Cuando queremos devolver algo ni siquiera hace falta utilizar la funcion 'return'
const  restaFlechaRetorno = (num1 = 5,num2= 2) =>  num1 - num2;
console.log(restaFlechaRetorno(20,10));

//se pueden utilizar las funciones de flecha en diferentes lugares y es una funcionalidad muy potente
//por ejemplo  para recorrer un array con la funcion forEach de manera mas compacta

todos.forEach(todo => console.log(todo.texto));
*/

//Programacion orientada a objetos 
//Constructores  - Al crear un constructor siempre se comienza con una mayuscula

function Persona(nombre, apellido, nacimiento){
this.nombre = nombre;
this.apellido = apellido;
this.nacimiento =  new Date(nacimiento); //creamos un objeto tipo Date - Se utiliza para las fechas y horas tambien
this.obtenerAñosNacimiento = function (){//creamos una funcion dentro del constructor para poder utilizarla con todas las personas
          return this.nacimiento.getFullYear();
}
this.obtenerEdad = nacimiento => console.log( 2021 - nacimiento.getFullYear()); //tambien podemos crear funciones de flecha como esta
this.nombreCompleto = (nombre,apellido) => console.log(`El nombre completo : ${this.nombre} ${this.apellido}`);
}
    
//instanciar una persona: 

const persona1 = new Persona('Lisandro','Testa','4-12-1998');
const persona2 = new Persona('Matias','Koppoto','4-30-1997');
const persona3 = new Persona('Mine','Coral','12-09-1998');

console.log(persona3);

console.log(persona2.nacimiento.getFullYear()); //tiene muchos metodos diferentes el obejto tipo Date
console.log(persona1.obtenerAñosNacimiento()); //mismo resultado que la sentencia anterior pero logrado con una funcion creada en el constructor 
persona1.obtenerEdad(persona1.nacimiento); //primera funcion de flecha para obtener la edad
persona1.nombreCompleto();







